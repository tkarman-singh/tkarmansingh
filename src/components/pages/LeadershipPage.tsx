"use client";

import { Users } from "lucide-react";

export function LeadershipPage() {
  return (
    <div className="w-full h-full flex flex-col font-caveat text-gray-900 pt-6 relative">
      <h2 className="text-5xl md:text-6xl font-bold mb-8 border-b-2 border-black/20 pb-4 inline-flex items-center gap-4 w-fit">
        <Users size={48} className="text-black/60" />
        Extracurricular & Leadership
      </h2>

      <div className="flex-grow flex flex-col mt-4 space-y-12">
        {/* Core Team Member */}
        <div className="relative group">
          <div className="flex justify-between items-baseline mb-2 border-b-2 border-dashed border-black/10 pb-2">
            <h3 className="text-3xl md:text-4xl font-bold text-black flex items-center gap-2">
              Core Team Member
              <span className="text-sm font-playfair bg-yellow-200/50 px-2 rounded-sm ml-2">- GDG, TEDxNITJalandhar & Octaves</span>
            </h3>
            <span className="font-playfair text-xl text-gray-500 italic hidden md:block">NIT Jalandhar</span>
          </div>
          
          <span className="font-playfair text-xl text-gray-500 italic block md:hidden mb-4">NIT Jalandhar</span>
          
          <ul className="text-2xl space-y-4 list-none pl-4 mt-4">
            <li className="relative">
              <span className="absolute -left-4 top-2 w-2 h-2 rounded-full bg-red-400 border border-black"></span>
              Contributed to organizing technical events, workshops, and cultural programs, demonstrating leadership, teamwork, and community engagement skills.
            </li>
          </ul>

          {/* Sketchy underline hover effect */}
          <div className="absolute inset-0 bg-yellow-300 mix-blend-multiply opacity-0 group-hover:opacity-20 transition-opacity rounded-sm z-[-1] -skew-y-1 transform scale-x-105"></div>
        </div>
      </div>

      {/* Decorative doodle */}
      <div className="absolute bottom-10 right-10 opacity-30 transform rotate-12 pointer-events-none">
        <svg width="120" height="120" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M50 10 L60 40 L90 50 L60 60 L50 90 L40 60 L10 50 L40 40 Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" fill="none" />
        </svg>
      </div>
    </div>
  );
}
