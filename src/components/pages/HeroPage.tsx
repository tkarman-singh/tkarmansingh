"use client";

import { User } from "lucide-react";

export function HeroPage() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center font-caveat relative text-white">
      
      {/* Name and Tagline */}
      <div className="text-center z-10 relative">
        <p className="text-3xl md:text-4xl text-gray-300 mb-2 font-inter tracking-widest uppercase text-sm">
          Namaste, I'm
        </p>
        <h1 className="text-6xl md:text-8xl font-bold mb-4 inline-block drop-shadow-md text-white font-playfair uppercase tracking-tight">
          Karman Singh
        </h1>
        <div className="w-24 h-1 bg-yellow-600 mx-auto mt-6 mb-8 rounded-full"></div>
        <p className="text-2xl md:text-3xl text-gray-400 mt-2 font-inter uppercase tracking-[0.2em] text-sm">
          Software Engineer & IT Undergraduate
        </p>
      </div>

      {/* Decorative arrow pointing to flip */}
      <div className="absolute bottom-10 right-10 flex flex-col items-center opacity-60 animate-pulse">
        <span className="text-xl mb-1 font-inter uppercase tracking-widest text-xs">Scroll to Open</span>
        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-2">
          <path d="M12 5v14M19 12l-7 7-7-7" />
        </svg>
      </div>
    </div>
  );
}
