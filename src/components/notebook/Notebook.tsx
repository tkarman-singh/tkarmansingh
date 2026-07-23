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

  // Execute flip animations when currentPage changes
  useEffect(() => {
    pagesRef.current.forEach((pageEl, index) => {
      if (!pageEl) return;
      
      // If index < currentPage, the page should be flipped over to the left (-180deg)
      // If index == currentPage, the page is currently visible (0deg)
      // If index > currentPage, the page is underneath (0deg)
      
      const isFlipped = index < currentPage;
      
      anime({
        targets: pageEl,
        rotateY: isFlipped ? -180 : 0,
        // Add slight Z translation to prevent z-fighting when stacked
        translateZ: isFlipped ? index : -index,
        duration: 1200,
        easing: "easeOutQuart",
      });
    });
  }, [currentPage]);

  return (
    <div 
      ref={notebookRef}
      className="relative w-[90vw] h-[85vh] max-w-[500px] md:max-w-[1000px] rounded-r-3xl rounded-l-md shadow-2xl"
      style={{ perspective: "2000px" }}
    >
      {/* Leather Cover Backing */}
      <div className="absolute inset-0 bg-[#3E2723] rounded-r-3xl rounded-l-md shadow-[20px_20px_60px_rgba(0,0,0,0.8)] border-l-8 border-[#2d1b18] z-0">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/leather.png')] opacity-50 mix-blend-multiply"></div>
      </div>

      {/* Pages Container */}
      <div 
        className="absolute inset-2 md:inset-4 left-4 md:left-6 rounded-r-2xl bg-transparent"
        style={{ transformStyle: "preserve-3d" }}
      >
        {pages.map((PageComponent, index) => (
          <div
            key={index}
            ref={(el) => { pagesRef.current[index] = el; }}
            className="absolute inset-0 origin-left bg-[#F9F6EE] rounded-r-2xl border-l border-black/10 shadow-[-5px_0_15px_rgba(0,0,0,0.1)] backface-hidden flex overflow-hidden"
            style={{ 
              zIndex: totalPages - index,
              // Initial state
              transform: `rotateY(${index < currentPage ? -180 : 0}deg) translateZ(${-index}px)`,
              backfaceVisibility: "hidden" 
            }}
          >
            {/* Paper texture overlay */}
            <div className="absolute inset-0 pointer-events-none opacity-40 mix-blend-multiply bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')]"></div>
            
            {/* Ruled lines (optional, can be applied per page, but notebook-wide is nice) */}
            <div className="absolute inset-0 pointer-events-none opacity-10" style={{ backgroundImage: "linear-gradient(#000 1px, transparent 1px)", backgroundSize: "100% 2rem" }}></div>

            {/* Left Binding / Shadow Gradient */}
            <div className="absolute top-0 bottom-0 left-0 w-8 bg-gradient-to-r from-black/20 to-transparent pointer-events-none z-50"></div>

            {/* Content Area */}
            <div className="relative z-10 w-full h-full p-8 md:p-12 overflow-y-auto overflow-x-hidden notebook-scroll">
              <PageComponent />
            </div>
            
            {/* Page Number */}
            <div className="absolute bottom-4 right-6 font-playfair text-black/40 text-sm">
              {index + 1}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
