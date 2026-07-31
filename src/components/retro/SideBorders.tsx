import React from 'react';

export function SideBorders() {
  // 30 icons is enough to cover the screen height (at 45-75px each).
  // By using fixed positioning, we don't need 200 items, massively improving scroll performance.
  const icons = Array.from({ length: 30 });

  const iconData = [
    { src: '/ka-icon.png', text: 'karman' },
    { src: '/pizza-icon.png', text: 'pizza addict' },
    { src: '/pointer-icon.png', text: 'problem solver ( of life too)' },
    { src: '/mic-icon.png', text: 'might be a rockstar' },
    { src: '/momo.png', text: 'major momo maniac' },
    { src: '/birdie.png', text: 'earlybird' },
    { src: '/blade.png', text: 'Kurogane - never give up' },
  ];

  return (
    <div className="fixed inset-0 w-full h-screen pointer-events-none z-[60]">
      {/* Left Border */}
      <div className="absolute top-0 left-0 w-[50px] md:w-[75px] h-full flex flex-col pointer-events-none">
        {icons.map((_, i) => {
          const currentIcon = iconData[i % iconData.length];
          return (
            <div key={`left-${i}`} className="relative w-full aspect-square group pointer-events-auto cursor-default shrink-0">
              <img src={currentIcon.src} alt="" className="w-full h-full object-contain relative z-10" />
              <span className="absolute top-1/2 left-[120%] -translate-y-1/2 font-kalam text-[#d351f7] font-bold text-[12px] md:text-[14px] opacity-0 -translate-x-full transition-all duration-300 ease-out group-hover:opacity-100 group-hover:translate-x-0 tracking-wide pointer-events-none whitespace-nowrap">
                {currentIcon.text}
              </span>
            </div>
          );
        })}
      </div>

      {/* Right Border */}
      <div className="absolute top-0 right-0 w-[50px] md:w-[75px] h-full flex flex-col pointer-events-none">
        {icons.map((_, i) => {
          const currentIcon = iconData[i % iconData.length];
          return (
            <div key={`right-${i}`} className="relative w-full aspect-square group pointer-events-auto cursor-default shrink-0">
              <img src={currentIcon.src} alt="" className="w-full h-full object-contain relative z-10" />
              <span className="absolute top-1/2 right-[120%] -translate-y-1/2 font-kalam text-[#d351f7] font-bold text-[12px] md:text-[14px] opacity-0 translate-x-full transition-all duration-300 ease-out group-hover:opacity-100 group-hover:translate-x-0 tracking-wide pointer-events-none whitespace-nowrap">
                {currentIcon.text}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
