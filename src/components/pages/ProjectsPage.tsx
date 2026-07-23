"use client";

import { Lightbulb } from "lucide-react";

const projects = [
  {
    title: "MindMate",
    subtitle: "AI Mental Wellness Platform",
    date: "June 2026",
    tech: ["React", "Node.js", "MongoDB", "AWS", "Docker", "HuggingFace"],
    points: [
      "Architected a full-stack mental wellness web app with AI-driven sentiment analysis and mood analytics using React, Node.js/Express, and MongoDB.",
      "Designed an asynchronous, queue-based architecture to concurrently process journal submissions and HuggingFace Transformer inference, decoupling AI workloads from the main API.",
      "Implemented JWT-based auth with refresh-token rotation and AES-256 field-level encryption for OWASP-compliant data privacy.",
      "Containerized services with Docker, deployed to AWS via GitHub Actions CI/CD pipeline, and built a real-time content moderation pipeline for an anonymous community feature."
    ],
    github: "https://github.com/tkarman-singh"
  }
];

export function ProjectsPage() {
  return (
    <div className="w-full h-full flex flex-col font-caveat text-gray-900 pt-6 relative">
      <h2 className="text-5xl md:text-6xl font-bold mb-8 border-b-2 border-black/20 pb-4 inline-flex items-center gap-4 w-fit">
        <Lightbulb size={48} className="text-black/60" />
        Projects
      </h2>

      <div className="flex-grow mt-4 pb-12 space-y-12">
        {projects.map((project, idx) => (
          <div key={idx} className="relative group">
            
            {/* Paper clip SVG */}
            <div className="absolute -top-6 -left-4 z-20 text-gray-400 transform -rotate-12 group-hover:rotate-0 transition-transform hidden sm:block">
              <svg width="40" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48" />
              </svg>
            </div>

            <div className="bg-white/80 p-6 md:p-8 border border-black/20 shadow-md transform rotate-1 group-hover:rotate-0 transition-all duration-300 relative">
              <div className="flex flex-col xl:flex-row xl:justify-between xl:items-baseline mb-2">
                <h3 className="text-3xl md:text-4xl font-bold flex items-center gap-2">
                  {project.title}
                  <span className="text-xl md:text-2xl font-playfair bg-red-200/50 px-2 rounded-sm ml-2">- {project.subtitle}</span>
                </h3>
                
                <div className="flex items-center gap-4 mt-2 xl:mt-0">
                  <span className="text-xl md:text-2xl font-playfair italic text-gray-500 whitespace-nowrap">{project.date}</span>
                  <a href={project.github} target="_blank" rel="noreferrer" className="text-gray-600 hover:text-black transition-colors flex items-center" title="View Source">
                    <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                  </a>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2 mt-4 mb-6">
                {project.tech.map((t, tIdx) => (
                  <span key={tIdx} className="text-lg md:text-xl font-bold bg-black/5 px-2 py-0.5 rounded border border-black/10">
                    {t}
                  </span>
                ))}
              </div>

              <ul className="text-2xl space-y-3 list-none pl-2">
                {project.points.map((point, pIdx) => (
                  <li key={pIdx} className="relative">
                    <span className="absolute -left-5 top-2.5 w-2 h-2 rounded-full bg-red-400 border border-black/50"></span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
