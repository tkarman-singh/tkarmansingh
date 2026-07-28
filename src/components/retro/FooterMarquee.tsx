'use client';
import React from 'react';

export function FooterMarquee() {
  const lyrics = "🎶 Almost heaven, West Virginia. Blue Ridge Mountains Shenandoah River. Life is old there. Older than the trees. Younger than the mountains. Growin like a breeze Country Roads, take me home. To the place I belong West Virginia, mountain momma. Take me home, country roads. 🎶";

  // We duplicate the lyrics so the marquee can scroll seamlessly.
  // The first copy scrolls out while the second copy follows immediately.
  return (
    <div className="w-full overflow-hidden bg-[#22241a] border-t border-[#3f3f2e] select-none py-[20px] md:py-[30px] flex">
      {/* We use width-fit and animate-marquee to scroll -50% of the total width continuously */}
      <div className="flex whitespace-nowrap font-sans font-bold text-[32px] md:text-[64px] tracking-tight uppercase text-[#f4efdd] animate-marquee">
        <span className="pr-[40px] md:pr-[80px]">{lyrics}</span>
        <span className="pr-[40px] md:pr-[80px]">{lyrics}</span>
      </div>
    </div>
  );
}
