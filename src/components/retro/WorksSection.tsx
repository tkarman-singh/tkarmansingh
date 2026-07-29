import React from 'react';
import { WorkNote } from './WorkNote';

export function WorksSection() {
  return (
    <section className="scroll-mt-[80px] md:scroll-mt-[100px] min-h-screen flex flex-col items-center justify-center py-[90px] px-[24px] md:px-[150px] relative" id="works-section">
      <span className="absolute top-[40px] left-1/2 -translate-x-1/2 text-[13px] md:text-[16px] tracking-[.3em] uppercase text-[#6b6a56]">
        02 · works
      </span>
      
      <div className="w-full max-w-[1000px] mt-[60px] flex flex-col md:flex-row items-center justify-center gap-[80px] md:gap-[60px]">
        <WorkNote 
          role="Summer Software Intern"
          company="IIRS, ISRO"
          duration="June 2026 – July 2026"
          description="Developing a Java 21 application to automate processing of Sentinel-2 Level-2A multispectral satellite imagery for large-scale vegetation analysis."
          slideOutImage="/cute-pc.png"
        />
        
        <WorkNote 
          role="Next Project"
          company="Your Company"
          duration="August 2026 – Present"
          description="A placeholder description for the second note. Update this with your next project's details!"
          slideOutImage="/study-cat.png"
        />
      </div>
    </section>
  );
}
