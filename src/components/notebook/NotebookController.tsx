"use client";

import { useEffect, useState } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";
import { Notebook } from "./Notebook";

export function NotebookController() {
  const totalPages = 9; // Hero, About, Skills, Education, Experience, Projects, Leadership, Contact, Footer
  const [currentPage, setCurrentPage] = useState(0);

  // Use framer-motion to track window scroll
  const { scrollYProgress } = useScroll();

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    // Map the 0-1 scroll progress to the current page index
    // We multiply by totalPages - 1 because we want to reach the last page exactly at scroll end
    const pageIndex = Math.round(latest * (totalPages - 1));
    if (pageIndex !== currentPage) {
      setCurrentPage(pageIndex);
    }
  });

  return (
    // The tall container that enables native scrolling
    <div 
      className="w-full relative bg-[url('https://www.transparenttextures.com/patterns/wood-pattern.png')] bg-[#2c2621]"
      style={{ height: `${totalPages * 100}vh` }}
    >
      {/* Fixed viewport container */}
      <div className="sticky top-0 w-full h-screen overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 bg-black/40 mix-blend-multiply pointer-events-none z-0"></div>
        
        {/* Pass the scroll progress to Notebook so it can handle the precise 3D maths */}
        <Notebook scrollYProgress={scrollYProgress} totalPages={totalPages} />
        
        {/* Page Indicator */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/50 font-mono text-sm z-50">
          Page {currentPage + 1} of {totalPages}
        </div>
      </div>
    </div>
  );
}
