"use client";

import { GraduationCap } from "lucide-react";

export function EducationPage() {
  return (
    <div className="w-full h-full flex flex-col font-caveat text-gray-900 pt-6 relative">
      <h2 className="text-5xl md:text-6xl font-bold mb-8 border-b-2 border-black/20 pb-4 inline-flex items-center gap-4 w-fit">
        <GraduationCap size={48} className="text-black/60" />
        Education
      </h2>
      
      <div className="flex-grow flex flex-col items-center mt-10">
        
        {/* Certificate/Diploma Sketch */}
        <div className="relative w-full max-w-lg bg-[#FFFAF0] border-[8px] border-double border-black/20 p-8 shadow-sm transform -rotate-1 hover:rotate-1 transition-all duration-300">
          {/* Top seal */}
          <div className="absolute -top-4 -right-4 w-12 h-12 bg-red-500/80 rounded-full flex items-center justify-center text-white text-xs font-bold border-2 border-red-700 shadow-md rotate-12">
            SEAL
          </div>

          <div className="text-center border border-black/10 p-6 h-full flex flex-col justify-center bg-white/50">
            <h3 className="font-playfair text-3xl font-bold text-gray-800 tracking-wider mb-2 uppercase">
              B.Tech in Information Technology
            </h3>
            <div className="text-xl text-gray-500 mb-6 italic">2021 - 2025</div>
            
            <p className="text-4xl text-black font-bold mb-2">Dr. B R Ambedkar National Institute of Technology, Jalandhar</p>
            
            <div className="mt-8 flex justify-between items-end border-t border-black/20 pt-4">
              <div className="text-left">
                <div className="font-playfair italic text-lg text-gray-600 mb-1">Grade</div>
                <div className="text-2xl font-bold">7.72 CGPA</div>
              </div>
              <div className="text-right">
                <div className="font-playfair italic text-lg text-gray-600 mb-1">Signature</div>
                <div className="text-2xl" style={{ fontFamily: "cursive" }}>Karman Singh</div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
