"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
  SiC, SiCplusplus, SiPython, SiGo, SiTypescript, SiGnubash,
  SiJavascript, SiReact, SiNextdotjs, SiHtml5, SiCss, SiTailwindcss,
  SiNodedotjs, SiExpress, SiMongodb, SiMysql, SiPostgresql, SiFirebase,
  SiDocker, SiKubernetes, SiJenkins, SiTerraform, SiGithubactions,
  SiPrometheus, SiGrafana, SiOpentelemetry, SiSonarqubeserver,
  SiGit, SiGithub, SiPrisma, SiPostman
} from 'react-icons/si';
import { FaShieldAlt, FaChartLine, FaAws } from 'react-icons/fa';

const techCategories = [
  {
    category: "languages",
    skills: [
      { name: "C", icon: SiC },
      { name: "C++", icon: SiCplusplus },
      { name: "Python", icon: SiPython },
      { name: "GoLang", icon: SiGo },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Bash", icon: SiGnubash },
    ]
  },
  {
    category: "frontend",
    skills: [
      { name: "JavaScript", icon: SiJavascript },
      { name: "TypeScript", icon: SiTypescript },
      { name: "React", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "HTML5", icon: SiHtml5 },
      { name: "CSS3", icon: SiCss },
      { name: "TailwindCSS", icon: SiTailwindcss },
    ]
  },
  {
    category: "backend",
    skills: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Express.js", icon: SiExpress },
      { name: "MongoDB", icon: SiMongodb },
      { name: "MySQL", icon: SiMysql },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "Firebase", icon: SiFirebase },
    ]
  },
  {
    category: "devops",
    skills: [
      { name: "Docker", icon: SiDocker },
      { name: "Kubernetes", icon: SiKubernetes },
      { name: "Jenkins", icon: SiJenkins },
      { name: "Terraform", icon: SiTerraform },
      { name: "AWS", icon: FaAws },
      { name: "GitHub Actions", icon: SiGithubactions },
    ]
  },
  {
    category: "monitoring & security",
    skills: [
      { name: "Prometheus", icon: SiPrometheus },
      { name: "Grafana", icon: SiGrafana },
      { name: "SigNoz", icon: FaChartLine },
      { name: "OpenTelemetry", icon: SiOpentelemetry },
      { name: "SonarQube", icon: SiSonarqubeserver },
      { name: "Trivy", icon: FaShieldAlt },
    ]
  },
  {
    category: "tools",
    skills: [
      { name: "Git", icon: SiGit },
      { name: "GitHub", icon: SiGithub },
      { name: "Prisma", icon: SiPrisma },
      { name: "Postman", icon: SiPostman },
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
                    {group.skills.map((skill) => (
                      <div 
                        key={skill.name} 
                        className="flex items-center gap-[8px] px-[14px] py-[6px] md:px-[18px] md:py-[8px] border-[1.5px] border-[#2a2a2a] rounded-[24px] text-[11px] md:text-[12.5px] tracking-[0.05em] font-medium text-[#2a2a2a] hover:bg-[#2a2a2a] hover:text-[#f8f9fa] transition-colors cursor-default bg-transparent"
                      >
                        <skill.icon className="text-[14px] md:text-[16px]" />
                        <span>{skill.name}</span>
                      </div>
                    ))}
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
