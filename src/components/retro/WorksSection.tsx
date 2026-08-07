import React from 'react';
import { WorkNote } from './WorkNote';
import Image from 'next/image';

export function WorksSection() {
  return (
    <section className="scroll-mt-[80px] md:scroll-mt-[100px] min-h-screen flex flex-col items-center justify-center py-[90px] px-[24px] md:px-[150px] relative" id="works-section">
      <span className="absolute top-[40px] left-1/2 -translate-x-1/2 text-[13px] md:text-[16px] tracking-[.3em] uppercase text-[#6b6a56]">
        03 · works
      </span>

      {/* Top Middle Decoration (7) */}
      <Image 
        src="/7.png" 
        alt="Decoration" 
        width={300}
        height={300}
        className="absolute top-[10%] md:top-[15%] left-1/2 -translate-x-1/2 w-[160px] md:w-[290px] h-auto object-contain pointer-events-none select-none z-0 drop-shadow-sm"
      />

      {/* Bottom Right Decoration (8) */}
      <Image 
        src="/8.png" 
        alt="Decoration" 
        width={300}
        height={300}
        className="absolute bottom-[10%] right-[2%] md:right-[5%] w-[160px] md:w-[280px] h-auto object-contain pointer-events-none select-none z-0 drop-shadow-sm"
      />

      {/* Bottom Left Decoration (9) */}
      <Image 
        src="/9.png" 
        alt="Decoration" 
        width={300}
        height={300}
        className="absolute bottom-[10%] left-[2%] md:left-[5%] w-[160px] md:w-[280px] h-auto object-contain pointer-events-none select-none z-0 drop-shadow-sm"
      />
      
      <div className="w-full max-w-[1000px] mt-[60px] flex flex-col md:flex-row items-center justify-center gap-[80px] md:gap-[60px]">
        <WorkNote 
          role="Summer Software Intern"
          company="ISRO"
          duration="June 2026 – July 2026"
          description="Developing a Java 21 application to automate processing of Sentinel-2 Level-2A multispectral satellite imagery for large-scale vegetation analysis."
          slideOutImage="/cute-pc.png"
          certificateLink="https://drive.google.com/file/d/1wzO31PmZy_uFjt5iig75TQICvM-c865x/view?usp=sharing"
        />
        
        <WorkNote 
          role="Full Stack Developer"
          company="GDGC, NIT Jalandhar"
          duration="January 2025 - April 2026"
          description="Developed and maintained full-stack features for HackMol, the official hackathon platform supporting event registrations, participant management, and live operations."
          slideOutImage="/study-cat.png"
        />
      </div>
    </section>
  );
}
