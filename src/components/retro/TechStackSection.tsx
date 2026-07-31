"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { 
  SiC, SiCplusplus, SiPython, SiJavascript, SiTypescript, SiHtml5, SiCss, 
  SiReact, SiTailwindcss, SiNodedotjs, SiExpress, SiMongodb, SiMysql, SiPostgresql, SiDocker, SiKubernetes, SiJenkins, SiTerraform, SiGithubactions,
  SiGit, SiGithub, SiLinux
} from 'react-icons/si';
import { 
  FaJava, FaAws, FaBrain, FaSyncAlt
} from 'react-icons/fa';

const techCategories: { category: string; skills: { name: string; icon: React.ElementType; url?: string }[] }[] = [
  {
    category: "programming languages",
    skills: [
      { name: "C", icon: SiC, url: "https://en.cppreference.com/w/c" },
      { name: "C++", icon: SiCplusplus, url: "https://isocpp.org/" },
      { name: "Python", icon: SiPython, url: "https://www.python.org/" },
      { name: "Java", icon: FaJava, url: "https://dev.java/" },
    ]
  },
  {
    category: "frontend",
    skills: [
      { name: "HTML", icon: SiHtml5, url: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
      { name: "CSS", icon: SiCss, url: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
      { name: "JavaScript", icon: SiJavascript, url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
      { name: "TypeScript", icon: SiTypescript, url: "https://www.typescriptlang.org/" },
      { name: "React.js", icon: SiReact, url: "https://react.dev/" },
      { name: "TailwindCSS", icon: SiTailwindcss, url: "https://tailwindcss.com/" },
    ]
  },
  {
    category: "backend",
    skills: [
      { name: "Node.js", icon: SiNodedotjs, url: "https://nodejs.org/" },
      { name: "Express.js", icon: SiExpress, url: "https://expressjs.com/" },
      { name: "MongoDB", icon: SiMongodb, url: "https://www.mongodb.com/" },
      { name: "MySQL", icon: SiMysql, url: "https://www.mysql.com/" },
      { name: "PostgresSQL", icon: SiPostgresql, url: "https://www.postgresql.org/" },
    ]
  },
  {
    category: "devops",
    skills: [
      { name: "Docker", icon: SiDocker, url: "https://www.docker.com/" },
      { name: "Kubernetes", icon: SiKubernetes, url: "https://kubernetes.io/" },
      { name: "Jenkins", icon: SiJenkins, url: "https://www.jenkins.io/" },
      { name: "Terraform", icon: SiTerraform, url: "https://www.terraform.io/" },
      { name: "AWS", icon: FaAws, url: "https://aws.amazon.com/" },
      { name: "GitHub Actions", icon: SiGithubactions, url: "https://github.com/features/actions" },
    ]
  },
  {
    category: "developer tools",
    skills: [
      { name: "Git", icon: SiGit, url: "https://git-scm.com/" },
      { name: "GitHub", icon: SiGithub, url: "https://github.com/" },
      { name: "Linux", icon: SiLinux, url: "https://www.kernel.org/" },
      { name: "Agile", icon: FaSyncAlt },
      { name: "Machine Learning", icon: FaBrain },
      { name: "NLP", icon: FaBrain },
    ]
  }
];

const tabs = ['03', '04', '05', '06', '07', '08', '09'];

export function TechStackSection() {
  return (
    <section className="scroll-mt-[80px] md:scroll-mt-[100px] min-h-screen flex flex-col items-center justify-center py-[90px] px-[24px] md:px-[60px] relative" id="tech-stack-section">
      <span className="absolute top-[40px] left-1/2 -translate-x-1/2 text-[13px] md:text-[16px] tracking-[.3em] uppercase text-[#6b6a56]">
        02 · tech stack
      </span>

      {/* Top Right Decoration (3) */}
      <Image 
        src="/3.png" 
        alt="Decoration" 
        width={250}
        height={250}
        className="absolute top-[10%] right-[2%] md:right-[5%] w-[120px] md:w-[220px] h-auto object-contain pointer-events-none select-none z-0 drop-shadow-sm"
      />

      {/* Bottom Right Decoration (6) */}
      <Image 
        src="/6.png" 
        alt="Decoration" 
        width={300}
        height={300}
        className="absolute bottom-[10%] right-[2%] md:right-[5%] w-[180px] md:w-[325px] h-auto object-contain pointer-events-none select-none z-0 drop-shadow-sm"
      />

      {/* Middle Left Decoration (5) */}
      <Image 
        src="/5.png" 
        alt="Decoration" 
        width={150}
        height={150}
        className="absolute bottom-[38%] left-[2%] md:left-[5%] w-[80px] md:w-[130px] h-auto object-contain pointer-events-none select-none z-0 drop-shadow-sm"
      />

      {/* Bottom Left Decoration (4) */}
      <Image 
        src="/4.png" 
        alt="Decoration" 
        width={300}
        height={300}
        className="absolute bottom-[15%] left-[2%] md:left-[5%] w-[190px] md:w-[335px] h-auto object-contain pointer-events-none select-none z-0 drop-shadow-sm"
      />
      
      <motion.div 
        className="w-full max-w-[800px] mt-[80px] relative mx-auto cursor-default"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
      >
        {/* Back White Paper */}
        <div className="absolute inset-[-10px] md:inset-[-20px] bg-white shadow-2xl rotate-[-2deg] rounded-sm z-0" />
        
        {/* Yellow Folder */}
        <div className="absolute inset-0 bg-[#e8ce90] shadow-lg rounded-sm z-10">
          {/* Tabs */}
          <div className="absolute top-[-25px] right-[10%] flex gap-[4px] md:gap-[6px]">
            {tabs.map((tab) => (
              <div 
                key={tab} 
                className="bg-[#e8ce90] w-[35px] md:w-[45px] h-[30px] rounded-t-[4px] flex flex-col items-center justify-end pb-1 text-[10px] md:text-[11px] font-mono text-[#3a3a3a]"
                style={{
                  clipPath: 'polygon(15% 0, 85% 0, 100% 100%, 0% 100%)'
                }}
              >
                {tab}
              </div>
            ))}
          </div>
        </div>

        {/* Front Grid Paper */}
        <div className="relative m-4 md:m-6 bg-[#f8f9fa] shadow-md z-20 rounded-sm overflow-hidden flex flex-col min-h-[500px]">
          {/* Grid Background */}
          <div className="absolute inset-0 pointer-events-none opacity-[0.5]" style={{ backgroundImage: 'linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
          
          {/* Paperclip */}
          <svg width="40" height="90" viewBox="0 0 40 90" fill="none" stroke="#999" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="absolute top-[-5px] right-[30px] md:right-[50px] z-30 drop-shadow-sm pointer-events-none">
            <path d="M20 70 V20 A10 10 0 0 0 0 20 V65 A6 6 0 0 0 12 65 V25 A2 2 0 0 0 8 25 V60" transform="translate(10, 0)" />
          </svg>

          {/* Tape at Bottom */}
          <div className="absolute bottom-[-15px] left-1/2 -translate-x-1/2 w-[120px] h-[35px] bg-white/40 backdrop-blur-[2px] shadow-sm rotate-2 z-30 border border-white/50" style={{ clipPath: 'polygon(2% 0, 98% 2%, 100% 100%, 0 98%)' }} />

          {/* Content */}
          <div className="relative z-10 p-[30px] md:p-[50px] pb-[80px] flex-1">
            <h2 className="text-[28px] md:text-[36px] font-bold text-[#1a1a1a] mb-8 tracking-tight lowercase">
              technical stack
            </h2>

            {/* Categorized Skills */}
            <div className="flex flex-col gap-[32px]">
              {techCategories.map((group) => (
                <div key={group.category} className="flex flex-col gap-[12px]">
                  <h3 className="text-[13px] md:text-[15px] font-bold text-[#3a3a3a] underline underline-offset-[6px] decoration-[1.5px] lowercase tracking-[0.05em] font-mono">
                    {group.category}
                  </h3>
                  <div className="flex flex-wrap gap-[10px] md:gap-[14px]">
                    {group.skills.map((skill) => {
                      const content = (
                        <>
                          <skill.icon className="text-[14px] md:text-[16px]" />
                          <span>{skill.name}</span>
                        </>
                      );
                      const baseClass = "flex items-center gap-[8px] px-[14px] py-[6px] md:px-[18px] md:py-[8px] border-[1.5px] border-[#2a2a2a] rounded-[24px] text-[11px] md:text-[12.5px] tracking-[0.05em] font-medium text-[#2a2a2a] hover:bg-[#3b1c4a] hover:border-[#3b1c4a] hover:text-[#f8f9fa] transition-colors bg-transparent ";
                      const className = baseClass + (skill.url ? "cursor-pointer" : "cursor-default");

                      return skill.url ? (
                        <a 
                          key={skill.name} 
                          href={skill.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={className}
                        >
                          {content}
                        </a>
                      ) : (
                        <div key={skill.name} className={className}>
                          {content}
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
