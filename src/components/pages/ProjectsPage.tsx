"use client";

import { Lightbulb } from "lucide-react";

export function ProjectsPage() {
  const projects = [
    {
      title: "MindMate - AI Mental Wellness Platform",
      tech: "React, Node.js, MongoDB, AWS, Docker, HuggingFace",
      date: "June 2026",
      github: "#", // Replace with real link if available
      points: [
        "Architected a full-stack mental wellness web app with AI-driven sentiment analysis and mood analytics using React, Node.js/Express, and MongoDB.",
        "Designed an asynchronous, queue-based architecture to concurrently process journal submissions and HuggingFace Transformer inference, decoupling AI workloads from the main API.",
        "Implemented JWT-based auth with refresh-token rotation and AES-256 field-level encryption for OWASP-compliant data privacy.",
        "Containerized services with Docker, deployed to AWS via GitHub Actions CI/CD pipeline, and built a real-time content moderation pipeline for an anonymous community feature."
      ]
    }
  ];

  return (
    <div className="w-full h-full flex flex-col font-caveat text-gray-900 pt-6">
      <h2 className="text-5xl md:text-6xl font-bold mb-8 border-b-2 border-black/20 pb-4 inline-flex items-center gap-4 w-fit">
        <Lightbulb size={48} className="text-black/60" />
        Projects
      </h2>
      
      <div className="space-y-12">
        {projects.map((project, idx) => (
          <div key={idx} className="relative p-6 border-2 border-black/20 bg-white shadow-sm transform rotate-1">
            {/* Paper clip SVG */}
            <svg className="absolute -top-6 right-8 w-8 h-16 text-gray-400 rotate-12 drop-shadow-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48" />
            </svg>
            
            <div className="flex justify-between items-start mb-2 gap-4">
              <h3 className="text-3xl font-bold font-playfair">{project.title}</h3>
              <a href={project.github} className="opacity-60 hover:opacity-100 transition-opacity flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
              </a>
            </div>
            
            <div className="flex flex-wrap items-center gap-3 mb-4 text-xl">
              <span className="opacity-70 font-playfair italic">{project.date}</span>
              <span className="opacity-40">•</span>
              <span className="bg-yellow-100 px-2 rounded-sm italic border border-black/10">
                {project.tech}
              </span>
            </div>
            
            <ul className="text-2xl leading-relaxed space-y-2 mt-4 text-gray-800">
              {project.points.map((point, pIdx) => (
                <li key={pIdx} className="flex items-start gap-2">
                  <span className="text-lg mt-1 opacity-50">-</span>
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
