"use client";

import { Code2 } from "lucide-react";

export function SkillsPage() {
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
      skills: ["Node.js", "Express.js", "RESTful APIs", "JWT", "AES-256"]
    },
    {
      title: "Databases",
      skills: ["MongoDB", "SQL", "DBMS"]
    },
    {
      title: "Cloud & DevOps",
      skills: ["AWS (ECS, EKS, CodePipeline, CodeBuild)", "Docker", "Kubernetes", "CI/CD", "GitHub Actions"]
    },
    {
      title: "Core CS Fundamentals",
      skills: ["Data Structures & Algorithms", "OS", "Computer Networks", "OOPs", "Design Patterns"]
    },
    {
      title: "Machine Learning",
      skills: ["Machine Learning", "Computer Vision", "HuggingFace Transformers", "Sentiment Analysis", "Remote Sensing"]
    },
    {
      title: "Developer Tools",
      skills: ["Git", "GitHub", "Linux", "NLP", "Agile", "SDLC"]
    }
  ];

  return (
    <div className="w-full h-full flex flex-col font-caveat text-gray-900 pt-6 relative">
      <h2 className="text-5xl md:text-6xl font-bold mb-8 border-b-2 border-black/20 pb-4 inline-flex items-center gap-4 w-fit">
        <Code2 size={48} className="text-black/60" />
        Technical Skills
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
        {skillCategories.map((category, idx) => (
          <div key={idx} className="mb-2">
            <h3 className="text-3xl font-bold italic mb-3 underline decoration-wavy decoration-black/20 underline-offset-4">{category.title}</h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, sIdx) => (
                <span 
                  key={sIdx}
                  className="inline-block px-3 py-1 bg-white border border-black/30 shadow-[2px_2px_0_rgba(0,0,0,0.5)] text-xl rotate-1 hover:-rotate-1 transition-transform cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
