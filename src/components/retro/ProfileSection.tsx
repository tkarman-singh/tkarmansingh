import React from 'react';
import { RetroWindow } from './RetroWindow';

export function ProfileSection() {
  return (
    <div className="min-h-screen flex items-center justify-center py-[90px] px-[24px] md:px-[150px] relative" id="profile-section">
      <span className="absolute top-[40px] left-1/2 -translate-x-1/2 text-[11px] tracking-[.3em] uppercase text-[#6b6a56]">
        01 · about
      </span>
      
      <div className="relative w-full max-w-[620px] aspect-[1.2] flex items-center justify-center p-[30px] md:p-[50px]">
        {/* Sticky Note Background */}
        <img 
          src="/about-note.png" 
          alt="Sticky Note" 
          className="absolute inset-0 w-full h-full object-fill z-0 drop-shadow-xl pointer-events-none"
        />
        
        {/* Content */}
        <div className="relative z-10 text-left w-full h-full pt-[10px] md:pt-[20px] px-[10px]">
          <h2 className="font-fraunces text-center text-[24px] md:text-[28px] font-semibold text-[#df7a3e] m-0 mb-3 leading-[1.15]">
            About me
          </h2>
          <div className="font-kalam text-[18px] md:text-[22px] text-[#3f3f2e] leading-[1.5] m-0 font-medium">
            <div className="float-left w-[40px] md:w-[60px] h-[80px] md:h-[100px]" />
            I am a passionate Software and DevOps Engineer with a strong foundation in Computer Science. I specialize in building scalable web applications, designing cloud-native infrastructures, and developing efficient, production-ready solutions. With experience in AI/ML, I enjoy solving complex real-world problems through intelligent systems and clean, maintainable code. I am always eager to learn emerging technologies, embrace new challenges, and create impactful software that delivers exceptional user experiences.
          </div>
        </div>
      </div>
    </div>
  );
}
