import React from 'react';
import { RetroWindow } from './RetroWindow';

export function ProfileSection() {
  return (
    <div className="min-h-screen flex items-center justify-center py-[90px] px-[24px] md:px-[150px] relative" id="profile-section">
      <span className="absolute top-[40px] left-1/2 -translate-x-1/2 text-[11px] tracking-[.3em] uppercase text-[#6b6a56]">
        01 · about
      </span>
      
      <RetroWindow title="C:\KARMAN\about_me">
        <div className="text-left">
          <h2 className="font-fraunces text-[24px] font-semibold text-[#df7a3e] m-0 mb-3 leading-[1.15]">
            About me
          </h2>
          <p className="text-[13px] text-[#3f3f2e] leading-[1.6] m-0">
            I am a passionate Software and DevOps Engineer with a strong foundation in Computer Science. I specialize in building scalable web applications, designing cloud-native infrastructures, and developing efficient, production-ready solutions. With experience in AI/ML, I enjoy solving complex real-world problems through intelligent systems and clean, maintainable code. I am always eager to learn emerging technologies, embrace new challenges, and create impactful software that delivers exceptional user experiences.
          </p>
        </div>
      </RetroWindow>
    </div>
  );
}
