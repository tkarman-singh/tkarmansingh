"use client";

import { Briefcase } from "lucide-react";

const experiences = [
  {
    title: "Summer Software Intern",
    company: "IIRS, ISRO",
    date: "June 2026 - July 2026",
    points: [
      "Developing a Java 21 application to automate processing of Sentinel-2 Level-2A multispectral satellite imagery for large-scale vegetation analysis.",
      "Implemented the MSAVI2 algorithm using Band 4 (Red) and Band 8 (NIR) and engineered a batch-processing pipeline to extract JPEG2000 spectral bands and export outputs in ENVI BSQ format.",
      "Gained expertise in geospatial raster processing, scientific image analysis, and remote sensing data workflows."
    ]
  },
  {
    title: "Full Stack Developer",
    company: "GDGC, NIT Jalandhar",
    date: "January 2025 - April 2026",
    points: [
      "Developed and maintained full-stack features for HackMol, the official hackathon platform supporting event registrations, participant management, and live hackathon operations.",
      "Built responsive React.js UI components and integrated RESTful APIs using Node.js and Express.js (MERN stack), improving platform user experience and reliability.",
      "Performed debugging and performance optimization to ensure platform stability under high-traffic conditions during live events."
    ]
  }
];

export function ExperiencePage() {
  return (
    <div className="w-full h-full flex flex-col font-caveat text-gray-900 pt-6">
      <h2 className="text-5xl md:text-6xl font-bold mb-8 border-b-2 border-black/20 pb-4 inline-flex items-center gap-4 w-fit z-10">
        <Briefcase size={48} className="text-black/60" />
        Work Experience
      </h2>

      {/* Hand-drawn vertical timeline */}
      <div className="relative pl-8 md:pl-12 flex-grow mt-4 pb-12 z-10">
        {/* The timeline line */}
        <div className="absolute top-2 bottom-0 left-[11px] md:left-[19px] w-1 bg-black/20 rounded-full"></div>

        <div className="space-y-12">
          {experiences.map((exp, idx) => (
            <div key={idx} className="relative group">
              {/* Timeline node */}
              <div className="absolute -left-8 md:-left-12 top-2 w-6 h-6 bg-white border-4 border-black rounded-full shadow-[2px_2px_0_rgba(0,0,0,1)] group-hover:scale-125 transition-transform z-10"></div>
              
              <div className="flex flex-col xl:flex-row xl:justify-between xl:items-baseline mb-2">
                <h3 className="text-3xl md:text-4xl font-bold inline-block relative">
                  {exp.title}
                  <span className="text-xl md:text-2xl font-playfair bg-yellow-200/60 px-2 rounded-sm ml-2">- {exp.company}</span>
                </h3>
                <span className="text-xl md:text-2xl font-playfair italic text-gray-500 whitespace-nowrap mt-2 xl:mt-0">{exp.date}</span>
              </div>
              
              <ul className="text-2xl mt-4 space-y-3 list-none pl-2">
                {exp.points.map((point, pIdx) => (
                  <li key={pIdx} className="relative">
                    <span className="absolute -left-5 top-2.5 w-1.5 h-1.5 rounded-full bg-black/50"></span>
                    {point}
                  </li>
                ))}
              </ul>

              {/* Scribble hover effect background */}
              <div className="absolute -inset-4 bg-black/[0.02] rounded-lg opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity -z-10"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
