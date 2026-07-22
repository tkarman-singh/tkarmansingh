"use client";

import { useEffect, useRef } from "react";
import anime from "animejs";
import { Code, ExternalLink, Star } from "lucide-react";

const projects = [
  {
    title: "MindMate",
    description: "Architected a full-stack mental wellness web app with AI-driven sentiment analysis and mood analytics using React, Node.js/Express, and MongoDB.",
    details: [
      "Designed an asynchronous, queue-based architecture to concurrently process journal submissions and HuggingFace Transformer inference, decoupling AI workloads from the main API.",
      "Implemented JWT-based auth with refresh-token rotation and AES-256 field-level encryption for OWASP-compliant data privacy.",
      "Containerized services with Docker, deployed to AWS via GitHub Actions CI/CD pipeline, and built a real-time content moderation pipeline."
    ],
    tags: ["React", "Node.js", "MongoDB", "AWS", "Docker", "HuggingFace"],
    demoUrl: "https://github.com/tkarman-singh/MindMate",
    githubUrl: "https://github.com/tkarman-singh/MindMate",
    featured: true,
    category: "Full Stack"
  }
];

const filters = ["All", "Full Stack", "Web Development", "Machine Learning", "AI"];

export function Projects() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            anime({
              targets: ".project-card",
              translateY: [50, 0],
              opacity: [0, 1],
              delay: anime.stagger(150),
              easing: "easeOutQuart",
              duration: 1000,
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="py-24 relative z-10">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured <span className="text-gradient">Projects</span></h2>
            <p className="text-[color:var(--color-muted)] max-w-2xl text-lg">
              Showcasing my best work in full-stack development and machine learning integration.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {filters.map((filter, i) => (
              <button 
                key={i}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  filter === "All" 
                    ? "bg-[--color-accent-1] text-white" 
                    : "bg-white/5 text-[color:var(--color-muted)] hover:bg-white/10 hover:text-white border border-white/10"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="project-card opacity-0 group relative rounded-3xl overflow-hidden glass-card border border-white/10 transition-transform duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(99,102,241,0.2)]"
            >
              {/* Image Reveal/Hover Preview (using placeholder gradient) */}
              <div className="h-64 bg-[#111116] relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[--color-accent-1] to-[--color-accent-3] opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSA0MCAwIEwgMCAwIDAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')]"></div>
                
                {/* Project Links Overlay on Hover */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm bg-black/30">
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="p-4 rounded-full glass hover:bg-white/20 transition-colors transform hover:scale-110">
                    <Code size={24} className="text-white" />
                  </a>
                  <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="p-4 rounded-full glass hover:bg-white/20 transition-colors transform hover:scale-110">
                    <ExternalLink size={24} className="text-white" />
                  </a>
                </div>
              </div>

              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    {project.featured && (
                      <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[--color-accent-1]/20 text-[--color-accent-1] text-xs font-semibold mb-3 border border-[--color-accent-1]/30">
                        <Star size={12} fill="currentColor" /> Featured
                      </div>
                    )}
                    <h3 className="text-2xl font-bold text-white group-hover:text-[--color-accent-2] transition-colors">{project.title}</h3>
                  </div>
                </div>
                
                <p className="text-[color:var(--color-muted)] mb-6 text-sm md:text-base line-clamp-3 group-hover:line-clamp-none transition-all duration-500">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, i) => (
                    <span 
                      key={i}
                      className="px-3 py-1 rounded-full text-xs font-medium bg-white/5 text-[color:var(--color-muted)] border border-white/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
