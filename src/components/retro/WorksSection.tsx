import React from 'react';
import Image from 'next/image';

export function WorksSection() {
  return (
    <section className="scroll-mt-[80px] md:scroll-mt-[100px] min-h-screen flex flex-col items-center justify-center py-[90px] px-[24px] md:px-[150px] relative" id="works-section">
      <span className="absolute top-[40px] left-1/2 -translate-x-1/2 text-[13px] md:text-[16px] tracking-[.3em] uppercase text-[#6b6a56]">
        02 · works
      </span>
      
      <div className="w-full max-w-[780px] mt-[40px] flex justify-center">
        <Image 
          src="/images/work-paper-new.png" 
          alt="Works Area" 
          width={600} 
          height={800} 
          className="w-full h-auto max-w-[500px] mix-blend-screen"
          priority
        />
      </div>
    </section>
  );
}
