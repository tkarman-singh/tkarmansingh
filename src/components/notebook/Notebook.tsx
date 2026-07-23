"use client";

import React, { useRef, useState, useEffect } from "react";
import HTMLFlipBook from "react-pageflip";
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

// Page component wrapped in forwardRef for HTMLFlipBook
const Page = React.forwardRef<HTMLDivElement, { number: number; children: React.ReactNode }>((props, ref) => {
  return (
    <div className="page" ref={ref} data-density="soft">
      {/* Notebook Paper Styling */}
      <div className="absolute inset-0 bg-[#F9F6EE] border-r border-y border-black/10 overflow-hidden shadow-inner flex flex-col">
        
        {/* High-quality SVG Noise Texture */}
        <div 
          className="absolute inset-0 opacity-[0.03] pointer-events-none z-0 mix-blend-multiply" 
          style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
        ></div>

        {/* Ruled lines */}
        <div className="absolute inset-0 pointer-events-none opacity-10 z-0" style={{ backgroundImage: "linear-gradient(#000 1px, transparent 1px)", backgroundSize: "100% 2.5rem" }}></div>

        {/* Content Area */}
        <div className="relative w-full h-full p-8 md:p-14 pl-12 md:pl-20 overflow-y-auto overflow-x-hidden notebook-scroll z-10">
          {props.children}
        </div>
        
        {/* Page Number */}
        <div className="absolute bottom-4 right-6 font-playfair text-black/40 text-sm z-20">
          {props.number}
        </div>
      </div>
    </div>
  );
});

Page.displayName = "Page";

export function Notebook({ 
  currentPage, 
  totalPages,
  onPageChange
}: { 
  currentPage: number; 
  totalPages: number;
  onPageChange: (page: number) => void;
}) {
  const bookRef = useRef<any>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  // Handle resizing so the flipbook stays perfectly bound to the container
  useEffect(() => {
    const updateDimensions = () => {
      // Calculate responsive dimensions based on viewport
      const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
      const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
      
      // Limit max width and max height similar to previous CSS implementation
      const targetWidth = Math.min(vw * 0.9, 1000);
      const targetHeight = Math.min(vh * 0.85, 1200);
      
      setDimensions({ width: targetWidth, height: targetHeight });
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  // Sync external page state with flipbook
  useEffect(() => {
    if (bookRef.current && bookRef.current.pageFlip()) {
      const flipbook = bookRef.current.pageFlip();
      const currentBookPage = flipbook.getCurrentPageIndex();
      
      if (currentBookPage !== currentPage) {
        flipbook.flip(currentPage);
      }
    }
  }, [currentPage]);

  // Generate rings for the spiral (now placed absolutely OUTSIDE the pages so they don't get distorted during flip)
  const spiralRings = Array.from({ length: 24 }).map((_, i) => (
    <div key={`ring-${i}`} className="w-6 md:w-8 h-3 rounded-full absolute -left-2 md:-left-3 border-[3px] border-gray-400 bg-gradient-to-b from-gray-200 via-gray-400 to-gray-600 shadow-[0_2px_4px_rgba(0,0,0,0.5)] z-50" style={{ top: `${(i * 100) / 24 + 1.2}%` }}></div>
  ));

  if (dimensions.width === 0) return null;

  return (
    <div className="relative flex justify-center items-center h-full w-full max-w-[1000px] ml-4 md:ml-8">
      
      {/* Notebook Poly Cover Backing */}
      <div className="absolute top-0 bottom-0 left-0 right-0 bg-[#1a1a1a] rounded-r-3xl rounded-l-md shadow-[25px_25px_70px_rgba(0,0,0,0.9)] z-0">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/black-paper.png')] opacity-80 mix-blend-multiply"></div>
      </div>

      {/* 3D Spiral Rings attached to the binding */}
      <div className="absolute top-1 bottom-1 left-0 md:left-2 w-4 z-50 pointer-events-none">
        {spiralRings}
      </div>

      <div className="relative z-10 w-full h-full flex justify-end pb-1 pr-1 pt-1">
        {/* @ts-ignore - react-pageflip typing has some known issues with newer React versions */}
        <HTMLFlipBook
          width={dimensions.width}
          height={dimensions.height}
          size="fixed"
          minWidth={300}
          maxWidth={1000}
          minHeight={400}
          maxHeight={1200}
          maxShadowOpacity={0.6}
          showCover={false}
          mobileScrollSupport={true}
          usePortrait={true}
          drawShadow={true}
          flippingTime={1000}
          useMouseEvents={true}
          showPageCorners={true}
          className="spiral-notebook"
          style={{ margin: 0 }}
          ref={bookRef}
          onFlip={(e: any) => onPageChange(e.data)}
        >
          {pages.map((PageComponent, index) => (
            <Page key={index} number={index + 1}>
              <PageComponent />
            </Page>
          ))}
        </HTMLFlipBook>
      </div>

    </div>
  );
}
