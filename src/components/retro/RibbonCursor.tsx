"use client";

import { useEffect, useRef } from "react";

export function RibbonCursor() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    // Only run on desktop/devices with a real pointer
    if (window.matchMedia("(hover: none) and (pointer: coarse)").matches) {
      return;
    }

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    let mouse = { x: width / 2, y: height / 2 };
    const numPoints = 25; // Length of the ribbon
    let points = Array.from({ length: numPoints }, () => ({ x: width / 2, y: height / 2 }));
    
    let isMoving = false;
    let timeoutId: NodeJS.Timeout;

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      isMoving = true;
      
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        isMoving = false;
      }, 100);
    };

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);

    let animationFrameId: number;

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      
      // Update points
      // Point 0 follows the mouse exactly so it originates from the cursor tip
      points[0].x = mouse.x;
      points[0].y = mouse.y;

      // Subsequent points follow the point ahead of them
      for (let i = 1; i < numPoints; i++) {
        points[i].x += (points[i-1].x - points[i].x) * 0.45;
        points[i].y += (points[i-1].y - points[i].y) * 0.45;
      }

      ctx.lineCap = "round";
      ctx.lineJoin = "round";

      // Draw the ribbon
      for (let i = 0; i < numPoints - 1; i++) {
        ctx.beginPath();
        ctx.moveTo(points[i].x, points[i].y);
        ctx.lineTo(points[i+1].x, points[i+1].y);
        
        // Tapering width
        ctx.lineWidth = Math.max(1, 8 - (i * 0.3));
        
        // Tapering opacity
        const alpha = 1 - (i / numPoints);
        ctx.strokeStyle = `rgba(211, 81, 247, ${alpha * 0.8})`; // The #d351f7 purple from your theme
        ctx.stroke();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-[9999] hidden md:block"
    />
  );
}
