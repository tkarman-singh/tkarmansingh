import React from 'react';
import { RetroWindow } from './RetroWindow';

export function ProfileSection() {
  return (
    <div className="min-h-screen flex items-center justify-center py-[90px] px-[24px] md:px-[150px] relative" id="profile-section">
      <span className="absolute top-[40px] left-1/2 -translate-x-1/2 text-[11px] tracking-[.3em] uppercase text-[#6b6a56]">
        01 · about
      </span>
      
      <RetroWindow title="C:\KARMAN\about_me">
        <div className="flex flex-col md:flex-row items-center gap-[26px]">
          <img 
            src="/profile.jpg" 
            alt="Karman Singh" 
            className="w-[118px] h-[118px] rounded-full object-cover bg-[#6b6e45] shrink-0 border-2 border-[#c9c2a3]"
          />
          <div className="text-center md:text-left">
            <h2 className="font-fraunces text-[24px] font-semibold text-[#df7a3e] m-0 mb-3 leading-[1.15]">
              About me
            </h2>
            <p className="text-[13px] text-[#3f3f2e] leading-[1.6] m-0">
              I am a passionate Full Stack Developer with a strong foundation in Computer Science. I specialize in building robust, scalable web architectures and crafting beautiful, intuitive user experiences. I thrive on solving complex problems with clean, efficient code and am always eager to learn and explore new technologies.
            </p>
          </div>
        </div>
      </RetroWindow>
    </div>
  );
}
