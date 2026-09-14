"use client";

import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  size: number;
  hue: number;
}

export function RibbonCursor() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (window.matchMedia("(hover: none) and (pointer: coarse)").matches) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    let mx = -200, my = -200;
    let pmx = -200, pmy = -200;
    let isMoving = false;
    let moveTimeout: NodeJS.Timeout;

    const particles: Particle[] = [];

    const spawnParticles = (x: number, y: number, speed: number) => {
      const count = Math.floor(2 + speed * 0.3);
      for (let i = 0; i < count; i++) {
        const angle = Math.random() * Math.PI * 2;
        const v = 0.3 + Math.random() * 1.5;
        particles.push({
          x,
          y,
          vx: Math.cos(angle) * v,
          vy: Math.sin(angle) * v - 0.5,
          life: 1,
          maxLife: 30 + Math.random() * 30,
          size: 1.5 + Math.random() * 3,
          hue: 270 + Math.random() * 60, // purple to pink range
        });
      }
    };

    const onMouseMove = (e: MouseEvent) => {
      pmx = mx; pmy = my;
      mx = e.clientX; my = e.clientY;

      const dx = mx - pmx, dy = my - pmy;
      const speed = Math.sqrt(dx * dx + dy * dy);
      if (speed > 2) spawnParticles(mx, my, speed);

      isMoving = true;
      clearTimeout(moveTimeout);
      moveTimeout = setTimeout(() => { isMoving = false; }, 80);
    };

    const onResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("resize", onResize);

    let raf: number;
    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // Update & draw particles
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.04; // gravity
        p.life -= 1 / p.maxLife;

        if (p.life <= 0) { particles.splice(i, 1); continue; }

        const alpha = p.life;
        const radius = p.size * p.life;

        // Glow
        const grd = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, radius * 3);
        grd.addColorStop(0, `hsla(${p.hue}, 100%, 75%, ${alpha * 0.6})`);
        grd.addColorStop(1, `hsla(${p.hue}, 100%, 60%, 0)`);
        ctx.beginPath();
        ctx.fillStyle = grd;
        ctx.arc(p.x, p.y, radius * 3, 0, Math.PI * 2);
        ctx.fill();

        // Core
        ctx.beginPath();
        ctx.fillStyle = `hsla(${p.hue}, 100%, 90%, ${alpha})`;
        ctx.arc(p.x, p.y, radius, 0, Math.PI * 2);
        ctx.fill();
      }

      // Draw custom cursor dot (outer ring + inner dot)
      if (mx > 0) {
        // Outer ring
        ctx.beginPath();
        ctx.arc(mx, my, 10, 0, Math.PI * 2);
        ctx.strokeStyle = isMoving
          ? "rgba(211, 81, 247, 0.9)"
          : "rgba(211, 81, 247, 0.5)";
        ctx.lineWidth = 1.5;
        ctx.stroke();

        // Inner dot
        ctx.beginPath();
        ctx.arc(mx, my, 3, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(255, 255, 255, 0.95)";
        ctx.fill();
      }

      raf = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", onResize);
      cancelAnimationFrame(raf);
      clearTimeout(moveTimeout);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-[9999] hidden md:block"
    />
  );
}
