import React from 'react';
import { Mail } from "lucide-react";

export function HeroSection() {
  return (
    <>
      <section id="hero-section" className="scroll-mt-[80px] md:scroll-mt-[100px] min-h-screen flex flex-col items-center justify-center relative px-[58px] md:px-[140px] text-center">
        <h1 className="font-fraunces text-[clamp(52px,11vw,128px)] font-light tracking-[0.18em] text-transparent leading-none m-0" style={{ WebkitTextStroke: '1.4px #6b6a56' }}>
          NAMASTE
        </h1>
        <p className="font-vibes text-[clamp(28px,5vw,50px)] text-[#7c1f2b] m-0 mt-[-6px] leading-none">
          I'm
        </p>
        <p className="font-fraunces font-semibold text-[clamp(24px,5vw,46px)] tracking-[0.02em] text-[#7c1f2b] m-0 mt-[6px] leading-none flex items-baseline justify-center gap-[14px]">
          <span className="font-vibes font-normal tracking-[0.01em] text-[1.5em]">Karman</span>
          <span className="font-vibes font-normal tracking-[0.01em] text-[1.5em]">Singh</span>
        </p>
        
        <div className="absolute bottom-[110px] left-1/2 -translate-x-1/2 text-[12px] tracking-[.25em] uppercase text-[#6b6a56] flex items-center gap-[10px]">
          <span className="inline-block animate-bounce">↓</span> scroll to explore <span className="inline-block animate-bounce">↓</span>
        </div>
      </section>

      {/* Plane Separator */}
      <div className="w-full flex justify-center py-[40px] relative z-20 overflow-hidden">
        <img 
          src="/plane.png" 
          alt="Separator" 
          className="w-[200px] md:w-[300px] h-auto object-contain pointer-events-none" 
        />
      </div>
    </>
  );
}
