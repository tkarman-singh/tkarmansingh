'use client';
import React from 'react';

export function Navbar() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 pt-[20px] md:pt-[40px] pointer-events-none">
      <div className="flex items-center justify-center gap-[30px] md:gap-[50px] pointer-events-auto">
        <button 
          onClick={() => scrollTo('profile-section')}
          className="text-[#3f3f2e] font-kalam text-[18px] md:text-[22px] font-bold hover:text-[#df7a3e] transition-colors cursor-pointer bg-transparent border-none"
        >
          :)
        </button>
        <button 
          onClick={() => scrollTo('profile-section')}
          className="text-[#3f3f2e] font-kalam text-[16px] md:text-[20px] hover:text-[#df7a3e] transition-colors cursor-pointer bg-transparent border-none"
        >
          about
        </button>
        <button 
          onClick={() => scrollTo('works-section')}
          className="text-[#3f3f2e] font-kalam text-[16px] md:text-[20px] hover:text-[#df7a3e] transition-colors cursor-pointer bg-transparent border-none"
        >
          work
        </button>
        <button 
          onClick={() => scrollTo('contact-section')}
          className="text-[#3f3f2e] font-kalam text-[16px] md:text-[20px] hover:text-[#df7a3e] transition-colors cursor-pointer bg-transparent border-none"
        >
          connect
        </button>
      </div>
    </nav>
  );
}
