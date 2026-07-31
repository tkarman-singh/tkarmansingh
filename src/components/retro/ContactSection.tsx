"use client";

import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export function ContactSection() {
  const containerRef = useRef<HTMLElement>(null);
  return (
    <section ref={containerRef} className="scroll-mt-[80px] md:scroll-mt-[100px] min-h-screen flex flex-col items-center justify-center py-[90px] px-[24px] md:px-[60px] relative overflow-hidden" id="contact-section">
      <span className="absolute top-[40px] left-1/2 -translate-x-1/2 text-[13px] md:text-[16px] tracking-[.3em] uppercase text-[#6b6a56]">
        05 · contact
      </span>
      
      {/* Postcard Container */}
      <div className="relative w-full max-w-[600px] mt-[60px]">
        {/* The Tape */}
        <div className="absolute -top-[15px] left-1/2 -translate-x-1/2 w-[120px] h-[35px] bg-[#e8e4d3]/70 backdrop-blur-[2px] z-30 shadow-[1px_2px_4px_rgba(0,0,0,0.05)] rotate-[-3deg]">
          {/* Jagged tape edges */}
        </div>

        {/* The Polaroid */}
        <motion.div 
          className="absolute top-[30px] right-[-40px] md:right-[-100px] w-[180px] md:w-[240px] h-[220px] md:h-[290px] bg-[#f5ede0] p-[10px] md:p-[16px] pb-[40px] md:pb-[70px] shadow-[0_8px_30px_rgba(0,0,0,0.15)] rounded-[12px] rotate-[12deg] z-0 cursor-grab active:cursor-grabbing flex flex-col"
          drag
          dragConstraints={containerRef}
          dragElastic={0.1}
          dragMomentum={false}
          whileHover={{ scale: 1.02 }}
          whileDrag={{ scale: 1.05, zIndex: 50, rotate: 5 }}
        >
          <div className="relative w-full h-full bg-[#1a1a1a] overflow-hidden rounded-[4px] pointer-events-none">
            <Image src="/me-real.JPG" alt="Me" fill className="object-cover" sizes="240px" draggable={false} />
          </div>
          <div className="absolute bottom-[15px] md:bottom-[20px] w-full text-center left-0 font-caveat font-bold text-[#e13a3a] text-[24px] md:text-[32px] pointer-events-none -rotate-2">
            karman
          </div>
        </motion.div>

        {/* The Card */}
        <div className="bg-[#fdf9f1] border-[1.5px] border-[#22241a] rounded-[4px] p-[40px] md:p-[60px] relative z-10 shadow-[6px_6px_0_rgba(0,0,0,1)] rotate-[1deg] hover:rotate-[0deg] transition-transform duration-300">
          
          {/* Decorative Postmark / Stamp */}
          <div className="absolute top-[30px] right-[40px] w-[60px] h-[60px] rounded-full border-[2px] border-dashed border-[#df7a3e]/40 flex items-center justify-center opacity-70 rotate-[15deg] pointer-events-none hidden md:flex">
            <span className="font-sans font-bold text-[#df7a3e] text-[10px] uppercase tracking-wider text-center leading-tight">
              Approved
            </span>
          </div>

          <h2 className="font-great-vibes text-[#d351f7] text-[50px] md:text-[70px] leading-none mb-[20px]">
            Let&apos;s connect!
          </h2>
          
          <p className="font-kalam text-[#5a5a5a] text-[18px] md:text-[22px] leading-[1.6] mb-[40px] max-w-[85%]">
            I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your visions. Drop me a line!
          </p>

          <div className="flex flex-col gap-[20px]">
            <div className="flex flex-col sm:flex-row sm:items-baseline gap-[5px] sm:gap-[15px]">
              <span className="font-sans font-bold text-[#6b6a56] text-[12px] tracking-[.1em] uppercase w-[90px]">Email</span>
              <a href="mailto:t.karman.singh@gmail.com" className="font-kalam text-[#2a2a2a] text-[20px] md:text-[24px] border-b-[2px] border-dashed border-[#22241a]/30 hover:text-[#df7a3e] hover:border-[#df7a3e] transition-colors w-fit">
                t.karman.singh@gmail.com
              </a>
            </div>
            
            <div className="flex flex-col sm:flex-row sm:items-baseline gap-[5px] sm:gap-[15px]">
              <span className="font-sans font-bold text-[#6b6a56] text-[12px] tracking-[.1em] uppercase w-[90px]">LinkedIn</span>
              <a href="https://www.linkedin.com/in/t-karman-singh/" target="_blank" rel="noopener noreferrer" className="font-kalam text-[#2a2a2a] text-[20px] md:text-[24px] border-b-[2px] border-dashed border-[#22241a]/30 hover:text-[#d351f7] hover:border-[#d351f7] transition-colors w-fit">
                /in/t-karman-singh
              </a>
            </div>
            
            <div className="flex flex-col sm:flex-row sm:items-baseline gap-[5px] sm:gap-[15px]">
              <span className="font-sans font-bold text-[#6b6a56] text-[12px] tracking-[.1em] uppercase w-[90px]">GitHub</span>
              <a href="https://github.com/tkarman-singh" target="_blank" rel="noopener noreferrer" className="font-kalam text-[#2a2a2a] text-[20px] md:text-[24px] border-b-[2px] border-dashed border-[#22241a]/30 hover:text-[#df7a3e] hover:border-[#df7a3e] transition-colors w-fit">
                @tkarman-singh
              </a>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-baseline gap-[5px] sm:gap-[15px]">
              <span className="font-sans font-bold text-[#6b6a56] text-[12px] tracking-[.1em] uppercase w-[90px]">Resume</span>
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="font-kalam text-[#2a2a2a] text-[20px] md:text-[24px] border-b-[2px] border-dashed border-[#22241a]/30 hover:text-[#d351f7] hover:border-[#d351f7] transition-colors w-fit">
                Have a peek
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
