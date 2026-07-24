"use client";

import { useEffect, useState, useRef } from "react";
import { Notebook } from "./Notebook";

export function NotebookController() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const totalPages = 9;
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const scrollTop = window.scrollY;
      const maxScroll = document.body.scrollHeight - window.innerHeight;
      
      // Calculate progress from 0 to 1
      const progress = maxScroll > 0 ? scrollTop / maxScroll : 0;
      
      // Add a slight smoothing/clamping just in case
      const clampedProgress = Math.min(Math.max(progress, 0), 1);
      
      setScrollProgress(clampedProgress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    
    // Initial calculation
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="w-full relative bg-[url('https://www.transparenttextures.com/patterns/wood-pattern.png')] bg-[#2c2621]"
      style={{ height: `${totalPages * 150}vh` }} // 150vh per page gives plenty of scroll distance
    >
      <div className="absolute inset-0 bg-black/40 mix-blend-multiply pointer-events-none z-0 fixed h-screen w-screen"></div>
      
      {/* Sticky Container for the Notebook */}
      <div className="sticky top-0 w-full h-screen flex items-center justify-center z-10 overflow-hidden">
        <Notebook scrollProgress={scrollProgress} totalPages={totalPages} />
      </div>
      
      {/* Scroll Indicator */}
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 text-white/50 font-mono text-sm z-50 bg-black/40 px-4 py-2 rounded-full backdrop-blur-sm pointer-events-none flex flex-col items-center gap-1">
        <span>Scroll down to flip pages</span>
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
