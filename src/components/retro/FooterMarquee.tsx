'use client';
import React from 'react';

export function FooterMarquee() {
  const lyrics = "Almost heaven, West Virginia.\t\t\tBlue Ridge Mountains Shenandoah River.\t\t\tLife is old there.\t\t\tOlder than the trees.\t\t\tYounger than the mountains.\t\t\tGrowin like a breeze Country Roads, take me home.\t\t\tTo the place I belong West Virginia, mountain momma.\t\t\tTake me home, country roads.";

  return (
    <div className="w-[90%] md:w-1/2 mx-auto select-none py-[20px] md:py-[30px] flex items-center justify-center gap-[15px] text-[#3f3f2e]">
      <span className="text-[18px] md:text-[22px] shrink-0">🎶</span>
      <div className="overflow-hidden flex flex-1 relative">
        <div className="flex whitespace-pre font-kalam text-[18px] md:text-[22px] tracking-wide animate-marquee">
          <span className="pr-[40px]">{lyrics}</span>
          <span className="pr-[40px]">{lyrics}</span>
        </div>
      </div>
      <span className="text-[18px] md:text-[22px] shrink-0">🎶</span>
    </div>
  );
}
