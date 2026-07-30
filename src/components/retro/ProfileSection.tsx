"use client";

import React from 'react';
import { RetroWindow } from './RetroWindow';
import { motion } from 'framer-motion';

export function ProfileSection() {
  return (
    <div className="scroll-mt-[80px] md:scroll-mt-[100px] min-h-screen flex items-center justify-center py-[90px] px-[24px] md:px-[150px] relative overflow-hidden" id="profile-section">
      <span className="absolute top-[40px] left-1/2 -translate-x-1/2 text-[13px] md:text-[16px] tracking-[.3em] uppercase text-[#6b6a56]">
        01 · about
      </span>
      
      {/* Boo hidden behind the note */}
      <img 
        src="/boo.png" 
        alt="Boo" 
        className="absolute z-0 w-[150px] md:w-[220px] h-auto object-contain pointer-events-none select-none"
      />
      
      <motion.div 
        className="relative z-10 w-full max-w-[620px] aspect-[1.2] flex items-center justify-center p-[30px] md:p-[50px] cursor-grab active:cursor-grabbing"
        drag
        dragSnapToOrigin={true}
        dragElastic={0.6}
        dragTransition={{ bounceStiffness: 400, bounceDamping: 15 }}
        whileHover={{ scale: 1.02 }}
        whileDrag={{ scale: 1.05, zIndex: 50, rotate: 2 }}
      >
        {/* Sticky Note Background */}
        <img 
          src="/about-note.png" 
          alt="Sticky Note" 
          className="absolute inset-0 w-full h-full object-fill z-0 drop-shadow-xl pointer-events-none"
        />
        
        {/* Content */}
        <div className="relative z-10 text-left w-full h-full pt-[30px] md:pt-[50px] px-[10px]">
          <h2 className="font-fraunces text-center text-[32px] md:text-[36px] font-semibold text-[#df7a3e] m-0 mb-3 leading-[1.15]">
            About me
          </h2>
          <div className="font-kalam text-[15px] md:text-[17px] text-[#3f3f2e] leading-[1.4] m-0 font-medium pl-[30px] md:pl-[50px]">
            I am a passionate Software and DevOps Engineer with a strong foundation in Computer Science. I specialize in building scalable web applications, designing cloud-native infrastructures, and developing efficient, production-ready solutions. With experience in AI/ML, I enjoy solving complex real-world problems through intelligent systems and clean, maintainable code. I am always eager to learn emerging technologies, embrace new challenges, and create impactful software that delivers exceptional user experiences.
          </div>
        </div>
      </motion.div>
    </div>
  );
}
