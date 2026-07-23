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
