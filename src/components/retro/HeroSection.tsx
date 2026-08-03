"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const names = ["Karman", "करमन", "カルマン", "ਕਰਮਨ", "Карман", "കർമ്മൻ", "కర్మన్", "卡曼"];

export function HeroSection() {
  const [nameIndex, setNameIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setNameIndex((prev) => (prev + 1) % names.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section id="hero-section" className="scroll-mt-[80px] md:scroll-mt-[100px] min-h-screen relative flex items-center overflow-hidden">
        
        {/* Left Content */}
        <div className="flex flex-col text-left px-[24px] md:px-[8%] pt-[20px] md:pt-[0px] relative z-10 w-full md:w-3/5">
          <h1 className="text-[#e0e0e0] font-sans font-extrabold text-[56px] md:text-[85px] lg:text-[110px] tracking-tight m-0 leading-[1.05]">
            Namaste,<br/>
            my name is
          </h1>
          <h2 className="text-[#d351f7] font-sans font-extrabold text-[56px] md:text-[85px] lg:text-[110px] tracking-tight m-0 leading-[1.05] mt-1 md:mt-2">
            <span className="relative inline-flex items-center overflow-hidden h-[1.1em] min-w-[230px] md:min-w-[350px] lg:min-w-[450px] align-bottom pb-[0.1em]">
              <AnimatePresence mode="popLayout">
                <motion.span
                  key={nameIndex}
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  exit={{ y: "-100%" }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }} // Smooth spring-like ease
                  className="inline-block whitespace-nowrap"
                >
                  {names[nameIndex]}
                </motion.span>
              </AnimatePresence>
            </span>
            <span className="ml-[4px] md:ml-[8px]">Singh.</span>
          </h2>
          

        </div>

        {/* Right Doodle Character */}
        <div className="hidden md:block absolute bottom-0 right-[2%] lg:right-[5%] w-[45%] max-w-[550px] z-0">
          
          {/* Thought Bubble */}
          <div className="absolute top-[8%] left-[15%] md:left-[25%] bg-white border-[2px] border-[#22241a] rounded-[20px] px-4 py-2 shadow-[4px_4px_0_rgba(0,0,0,1)] z-10 font-kalam text-[#2a2a2a] text-sm md:text-base animate-[bounce_3s_ease-in-out_infinite] rotate-2 cursor-pointer hover:scale-105 transition-transform">
            <span>Woof! Put your text here!</span>
            {/* Thought bubbles leading to dog */}
            <div className="absolute -bottom-[12px] right-[30px] w-4 h-4 bg-white border-[2px] border-[#22241a] rounded-full"></div>
            <div className="absolute -bottom-[22px] right-[15px] w-2 h-2 bg-white border-[2px] border-[#22241a] rounded-full"></div>
          </div>

          <Image 
            src="/doodle-me.png" 
            alt="Doodle character" 
            width={800}
            height={800}
            className="w-full h-auto object-contain object-bottom drop-shadow-sm" 
          />
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-[40px] left-1/2 -translate-x-1/2 text-[12px] tracking-[.25em] uppercase text-[#999] flex items-center gap-[10px] z-10 font-sans font-semibold">
          <span className="inline-block animate-bounce">↓</span> scroll to explore <span className="inline-block animate-bounce">↓</span>
        </div>
      </section>

      {/* Plane Separator */}
      <div className="w-full flex justify-center py-[40px] relative z-20 overflow-hidden">
        <Image 
          src="/plane.png" 
          alt="Separator" 
          width={600}
          height={300}
          className="w-[200px] md:w-[350px] h-auto object-contain pointer-events-none opacity-70 mix-blend-multiply" 
        />
      </div>
    </>
  );
}
