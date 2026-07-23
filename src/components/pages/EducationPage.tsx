"use client";

import { GraduationCap } from "lucide-react";

export function EducationPage() {
  const coursework = [
    "Data Structures and Algorithms",
    "Operating Systems",
    "Computer Networks",
    "Database Management Systems",
    "Design and Analysis of Algorithms",
    "Object-Oriented Programming",
    "Computer Organisation and Architecture",
    "Machine Learning"
  ];

  return (
    <div className="w-full h-full flex flex-col font-caveat text-gray-900 pt-6 relative">
      <h2 className="text-5xl md:text-6xl font-bold mb-8 border-b-2 border-black/20 pb-4 inline-flex items-center gap-4 w-fit">
        <GraduationCap size={48} className="text-black/60" />
        Education
      </h2>
      
      <div className="flex-grow flex flex-col mt-4 gap-8">
        
        {/* Certificate/Diploma Sketch */}
        <div className="relative w-full max-w-lg bg-[#FFFAF0] border-[8px] border-double border-black/20 p-6 shadow-sm transform -rotate-1 hover:rotate-1 transition-all duration-300 self-center">
          {/* Top seal */}
          <div className="absolute -top-4 -right-4 w-12 h-12 bg-red-500/80 rounded-full flex items-center justify-center text-white text-xs font-bold border-2 border-red-700 shadow-md rotate-12">
            SEAL
          </div>

          <div className="text-center border border-black/10 p-4 h-full flex flex-col justify-center bg-white/50">
            <h3 className="font-playfair text-2xl font-bold text-gray-800 tracking-wider mb-1 uppercase">
              Bachelor of Technology in Information Technology
            </h3>
            <div className="text-xl text-gray-500 mb-4 italic">Expected June 2027</div>
            
            <p className="text-3xl text-black font-bold">Dr. B.R. Ambedkar National Institute of Technology</p>
            <p className="text-2xl text-black">Jalandhar, Punjab</p>
          </div>
        </div>

        {/* Relevant Coursework */}
        <div className="mt-4">
          <h3 className="text-4xl font-bold mb-4 underline decoration-wavy decoration-black/20 underline-offset-4 inline-block">
            Relevant Coursework
          </h3>
          <div className="flex flex-wrap gap-2 text-2xl leading-tight">
            {coursework.map((course, idx) => (
              <span key={idx} className="flex items-center gap-2">
                <span className="opacity-80">{course}</span>
                {idx !== coursework.length - 1 && <span className="text-gray-400 font-sans mx-1">—</span>}
              </span>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
