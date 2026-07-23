"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useTransform, MotionValue } from "framer-motion";
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
  EducationPage,
  ExperiencePage,
  ProjectsPage,
  LeadershipPage,
  ContactPage,
  FooterPage,
];

const Page = ({ 
  index, 
  totalPages, 
  scrollYProgress, 
  children 
}: { 
  index: number; 
  totalPages: number; 
  scrollYProgress: MotionValue<number>;
  children: React.ReactNode;
}) => {
  const isCover = index === 0;
  const step = 1 / (totalPages - 1);
  const start = index * step;
  const mid = start + step / 2;
  const end = start + step;

  const isLastPage = index === totalPages - 1;

  // WAAPI requires offsets to be in the [0, 1] range. 
  // The last page never flips, so we feed it dummy [0, 1] bounds with 0 movement.
  const safeStart = isLastPage ? 0 : start;
  const safeMid = isLastPage ? 0.5 : mid;
  const safeEnd = isLastPage ? 1 : end;

  const rotateY = useTransform(
    scrollYProgress, 
    [safeStart, safeEnd], 
    isLastPage ? [0, 0] : [0, -180]
  );
  
  // Lifting arc to simulate paper bending towards the camera
  const translateZ = useTransform(
    scrollYProgress, 
    [safeStart, safeMid, safeEnd], 
    isLastPage ? [0, 0, 0] : [0, 150, 0]
  );

  // Lighting overlay to simulate the curve of the paper catching light
  const lightOpacity = useTransform(
    scrollYProgress, 
    [safeStart, safeMid, safeEnd], 
    isLastPage ? [0, 0, 0] : [0, 0.3, 0]
  );
  const lightPosition = useTransform(
    scrollYProgress, 
    [safeStart, safeEnd], 
    isLastPage ? ["100%", "100%"] : ["100%", "-100%"]
  );

  const zIndexFloat = useTransform(
    scrollYProgress,
    isLastPage ? [0, 0.5, 1] : [0, safeMid - 0.0001, safeMid, 1],
    isLastPage ? [1, 1, 1] : [totalPages - index, totalPages - index, index, index]
  );
  const zIndex = useTransform(zIndexFloat, (val) => Math.round(val));

  return (
    <motion.div
      className="absolute top-0 left-0 w-full h-full origin-left"
      style={{
        rotateY,
        translateZ,
        zIndex,
        transformStyle: "preserve-3d",
      }}
    >
      {/* FRONT OF PAGE */}
      <div 
        className={`absolute inset-0 flex flex-col shadow-[-5px_0_15px_rgba(0,0,0,0.1)] ${
          isCover 
            ? "bg-[#1a1a1a] rounded-r-2xl border-2 border-black/30" 
            : "bg-[#F9F6EE] border-r border-y border-black/10"
        }`}
        style={{ backfaceVisibility: "hidden" }}
      >
        {isCover ? (
          // Hard cover texture
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/black-paper.png')] opacity-80 mix-blend-multiply rounded-r-2xl pointer-events-none z-0"></div>
        ) : (
          <>
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-0 mix-blend-multiply" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>
            <div className="absolute inset-0 pointer-events-none opacity-10 z-0" style={{ backgroundImage: "linear-gradient(#000 1px, transparent 1px)", backgroundSize: "100% 2.5rem" }}></div>
          </>
        )}

        {/* Dynamic lighting for optical curl illusion */}
        <motion.div 
          className="absolute inset-0 pointer-events-none z-[100] mix-blend-overlay"
          style={{
            opacity: lightOpacity,
            background: "linear-gradient(to right, transparent, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 55%, transparent)",
            backgroundPosition: lightPosition,
            backgroundSize: "200% 100%"
          }}
        />

        {/* Content Area */}
        <div className={`relative w-full h-full p-8 md:p-14 pl-12 md:pl-20 overflow-y-auto overflow-x-hidden custom-scrollbar z-10 ${isCover ? "text-white" : ""}`}>
          {children}
        </div>
        
        {/* Page Number */}
        {!isCover && (
          <div className="absolute bottom-4 right-6 font-playfair text-black/40 text-sm z-20">
            {index + 1}
          </div>
        )}
      </div>

      {/* BACK OF PAGE */}
      <div 
        className={`absolute inset-0 flex flex-col shadow-[5px_0_15px_rgba(0,0,0,0.1)] ${
          isCover 
            ? "bg-[#1a1a1a] rounded-l-2xl border-2 border-black/30" 
            : "bg-[#F4F1E8] border-l border-y border-black/10"
        }`}
        style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
      >
        {isCover ? (
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/black-paper.png')] opacity-80 mix-blend-multiply rounded-l-2xl pointer-events-none z-0"></div>
        ) : (
          <>
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-0 mix-blend-multiply" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>
            <div className="absolute inset-0 pointer-events-none opacity-10 z-0" style={{ backgroundImage: "linear-gradient(#000 1px, transparent 1px)", backgroundSize: "100% 2.5rem" }}></div>
          </>
        )}
      </div>
    </motion.div>
  );
};

export function Notebook({ 
  scrollYProgress, 
  totalPages 
}: { 
  scrollYProgress: MotionValue<number>; 
  totalPages: number;
}) {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  // Handle responsive dimensions for the canvas
  useEffect(() => {
    const updateDimensions = () => {
      const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
      const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
      
      const targetWidth = Math.min(vw * 0.9, 800);
      const targetHeight = Math.min(vh * 0.85, 1200);
      
      setDimensions({ width: targetWidth, height: targetHeight });
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  // 3D Spiral Rings
  const spiralRings = Array.from({ length: 24 }).map((_, i) => (
    <div key={`ring-${i}`} className="w-8 md:w-12 h-4 rounded-full absolute -left-4 md:-left-6 border-[3px] border-gray-400 bg-gradient-to-b from-gray-200 via-gray-400 to-gray-600 shadow-[0_2px_8px_rgba(0,0,0,0.6)] z-[999]" style={{ top: `${(i * 100) / 24 + 1.2}%` }}></div>
  ));

  if (dimensions.width === 0) return null;

  return (
    <div 
      className="relative flex justify-end items-center" 
      style={{ 
        perspective: "2500px", 
        width: dimensions.width * 2, // Container is exactly 2 pages wide
        height: dimensions.height,
        maxWidth: "1600px",
        marginLeft: `calc(50vw - ${dimensions.width}px)` // Keeps the notebook centered horizontally
      }}
    >
      
      {/* 
        The actual book structure sits on the right half of the container. 
        When pages flip, they rotate into the left half of the container. 
      */}
      <div 
        className="relative right-0"
        style={{
          width: dimensions.width,
          height: dimensions.height,
          transformStyle: "preserve-3d"
        }}
      >
        
        {/* Notebook Poly Cover Backing (Right Side) */}
        <div className="absolute top-0 bottom-0 left-0 right-0 bg-[#1a1a1a] rounded-r-3xl shadow-[25px_25px_70px_rgba(0,0,0,0.9)] z-0">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/black-paper.png')] opacity-80 mix-blend-multiply"></div>
        </div>

        {/* Notebook Poly Cover Backing (Left Side) */}
        <div className="absolute top-0 bottom-0 right-full w-full bg-[#1a1a1a] rounded-l-3xl shadow-[-25px_25px_70px_rgba(0,0,0,0.9)] z-0">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/black-paper.png')] opacity-80 mix-blend-multiply"></div>
        </div>

        {/* The Spiral Binding perfectly down the center (Left edge of the right page) */}
        <div className="absolute top-1 bottom-1 left-0 w-2 z-[999] pointer-events-none">
          {spiralRings}
        </div>

        {/* The Pages (Mapped precisely to scroll progress) */}
        {pages.map((PageComponent, index) => (
          <Page 
            key={index} 
            index={index} 
            totalPages={totalPages} 
            scrollYProgress={scrollYProgress}
          >
            <PageComponent />
          </Page>
        ))}
        
      </div>
    </div>
  );
}
