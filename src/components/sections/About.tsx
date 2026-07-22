"use client";

import { useEffect, useRef } from "react";
import anime from "animejs";

const stats = [
  { label: "Years Coding", value: 3, suffix: "+" },
  { label: "Sole qualifiers from punjab in IIT Delhi Hackathon 25", value: 1, suffix: "" },
  { label: "Technologies", value: 20, suffix: "+" },
];

export function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const countersRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true;
            
            // Text fade in
            anime({
              targets: ".about-text",
              translateY: [30, 0],
              opacity: [0, 1],
              delay: anime.stagger(200),
              easing: "easeOutQuart",
              duration: 800,
            });

            // Number counters
            const statElements = document.querySelectorAll('.stat-number');
            statElements.forEach((el, i) => {
              const finalValue = stats[i].value;
              anime({
                targets: el,
                innerHTML: [0, finalValue],
                round: 1,
                easing: 'easeOutExpo',
                duration: 2000,
                delay: i * 200
              });
            });
            
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-24 relative z-10">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="space-y-8">
            <div>
              <h2 className="about-text opacity-0 text-4xl md:text-5xl font-bold mb-6">
                About <span className="text-gradient">Me</span>
              </h2>
              <p className="about-text opacity-0 text-lg text-[color:var(--color-muted)] leading-relaxed mb-4">
                I am an IT undergraduate at NIT Jalandhar and a passionate Software Engineer. I specialize in building 
                scalable full-stack web applications, optimizing cloud infrastructure, and integrating machine learning models into production environments.
              </p>
              <p className="about-text opacity-0 text-lg text-[color:var(--color-muted)] leading-relaxed">
                My journey involves everything from designing complex systems using the MERN stack to deploying containerized 
                applications with Docker and Kubernetes on AWS. I'm driven by a desire to build high-impact products 
                that solve real-world problems.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6" ref={countersRef}>
            {stats.map((stat, i) => (
              <div 
                key={i} 
                className={`about-text opacity-0 glass-card p-8 flex flex-col items-center justify-center text-center group transition-transform duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(236,105,250,0.2)] ${i === 2 ? "col-span-2" : ""}`}
              >
                <div className="text-4xl md:text-5xl font-bold text-white mb-2 flex items-center">
                  <span className="stat-number">0</span>
                  <span className="text-[color:var(--color-accent-1)]">{stat.suffix}</span>
                </div>
                <div className="text-sm text-[color:var(--color-muted)] uppercase tracking-wider font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
