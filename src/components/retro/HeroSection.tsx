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
      <section id="hero-section" className="scroll-mt-[80px] md:scroll-mt-[100px] min-h-screen relative flex flex-col md:flex-row items-center justify-center pt-[100px] md:pt-0 overflow-hidden">
        
        {/* Left Content */}
        <div className="flex flex-col text-left px-[24px] md:px-[8%] pt-[20px] md:pt-[0px] relative z-10 w-full md:w-3/5">
          <h1 className="text-[#e0e0e0] font-sans font-extrabold text-[42px] md:text-[85px] lg:text-[110px] tracking-tight m-0 leading-[1.05]">
            Namaste,<br/>
            my name is
          </h1>
          <h2 className="text-[#d351f7] font-sans font-extrabold text-[42px] md:text-[85px] lg:text-[110px] tracking-tight m-0 leading-[1.05] mt-1 md:mt-2">
            <span className="relative inline-flex items-center overflow-hidden h-[1.1em] min-w-[170px] md:min-w-[350px] lg:min-w-[450px] align-bottom pb-[0.1em]">
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
        <div className="relative md:absolute mt-[60px] md:mt-0 bottom-0 md:right-[2%] lg:right-[5%] w-[85%] md:w-[45%] max-w-[550px] z-0">
          
          {/* Ellipse Thought Bubble */}
          <div 
            className="absolute -top-[10%] md:-top-[15%] -left-[10%] md:-left-[5%] w-[320px] h-[160px] z-10 animate-float rotate-[-5deg]"
            style={{ filter: "drop-shadow(2px 0 0 #22241a) drop-shadow(0 2px 0 #22241a) drop-shadow(-2px 0 0 #22241a) drop-shadow(0 -2px 0 #22241a) drop-shadow(4px 4px 0 rgba(0,0,0,1))" }}
          >
            {/* Ellipse Shape */}
            <div className="absolute inset-0 bg-white rounded-[50%]"></div>
            
            {/* Text */}
            <div className="absolute inset-0 flex items-center justify-center px-[45px]">
              <div className="relative z-10 text-[#2a2a2a] text-[15px] md:text-[17px] font-kalam font-bold text-left leading-snug">
                Holy Moly! I am sitting on the top of :<br/>
                - A Fullstack and DevOps Engineer<br/>
                - who is learning AI/ML
              </div>
            </div>

            {/* Trailing bubbles pointing towards dog */}
            <div className="absolute top-[140px] left-[230px] w-[20px] h-[20px] bg-white rounded-full"></div>
            <div className="absolute top-[155px] left-[245px] w-[10px] h-[10px] bg-white rounded-full"></div>
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
