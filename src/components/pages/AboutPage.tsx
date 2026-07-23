"use client";

import { Quote } from "lucide-react";

export function AboutPage() {
  return (
    <div className="w-full h-full flex flex-col font-caveat text-gray-900 pt-6 relative">
      <h2 className="text-5xl md:text-6xl font-bold mb-8 border-b-2 border-black/20 pb-4 inline-flex items-center gap-4 w-fit">
        <Quote size={48} className="text-black/60" />
        Professional Summary
      </h2>
      
      <div className="text-3xl md:text-4xl leading-relaxed mt-4">
        <p className="mb-6 indent-12">
          I am a Software Engineer and IT undergraduate at NIT Jalandhar with hands-on experience in full-stack development (MERN), cloud infrastructure (AWS, Docker, Kubernetes), and machine learning.
        </p>
        <p className="mb-6 indent-12">
          I have a proven ability to design and ship production-grade systems, and I am actively seeking a software engineering internship to contribute to scalable, high-impact products.
        </p>
      </div>
      
      {/* Absolute positioned doodle */}
      <div className="absolute bottom-10 right-10 opacity-60 flex flex-col items-center rotate-6">
        <div className="w-16 h-16 border-4 border-black rounded-full flex items-center justify-center">
          <div className="w-8 h-8 bg-black rounded-full"></div>
        </div>
        <span className="text-xl mt-2 font-bold font-playfair italic">Impact</span>
      </div>

    </div>
  );
}
