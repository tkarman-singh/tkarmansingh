'use client';

import { useEffect, useRef } from 'react';

const RIBBON_LENGTH = 24;
const TENSION = 0.35;
const RETRACT_SPEED = 0.18;

export function RibbonCursor() {
  const svgRef = useRef<SVGSVGElement>(null);
  const pathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    if (window.matchMedia('(hover: none)').matches) return;

    const points: { x: number; y: number }[] = Array.from(
      { length: RIBBON_LENGTH },
      () => ({ x: window.innerWidth / 2, y: window.innerHeight / 2 })
    );

    let mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    let isMoving = false;
    let idleTimer: ReturnType<typeof setTimeout>;
    let raf: number;

    const onMouseMove = (e: MouseEvent) => {
      mouse = { x: e.clientX, y: e.clientY };
      isMoving = true;
      clearTimeout(idleTimer);
      idleTimer = setTimeout(() => { isMoving = false; }, 80);
    };

    const buildPath = (pts: { x: number; y: number }[]) => {
      if (pts.length < 2) return '';
      let d = 'M ' + pts[0].x + ' ' + pts[0].y;
      for (let i = 1; i < pts.length; i++) {
        const prev = pts[i - 1];
        const cx = (prev.x + pts[i].x) / 2;
        const cy = (prev.y + pts[i].y) / 2;
        d += ' Q ' + prev.x + ' ' + prev.y + ' ' + cx + ' ' + cy;
      }
      return d;
    };

    const animate = () => {
      const head = points[0];
      head.x += (mouse.x - head.x) * TENSION * 2;
      head.y += (mouse.y - head.y) * TENSION * 2;

      for (let i = 1; i < points.length; i++) {
        const target = isMoving ? points[i - 1] : head;
        const speed = isMoving ? TENSION : RETRACT_SPEED + i * 0.02;
        points[i].x += (target.x - points[i].x) * speed;
        points[i].y += (target.y - points[i].y) * speed;
      }

      if (pathRef.current) {
        pathRef.current.setAttribute('d', buildPath(points));
      }
      raf = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', onMouseMove);
    raf = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(raf);
      clearTimeout(idleTimer);
    };
  }, []);

  return (
    <svg
      ref={svgRef}
      className="pointer-events-none fixed inset-0 w-full h-full z-[9999]"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="ribbonGrad" x1="0%" y1="0%" x2="100%" y2="0%" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#d351f7" stopOpacity="1" />
          <stop offset="60%" stopColor="#df7a3e" stopOpacity="1" />
          <stop offset="100%" stopColor="#d351f7" stopOpacity="1" />
        </linearGradient>
      </defs>
      <path
        ref={pathRef}
        fill="none"
        stroke="url(#ribbonGrad)"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}