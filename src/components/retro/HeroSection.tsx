"use client";

import React from 'react';

export function HeroSection() {
  return (
    <>
      <section id="hero-section" className="scroll-mt-[80px] md:scroll-mt-[100px] min-h-screen relative flex items-center overflow-hidden bg-[#fdfdfd]">
        
        {/* Left Content */}
        <div className="flex flex-col text-left px-[24px] md:px-[8%] pt-[20px] md:pt-[0px] relative z-10 w-full md:w-3/5">
          <h1 className="text-[#e0e0e0] font-sans font-extrabold text-[56px] md:text-[85px] lg:text-[110px] tracking-tight m-0 leading-[1.05]">
            hello,<br/>
            my name is
          </h1>
          <h2 className="text-[#f11a1a] font-sans font-extrabold text-[56px] md:text-[85px] lg:text-[110px] tracking-tight m-0 leading-[1.05] mt-1 md:mt-2">
            karman<span className="text-[#e0e0e0] text-[40px] md:text-[60px] lg:text-[80px] px-[8px] font-bold">x</span>singh.
          </h2>
          
          <div className="mt-8 md:mt-12 text-[#5a5a5a] max-w-sm ml-[10px] md:ml-[30px] lg:ml-[110px] text-[13px] md:text-[14px] leading-[1.7] font-sans font-medium">
            <p className="mb-5">
              I am a DevOps Engineer, a Software Engineer, and a Machine Learning enthusiast.
            </p>
            <p>
              I love building robust systems and daydreaming about scalable architectures, with occasional habits of exploring new tech and automating everything.
            </p>
          </div>
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
      <div className="w-full flex justify-center py-[40px] relative z-20 overflow-hidden bg-[#fdfdfd]">
        <img 
          src="/plane.png" 
          alt="Separator" 
          className="w-[200px] md:w-[350px] h-auto object-contain pointer-events-none opacity-70 mix-blend-multiply" 
        />
      </div>
    </>
  );
}
