"use client";

import { Briefcase } from "lucide-react";

export function ExperiencePage() {
  const experiences = [
    {
      role: "Summer Software Intern",
      company: "IIRS, ISRO",
      date: "June 2026 – July 2026",
      points: [
        "Developing a Java 21 application to automate processing of Sentinel-2 Level-2A multispectral satellite imagery for large-scale vegetation analysis.",
        "Implemented the MSAVI2 algorithm using Band 4 (Red) and Band 8 (NIR) and engineered a batch-processing pipeline to extract JPEG2000 spectral bands and export outputs in ENVI BSQ format.",
        "Gained expertise in geospatial raster processing, scientific image analysis, and remote sensing data workflows."
      ]
    },
    {
      role: "Full Stack Developer",
      company: "GDGC, NIT Jalandhar",
      date: "January 2025 - April 2026",
      points: [
        "Developed and maintained full-stack features for HackMol, the official hackathon platform supporting event registrations, participant management, and live hackathon operations.",
        "Built responsive React.js UI components and integrated RESTful APIs using Node.js and Express.js (MERN stack), improving platform user experience and reliability.",
        "Performed debugging and performance optimization to ensure platform stability under high-traffic conditions during live events."
      ]
    }
  ];

  return (
    <div className="w-full h-full flex flex-col font-caveat text-gray-900 pt-6">
      <h2 className="text-5xl md:text-6xl font-bold mb-8 border-b-2 border-black/20 pb-4 inline-flex items-center gap-4 w-fit">
        <Briefcase size={48} className="text-black/60" />
        Work Experience
      </h2>
      
      <div className="relative border-l-2 border-dashed border-black/30 ml-4 pl-8 space-y-12 pb-10">
        
        {experiences.map((exp, idx) => (
          <div key={idx} className="relative">
            {/* Timeline dot */}
            <div className="absolute -left-[2.4rem] top-2 w-4 h-4 bg-yellow-300 rounded-full border-2 border-black shadow-sm"></div>
            
            <h3 className="text-3xl md:text-4xl font-bold flex flex-wrap items-baseline gap-x-3 gap-y-1">
              {exp.role} 
              <span className="text-xl font-playfair bg-yellow-200/50 px-2 rounded-sm border border-black/5 italic shadow-sm transform -rotate-1">
                {exp.company}
              </span>
            </h3>
            <p className="text-xl md:text-2xl mt-1 opacity-60 font-playfair italic mb-3">{exp.date}</p>
            
            <ul className="text-2xl leading-relaxed space-y-2 mt-2">
              {exp.points.map((point, pIdx) => (
                <li key={pIdx} className="flex items-start gap-2">
                  <span className="text-lg mt-1 opacity-50">○</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
        
      </div>
    </div>
  );
}
