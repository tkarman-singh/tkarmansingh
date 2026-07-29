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
          <div className="absolute inset-0 pt-[28%] pr-[16%] pb-[15%] pl-[20%] flex flex-col pointer-events-none text-left overflow-hidden">
            <div className="flex flex-col gap-[6px] mb-[12px]">
              <h4 className="font-kalam text-[clamp(18px,3.5vw,26px)] font-bold text-[#1f2328] leading-[1.1] m-0">Summer Software Intern</h4>
              <div className="self-start">
                <span className="font-fraunces text-[clamp(10px,1.8vw,13px)] font-bold text-[#1f2328] bg-[#fdf0bc] px-[8px] py-[3px] rounded-[3px] shadow-sm tracking-wide">
                  IIRS, ISRO
                </span>
              </div>
            </div>
            <p className="font-fraunces italic text-[clamp(12px,2vw,16px)] text-[#6b6a56] mb-[12px] m-0">June 2026 – July 2026</p>
            <ul className="list-[circle] pl-[18px] m-0 pr-[10px]">
              <li className="font-kalam text-[#3f3f2e] text-[clamp(13px,2.5vw,18px)] leading-[1.4]">
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
