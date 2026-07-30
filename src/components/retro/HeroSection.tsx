"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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
          <h1 className="text-[#333333] font-sans font-extrabold text-[56px] md:text-[85px] lg:text-[110px] tracking-tight m-0 leading-[1.05]">
            Namaste,<br/>
            my name is
          </h1>
          <h2 className="text-[#d351f7] font-sans font-extrabold text-[56px] md:text-[85px] lg:text-[110px] tracking-tight m-0 leading-[1.05] mt-1 md:mt-2">
            <span className="relative inline-block min-w-[230px] md:min-w-[350px] lg:min-w-[450px]">
              <AnimatePresence mode="popLayout">
                <motion.span
                  key={nameIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
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
          <img 
            src="/doodle-me.png" 
            alt="Doodle character" 
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
        <img 
          src="/plane.png" 
          alt="Separator" 
          className="w-[200px] md:w-[350px] h-auto object-contain pointer-events-none opacity-70 mix-blend-multiply" 
        />
      </div>
    </>
  );
}
