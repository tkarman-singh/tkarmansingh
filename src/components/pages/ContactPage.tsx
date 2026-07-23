"use client";

import { MapPin, Mail, Phone } from "lucide-react";

export function ContactPage() {
  return (
    <div className="w-full h-full flex flex-col font-caveat text-gray-900 pt-6">
      <h2 className="text-5xl md:text-6xl font-bold mb-8 border-b-2 border-black/20 pb-4 inline-flex items-center gap-4 w-fit">
        <Mail size={48} className="text-black/60" />
        Let's Connect
      </h2>
      
      <div className="flex-grow flex flex-col justify-center items-center">
        
        {/* Taped Contact Card */}
        <div className="relative w-full max-w-md bg-white p-8 md:p-12 shadow-[5px_5px_15px_rgba(0,0,0,0.1)] border border-black/10 transform -rotate-1 group hover:rotate-1 transition-transform duration-300">
          
          {/* Tape */}
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-24 h-8 bg-yellow-100/50 backdrop-blur-sm border border-yellow-200/50 shadow-sm transform rotate-2 z-10 mix-blend-multiply"></div>

          <h3 className="text-4xl font-bold mb-8 text-center font-playfair">Reach Out</h3>
          
          <div className="space-y-8 text-2xl md:text-3xl">
            <a href="tel:+918725047467" className="flex items-center gap-4 hover:text-red-500 transition-colors">
              <Phone size={32} className="text-black/50" />
              <span>+91 8725047467</span>
            </a>
            
            <a href="mailto:t.karman.singh@gmail.com" className="flex items-center gap-4 hover:text-red-500 transition-colors">
              <Mail size={32} className="text-black/50" />
              <span>t.karman.singh@gmail.com</span>
            </a>
            
            <div className="flex items-center gap-4 cursor-default">
              <MapPin size={32} className="text-black/50" />
              <span>NIT Jalandhar, Punjab</span>
            </div>
          </div>
          
          {/* Socials link (simplified for this card, full links in footer) */}
          <div className="mt-12 pt-6 border-t border-dashed border-black/20 flex flex-col items-center">
            <p className="text-xl text-gray-500 italic font-playfair mb-2">Connect online</p>
            <div className="flex gap-6 text-2xl font-bold text-blue-600 underline decoration-wavy decoration-blue-300 underline-offset-4">
              <a href="https://linkedin.com/in/karman-singh" target="_blank" rel="noreferrer" className="hover:text-blue-800">LinkedIn</a>
              <a href="https://github.com/tkarman-singh" target="_blank" rel="noreferrer" className="hover:text-blue-800">GitHub</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
