"use client";

import { useEffect, useState } from "react";
import { Notebook } from "./Notebook";

export function NotebookController() {
  const totalPages = 9; // Hero, About, Skills, Education, Experience, Projects, Leadership, Contact, Footer
  const [currentPage, setCurrentPage] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Manually track window scroll to feed into animejs
  useEffect(() => {
    const handleScroll = () => {
      // Calculate scroll progress from 0 to 1
      const totalScrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      const progress = totalScrollHeight > 0 ? Math.max(0, Math.min(1, currentScroll / totalScrollHeight)) : 0;
      
      setScrollProgress(progress);

      // Map progress to current page
      const pageIndex = Math.round(progress * (totalPages - 1));
      setCurrentPage(pageIndex);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Trigger once on mount
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    // The tall container that enables native scrolling
    <div 
      className="w-full relative bg-[url('https://www.transparenttextures.com/patterns/wood-pattern.png')] bg-[#2c2621]"
      style={{ height: `${totalPages * 100}vh` }}
    >
      {/* Fixed viewport container */}
      <div className="sticky top-0 w-full h-screen overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 bg-black/40 mix-blend-multiply pointer-events-none z-0"></div>
        
        {/* Pass the scroll progress to Notebook so it can seek the animejs timeline */}
        <Notebook scrollProgress={scrollProgress} totalPages={totalPages} />
        
        {/* Page Indicator */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/50 font-mono text-sm z-50">
          Page {currentPage + 1} of {totalPages}
        </div>
      </div>
    </div>
  );
}
