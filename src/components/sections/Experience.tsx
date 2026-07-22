"use client";

import { useEffect, useRef } from "react";
import anime from "animejs";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    company: "IIRS, ISRO",
    role: "Summer Software Intern",
    date: "June 2026 – July 2026",
    points: [
      "Developing a Java 21 application to automate processing of Sentinel-2 Level-2A multispectral satellite imagery for large-scale vegetation analysis.",
      "Implemented the MSAVI2 algorithm using Band 4 (Red) and Band 8 (NIR) and engineered a batch-processing pipeline to extract JPEG2000 spectral bands and export outputs in ENVI BSQ format.",
      "Gained expertise in geospatial raster processing, scientific image analysis, and remote sensing data workflows."
    ]
  },
  {
    company: "GDGC, NIT Jalandhar",
    role: "Full Stack Developer",
    date: "January 2025 - April 2026",
    points: [
      "Developed and maintained full-stack features for HackMol, the official hackathon platform supporting event registrations, participant management, and live hackathon operations.",
      "Built responsive React.js UI components and integrated RESTful APIs using Node.js and Express.js (MERN stack), improving platform user experience and reliability.",
      "Performed debugging and performance optimization to ensure platform stability under high-traffic conditions during live events."
    ]
  }
];

export function Experience() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            
            anime({
              targets: ".timeline-line",
              height: ["0%", "100%"],
              easing: "easeInOutSine",
              duration: 1500,
            });

            anime({
              targets: ".timeline-item",
              translateX: [-50, 0],
              opacity: [0, 1],
              delay: anime.stagger(400, { start: 500 }),
              easing: "easeOutQuart",
              duration: 1000,
            });

            anime({
              targets: ".timeline-dot",
              scale: [0, 1],
              opacity: [0, 1],
              delay: anime.stagger(400, { start: 500 }),
              easing: "easeOutBack",
              duration: 800,
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

  return (
    <section id="experience" ref={sectionRef} className="py-24 relative z-10 bg-black/20">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Work <span className="text-gradient">Experience</span></h2>
          <p className="text-[color:var(--color-muted)] max-w-2xl mx-auto text-lg">
            My professional journey and contributions.
          </p>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-1 bg-white/10 rounded-full">
            <div className="timeline-line absolute top-0 left-0 w-full bg-[--color-accent-1] rounded-full" style={{ height: "0%" }}></div>
          </div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div 
                key={index}
                className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? "md:flex-row-reverse" : ""} items-center gap-8 md:gap-16`}
              >
                {/* Timeline Dot */}
                <div className="timeline-dot opacity-0 absolute left-[-28px] md:left-1/2 md:-translate-x-1/2 w-14 h-14 rounded-full bg-[--color-background] border-4 border-[--color-accent-1] flex items-center justify-center z-10 shadow-[0_0_20px_rgba(99,102,241,0.5)]">
                  <Briefcase size={20} className="text-[--color-accent-1]" />
                </div>

                {/* Content */}
                <div className="timeline-item opacity-0 w-full md:w-1/2 pl-12 md:pl-0">
                  <div className={`glass-card p-8 group transition-transform duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(236,105,250,0.2)] ${index % 2 === 0 ? "md:ml-12 text-left" : "md:mr-12 text-left md:text-right"}`}>
                    <div className={`flex flex-col gap-2 mb-6 ${index % 2 === 0 ? "items-start" : "items-start md:items-end"}`}>
                      <h3 className="text-2xl font-bold text-white group-hover:text-[--color-accent-3] transition-colors">{exp.role}</h3>
                      <h4 className="text-xl text-[color:var(--color-accent-1)] font-medium">{exp.company}</h4>
                      <div className="flex items-center gap-2 text-sm text-[color:var(--color-muted)] font-mono bg-white/5 px-3 py-1 rounded-full border border-white/10 mt-2">
                        <Calendar size={14} />
                        {exp.date}
                      </div>
                    </div>
                    
                    <ul className={`space-y-3 text-[color:var(--color-muted)] text-sm md:text-base ${index % 2 === 0 ? "" : "md:list-inside"}`}>
                      {exp.points.map((point, i) => (
                        <li key={i} className="flex gap-3">
                          <span className="text-[--color-accent-1] mt-1.5">•</span>
                          <span className={index % 2 === 0 ? "text-left" : "text-left md:text-right"}>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
