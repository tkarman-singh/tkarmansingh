"use client";

import { User } from "lucide-react";

export function AboutPage() {
  return (
    <div className="w-full h-full flex flex-col font-caveat text-gray-900 pt-6 relative">
      <h2 className="text-5xl md:text-6xl font-bold mb-8 border-b-2 border-black/20 pb-4 inline-flex items-center gap-4 w-fit">
        <User size={48} className="text-black/60" />
        Professional Summary
      </h2>

      {/* Main Journal Entry */}
      <div className="flex-grow mt-4">
        <p className="text-3xl md:text-4xl leading-relaxed max-w-2xl font-caveat drop-shadow-sm indent-8">
          Software Engineer and IT undergraduate at NIT Jalandhar with hands-on experience in full-stack development (MERN), cloud infrastructure (AWS, Docker, Kubernetes), and machine learning.
        </p>
        
        <p className="text-3xl md:text-4xl leading-relaxed max-w-2xl font-caveat drop-shadow-sm mt-6 indent-8">
          Proven ability to design and ship production-grade systems; seeking a software engineering internship to contribute to scalable, high-impact products.
        </p>

        {/* Hand-drawn underline/accent */}
        <div className="mt-8">
          <svg width="250" height="20" viewBox="0 0 250 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-black/40">
            <path d="M2 10C50 15 100 5 150 12C180 16 220 8 248 10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
            <path d="M10 16C60 18 120 12 180 17C200 19 230 14 240 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
          </svg>
        </div>
      </div>

      {/* Taped note */}
      <div className="absolute right-0 top-1/4 transform rotate-6 w-48 md:w-64 p-4 bg-[#fff9c4] shadow-md border border-black/10 group hover:-rotate-2 transition-transform duration-300 hidden sm:block">
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-12 h-6 bg-red-400/80 shadow-sm transform -rotate-3 mix-blend-multiply"></div>
        <p className="text-xl md:text-2xl font-playfair italic text-black/80 text-center mt-2">
          "Passionate about building scalable systems."
        </p>
      </div>
    </div>
  );
}
