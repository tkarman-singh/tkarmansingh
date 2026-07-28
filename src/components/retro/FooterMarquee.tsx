'use client';
import React from 'react';

export function FooterMarquee() {
  const lyrics = "Almost heaven, West Virginia.\tBlue Ridge Mountains Shenandoah River.\tLife is old there.\tOlder than the trees.\tYounger than the mountains.\tGrowin like a breeze Country Roads, take me home.\tTo the place I belong West Virginia, mountain momma.\tTake me home, country roads.";

  return (
    <div className="w-[80%] md:w-1/3 mx-auto overflow-hidden select-none py-[20px] md:py-[30px] flex">
      <div className="flex whitespace-pre font-kalam text-[18px] md:text-[22px] tracking-wide text-[#3f3f2e] animate-marquee">
        <span className="pr-[40px]">🎶 {lyrics} 🎶</span>
        <span className="pr-[40px]">🎶 {lyrics} 🎶</span>
      </div>
    </div>
  );
}
