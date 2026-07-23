"use client";

import { useEffect, useState, useRef } from "react";
import { Notebook } from "./Notebook";

export function NotebookController() {
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = 9;
  const isAnimating = useRef(false);
  const touchStartY = useRef(0);

  // Constants for animation duration
  const FLIP_DURATION = 800; // slightly faster for digital notepad

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

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      // Allow internal scrolling on the page content if needed
      const target = e.target as HTMLElement;
      if (target.closest('.notebook-scroll')) {
        const scrollContainer = target.closest('.notebook-scroll') as HTMLElement;
        const isAtTop = scrollContainer.scrollTop === 0;
        const isAtBottom = scrollContainer.scrollTop + scrollContainer.clientHeight >= scrollContainer.scrollHeight - 1;
        
        // Only allow page flip if the user has reached the top or bottom of the scrollable content
        if ((e.deltaY > 0 && !isAtBottom) || (e.deltaY < 0 && !isAtTop)) {
          return;
        }
      }
      
      // Add a small threshold to prevent overly sensitive trackpads
      if (Math.abs(e.deltaY) < 30) return;
      
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

    const handleTouchStart = (e: TouchEvent) => {
      touchStartY.current = e.touches[0].clientY;
    };

    const handleTouchMove = (e: TouchEvent) => {
      // Only prevent default if we're not inside a scrollable container
      const target = e.target as HTMLElement;
      if (!target.closest('.notebook-scroll')) {
        e.preventDefault(); 
      }
    };

    const handleTouchEnd = (e: TouchEvent) => {
      const touchEndY = e.changedTouches[0].clientY;
      const diffY = touchStartY.current - touchEndY;

      // Handle swipe UP to go next (flip page up)
      if (diffY > 50) {
        flipNext();
      } 
      // Handle swipe DOWN to go prev (flip page back down)
      else if (diffY < -50) {
        flipPrev();
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("touchstart", handleTouchStart, { passive: false });
    window.addEventListener("touchmove", handleTouchMove, { passive: false });
    window.addEventListener("touchend", handleTouchEnd);

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [currentPage]);

  return (
    <div className="w-full h-full flex items-center justify-center relative bg-[url('https://www.transparenttextures.com/patterns/wood-pattern.png')] bg-[#2c2621]">
      <div className="absolute inset-0 bg-black/40 mix-blend-multiply pointer-events-none z-0"></div>
      
      {/* Container to handle 3D perspective context */}
      <div className="relative w-full h-full max-w-6xl mx-auto flex items-center justify-center z-10">
        <Notebook currentPage={currentPage} />
      </div>
      
      {/* Page Indicator */}
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 text-white/50 font-mono text-sm z-50 bg-black/40 px-4 py-1 rounded-full backdrop-blur-sm">
        Page {currentPage + 1} of {totalPages}
      </div>
    </div>
  );
}
