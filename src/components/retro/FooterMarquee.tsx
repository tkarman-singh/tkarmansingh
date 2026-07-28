'use client';
import React from 'react';

export function FooterMarquee() {
  const lyrics = "🎶 Almost heaven, West Virginia. Blue Ridge Mountains Shenandoah River. Life is old there. Older than the trees. Younger than the mountains. Growin like a breeze Country Roads, take me home. To the place I belong West Virginia, mountain momma. Take me home, country roads. 🎶";

  return (
    <div className="w-[80%] md:w-1/3 mx-auto overflow-hidden select-none py-[20px] md:py-[30px] flex relative">
      {/* We add fade masks to the edges since it's centered and cut off */}
      <div className="absolute inset-y-0 left-0 w-[40px] bg-gradient-to-r from-[#FDF7FF] to-transparent z-10 pointer-events-none"></div>
      <div className="absolute inset-y-0 right-0 w-[40px] bg-gradient-to-l from-[#FDF7FF] to-transparent z-10 pointer-events-none"></div>
      
      <div className="flex whitespace-nowrap font-kalam text-[18px] md:text-[22px] tracking-wide text-[#3f3f2e] animate-marquee">
        <span className="pr-[40px]">{lyrics}</span>
        <span className="pr-[40px]">{lyrics}</span>
      </div>
    </div>
  );
}
