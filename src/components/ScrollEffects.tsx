"use client";

import { useEffect } from "react";

export function ScrollEffects() {
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          const maxScroll = document.body.scrollHeight - window.innerHeight;
          const scrollProgress = scrollY / (maxScroll || 1);

          // Update CSS variable for global scroll progress
          document.documentElement.style.setProperty('--scroll-progress', scrollProgress.toString());

          // Subtle Parallax for hero elements if they exist
          const heroBlob1 = document.querySelector('.hero-blob-1') as HTMLElement;
          const heroBlob2 = document.querySelector('.hero-blob-2') as HTMLElement;
          
          if (heroBlob1) heroBlob1.style.transform = `translateY(${scrollY * 0.3}px) scale(${1 + scrollProgress * 0.5})`;
          if (heroBlob2) heroBlob2.style.transform = `translateY(${scrollY * 0.15}px) scale(${1 - scrollProgress * 0.2})`;

          // Parallax for project cards
          const projectCards = document.querySelectorAll('.project-card');
          projectCards.forEach((card) => {
            const htmlElement = card as HTMLElement;
            const rect = htmlElement.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
               const offset = (rect.top - window.innerHeight / 2) * 0.05;
               htmlElement.style.transform = `translateY(${offset}px) rotateX(${-offset * 0.1}deg)`;
            }
          });

          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return null;
}
