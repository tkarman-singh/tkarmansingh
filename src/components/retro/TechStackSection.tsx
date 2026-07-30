"use client";

import React from 'react';
import { RetroWindow } from './RetroWindow';
import { motion } from 'framer-motion';

const techCategories = [
  {
    title: "Frontend.exe",
    skills: ["React / Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "HTML5 / CSS3"]
  },
  {
    title: "Backend.sys",
    skills: ["Node.js", "Python", "Java", "PostgreSQL", "REST APIs"]
  },
  {
    title: "DevOps.bat",
    skills: ["Git / GitHub", "Docker", "AWS", "CI/CD", "Linux"]
  }
];

export function TechStackSection() {
  return (
    <section className="scroll-mt-[80px] md:scroll-mt-[100px] min-h-screen flex flex-col items-center justify-center py-[90px] px-[24px] md:px-[60px] relative" id="tech-stack-section">
      <span className="absolute top-[40px] left-1/2 -translate-x-1/2 text-[13px] md:text-[16px] tracking-[.3em] uppercase text-[#6b6a56]">
        02 · tech stack
      </span>
      
      <div className="w-full max-w-[1000px] mt-[60px] grid grid-cols-1 md:grid-cols-3 gap-[30px]">
        {techCategories.map((category, idx) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="flex h-full"
          >
            <RetroWindow title={category.title} className="h-full w-full">
              <ul className="list-none p-0 m-0 flex flex-col gap-3">
                {category.skills.map((skill) => (
                  <li key={skill} className="font-kalam text-[#3f3f2e] text-[17px] md:text-[20px] flex items-center gap-3">
                    <span className="text-[#df7a3e] text-[14px]">▹</span>
                    {skill}
                  </li>
                ))}
              </ul>
            </RetroWindow>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
