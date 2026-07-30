"use client";

import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  "React / Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Framer Motion",
  "Node.js",
  "Python",
  "Java",
  "PostgreSQL",
  "Git / GitHub",
  "Docker",
  "AWS",
  "Linux"
];

const tabs = ['03', '04', '05', '06', '07', '08', '09'];

export function TechStackSection() {
  return (
    <section className="scroll-mt-[80px] md:scroll-mt-[100px] min-h-screen flex flex-col items-center justify-center py-[90px] px-[24px] md:px-[60px] relative" id="tech-stack-section">
      <span className="absolute top-[40px] left-1/2 -translate-x-1/2 text-[13px] md:text-[16px] tracking-[.3em] uppercase text-[#6b6a56]">
        02 · tech stack
      </span>
      
      <motion.div 
        className="w-full max-w-[700px] mt-[80px] relative aspect-[3/4] md:aspect-[4/5] mx-auto cursor-default"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
      >
        {/* Back White Paper */}
        <div className="absolute inset-[-10px] md:inset-[-20px] bg-white shadow-2xl rotate-[-3deg] rounded-sm z-0" />
        
        {/* Yellow Folder */}
        <div className="absolute inset-0 bg-[#e8ce90] shadow-lg rounded-sm z-10">
          {/* Tabs */}
          <div className="absolute top-[-25px] right-[10%] flex gap-[4px] md:gap-[6px]">
            {tabs.map((tab) => (
              <div 
                key={tab} 
                className="bg-[#e8ce90] w-[35px] md:w-[45px] h-[30px] rounded-t-[4px] flex flex-col items-center justify-end pb-1 text-[10px] md:text-[11px] font-mono text-[#3a3a3a]"
                style={{
                  clipPath: 'polygon(15% 0, 85% 0, 100% 100%, 0% 100%)'
                }}
              >
                {tab}
              </div>
            ))}
          </div>
        </div>

        {/* Front Grid Paper */}
        <div className="absolute inset-4 md:inset-6 bg-[#f8f9fa] shadow-md z-20 rounded-sm overflow-hidden flex flex-col">
          {/* Grid Background */}
          <div className="absolute inset-0 pointer-events-none opacity-[0.5]" style={{ backgroundImage: 'linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
          
          {/* Paperclip */}
          <svg width="40" height="90" viewBox="0 0 40 90" fill="none" stroke="#999" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="absolute top-[-5px] right-[30px] md:right-[50px] z-30 drop-shadow-sm pointer-events-none">
            <path d="M20 70 V20 A10 10 0 0 0 0 20 V65 A6 6 0 0 0 12 65 V25 A2 2 0 0 0 8 25 V60" transform="translate(10, 0)" />
          </svg>

          {/* Tape at Bottom */}
          <div className="absolute bottom-[-15px] left-1/2 -translate-x-1/2 w-[120px] h-[35px] bg-white/40 backdrop-blur-[2px] shadow-sm rotate-2 z-30 border border-white/50" style={{ clipPath: 'polygon(2% 0, 98% 2%, 100% 100%, 0 98%)' }} />

          {/* Content */}
          <div className="relative z-10 p-[30px] md:p-[50px] flex-1 overflow-y-auto">
            <h2 className="text-[28px] md:text-[36px] font-bold text-[#1a1a1a] mb-4 tracking-tight lowercase">
              technical stack
            </h2>
            <p className="text-[14px] md:text-[16px] text-[#4a4a4a] mb-10 max-w-[95%] leading-[1.6]">
              Next was architecture, where we blended reliable engineering with modern design. Rooted in clean code and efficient databases, but balanced with dynamic frameworks and robust deployment:
            </p>

            {/* Skills Pills */}
            <div className="flex flex-wrap gap-[12px] md:gap-[16px] justify-center md:justify-start">
              {skills.map((skill) => (
                <div 
                  key={skill} 
                  className="px-[16px] py-[8px] md:px-[24px] md:py-[10px] border-[1.5px] border-[#2a2a2a] rounded-[24px] text-[11px] md:text-[13px] tracking-[0.15em] uppercase font-mono text-[#2a2a2a] hover:bg-[#2a2a2a] hover:text-white transition-colors cursor-default bg-transparent"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
