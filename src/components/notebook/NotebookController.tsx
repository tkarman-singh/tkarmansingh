"use client";

import { useEffect, useState, useRef } from "react";
import { Notebook } from "./Notebook";

export function NotebookController() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [targetPage, setTargetPage] = useState(0);
  const totalPages = 9;
  
  const currentProgressRef = useRef(0);
  const reqIdRef = useRef<number | null>(null);

  // Smooth animation loop to lerp scrollProgress towards targetPage
  useEffect(() => {
    const targetProgress = targetPage / (totalPages - 1);
    
    const animate = () => {
      let current = currentProgressRef.current;
      current += (targetProgress - current) * 0.08;
      
      if (Math.abs(targetProgress - current) < 0.001) {
        currentProgressRef.current = targetProgress;
        setScrollProgress(targetProgress);
        return;
      }
      
      currentProgressRef.current = current;
      setScrollProgress(current);
      reqIdRef.current = requestAnimationFrame(animate);
    };
    
    if (reqIdRef.current !== null) {
      cancelAnimationFrame(reqIdRef.current);
    }
    reqIdRef.current = requestAnimationFrame(animate);
    
    return () => {
      if (reqIdRef.current !== null) {
        cancelAnimationFrame(reqIdRef.current);
      }
    };
  }, [targetPage]);

  // Global wheel/touch intent listener
  useEffect(() => {
    let intentAccumulator = 0;
    const intentThreshold = 80; 
    let isFlipping = false; // Prevent multiple triggers during a flip
    let flipTimeout: NodeJS.Timeout;

    const triggerFlip = (direction: 'next' | 'prev') => {
      if (isFlipping) return;
      isFlipping = true;
      
      setTargetPage(p => {
        if (direction === 'next') return Math.min(totalPages - 1, p + 1);
        return Math.max(0, p - 1);
      });
      
      intentAccumulator = 0;
      
      // Cooldown to prevent double-skips
      clearTimeout(flipTimeout);
      flipTimeout = setTimeout(() => {
        isFlipping = false;
      }, 800);
    };

    const getActiveContainer = () => {
      const scrollContainers = document.querySelectorAll('.custom-scrollbar');
      for (let i = 0; i < scrollContainers.length; i++) {
         const el = scrollContainers[i];
         const parent = el.parentElement;
         if (parent && window.getComputedStyle(parent).pointerEvents === 'auto') {
            return el;
         }
      }
      return null;
    };

    const handleWheel = (e: WheelEvent) => {
      if (isFlipping) return;
      
      const activeContainer = getActiveContainer();
      
      // If no active container is found or it's not scrollable yet, wait.
      if (!activeContainer) return;

      const isAtTop = activeContainer.scrollTop <= 1;
      const isAtBottom = Math.abs(activeContainer.scrollHeight - activeContainer.clientHeight - activeContainer.scrollTop) <= 2;

      if (e.deltaY > 0) {
        if (isAtBottom) {
          intentAccumulator += e.deltaY;
          if (intentAccumulator > intentThreshold) triggerFlip('next');
        } else {
          intentAccumulator = 0;
        }
      } else if (e.deltaY < 0) {
        if (isAtTop) {
          intentAccumulator -= e.deltaY;
          if (intentAccumulator > intentThreshold) triggerFlip('prev');
        } else {
          intentAccumulator = 0;
        }
      }
    };
    
    let touchStartY = 0;
    const handleTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY;
      intentAccumulator = 0;
    };
    
    const handleTouchMove = (e: TouchEvent) => {
      if (isFlipping) return;

      const activeContainer = getActiveContainer();
      if (!activeContainer) return;

      const isAtTop = activeContainer.scrollTop <= 1;
      const isAtBottom = Math.abs(activeContainer.scrollHeight - activeContainer.clientHeight - activeContainer.scrollTop) <= 2;
      
      const touchY = e.touches[0].clientY;
      const deltaY = touchStartY - touchY;

      if (deltaY > 0) {
        if (isAtBottom) {
          intentAccumulator += deltaY;
          if (intentAccumulator > intentThreshold) triggerFlip('next');
        } else {
          intentAccumulator = 0;
        }
      } else if (deltaY < 0) {
        if (isAtTop) {
          intentAccumulator -= deltaY;
          if (intentAccumulator > intentThreshold) triggerFlip('prev');
        } else {
          intentAccumulator = 0;
        }
      }
      touchStartY = touchY;
    };

    window.addEventListener("wheel", handleWheel, { passive: true });
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: true });
    
    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      clearTimeout(flipTimeout);
    };
  }, []);

  return (
    <div 
      className="w-full h-screen relative bg-[url('https://www.transparenttextures.com/patterns/wood-pattern.png')] bg-[#2c2621] overflow-hidden"
    >
      <div className="absolute inset-0 bg-black/40 mix-blend-multiply pointer-events-none z-0 fixed h-screen w-screen"></div>
      
      {/* Fixed Container for the Notebook */}
      <div className="absolute inset-0 w-full h-full flex items-center justify-center z-10">
        <Notebook scrollProgress={scrollProgress} totalPages={totalPages} />
      </div>
      
      {/* Scroll Indicator */}
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 text-white/50 font-mono text-sm z-50 bg-black/40 px-4 py-2 rounded-full backdrop-blur-sm pointer-events-none flex flex-col items-center gap-1">
        <span>{targetPage < totalPages - 1 ? "Scroll down past bottom to flip" : "You reached the end!"}</span>
        <div className="w-32 h-1 bg-white/20 rounded-full mt-1 overflow-hidden relative">
          <div 
            className="absolute top-0 left-0 h-full bg-white transition-all duration-300 ease-out"
            style={{ width: `${(targetPage / (totalPages - 1)) * 100}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
}
