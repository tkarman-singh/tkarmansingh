"use client";

import { useEffect, useState, useRef } from "react";
import { Notebook } from "./Notebook";

export function NotebookController() {
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = 9; // Hero, About, Skills, Exp, Proj, Edu, Cert, Contact, Footer
  const isAnimating = useRef(false);
  const touchStartY = useRef(0);
  const touchStartX = useRef(0);

  // Constants for animation duration
  const FLIP_DURATION = 1200;

  const flipNext = () => {
    if (isAnimating.current || currentPage >= totalPages - 1) return;
    isAnimating.current = true;
    setCurrentPage((prev) => prev + 1);
    
    setTimeout(() => {
      isAnimating.current = false;
    }, FLIP_DURATION);
  };

  const flipPrev = () => {
    if (isAnimating.current || currentPage <= 0) return;
    isAnimating.current = true;
    setCurrentPage((prev) => prev - 1);
    
    setTimeout(() => {
      isAnimating.current = false;
    }, FLIP_DURATION);
  };

  const wheelAccumulator = useRef(0);
  const lastWheelTime = useRef(Date.now());
  const SCROLL_THRESHOLD = 200; // Resistance threshold before flipping at boundary

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      // Find closest scrollable parent
      let target = e.target as HTMLElement | null;
      let isScrollable = false;
      let atTop = false;
      let atBottom = false;

      while (target && target !== document.body) {
        const style = window.getComputedStyle(target);
        if (style.overflowY === 'auto' || style.overflowY === 'scroll') {
          if (target.scrollHeight > target.clientHeight) {
            isScrollable = true;
            // Check boundaries with small threshold for rounding errors
            atTop = target.scrollTop <= 2;
            atBottom = Math.abs(target.scrollHeight - target.clientHeight - target.scrollTop) <= 2;
            break;
          }
        }
        target = target.parentElement;
      }

      // Time-based reset for accumulator to prevent residual scroll buildup over time
      const now = Date.now();
      if (now - lastWheelTime.current > 400) {
        wheelAccumulator.current = 0;
      }
      lastWheelTime.current = now;

      if (isScrollable) {
        if (e.deltaY > 0) { // Scrolling down
          if (!atBottom) {
            // Normal scrolling inside the element, DO NOT flip
            wheelAccumulator.current = 0;
            return; 
          }
          // We are at the bottom, accumulate force to break the boundary
          wheelAccumulator.current += e.deltaY;
          
          if (wheelAccumulator.current < SCROLL_THRESHOLD) {
            return; // Not enough resistance met, abort flip
          }
        } else if (e.deltaY < 0) { // Scrolling up
          if (!atTop) {
            // Normal scrolling inside the element, DO NOT flip
            wheelAccumulator.current = 0;
            return;
          }
          // We are at the top, accumulate force to break the boundary
          wheelAccumulator.current += e.deltaY;
          
          if (wheelAccumulator.current > -SCROLL_THRESHOLD) {
            return; // Not enough resistance met, abort flip
          }
        }
      } else {
        // Not a scrollable element, use immediate flip with basic trackpad threshold
        if (Math.abs(e.deltaY) < 30) return;
      }

      // Resistance broken or not scrollable, execute flip
      wheelAccumulator.current = 0;

      if (e.deltaY > 0) {
        flipNext();
      } else if (e.deltaY < 0) {
        flipPrev();
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown" || e.key === "ArrowRight" || e.key === "PageDown") {
        flipNext();
      } else if (e.key === "ArrowUp" || e.key === "ArrowLeft" || e.key === "PageUp") {
        flipPrev();
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [currentPage]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="w-full h-full flex items-center justify-center relative bg-[url('https://www.transparenttextures.com/patterns/wood-pattern.png')] bg-[#2c2621]">
      <div className="absolute inset-0 bg-black/40 mix-blend-multiply pointer-events-none z-0"></div>
      <Notebook 
        currentPage={currentPage} 
        totalPages={totalPages} 
        onPageChange={handlePageChange} 
      />
      
      {/* Page Indicator */}
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 text-white/50 font-mono text-sm z-50">
        Page {currentPage + 1} of {totalPages}
      </div>
    </div>
  );
}
