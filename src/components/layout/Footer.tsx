"use client";

import { useRef } from "react";

export function Footer() {
  const footerRef = useRef<HTMLElement>(null);

  return (
    <footer id="contact" ref={footerRef} className="relative w-full bg-black min-h-[60vh] flex flex-col items-center justify-between overflow-hidden pt-32 pb-12 z-20">
      {/* Giant Name with half-black cut-off */}
      <div className="flex-grow flex items-center justify-center w-full px-2">
        <h1 
          className="text-[11vw] md:text-[13vw] font-black tracking-tighter leading-none text-center bg-gradient-to-b from-white from-[50%] to-black to-[50%] bg-clip-text text-transparent pb-4 md:pb-8 whitespace-nowrap"
        >
          karman singh
        </h1>
      </div>

      {/* Bottom Links */}
      <div className="w-full px-8 md:px-16 flex flex-col md:flex-row justify-between items-center gap-6 mt-20 text-xs md:text-sm text-[color:var(--color-muted)] font-medium">
        <a href="https://www.linkedin.com/in/karman-singh-80108033b/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors border-b border-white/30 hover:border-white pb-1">LinkedIn</a>
        <a href="mailto:t.karman.singh@gmail.com" className="hover:text-white transition-colors border-b border-white/30 hover:border-white pb-1">t.karman.singh@gmail.com</a>
        <a href="https://github.com/tkarman-singh" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors border-b border-white/30 hover:border-white pb-1">GitHub</a>
      </div>
    </footer>
  );
}
