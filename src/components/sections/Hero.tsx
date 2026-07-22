"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "../ui/Button";
import { ArrowRight, Terminal } from "lucide-react";

export function Hero() {
  const [titleIndex, setTitleIndex] = useState(0);
  const [fade, setFade] = useState(true);

  const names = [
    "KARMAN",
    "करमन", // Hindi / Marathi
    "ਕਰਮਨ", // Punjabi
    "কারমান", // Bengali
    "కర్మన్", // Telugu
    "கர்மன்", // Tamil
    "カルマン", // Japanese
    "卡曼", // Chinese
    "Карман" // Russian
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setTitleIndex((prev) => (prev + 1) % names.length);
        setFade(true);
      }, 300);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section 
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center bg-[#19101A] overflow-hidden pt-10"
    >
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSA0MCAwIEwgMCAwIDAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] z-0"></div>

      <div className="absolute top-1/4 left-1/4 w-[40vw] h-[40vw] rounded-full bg-[--color-accent-1] mix-blend-screen filter blur-[150px] opacity-10 -z-10"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[30vw] h-[30vw] rounded-full bg-[--color-accent-3] mix-blend-screen filter blur-[150px] opacity-10 -z-10"></div>

      <div className="relative w-full max-w-5xl mx-auto flex flex-col items-center justify-center h-[400px] sm:h-[500px] md:h-[600px] z-10 mt-10">
        
        {/* Center Image Container */}
        <div className="relative w-[150px] h-[150px] sm:w-[210px] sm:h-[210px] md:w-[300px] md:h-[300px] z-0 shadow-2xl">
           <Image 
             src="/profile.jpg" 
             alt="Karman Singh" 
             fill 
             className="object-cover" 
             priority
           />
           <div className="absolute inset-0 bg-[#EC69FA] mix-blend-multiply opacity-20"></div>
        </div>

        {/* Left Text */}
        <h2 className="absolute left-2 sm:left-4 md:-left-8 top-[10%] sm:top-[15%] md:top-[25%] text-2xl sm:text-4xl md:text-6xl font-light text-white tracking-widest z-10">
          NAMASTE,
        </h2>

        {/* Right Text */}
        <h2 className="absolute right-2 sm:right-4 md:right-16 top-[10%] sm:top-[15%] md:top-[25%] text-2xl sm:text-4xl md:text-6xl font-light text-white tracking-widest z-10">
          I'M
        </h2>

        {/* Animated Center Name */}
        <h1 
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center text-5xl sm:text-7xl md:text-[10rem] font-bold tracking-tighter text-white z-20 whitespace-nowrap transition-opacity duration-300 drop-shadow-2xl ${fade ? 'opacity-100' : 'opacity-0'}`}
          style={{ textShadow: '0 4px 30px rgba(0,0,0,0.8)' }}
        >
           {names[titleIndex]}
        </h1>

        {/* Bottom Right Text */}
        <h2 className="absolute right-2 sm:right-4 md:-right-8 bottom-[10%] md:bottom-[5%] text-3xl sm:text-5xl md:text-[7rem] font-light text-white tracking-widest leading-none z-10">
          SINGH
        </h2>

      </div>

      <div className="mt-8 flex flex-col items-center z-10 w-full px-4">
        <h2 className="text-sm sm:text-lg md:text-2xl text-[color:var(--color-muted)] font-medium mb-8 text-center flex flex-wrap justify-center items-center gap-x-2 gap-y-1">
          <span>Software Engineer</span>
          <span className="text-white/30 hidden sm:inline">|</span>
          <span>Full Stack Developer</span>
          <span className="text-white/30 hidden lg:inline">|</span>
          <span>DevOps Engineer</span>
          <span className="text-white/30 hidden sm:inline">|</span>
          <span>ML Enthusiast</span>
        </h2>

        <div className="flex flex-col sm:flex-row gap-4 items-center mb-10 w-full sm:w-auto">
          <Button magnetic variant="primary" onClick={() => document.getElementById('projects')?.scrollIntoView({behavior: 'smooth'})} className="w-full sm:w-auto">
            View My Work <ArrowRight size={18} />
          </Button>
          <Button magnetic variant="outline" onClick={() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'})} className="w-full sm:w-auto">
            <Terminal size={18} /> Contact Me
          </Button>
        </div>
      </div>
    </section>
  );
}
