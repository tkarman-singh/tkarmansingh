import React from 'react';

export function SideBorders() {
  // 40 icons is enough to cover up to 2000px viewport height at 50px each.
  // We don't use overflow-hidden on the container so the slide-out text can overflow sideways.
  const icons = Array.from({ length: 40 });

  return (
    <>
      {/* Left Border */}
      <div className="fixed top-0 left-0 bottom-0 w-[30px] md:w-[45px] z-50 flex flex-col pointer-events-none">
        {icons.map((_, i) => (
          <div key={`left-${i}`} className="relative w-full aspect-square group pointer-events-auto cursor-default shrink-0">
            <img src="/ka-icon.png" alt="" className="w-full h-full object-contain relative z-10" />
            <span className="absolute top-1/2 left-[120%] -translate-y-1/2 font-kalam text-[#df7a3e] font-bold text-[16px] md:text-[20px] opacity-0 -translate-x-full transition-all duration-300 ease-out group-hover:opacity-100 group-hover:translate-x-0 z-0 tracking-wide pointer-events-none">
              Karman
            </span>
          </div>
        ))}
      </div>

      {/* Right Border */}
      <div className="fixed top-0 right-0 bottom-0 w-[30px] md:w-[45px] z-50 flex flex-col pointer-events-none">
        {icons.map((_, i) => (
          <div key={`right-${i}`} className="relative w-full aspect-square group pointer-events-auto cursor-default shrink-0">
            <img src="/ka-icon.png" alt="" className="w-full h-full object-contain relative z-10" />
            <span className="absolute top-1/2 right-[120%] -translate-y-1/2 font-kalam text-[#df7a3e] font-bold text-[16px] md:text-[20px] opacity-0 translate-x-full transition-all duration-300 ease-out group-hover:opacity-100 group-hover:translate-x-0 z-0 tracking-wide pointer-events-none">
              Karman
            </span>
          </div>
        ))}
      </div>
    </>
  );
}
