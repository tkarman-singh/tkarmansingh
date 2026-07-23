"use client";

import { useEffect, useRef } from "react";
import anime from "animejs";
import { HeroPage } from "../pages/HeroPage";
import { AboutPage } from "../pages/AboutPage";
import { SkillsPage } from "../pages/SkillsPage";
import { ExperiencePage } from "../pages/ExperiencePage";
import { ProjectsPage } from "../pages/ProjectsPage";
import { EducationPage } from "../pages/EducationPage";
import { CertificationsPage } from "../pages/CertificationsPage";
import { ContactPage } from "../pages/ContactPage";
import { FooterPage } from "../pages/FooterPage";

const pages = [
  HeroPage,
  AboutPage,
  SkillsPage,
  ExperiencePage,
  ProjectsPage,
  EducationPage,
  CertificationsPage,
  ContactPage,
  FooterPage,
];

export function Notebook({ currentPage, totalPages }: { currentPage: number, totalPages: number }) {
  const notebookRef = useRef<HTMLDivElement>(null);
  const pagesRef = useRef<(HTMLDivElement | null)[]>([]);
  const shadowsRef = useRef<(HTMLDivElement | null)[]>([]);

  // Execute realistic page flip animations when currentPage changes
  useEffect(() => {
    pagesRef.current.forEach((pageEl, index) => {
      if (!pageEl) return;
      
      const isFlipped = index < currentPage;
      const isCurrentFlipping = index === currentPage - 1 || index === currentPage;

      // Realistic flip animation using Anime.js
      if (isCurrentFlipping) {
        anime({
          targets: pageEl,
          rotateY: isFlipped ? -180 : 0,
          // Slight twist to fake a paper curl as it moves through the middle
          rotateX: isFlipped ? [0, 5, 0] : [0, -5, 0],
          translateZ: isFlipped ? index : -index,
          duration: 1200,
          easing: "easeOutSine",
        });

        // Animate the shadow overlay to simulate lighting changes during the curl
        const shadowEl = shadowsRef.current[index];
        if (shadowEl) {
          anime({
            targets: shadowEl,
            opacity: isFlipped ? [0, 0.6, 0] : [0, 0.6, 0],
            duration: 1200,
            easing: "easeInOutSine",
          });
        }
      } else {
        // Instant set for non-flipping pages to ensure correct state if they fast-scroll
        anime.set(pageEl, {
          rotateY: isFlipped ? -180 : 0,
          rotateX: 0,
          translateZ: isFlipped ? index : -index,
        });
      }
    });
  }, [currentPage]);

  // Generate holes for the spiral
  const spiralHoles = Array.from({ length: 24 }).map((_, i) => (
    <div key={i} className="w-4 h-4 bg-black rounded-full shadow-inner absolute left-1" style={{ top: `${(i * 100) / 24 + 1}%` }}></div>
  ));

  // Generate metallic rings for the spiral
  const spiralRings = Array.from({ length: 24 }).map((_, i) => (
    <div key={`ring-${i}`} className="w-8 h-3 rounded-full absolute -left-3 border-[3px] border-gray-400 bg-gradient-to-b from-gray-200 via-gray-400 to-gray-600 shadow-md z-50" style={{ top: `${(i * 100) / 24 + 1.2}%` }}></div>
  ));

  return (
    <div 
      ref={notebookRef}
      className="relative w-[90vw] h-[85vh] max-w-[500px] md:max-w-[1000px] rounded-r-3xl rounded-l-md shadow-2xl ml-4"
      style={{ perspective: "2500px" }}
    >
      {/* Notebook Poly Cover Backing */}
      <div className="absolute inset-0 bg-[#1a1a1a] rounded-r-3xl rounded-l-md shadow-[25px_25px_70px_rgba(0,0,0,0.9)] z-0">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/black-paper.png')] opacity-80 mix-blend-multiply"></div>
      </div>

      {/* Pages Container */}
      <div 
        className="absolute inset-y-1 right-1 left-6 rounded-r-2xl bg-transparent"
        style={{ transformStyle: "preserve-3d" }}
      >
        {pages.map((PageComponent, index) => (
          <div
            key={index}
            ref={(el) => { pagesRef.current[index] = el; }}
            className="absolute inset-0 origin-left bg-[#F9F6EE] rounded-r-2xl border-r border-y border-black/10 shadow-[-5px_0_15px_rgba(0,0,0,0.1)] backface-hidden flex overflow-hidden"
            style={{ 
              zIndex: totalPages - index,
              transform: `rotateY(${index < currentPage ? -180 : 0}deg) translateZ(${-index}px)`,
              backfaceVisibility: "hidden" 
            }}
          >
            {/* Paper texture overlay */}
            <div className="absolute inset-0 pointer-events-none opacity-40 mix-blend-multiply bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')] z-0"></div>
            
            {/* Ruled lines */}
            <div className="absolute inset-0 pointer-events-none opacity-10 z-0" style={{ backgroundImage: "linear-gradient(#000 1px, transparent 1px)", backgroundSize: "100% 2.5rem" }}></div>

            {/* Left Binding Shadow Gradient */}
            <div className="absolute top-0 bottom-0 left-0 w-12 bg-gradient-to-r from-black/20 to-transparent pointer-events-none z-30"></div>

            {/* Punched Holes for Spiral */}
            <div className="absolute top-0 bottom-0 left-0 w-8 z-40">
              {spiralHoles}
            </div>

            {/* Dynamic Flipping Shadow Overlay */}
            <div 
              ref={(el) => { shadowsRef.current[index] = el; }}
              className="absolute inset-0 bg-gradient-to-l from-black/80 via-black/20 to-transparent pointer-events-none opacity-0 z-40"
            ></div>

            {/* Content Area */}
            <div className="relative w-full h-full p-8 md:p-14 pl-12 md:pl-20 overflow-y-auto overflow-x-hidden notebook-scroll z-10">
              <PageComponent />
            </div>
            
            {/* Page Number */}
            <div className="absolute bottom-4 right-6 font-playfair text-black/40 text-sm z-20">
              {index + 1}
            </div>
          </div>
        ))}
      </div>

      {/* 3D Spiral Rings (Attached to Notebook Spine, overlapping pages) */}
      <div className="absolute top-1 bottom-1 left-6 w-4 z-50 pointer-events-none">
        {spiralRings}
      </div>
    </div>
  );
}
