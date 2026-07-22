"use client";

import { useEffect, useRef } from "react";
import anime from "animejs";
import { Code2, Server, Database, BrainCircuit, Cloud, GitBranch } from "lucide-react";

const skills = [
  { category: "Frontend", items: ["React.js", "Next.js", "TypeScript", "Tailwind CSS"], icon: Code2, color: "text-blue-400" },
  { category: "Backend", items: ["Node.js", "Express.js", "REST APIs", "JWT"], icon: Server, color: "text-green-400" },
  { category: "Database", items: ["MongoDB", "PostgreSQL", "SQL", "DBMS"], icon: Database, color: "text-purple-400" },
  { category: "Cloud & DevOps", items: ["AWS", "Docker", "Kubernetes", "CI/CD"], icon: Cloud, color: "text-orange-400" },
  { category: "Machine Learning", items: ["Python", "HuggingFace", "Computer Vision", "NLP"], icon: BrainCircuit, color: "text-pink-400" },
  { category: "Core & Tools", items: ["C/C++", "Java", "Git/GitHub", "Linux"], icon: GitBranch, color: "text-red-400" },
];

export function Skills() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            anime({
              targets: ".skill-card",
              translateY: [50, 0],
              opacity: [0, 1],
              scale: [0.9, 1],
              delay: anime.stagger(100),
              easing: "easeOutElastic(1, .8)",
              duration: 1000,
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleHover = (e: React.MouseEvent<HTMLDivElement>) => {
    const icon = e.currentTarget.querySelector('.skill-icon');
    if (icon) {
      anime({
        targets: icon,
        rotate: [0, 360],
        scale: [1, 1.2, 1],
        duration: 800,
        easing: "easeOutElastic(1, .5)",
      });
    }
  };

  return (
    <section id="skills" ref={sectionRef} className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Technical <span className="text-gradient">Arsenal</span></h2>
          <p className="text-[color:var(--color-muted)] max-w-2xl text-lg">
            A comprehensive toolkit built through hands-on experience in full-stack development, cloud infrastructure, and machine learning.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div
                key={index}
                className="skill-card opacity-0 glass-card p-6 relative group cursor-crosshair overflow-hidden"
                onMouseEnter={handleHover}
              >
                {/* Hover Glow Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="flex items-center gap-4 mb-6 relative z-10">
                  <div className={`p-3 rounded-xl bg-white/5 ${skill.color} border border-white/10 group-hover:border-white/20 transition-colors`}>
                    <Icon size={24} className="skill-icon" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{skill.category}</h3>
                </div>

                <div className="flex flex-wrap gap-2 relative z-10">
                  {skill.items.map((item, i) => (
                    <span 
                      key={i}
                      className="px-3 py-1 rounded-full text-sm font-medium bg-white/5 text-white/80 border border-white/5 group-hover:border-white/10 transition-colors"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
