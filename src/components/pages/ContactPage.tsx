"use client";

import { Send, MapPin, Mail, Phone } from "lucide-react";

export function ContactPage() {
  return (
    <div className="w-full h-full flex flex-col font-caveat text-gray-900 pt-6">
      <h2 className="text-5xl md:text-6xl font-bold mb-8 border-b-2 border-black/20 pb-4 inline-block w-fit">
        Let's Connect
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        
        {/* Contact Info */}
        <div className="space-y-6">
          <p className="text-3xl leading-snug">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </p>
          
          <div className="space-y-4 text-2xl pt-4">
            <div className="flex items-center gap-3 hover:text-blue-700 transition-colors cursor-pointer">
              <Mail className="rotate-[-10deg]" /> karman.singh.mail@gmail.com
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="rotate-[5deg]" /> Punjab, India
            </div>
            <div className="flex items-center gap-3 hover:text-blue-700 transition-colors cursor-pointer">
              <Phone className="rotate-[-15deg]" /> +91 XXXXXXXXXX
            </div>
          </div>
          
          {/* Hand drawn arrow pointing to form */}
          <div className="hidden md:block absolute left-1/2 top-1/2 rotate-[-10deg] opacity-60">
            <span className="text-xl">Drop a note!</span>
            <svg width="60" height="40" viewBox="0 0 100 100">
              <path d="M10,50 Q40,30 90,50 L70,30 M90,50 L70,70" fill="none" stroke="black" strokeWidth="3" strokeLinecap="round" />
            </svg>
          </div>
        </div>

        {/* Notepad Form */}
        <div className="relative">
          {/* Tape */}
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-20 h-6 bg-white/40 backdrop-blur-sm rotate-[-2deg] border border-black/5 z-20"></div>
          
          <form className="bg-yellow-50 p-6 shadow-md border border-yellow-200 rotate-1 relative z-10" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-4">
              <div>
                <label className="block text-xl font-bold mb-1">Name</label>
                <input type="text" className="w-full bg-transparent border-b-2 border-black/30 focus:border-black outline-none px-2 py-1 text-2xl font-caveat" placeholder="John Doe" />
              </div>
              <div>
                <label className="block text-xl font-bold mb-1">Email</label>
                <input type="email" className="w-full bg-transparent border-b-2 border-black/30 focus:border-black outline-none px-2 py-1 text-2xl font-caveat" placeholder="john@example.com" />
              </div>
              <div>
                <label className="block text-xl font-bold mb-1">Message</label>
                <textarea rows={4} className="w-full bg-transparent border-b-2 border-black/30 focus:border-black outline-none px-2 py-1 text-2xl font-caveat resize-none leading-relaxed" placeholder="Write your message here..."></textarea>
              </div>
              
              <button className="flex items-center gap-2 border-2 border-black/60 px-4 py-2 hover:bg-black/5 transition-colors transform hover:-translate-y-1 text-2xl">
                Send <Send size={18} />
              </button>
            </div>
          </form>
        </div>

      </div>
    </div>
  );
}
