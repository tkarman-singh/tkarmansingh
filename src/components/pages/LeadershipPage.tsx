"use client";

import { Users, Megaphone, Target } from "lucide-react";

export function LeadershipPage() {
  return (
    <div className="w-full h-full flex flex-col font-caveat text-gray-900 pt-6">
      <h2 className="text-5xl md:text-6xl font-bold mb-8 border-b-2 border-black/20 pb-4 inline-flex items-center gap-4 w-fit">
        <Users size={48} className="text-black/60" />
        Extracurricular & Leadership
      </h2>

      <div className="space-y-12 mt-4 relative">
        {/* Decorative connecting line */}
        <div className="absolute left-6 top-10 bottom-0 w-1 bg-black/10 -z-10 rounded-full"></div>

        {/* GDG & TEDx */}
        <div className="relative pl-16">
          <div className="absolute left-3 top-2 w-6 h-6 bg-yellow-300 rounded-full border-2 border-black shadow-sm z-10 flex items-center justify-center">
            <div className="w-2 h-2 bg-black rounded-full"></div>
          </div>
          
          <h3 className="text-3xl md:text-4xl font-bold flex items-center gap-3">
            Core Team Member
            <span className="text-sm font-playfair bg-yellow-200 px-3 py-1 rounded-sm border border-black/10 italic rotate-2 shadow-sm">
              NIT Jalandhar
            </span>
          </h3>
          <p className="text-2xl mt-1 opacity-70 italic font-playfair">
            GDG, TEDxNITJalandhar & Octaves
          </p>
          
          <div className="mt-6 text-2xl leading-relaxed space-y-4">
            <p className="flex items-start gap-3">
              <span className="text-xl mt-1">»</span>
              Contributed to organizing technical events, workshops, and cultural programs.
            </p>
            <p className="flex items-start gap-3">
              <span className="text-xl mt-1">»</span>
              Demonstrated leadership, teamwork, and community engagement skills.
            </p>
          </div>
        </div>

      </div>

      {/* Decorative Doodles */}
      <div className="absolute bottom-10 right-10 opacity-30 flex flex-col items-center">
        <Megaphone size={64} strokeWidth={1.5} />
        <span className="text-xl mt-2 font-bold transform -rotate-6">Community!</span>
      </div>
      
      <div className="absolute top-20 right-12 opacity-20">
        <Target size={80} strokeWidth={1} />
      </div>

    </div>
  );
}
