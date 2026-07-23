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

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      // Prevent default scrolling
      e.preventDefault();
      
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
      touchStartX.current = e.touches[0].clientX;
    };

    const handleTouchMove = (e: TouchEvent) => {
      e.preventDefault(); // Prevent native scroll
    };

    const handleTouchEnd = (e: TouchEvent) => {
      const touchEndY = e.changedTouches[0].clientY;
      const touchEndX = e.changedTouches[0].clientX;
      
      const diffY = touchStartY.current - touchEndY;
      const diffX = touchStartX.current - touchEndX;

      // Prefer horizontal swipe for book, fallback to vertical
      if (Math.abs(diffX) > Math.abs(diffY)) {
        if (diffX > 50) flipNext(); // swipe left -> next page
        else if (diffX < -50) flipPrev(); // swipe right -> prev page
      } else {
        if (diffY > 50) flipNext();
        else if (diffY < -50) flipPrev();
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
      <Notebook currentPage={currentPage} totalPages={totalPages} />
      
      {/* Page Indicator */}
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 text-white/50 font-mono text-sm z-50">
        Page {currentPage + 1} of {totalPages}
      </div>
    </div>
  );
}
