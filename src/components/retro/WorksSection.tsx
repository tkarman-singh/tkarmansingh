import React from 'react';
import Image from 'next/image';

export function WorksSection() {
  return (
    <section className="scroll-mt-[80px] md:scroll-mt-[100px] min-h-screen flex flex-col items-center justify-center py-[90px] px-[24px] md:px-[150px] relative" id="works-section">
      <span className="absolute top-[40px] left-1/2 -translate-x-1/2 text-[13px] md:text-[16px] tracking-[.3em] uppercase text-[#6b6a56]">
        02 · works
      </span>
      
      <div className="w-full max-w-[1000px] mt-[60px] flex flex-col md:flex-row items-center justify-center gap-[80px] md:gap-[60px]">
        <div className="relative w-[85%] md:w-full max-w-[450px] group cursor-pointer">
          <Image 
            src="/work-note.png" 
            alt="Works Area Right" 
            width={600} 
            height={800} 
            className="w-full h-auto transition-all duration-300 group-hover:rotate-[2deg] group-hover:scale-[1.02]"
            priority
          />
          <div className="absolute inset-0 pt-[22%] px-[12%] flex flex-col pointer-events-none text-left">
            <div className="flex items-center gap-[10px] mb-[4px] flex-wrap">
              <h4 className="font-kalam text-[clamp(20px,4vw,28px)] font-bold text-[#1f2328] leading-none m-0">Summer Software Intern</h4>
              <span className="font-fraunces text-[clamp(11px,2vw,14px)] font-bold text-[#1f2328] bg-[#fdf0bc] px-[6px] py-[2px] rounded-[3px] shadow-sm tracking-wide">
                IIRS, ISRO
              </span>
            </div>
            <p className="font-fraunces italic text-[clamp(14px,2.5vw,18px)] text-[#6b6a56] mb-[15px] m-0">June 2026 – July 2026</p>
            <ul className="list-[circle] pl-[20px] m-0">
              <li className="font-kalam text-[#3f3f2e] text-[clamp(15px,3vw,20px)] leading-[1.35]">
                Developing a Java 21 application to automate processing of Sentinel-2 Level-2A multispectral satellite imagery for large-scale vegetation analysis.
              </li>
            </ul>
          </div>
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
