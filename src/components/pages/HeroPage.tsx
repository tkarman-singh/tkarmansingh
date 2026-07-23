"use client";

import Image from "next/image";

export function HeroPage() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center relative mt-10">
      
      {/* Polaroid photo */}
      <div className="relative p-3 pb-12 bg-white shadow-lg transform -rotate-3 hover:rotate-0 transition-transform duration-500 max-w-[250px] w-full">
        <div className="relative w-full aspect-square border border-gray-200">
          <Image 
            src="/profile.jpg" 
            alt="Karman Singh" 
            fill 
            className="object-cover grayscale sepia-[.3]" 
            priority
          />
        </div>
        {/* Handwriting on polaroid */}
        <div className="absolute bottom-3 left-0 w-full text-center font-caveat text-2xl text-gray-800">
          Me!
        </div>
        {/* Tape at the top */}
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-6 bg-white/40 backdrop-blur-sm shadow-sm rotate-2 border border-black/5" style={{ background: "linear-gradient(rgba(255,255,255,0.7), rgba(255,255,255,0.4))" }}></div>
      </div>

      <div className="mt-12 text-center space-y-4">
        <h1 className="font-caveat text-6xl md:text-8xl text-black drop-shadow-sm font-bold">
          Karman Singh
        </h1>
        <p className="font-playfair italic text-xl md:text-2xl text-black/70">
          Software Engineer & Builder
        </p>
      </div>

      {/* Hand-drawn arrow */}
      <div className="absolute bottom-20 right-10 flex flex-col items-center gap-2 opacity-60">
        <span className="font-caveat text-2xl rotate-12">Swipe to turn</span>
        <svg width="40" height="40" viewBox="0 0 100 100" className="rotate-90">
          <path d="M10,50 Q50,90 90,50 M70,30 L90,50 L70,70" fill="none" stroke="black" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
      
    </div>
  );
}
