"use client";

import React, { useRef, useState, useEffect } from "react";
import anime from "animejs";
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

const Page = React.forwardRef<
  HTMLDivElement,
  {
    index: number;
    totalPages: number;
    children: React.ReactNode;
  }
>(({ index, totalPages, children }, ref) => {
  const isCover = index === 0;
  const isLastPage = index === totalPages - 1;

  return (
    <div
      ref={ref}
      className="absolute top-0 left-0 w-full h-full origin-left"
      style={{
        transformStyle: "preserve-3d",
        zIndex: totalPages - index, // Initial stack order
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
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/black-paper.png')] opacity-80 mix-blend-multiply rounded-r-2xl pointer-events-none z-0"></div>
        ) : (
          <>
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-0 mix-blend-multiply" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>
            <div className="absolute inset-0 pointer-events-none opacity-10 z-0" style={{ backgroundImage: "linear-gradient(#000 1px, transparent 1px)", backgroundSize: "100% 2.5rem" }}></div>
          </>
        )}

        {/* Dynamic lighting overlay for animejs to target */}
        {!isLastPage && (
          <div 
            className="light-overlay absolute inset-0 pointer-events-none z-[100] mix-blend-overlay"
            style={{
              opacity: 0,
              background: "linear-gradient(to right, transparent, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 55%, transparent)",
              backgroundPosition: "100% 0",
              backgroundSize: "200% 100%"
            }}
          />
        )}

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
    </div>
  );
});

Page.displayName = "Page";

export function Notebook({ 
  scrollProgress, 
  totalPages 
}: { 
  scrollProgress: number; 
  totalPages: number;
}) {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const pageRefs = useRef<(HTMLDivElement | null)[]>([]);
  const timelineRef = useRef<anime.AnimeTimelineInstance | null>(null);

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

  // Initialize Anime.js timeline
  useEffect(() => {
    // Create a master timeline that is paused.
    // It will be scrubbed manually by scrollProgress.
    const tl = anime.timeline({
      autoplay: false,
      duration: (totalPages - 1) * 1000,
      easing: 'linear'
    });

    pageRefs.current.forEach((page, index) => {
      if (!page || index === totalPages - 1) return; // Skip last page

      const startTime = index * 1000;

      // 1. Rotate the page linearly over 1000ms
      tl.add({
        targets: page,
        rotateY: [0, -180],
        duration: 1000,
        easing: 'linear'
      }, startTime);

      // 2. Add an arching translateZ for optical paper bend
      tl.add({
        targets: page,
        translateZ: [
          { value: 150, duration: 500, easing: 'easeOutSine' },
          { value: 0, duration: 500, easing: 'easeInSine' }
        ]
      }, startTime);

      // 3. Z-Index swap at exactly 50% of the flip to prevent Z-fighting
      tl.add({
        targets: page,
        zIndex: [
          { value: totalPages - index, duration: 499, easing: 'linear' },
          { value: index, duration: 1, easing: 'linear' },
          { value: index, duration: 500, easing: 'linear' }
        ]
      }, startTime);

      // 4. Lighting optical illusion overlay
      const overlay = page.querySelector('.light-overlay');
      if (overlay) {
        tl.add({
          targets: overlay,
          opacity: [
            { value: 0.3, duration: 500, easing: 'easeOutSine' },
            { value: 0, duration: 500, easing: 'easeInSine' }
          ]
        }, startTime);

        // We can use transform translateX to sweep the gradient instead of backgroundPosition to be safe with animejs
        tl.add({
          targets: overlay,
          backgroundPosition: ['100% 0%', '-100% 0%'],
          duration: 1000,
          easing: 'linear'
        }, startTime);
      }
    });

    timelineRef.current = tl;

    return () => {
      tl.pause();
    };
  }, [totalPages]);

  // Scrub the timeline when scrollProgress changes
  useEffect(() => {
    if (timelineRef.current) {
      timelineRef.current.seek(timelineRef.current.duration * scrollProgress);
    }
  }, [scrollProgress]);

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
        width: dimensions.width * 2,
        height: dimensions.height,
        maxWidth: "1600px",
        marginLeft: `calc(50vw - ${dimensions.width}px)`
      }}
    >
      <div 
        className="relative right-0"
        style={{
          width: dimensions.width,
          height: dimensions.height,
          transformStyle: "preserve-3d"
        }}
      >
        {/* Notebook Backings */}
        <div className="absolute top-0 bottom-0 left-0 right-0 bg-[#1a1a1a] rounded-r-3xl shadow-[25px_25px_70px_rgba(0,0,0,0.9)] z-0">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/black-paper.png')] opacity-80 mix-blend-multiply"></div>
        </div>
        <div className="absolute top-0 bottom-0 right-full w-full bg-[#1a1a1a] rounded-l-3xl shadow-[-25px_25px_70px_rgba(0,0,0,0.9)] z-0">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/black-paper.png')] opacity-80 mix-blend-multiply"></div>
        </div>

        {/* Spiral Binding */}
        <div className="absolute top-1 bottom-1 left-0 w-2 z-[999] pointer-events-none">
          {spiralRings}
        </div>

        {/* Pages */}
        {pages.map((PageComponent, index) => (
          <Page 
            key={index}
            index={index} 
            totalPages={totalPages} 
            ref={(el) => {
              pageRefs.current[index] = el;
            }}
          >
            <PageComponent />
          </Page>
        ))}
      </div>
    </div>
  );
}
