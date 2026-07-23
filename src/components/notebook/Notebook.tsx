"use client";

import React, { useState, useEffect } from "react";
import { HeroPage } from "../pages/HeroPage";
import { AboutPage } from "../pages/AboutPage";
import { SkillsPage } from "../pages/SkillsPage";
import { ExperiencePage } from "../pages/ExperiencePage";
import { ProjectsPage } from "../pages/ProjectsPage";
import { EducationPage } from "../pages/EducationPage";
import { LeadershipPage } from "../pages/LeadershipPage";
import { ContactPage } from "../pages/ContactPage";
import { FooterPage } from "../pages/FooterPage";

const pages = [
  HeroPage,
  AboutPage,
  SkillsPage,
  ExperiencePage,
  ProjectsPage,
  EducationPage,
  LeadershipPage,
  ContactPage,
  FooterPage,
];

export function Notebook({ 
  currentPage
}: { 
  currentPage: number; 
}) {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  // Handle resizing so the notepad stays perfectly bound to the container
  useEffect(() => {
    const updateDimensions = () => {
      // Calculate responsive dimensions based on viewport
      const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
      const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
      
      // Notepad is usually taller than it is wide (e.g. Legal Pad ratio ~ 1:1.3)
      const targetWidth = Math.min(vw * 0.9, 800);
      const targetHeight = Math.min(vh * 0.85, 1050);
      
      setDimensions({ width: targetWidth, height: targetHeight });
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  // Generate top spiral rings
  const spiralRings = Array.from({ length: 30 }).map((_, i) => (
    <div 
      key={`ring-${i}`} 
      className="w-3 md:w-4 h-8 md:h-10 rounded-full absolute -top-4 md:-top-5 border-[3px] border-gray-400 bg-gradient-to-r from-gray-200 via-gray-400 to-gray-600 shadow-[2px_4px_4px_rgba(0,0,0,0.5)] z-50" 
      style={{ left: `${(i * 100) / 30 + 1.5}%` }}
    ></div>
  ));

  // Generate hole punches
  const holes = Array.from({ length: 30 }).map((_, i) => (
    <div 
      key={`hole-${i}`} 
      className="w-4 h-4 md:w-5 md:h-5 rounded-full absolute top-2 bg-[#1a1a1a] shadow-inner z-40 border border-black/20" 
      style={{ left: `${(i * 100) / 30 + 1.2}%` }}
    ></div>
  ));

  if (dimensions.width === 0) return null;

  return (
    <div className="relative flex justify-center items-center h-full w-full mt-8 md:mt-12" style={{ perspective: "2000px" }}>
      
      <div 
        className="relative shadow-[0_30px_60px_rgba(0,0,0,0.8)]"
        style={{ 
          width: dimensions.width, 
          height: dimensions.height,
          transformStyle: "preserve-3d"
        }}
      >
        {/* Notebook Cardboard Backing */}
        <div className="absolute inset-0 bg-[#3a2f26] rounded-b-xl rounded-t-sm shadow-inner z-0 border-x border-b border-black/40">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cardboard.png')] opacity-60 mix-blend-multiply"></div>
          {/* Faux paper stack shadow */}
          <div className="absolute -left-1 -bottom-1 right-0 h-full bg-[#f4ebd0] -z-10 rounded-b-xl border border-black/20"></div>
          <div className="absolute -left-2 -bottom-2 right-0 h-full bg-[#ebdcb5] -z-20 rounded-b-xl border border-black/20"></div>
        </div>

        {/* 3D Top Spiral Rings */}
        <div className="absolute left-0 right-0 top-0 h-0 z-50 pointer-events-none">
          {spiralRings}
        </div>

        {/* The Pages */}
        {pages.map((PageComponent, index) => {
          // Determine state of the page
          const isFlipped = index < currentPage;
          const isActive = index === currentPage;
          
          // Z-index: Active page is highest below flipped pages. Flipped pages have highest Z to animate over.
          // Underneath pages have decreasing Z.
          let zIndex = 100 - index;
          if (isFlipped) zIndex = 200 + index; 

          return (
            <div
              key={index}
              className={`absolute inset-0 bg-[#Fdfbf5] rounded-b-lg border-x border-b border-black/10 flex flex-col origin-top transition-all duration-700 ease-[cubic-bezier(0.2,0.8,0.2,1)]`}
              style={{
                zIndex,
                transform: isFlipped ? "rotateX(140deg)" : "rotateX(0deg)",
                opacity: isFlipped ? 0 : 1,
                pointerEvents: isActive ? "auto" : "none",
                backfaceVisibility: "hidden"
              }}
            >
              {/* Hole punches inside the paper */}
              <div className="absolute left-0 right-0 top-0 h-8 pointer-events-none">
                {holes}
              </div>

              {/* High-quality SVG Noise Texture */}
              <div 
                className="absolute inset-0 opacity-[0.03] pointer-events-none z-0 mix-blend-multiply" 
                style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
              ></div>

              {/* Notepad Ruled lines - yellow legal pad style */}
              <div 
                className="absolute inset-0 pointer-events-none opacity-20 z-0" 
                style={{ 
                  backgroundImage: "linear-gradient(#000 1px, transparent 1px)", 
                  backgroundSize: "100% 2.5rem",
                  backgroundPosition: "0 4rem" 
                }}
              ></div>
              
              {/* Red vertical margin line typical of legal pads */}
              <div className="absolute top-0 bottom-0 left-12 md:left-20 w-px bg-red-500/30 z-0 pointer-events-none"></div>
              <div className="absolute top-0 bottom-0 left-[3.25rem] md:left-[5.25rem] w-px bg-red-500/30 z-0 pointer-events-none"></div>

              {/* Content Area */}
              <div className="relative w-full h-full pt-16 md:pt-20 pb-8 px-6 md:px-10 pl-16 md:pl-28 overflow-y-auto overflow-x-hidden notebook-scroll z-10">
                <PageComponent />
              </div>
              
              {/* Page Number */}
              <div className="absolute bottom-4 right-6 font-playfair text-black/40 text-sm z-20">
                {index + 1}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
