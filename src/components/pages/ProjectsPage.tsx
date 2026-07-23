"use client";

import { Code, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "MindMate",
    description: "Architected a full-stack mental wellness web app with AI-driven sentiment analysis and mood analytics.",
    tags: ["React", "Node.js", "MongoDB", "AWS", "HuggingFace"],
    demoUrl: "https://github.com/tkarman-singh/MindMate",
    githubUrl: "https://github.com/tkarman-singh/MindMate",
    featured: true,
  }
];

export function ProjectsPage() {
  return (
    <div className="w-full h-full flex flex-col font-caveat text-gray-900 pt-6">
      <h2 className="text-5xl md:text-6xl font-bold mb-8 border-b-2 border-black/20 pb-4 inline-block w-fit">
        Projects
      </h2>
      
      <div className="flex flex-col gap-10">
        {projects.map((project, idx) => (
          <div key={idx} className="relative w-full max-w-xl mx-auto">
            {/* Paper clip */}
            <div className="absolute -top-6 right-10 w-12 h-16 border-4 border-gray-400 rounded-full bg-transparent z-10 rotate-12" style={{ clipPath: "polygon(0 0, 100% 0, 100% 80%, 0 80%)" }}></div>
            <div className="absolute -top-3 right-12 w-8 h-10 border-4 border-gray-400 rounded-full bg-transparent z-10 rotate-12" style={{ clipPath: "polygon(0 20%, 100% 20%, 100% 100%, 0 100%)" }}></div>

            <div className="bg-white p-4 shadow-md rotate-[-1deg] border border-gray-300">
              <div className="h-40 bg-gray-200 mb-4 flex items-center justify-center overflow-hidden relative border border-dashed border-gray-400">
                <span className="text-gray-400 rotate-12 text-2xl">[ Screenshot sketch ]</span>
              </div>
              
              <div className="flex justify-between items-end">
                <div>
                  <h3 className="text-4xl font-bold">{project.title}</h3>
                  <p className="text-xl mt-2 leading-tight">{project.description}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mt-4">
                {project.tags.map((tag, i) => (
                  <span key={i} className="px-2 border border-black/30 text-lg rounded-sm bg-gray-50 rotate-1">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 mt-6 border-t border-black/10 pt-4">
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-blue-600 transition-colors">
                  <Code size={20} /> <span className="text-xl underline decoration-wavy">Source</span>
                </a>
                <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-blue-600 transition-colors">
                  <ExternalLink size={20} /> <span className="text-xl underline decoration-wavy">Live Demo</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
