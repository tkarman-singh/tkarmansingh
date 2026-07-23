"use client";

import { User } from "lucide-react";

export function HeroPage() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center font-caveat text-gray-900 relative">
      
      {/* Name and Tagline */}
      <div className="text-center z-10 relative">
        <h1 className="text-7xl md:text-8xl font-bold mb-4 transform -rotate-2 inline-block drop-shadow-sm text-black">
          Karman Singh
        </h1>
        <p className="text-3xl md:text-4xl text-gray-700 mt-2 font-playfair italic">
          Software Engineer & IT Undergraduate
        </p>
      </div>

      {/* Taped photo placeholder */}
      <div className="relative mt-12 transform rotate-3 transition-transform hover:rotate-1 duration-300 group cursor-pointer z-20">
        {/* Tape */}
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-24 h-8 bg-white/40 backdrop-blur-sm border border-white/50 shadow-sm transform -rotate-2 z-10"></div>
        
        {/* Photo frame */}
        <div className="bg-white p-3 pb-12 shadow-md border border-black/10">
          <div className="w-48 h-48 bg-gray-200 border border-black/5 flex items-center justify-center overflow-hidden relative group">
            {/* The actual image should go here. For now, a placeholder icon. */}
            <User size={64} className="text-gray-400 group-hover:scale-110 transition-transform duration-500" />
            <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </div>
          <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-xl text-black/70 whitespace-nowrap transform -rotate-2 group-hover:rotate-0 transition-transform">
            Building scalable systems
          </p>
        </div>
      </div>

      {/* Decorative arrow pointing to flip */}
      <div className="absolute bottom-10 right-10 flex flex-col items-center opacity-60 animate-pulse">
        <span className="text-2xl mb-1 transform -rotate-12">Flip me!</span>
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transform -rotate-45">
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </div>
    </div>
  );
}
