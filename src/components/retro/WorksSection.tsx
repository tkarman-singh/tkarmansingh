import React from 'react';
import Image from 'next/image';

export function WorksSection() {
  return (
    <section className="scroll-mt-[80px] md:scroll-mt-[100px] min-h-screen flex flex-col items-center justify-center py-[90px] px-[24px] md:px-[150px] relative" id="works-section">
      <span className="absolute top-[40px] left-1/2 -translate-x-1/2 text-[13px] md:text-[16px] tracking-[.3em] uppercase text-[#6b6a56]">
        02 · works
      </span>
      
      <div className="w-full max-w-[1000px] mt-[60px] flex flex-col md:flex-row items-center justify-center gap-[80px] md:gap-[60px]">
        <div className="relative w-[85%] md:w-full max-w-[450px]">
          <Image 
            src="/work-note.png" 
            alt="Works Area Right" 
            width={600} 
            height={800} 
            className="w-full h-auto transition-all duration-300 hover:rotate-[15deg] hover:scale-[1.02]"
            priority
          />
        </div>
        
        <div className="relative w-[85%] md:w-full max-w-[450px]">
          <Image 
            src="/work-note.png" 
            alt="Works Area Left" 
            width={600} 
            height={800} 
            className="w-full h-auto transition-all duration-300 hover:-rotate-[15deg] hover:scale-[1.02]"
            priority
          />
        </div>
      </div>
    </section>
  );
}
