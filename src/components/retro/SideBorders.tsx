import React from 'react';

export function SideBorders() {
  // 200 icons is enough to cover up to 9000px height (at 45px each).
  // We don't use overflow-hidden on the container so the slide-out text can overflow sideways.
  const icons = Array.from({ length: 200 });

  return (
    <>
      {/* Left Border */}
      <div className="absolute top-0 left-0 w-[30px] md:w-[45px] z-[60] flex flex-col pointer-events-none">
        {icons.map((_, i) => (
          <div key={`left-${i}`} className="relative w-full aspect-square group pointer-events-auto cursor-default shrink-0">
            <img src="/ka-icon.png" alt="" className="w-full h-full object-contain relative z-10" />
            <span className="absolute top-1/2 left-[120%] -translate-y-1/2 font-kalam text-[#d351f7] font-bold text-[12px] md:text-[14px] opacity-0 -translate-x-full transition-all duration-300 ease-out group-hover:opacity-100 group-hover:translate-x-0 z-0 tracking-wide pointer-events-none">
              karman
            </span>
          </div>
        ))}
      </div>

      {/* Right Border */}
      <div className="absolute top-0 right-0 w-[30px] md:w-[45px] z-[60] flex flex-col pointer-events-none">
        {icons.map((_, i) => (
          <div key={`right-${i}`} className="relative w-full aspect-square group pointer-events-auto cursor-default shrink-0">
            <img src="/ka-icon.png" alt="" className="w-full h-full object-contain relative z-10" />
            <span className="absolute top-1/2 right-[120%] -translate-y-1/2 font-kalam text-[#d351f7] font-bold text-[12px] md:text-[14px] opacity-0 translate-x-full transition-all duration-300 ease-out group-hover:opacity-100 group-hover:translate-x-0 z-0 tracking-wide pointer-events-none">
              karman
            </span>
          </div>
        ))}
      </div>
    </>
  );
}
