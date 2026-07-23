"use client";

import { Code2 } from "lucide-react";

const skillCategories = [
  {
    title: "Programming Languages",
    skills: ["C", "C++", "Python", "JavaScript", "TypeScript", "HTML", "CSS", "Java"]
  },
  {
    title: "Frontend Development",
    skills: ["React.js", "Responsive UI", "REST API Integration", "Component Design"]
  },
  {
    title: "Backend Development",
    skills: ["Node.js", "Express.js", "RESTful APIs", "JWT Auth", "AES-256"]
  },
  {
    title: "Databases",
    skills: ["MongoDB", "SQL", "DBMS"]
  },
  {
    title: "Cloud & DevOps",
    skills: ["AWS", "Docker", "Kubernetes", "CI/CD", "GitHub Actions"]
  },
  {
    title: "Core CS Fundamentals",
    skills: ["Data Structures", "Algorithms", "OS", "Networks", "OOPs", "Design Patterns"]
  },
  {
    title: "Machine Learning",
    skills: ["ML", "Computer Vision", "HuggingFace", "Sentiment Analysis", "Remote Sensing"]
  },
  {
    title: "Developer Tools",
    skills: ["Git", "GitHub", "Linux", "NLP", "Agile", "SDLC"]
  }
];

export function SkillsPage() {
  return (
    <div className="w-full h-full flex flex-col font-caveat text-gray-900 pt-6">
      <h2 className="text-5xl md:text-6xl font-bold mb-8 border-b-2 border-black/20 pb-4 inline-flex items-center gap-4 w-fit">
        <Code2 size={48} className="text-black/60" />
        Technical Skills
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 mt-4 pb-12">
        {skillCategories.map((category, idx) => (
          <div key={idx} className="relative group">
            <h3 className="text-2xl md:text-3xl font-bold mb-3 inline-block relative">
              {category.title}
              {/* Hand-drawn underline */}
              <svg className="absolute -bottom-1 left-0 w-full h-2 text-red-500/50 group-hover:text-red-500 transition-colors" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 50 10 100 2" stroke="currentColor" strokeWidth="2" fill="none" vectorEffect="non-scaling-stroke" />
              </svg>
            </h3>
            
            <div className="flex flex-wrap gap-3 mt-2">
              {category.skills.map((skill, sIdx) => (
                <div 
                  key={sIdx}
                  className="px-3 py-1 bg-white border-2 border-black/80 rounded-sm shadow-[2px_2px_0_rgba(0,0,0,0.8)] text-xl font-bold transform hover:-translate-y-1 hover:shadow-[4px_4px_0_rgba(0,0,0,0.8)] transition-all cursor-default"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
