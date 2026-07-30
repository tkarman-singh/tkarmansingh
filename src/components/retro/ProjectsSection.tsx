"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: "Project Alpha",
    description: "A full-stack application built with Next.js and Tailwind CSS, featuring robust user authentication and a real-time database.",
    tech: ["Next.js", "React", "Node.js"],
    link: "#",
    github: "#"
  },
  {
    title: "ML Pipeline Automation",
    description: "An end-to-end machine learning pipeline that trains on user data and deploys models directly to serverless edge functions.",
    tech: ["Python", "TensorFlow", "AWS"],
    link: "#",
    github: "#"
  },
  {
    title: "Cloud Infrastructure Setup",
    description: "A terraform-based infrastructure as code solution for spinning up robust Kubernetes clusters across multiple regions.",
    tech: ["Terraform", "Kubernetes", "Docker"],
    link: "#",
    github: "#"
  },
  {
    title: "Portfolio Website",
    description: "A personal portfolio built with Next.js and Framer Motion, featuring a unique retro notebook aesthetic and playful animations.",
    tech: ["Next.js", "TailwindCSS", "Framer Motion"],
    link: "#",
    github: "#"
  }
];

export function ProjectsSection() {
  return (
    <section className="scroll-mt-[80px] md:scroll-mt-[100px] min-h-screen flex flex-col items-center justify-center py-[90px] px-[24px] md:px-[150px] relative" id="projects-section">
      <span className="absolute top-[40px] left-1/2 -translate-x-1/2 text-[13px] md:text-[16px] tracking-[.3em] uppercase text-[#6b6a56]">
        04 · projects
      </span>
      
      <div className="w-full max-w-[1000px] mt-[60px] grid grid-cols-1 md:grid-cols-2 gap-[40px]">
        {projects.map((project, idx) => (
          <motion.div 
            key={idx}
            className="border-[2px] border-[#2a2a2a] bg-[#fdfdfd] rounded-[24px] p-[30px] flex flex-col relative shadow-[4px_4px_0_rgba(0,0,0,1)] hover:-translate-y-2 hover:shadow-[6px_6px_0_rgba(0,0,0,1)] transition-all duration-300 group"
          >
            <h3 className="font-sans font-bold text-[#d351f7] text-[24px] mb-[10px]">
              {project.title}
            </h3>
            <p className="font-kalam text-[#5a5a5a] text-[15px] leading-[1.5] mb-[20px] flex-grow">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-[8px] mb-[24px]">
              {project.tech.map((t, i) => (
                <span key={i} className="px-[12px] py-[4px] border-[1.5px] border-[#2a2a2a] rounded-[24px] text-[11px] font-sans font-semibold text-[#2a2a2a] tracking-wide">
                  {t}
                </span>
              ))}
            </div>
            
            <div className="flex gap-[20px] items-center mt-auto pt-[20px] border-t-[1.5px] border-dashed border-[#2a2a2a]/30">
              <a href={project.github} className="text-[#2a2a2a] hover:text-[#d351f7] transition-colors flex items-center gap-[6px] font-sans font-semibold text-[13px]">
                <Github size={18} /> Code
              </a>
              <a href={project.link} className="text-[#2a2a2a] hover:text-[#d351f7] transition-colors flex items-center gap-[6px] font-sans font-semibold text-[13px]">
                <ExternalLink size={18} /> Live
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
