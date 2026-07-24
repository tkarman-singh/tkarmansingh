"use client";

import { MapPin, Mail, Phone } from "lucide-react";

export function ContactPage() {
  return (
    <div className="w-full h-full flex flex-col font-caveat text-gray-900 pt-6 relative">
      <h2 className="text-5xl md:text-6xl font-bold mb-8 border-b-2 border-black/20 pb-4 w-fit">
        Let's Connect
      </h2>
      
      <div className="flex-grow flex flex-col justify-center items-center">
        
        {/* Taped Contact Info Card */}
        <div className="relative w-full max-w-sm bg-white p-8 shadow-sm transform -rotate-2 border border-black/10">
          
          {/* Tape */}
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-24 h-8 bg-white/60 backdrop-blur-sm shadow-sm rotate-3 border border-black/5 mix-blend-overlay z-10"></div>
          
          <h3 className="text-4xl font-bold text-center mb-8 underline decoration-wavy decoration-yellow-400 underline-offset-4">
            Reach Out
          </h3>
          
          <div className="space-y-6 text-2xl">
            <a href="tel:+918725047467" className="flex items-center gap-4 hover:text-blue-600 transition-colors group">
              <div className="w-10 h-10 rounded-full border-2 border-black flex items-center justify-center group-hover:scale-110 transition-transform">
                <Phone size={20} />
              </div>
              <span className="font-sans text-xl">+91 8725047467</span>
            </a>
            
            <a href="mailto:t.karman.singh@gmail.com" className="flex items-center gap-4 hover:text-blue-600 transition-colors group">
              <div className="w-10 h-10 rounded-full border-2 border-black flex items-center justify-center group-hover:scale-110 transition-transform">
                <Mail size={20} />
              </div>
              <span className="font-sans text-xl">t.karman.singh@gmail.com</span>
            </a>
            
            <div className="flex items-center gap-4 group cursor-default">
              <div className="w-10 h-10 rounded-full border-2 border-black flex items-center justify-center">
                <MapPin size={20} />
              </div>
              <span className="font-sans text-xl">Jalandhar, Punjab, India</span>
            </div>
            
            <div className="flex items-center gap-4 pt-4 border-t border-dashed border-black/20">
              <a href="https://www.linkedin.com/in/t-karman-singh/" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-blue-600 hover:underline hover:text-blue-800 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                <span className="font-sans text-xl">LinkedIn</span>
              </a>
              
              <a href="https://github.com/tkarman-singh" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-gray-800 hover:underline hover:text-black transition-colors ml-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                <span className="font-sans text-xl">GitHub</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
