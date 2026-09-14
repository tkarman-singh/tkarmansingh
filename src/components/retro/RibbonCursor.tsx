"use client";

import { useEffect, useRef } from "react";

const POINTS = 28;
const MAX_WIDTH = 14;

export function RibbonCursor() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (window.matchMedia("(hover: none) and (pointer: coarse)").matches) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let W = window.innerWidth;
    let H = window.innerHeight;
    canvas.width = W;
    canvas.height = H;

    // Each point springs toward the one before it
    const pts = Array.from({ length: POINTS }, () => ({ x: W / 2, y: H / 2 }));
    let mouse = { x: W / 2, y: H / 2 };
    let entered = false;

    const onMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      entered = true;
    };
    const onLeave = () => { entered = false; };
    const onResize = () => {
      W = window.innerWidth; H = window.innerHeight;
      canvas.width = W; canvas.height = H;
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseleave", onLeave);
    window.addEventListener("resize", onResize);

    let raf: number;

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const draw = () => {
      ctx.clearRect(0, 0, W, H);

      if (!entered) { raf = requestAnimationFrame(draw); return; }

      // Update chain: head snaps to mouse, each next springs to previous
      pts[0].x = mouse.x;
      pts[0].y = mouse.y;
      for (let i = 1; i < POINTS; i++) {
        const k = lerp(0.42, 0.28, i / POINTS);
        pts[i].x += (pts[i - 1].x - pts[i].x) * k;
        pts[i].y += (pts[i - 1].y - pts[i].y) * k;
      }

      // Build smooth path via midpoints (Chaikin-style)
      const smooth: { x: number; y: number }[] = [{ x: pts[0].x, y: pts[0].y }];
      for (let i = 0; i < POINTS - 1; i++) {
        smooth.push({
          x: (pts[i].x + pts[i + 1].x) / 2,
          y: (pts[i].y + pts[i + 1].y) / 2,
        });
      }
      smooth.push({ x: pts[POINTS - 1].x, y: pts[POINTS - 1].y });

      const N = smooth.length;

      // ---- Draw ribbon as a filled tapered polygon ----
      // For each segment compute the perpendicular offset
      const left: { x: number; y: number }[] = [];
      const right: { x: number; y: number }[] = [];

      for (let i = 0; i < N; i++) {
        const t = i / (N - 1);
        const w = MAX_WIDTH * (1 - t) * (1 - t * 0.4); // tapers toward tail

        let dx: number, dy: number;
        if (i === 0) {
          dx = smooth[1].x - smooth[0].x;
          dy = smooth[1].y - smooth[0].y;
        } else if (i === N - 1) {
          dx = smooth[N - 1].x - smooth[N - 2].x;
          dy = smooth[N - 1].y - smooth[N - 2].y;
        } else {
          dx = smooth[i + 1].x - smooth[i - 1].x;
          dy = smooth[i + 1].y - smooth[i - 1].y;
        }
        const len = Math.sqrt(dx * dx + dy * dy) || 1;
        const nx = -dy / len; // perpendicular
        const ny = dx / len;

        left.push({ x: smooth[i].x + nx * w, y: smooth[i].y + ny * w });
        right.push({ x: smooth[i].x - nx * w, y: smooth[i].y - ny * w });
      }

      // Build the ribbon outline polygon
      ctx.beginPath();
      ctx.moveTo(left[0].x, left[0].y);
      for (let i = 1; i < N; i++) {
        const cp = smooth[i - 1];
        ctx.quadraticCurveTo(cp.x + (left[i - 1].x - smooth[i-1].x), cp.y + (left[i-1].y - smooth[i-1].y), left[i].x, left[i].y);
      }
      // round tip at the tail
      ctx.arcTo(
        smooth[N - 1].x, smooth[N - 1].y,
        right[N - 1].x, right[N - 1].y,
        2
      );
      for (let i = N - 1; i >= 1; i--) {
        const cp = smooth[i - 1];
        ctx.quadraticCurveTo(cp.x - (left[i-1].x - smooth[i-1].x), cp.y - (left[i-1].y - smooth[i-1].y), right[i - 1].x, right[i - 1].y);
      }
      ctx.closePath();

      // Gradient along the ribbon (head = opaque, tail = transparent)
      const tailX = smooth[N - 1].x;
      const tailY = smooth[N - 1].y;
      const grad = ctx.createLinearGradient(pts[0].x, pts[0].y, tailX, tailY);
      grad.addColorStop(0,   "rgba(220, 80, 255, 0.95)");
      grad.addColorStop(0.3, "rgba(180, 60, 255, 0.75)");
      grad.addColorStop(0.7, "rgba(140, 40, 240, 0.4)");
      grad.addColorStop(1,   "rgba(100, 20, 220, 0)");

      // Glow pass
      ctx.save();
      ctx.filter = "blur(6px)";
      ctx.fillStyle = grad;
      ctx.fill();
      ctx.restore();

      // Crisp pass on top
      ctx.fillStyle = grad;
      ctx.fill();

      // Shimmer highlight along top edge
      ctx.beginPath();
      ctx.moveTo(left[0].x, left[0].y);
      for (let i = 1; i < N; i++) {
        const mx2 = (left[i - 1].x + left[i].x) / 2;
        const my2 = (left[i - 1].y + left[i].y) / 2;
        ctx.quadraticCurveTo(left[i - 1].x, left[i - 1].y, mx2, my2);
      }
      const highlightGrad = ctx.createLinearGradient(pts[0].x, pts[0].y, tailX, tailY);
      highlightGrad.addColorStop(0,   "rgba(255,255,255,0.45)");
      highlightGrad.addColorStop(0.4, "rgba(255,255,255,0.15)");
      highlightGrad.addColorStop(1,   "rgba(255,255,255,0)");
      ctx.strokeStyle = highlightGrad;
      ctx.lineWidth = 1.5;
      ctx.stroke();

      raf = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
      window.removeEventListener("resize", onResize);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-[9999] hidden md:block"
    />
  );
}
