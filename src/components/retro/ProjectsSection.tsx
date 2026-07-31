"use client";

import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Code } from 'lucide-react';
import Image from 'next/image';

const projects = [
  {
    title: "MindMate",
    summary: "AI mental wellness platform with sentiment analysis and mood tracking.",
    github: "https://github.com/tkarman-singh/MindMate",
    classes: "left-1/2 -ml-[130px] md:left-[20%] md:ml-0 top-[40px] md:top-[10px] z-[11]",
    color: "bg-[#fdfdfd]",
    rotation: -4,
  },
  {
    title: "Coming Soon",
    summary: "More exciting projects are in the works and coming soon!",
    github: "#",
    classes: "left-1/2 -ml-[130px] md:left-[55%] md:ml-0 top-[20px] md:top-[5px] z-[12]",
    color: "bg-[#fff5e6]",
    rotation: 3,
  }
];

export function ProjectsSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section className="scroll-mt-[80px] md:scroll-mt-[100px] min-h-screen flex flex-col items-center justify-center py-[90px] px-[24px] md:px-[60px] relative" id="projects-section">
      <span className="absolute top-[40px] left-1/2 -translate-x-1/2 text-[13px] md:text-[16px] tracking-[.3em] uppercase text-[#6b6a56]">
        04 · projects
      </span>

      {/* Top Left Decoration (13) */}
      <Image 
        src="/13.png" 
        alt="Decoration" 
        width={300}
        height={300}
        className="absolute top-[5%] md:top-[8%] left-[5%] md:left-[10%] w-[180px] md:w-[320px] h-auto object-contain pointer-events-none select-none z-0 drop-shadow-sm rotate-[30deg]"
      />

      {/* Right Middle Decoration (11) */}
      <Image 
        src="/11.png" 
        alt="Decoration" 
        width={200}
        height={200}
        className="absolute top-[25%] md:top-[30%] right-[2%] md:right-[8%] w-[120px] md:w-[180px] h-auto object-contain pointer-events-none select-none z-0 drop-shadow-sm"
      />

      {/* Bottom Right Decoration (10) */}
      <Image 
        src="/10.png" 
        alt="Decoration" 
        width={250}
        height={250}
        className="absolute bottom-[10%] md:bottom-[15%] right-[2%] md:right-[10%] w-[160px] md:w-[250px] h-auto object-contain pointer-events-none select-none z-[25] drop-shadow-sm"
      />

      {/* Bottom Left Decoration (12) */}
      <Image 
        src="/12.png" 
        alt="Decoration" 
        width={300}
        height={300}
        className="absolute bottom-[5%] md:bottom-[10%] left-[2%] md:left-[5%] w-[160px] md:w-[280px] h-auto object-contain pointer-events-none select-none z-0 drop-shadow-sm"
      />
      
      {/* Large bounding box for drag constraints so you can pull the cards anywhere nearby */}
      <div className="w-full max-w-[1200px] h-[600px] mt-[40px] flex items-center justify-center relative pointer-events-none" ref={containerRef}>
        
        {/* Envelope Container */}
        <div className="w-full max-w-[950px] h-[380px] relative mt-[100px]">
          
          {/* Back of Envelope */}
          <div className="absolute bottom-0 left-0 w-full h-[240px] bg-[#611d73] rounded-[16px] opacity-60 shadow-inner z-0 border-[2px] border-[#22241a]"></div>

          {/* Cards Container */}
          <div className="absolute inset-0 z-10 w-full h-full pointer-events-none">
            {projects.map((project, idx) => (
              <motion.div 
                key={idx}
                drag
                dragConstraints={{ top: -600, bottom: 0, left: -300, right: 300 }}
                dragElastic={0}
                dragMomentum={false}
                whileDrag={{ scale: 1.05, zIndex: 50, cursor: 'grabbing' }}
                whileHover={{ scale: 1.02 }}
                initial={{ rotate: project.rotation }}
                className={`pointer-events-auto absolute ${project.classes} ${project.color} w-[260px] h-[320px] border-[2px] border-[#22241a] rounded-[16px] p-[20px] flex flex-col shadow-[4px_4px_0_rgba(0,0,0,1)] cursor-grab`}
              >
                {/* Top Section sticking out */}
                <div className="h-[120px] flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <h3 className="font-sans font-bold text-[#d351f7] text-[20px] leading-[1.2]">
                      {project.title}
                    </h3>
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-[#2a2a2a] hover:text-[#df7a3e] transition-colors p-[4px]"
                      // Stop propagation so clicking the link doesn't trigger framer-motion drag
                      onPointerDown={(e) => e.stopPropagation()}
                    >
                      <Code size={22} />
                    </a>
                  </div>
                  
                  {/* Decorator line or badge to make it look like a project ticket */}
                  <div className="w-full border-b-[2px] border-dashed border-[#22241a]/20 pb-2"></div>
                </div>

                {/* Bottom Section hidden in the pocket */}
                <div className="flex-grow flex items-center justify-center pointer-events-none">
                  <p className="font-kalam text-[#5a5a5a] text-[18px] leading-[1.4] text-center font-medium">
                    {project.summary}
                  </p>
                </div>

                {/* Bottom decorative elements */}
                <div className="flex justify-between items-center mt-auto pointer-events-none">
                  <span className="text-[10px] font-sans font-bold text-[#2a2a2a]/40 tracking-wider">CONFIDENTIAL</span>
                  <div className="w-[30px] h-[30px] rounded-full border-[2px] border-[#22241a]/10 flex items-center justify-center">
                    <div className="w-[10px] h-[10px] bg-[#d351f7]/20 rounded-full"></div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Front of Envelope (The Pocket) */}
          <div className="absolute bottom-0 left-0 w-full h-[220px] bg-[#9b2caa] rounded-b-[16px] rounded-t-[4px] z-20 shadow-[0_-8px_20px_rgba(0,0,0,0.15)] border-[2px] border-[#22241a] flex items-center justify-center pointer-events-none">
            {/* Stitched inner border */}
            <div className="absolute inset-[10px] border-[2px] border-dashed border-[#d351f7] rounded-b-[10px] rounded-t-[2px]"></div>
            
            <h2 className="font-great-vibes text-[#fdf9f1] text-[60px] md:text-[80px] opacity-90 -rotate-2 select-none tracking-wide">
              Ciao
            </h2>
          </div>

        </div>
      </div>
    </section>
  );
}
