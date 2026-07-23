"use client";

import { GraduationCap } from "lucide-react";

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

export function EducationPage() {
  return (
    <div className="w-full h-full flex flex-col font-caveat text-gray-900 pt-6 relative">
      <h2 className="text-5xl md:text-6xl font-bold mb-8 border-b-2 border-black/20 pb-4 inline-flex items-center gap-4 w-fit">
        <GraduationCap size={48} className="text-black/60" />
        Education
      </h2>
      
      <div className="flex-grow flex flex-col mt-4">
        
        {/* Degree info */}
        <div className="relative group mb-12">
          <div className="flex flex-col md:flex-row justify-between items-baseline mb-2">
            <h3 className="text-3xl md:text-4xl font-bold text-black">
              Dr. B.R. Ambedkar National Institute of Technology
            </h3>
            <span className="font-playfair text-xl text-gray-500 italic mt-2 md:mt-0 whitespace-nowrap">Expected June 2027</span>
          </div>
          <h4 className="text-2xl md:text-3xl text-gray-700 italic">Jalandhar, Punjab</h4>
          <p className="text-2xl font-bold mt-2">Bachelor of Technology in Information Technology</p>
          
          {/* Highlighter hover */}
          <div className="absolute inset-0 bg-yellow-300 mix-blend-multiply opacity-0 group-hover:opacity-40 transition-opacity rounded-sm z-[-1] -skew-y-1 transform scale-x-105"></div>
        </div>

        {/* Coursework list styled as a checklist */}
        <div>
          <h3 className="text-3xl font-bold mb-6 border-b-2 border-dashed border-black/20 pb-2 inline-block">
            Relevant Coursework
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
            {coursework.map((course, idx) => (
              <div key={idx} className="flex items-start gap-3 text-2xl group cursor-default">
                <div className="w-5 h-5 mt-1 border-2 border-black rounded-sm flex items-center justify-center relative">
                  {/* Checked checkmark that appears on hover */}
                  <svg className="w-4 h-4 text-red-500 opacity-0 group-hover:opacity-100 transition-opacity absolute" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <span>{course}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
