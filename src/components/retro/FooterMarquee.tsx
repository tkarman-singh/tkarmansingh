'use client';
import React, { useState } from 'react';

export function FooterMarquee() {
  const [isHovered, setIsHovered] = useState(false);
  const lyrics = "Almost heaven, West Virginia.\t\t\tBlue Ridge Mountains Shenandoah River.\t\t\tLife is old there.\t\t\tOlder than the trees.\t\t\tYounger than the mountains.\t\t\tGrowin like a breeze Country Roads, take me home.\t\t\tTo the place I belong West Virginia, mountain momma.\t\t\tTake me home, country roads.";

  return (
    <div 
      className="w-[90%] md:w-1/2 mx-auto select-none py-[20px] md:py-[30px] flex items-center justify-center gap-[15px] text-[#3f3f2e] relative cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span className={`text-[18px] md:text-[22px] shrink-0 transition-opacity duration-300 ${isHovered ? 'opacity-0' : 'opacity-100'}`}>🎶</span>
      
      <div className="overflow-hidden flex flex-1 relative h-[30px] md:h-[35px] items-center">
        <div 
          className={`flex whitespace-pre font-kalam text-[18px] md:text-[22px] tracking-wide animate-marquee transition-opacity duration-300 ${isHovered ? 'opacity-0' : 'opacity-100'}`}
          style={{ animationPlayState: isHovered ? 'paused' : 'running' }}
        >
          <span className="pr-[40px]">{lyrics}</span>
          <span className="pr-[40px]">{lyrics}</span>
        </div>
      </div>
      
      <span className={`text-[18px] md:text-[22px] shrink-0 transition-opacity duration-300 ${isHovered ? 'opacity-0' : 'opacity-100'}`}>🎶</span>

      {/* Hover Overlay Text */}
      <div 
        className={`absolute inset-0 flex items-center justify-center pointer-events-none transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
      >
        <span className="font-kalam font-bold text-[24px] md:text-[32px] uppercase text-[#df7a3e] tracking-wider">
          TAKE ME HOOOME! COUNTRY ROOOAD!
        </span>
      </div>
    </div>
  );
}
