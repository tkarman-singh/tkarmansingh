"use client";

import { useEffect, useState, useRef } from "react";

const TRAIL_LENGTH = 15;

export function CursorTracker() {
  const [path, setPath] = useState("");
  const isVisible = useRef(false);

  useEffect(() => {
    let animationFrameId: number;
    
    // Store points in a ref to mutate them directly for performance
    const points = Array.from({ length: TRAIL_LENGTH }, () => ({ x: 0, y: 0 }));
    let target = { x: 0, y: 0 };
    let initialized = false;

    const updatePosition = (e: MouseEvent) => {
      target = { x: e.clientX, y: e.clientY };
      if (!initialized) {
        for (let i = 0; i < TRAIL_LENGTH; i++) {
          points[i] = { ...target };
        }
        initialized = true;
      }
      if (!isVisible.current) {
        isVisible.current = true;
      }
    };

    const animate = () => {
      // Head point tightly follows the cursor
      points[0].x += (target.x - points[0].x) * 0.5;
      points[0].y += (target.y - points[0].y) * 0.5;

      // Each subsequent point loosely follows the one before it to create a ribbon effect
      for (let i = 1; i < TRAIL_LENGTH; i++) {
        const dx = points[i - 1].x - points[i].x;
        const dy = points[i - 1].y - points[i].y;
        
        // Dynamic lerp factor: stiffer at the head, looser at the tail (increased stiffness to reduce overall length)
        const spring = 0.45 - (i / TRAIL_LENGTH) * 0.25; 
        
        points[i].x += dx * spring;
        points[i].y += dy * spring;
      }

      // Check if completely retracted
      const totalMovement = Math.abs(target.x - points[TRAIL_LENGTH - 1].x) + Math.abs(target.y - points[TRAIL_LENGTH - 1].y);

      if (isVisible.current && totalMovement > 2) {
        // Build smooth SVG path using midpoints
        let d = `M ${points[0].x} ${points[0].y}`;
        for (let i = 1; i < TRAIL_LENGTH - 1; i++) {
          const xc = (points[i].x + points[i + 1].x) / 2;
          const yc = (points[i].y + points[i + 1].y) / 2;
          d += ` Q ${points[i].x} ${points[i].y}, ${xc} ${yc}`;
        }
        d += ` L ${points[TRAIL_LENGTH - 1].x} ${points[TRAIL_LENGTH - 1].y}`;
        setPath(d);
      } else {
        setPath("");
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    const handleMouseLeave = () => {
      isVisible.current = false;
      setPath("");
    };

    window.addEventListener("mousemove", updatePosition);
    document.addEventListener("mouseleave", handleMouseLeave);
    
    // Start animation loop
    animationFrameId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", updatePosition);
      document.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <svg
      className="pointer-events-none fixed top-0 left-0 w-full h-full z-50"
      style={{ 
        opacity: isVisible.current ? 1 : 0, 
        transition: 'opacity 0.3s ease',
        filter: 'drop-shadow(0 0 10px rgba(236,105,250,0.6)) drop-shadow(0 0 20px rgba(236,105,250,0.4))'
      }}
    >
      <path
        d={path}
        fill="none"
        stroke="#EC69FA"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
