'use client';
import React from 'react';

export function FooterMarquee() {
  const lyrics = "Almost heaven, West Virginia. Blue Ridge Mountains Shenandoah River. Life is old there. Older than the trees. Younger than the mountains. Growin like a breeze Country Roads, take me home. To the place I belong West Virginia, mountain momma. Take me home, country roads.";

  return (
    <div className="w-[80%] md:w-1/3 mx-auto overflow-hidden select-none py-[20px] md:py-[30px] flex">
      <div className="flex whitespace-nowrap font-kalam text-[18px] md:text-[22px] tracking-wide text-[#3f3f2e] animate-marquee">
        <span className="pr-[40px]">🎶 {lyrics} 🎶</span>
        <span className="pr-[40px]">🎶 {lyrics} 🎶</span>
      </div>
    </div>
  );
}
