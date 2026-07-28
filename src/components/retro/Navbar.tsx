'use client';
import React from 'react';

export function Navbar() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#1a1a1a] shadow-md">
      <div className="max-w-[1200px] mx-auto px-[24px] md:px-[60px] py-[16px] md:py-[24px] flex items-center justify-between">
        {/* Logo */}
        <button 
          onClick={() => scrollTo('profile-section')}
          className="text-[#f4efdd] font-kalam text-[24px] md:text-[32px] font-bold tracking-widest hover:text-[#df7a3e] transition-colors cursor-pointer bg-transparent border-none"
        >
          :)
        </button>

        {/* Links */}
        <div className="flex items-center gap-[24px] md:gap-[50px]">
          <button 
            onClick={() => scrollTo('profile-section')}
            className="text-[#f4efdd] font-kalam text-[18px] md:text-[24px] hover:text-[#df7a3e] transition-colors cursor-pointer bg-transparent border-none"
          >
            about
          </button>
          <button 
            onClick={() => scrollTo('works-section')}
            className="text-[#f4efdd] font-kalam text-[18px] md:text-[24px] hover:text-[#df7a3e] transition-colors cursor-pointer bg-transparent border-none"
          >
            work
          </button>
          <button 
            onClick={() => scrollTo('contact-section')}
            className="text-[#f4efdd] font-kalam text-[18px] md:text-[24px] hover:text-[#df7a3e] transition-colors cursor-pointer bg-transparent border-none"
          >
            connect
          </button>
        </div>
      </div>
    </nav>
  );
}
