"use client";

import { useState, useEffect, useRef } from "react";
import { Notebook } from "./Notebook";

export function NotebookController({ totalPages }: { totalPages: number }) {
  const [scrollProgress, setScrollProgress] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    
    let targetVirtualScroll = 0;
    let currentVirtualScroll = 0;
    let reqId: number;
    let lastTouchY = 0;

    const animate = () => {
      currentVirtualScroll += (targetVirtualScroll - currentVirtualScroll) * 0.1;
      
      if (Math.abs(targetVirtualScroll - currentVirtualScroll) < 0.5) {
        currentVirtualScroll = targetVirtualScroll;
      }
      
      const progress = currentVirtualScroll / ((totalPages - 1) * 1000);
      setScrollProgress(Math.min(Math.max(progress, 0), 1));
      
      reqId = requestAnimationFrame(animate);
    };
    
    reqId = requestAnimationFrame(animate);

    const handleScrollIntent = (deltaY: number, e: Event) => {
      const closestPage = Math.round(targetVirtualScroll / 1000);
      const isMidFlip = Math.abs(targetVirtualScroll - closestPage * 1000) > 5; // 5 units of tolerance
      
      if (!isMidFlip) {
        const activePageEl = document.getElementById(`page-content-${closestPage}`);
        if (activePageEl) {
          const isAtTop = activePageEl.scrollTop <= 1;
          const isAtBottom = Math.abs(activePageEl.scrollHeight - activePageEl.clientHeight - activePageEl.scrollTop) <= 2;
          
          if (deltaY > 0 && !isAtBottom) return; // Let native scroll down
          if (deltaY < 0 && !isAtTop) return; // Let native scroll up
        }
      }
      
      // Hijack the scroll to flip the page
      if (e.cancelable) {
        e.preventDefault();
      }
      
      targetVirtualScroll += deltaY * 1.5;
      targetVirtualScroll = Math.max(0, Math.min(targetVirtualScroll, (totalPages - 1) * 1000));
    };

    const handleWheel = (e: WheelEvent) => {
      handleScrollIntent(e.deltaY, e);
    };

    const handleTouchStart = (e: TouchEvent) => {
      lastTouchY = e.touches[0].clientY;
    };

    const handleTouchMove = (e: TouchEvent) => {
      const currentY = e.touches[0].clientY;
      const deltaY = lastTouchY - currentY;
      lastTouchY = currentY;
      handleScrollIntent(deltaY, e);
    };

    const container = containerRef.current;
    container.addEventListener("wheel", handleWheel, { passive: false });
    container.addEventListener("touchstart", handleTouchStart, { passive: true });
    container.addEventListener("touchmove", handleTouchMove, { passive: false });
    
    return () => {
      container.removeEventListener("wheel", handleWheel);
      container.removeEventListener("touchstart", handleTouchStart);
      container.removeEventListener("touchmove", handleTouchMove);
      cancelAnimationFrame(reqId);
    };
  }, [totalPages]);

  return (
    <div 
      ref={containerRef}
      className="w-full h-screen relative bg-[url('https://www.transparenttextures.com/patterns/wood-pattern.png')] bg-[#2c2621] overflow-hidden"
    >
      <div className="absolute inset-0 bg-black/40 mix-blend-multiply pointer-events-none z-0"></div>
      
      <div className="w-full h-full flex items-center justify-center z-10 relative">
        <Notebook scrollProgress={scrollProgress} totalPages={totalPages} />
      </div>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center pointer-events-none">
        <span className="text-white/60 font-mono text-xs uppercase tracking-widest mb-2 backdrop-blur-sm bg-black/20 px-3 py-1 rounded-full border border-white/10">
          Scroll down to flip pages
        </span>
        <div className="w-24 h-1 bg-white/20 rounded-full mt-1 overflow-hidden relative">
          <div 
            className="absolute top-0 left-0 h-full bg-white transition-all duration-75"
            style={{ width: `${scrollProgress * 100}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
}
