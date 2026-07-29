import React from 'react';
import Image from 'next/image';

interface WorkNoteProps {
  role: string;
  company: string;
  duration: string;
  description: string;
  hoverRotationClass?: string;
}

export function WorkNote({ 
  role, 
  company, 
  duration, 
  description,
  hoverRotationClass = "group-hover:rotate-[2deg]"
}: WorkNoteProps) {
  return (
    <div className="relative w-[85%] md:w-full max-w-[450px] group cursor-pointer">
      <Image 
        src="/work-note.png" 
        alt={`${company} Note`} 
        width={600} 
        height={800} 
        className={`w-full h-auto transition-all duration-300 group-hover:scale-[1.02] ${hoverRotationClass}`}
        priority
      />
      <div className="absolute inset-0 pt-[37%] pr-[16%] pb-[15%] pl-[20%] flex flex-col pointer-events-none text-left overflow-hidden">
        <div className="flex flex-col gap-[6px] mb-[12px]">
          <h4 className="font-kalam text-[clamp(18px,3.5vw,26px)] font-bold text-[#1f2328] leading-[1.1] m-0">{role}</h4>
          <div className="self-start">
            <span className="font-fraunces text-[clamp(10px,1.8vw,13px)] font-bold text-[#1f2328] bg-[#fdf0bc] px-[8px] py-[3px] rounded-[3px] shadow-sm tracking-wide">
              {company}
            </span>
          </div>
        </div>
        <p className="font-fraunces italic text-[clamp(12px,2vw,16px)] text-[#6b6a56] mb-[12px] m-0">{duration}</p>
        <ul className="list-[circle] pl-[18px] m-0 pr-[10px]">
          <li className="font-kalam text-[#3f3f2e] text-[clamp(13px,2.5vw,18px)] leading-[1.4]">
            {description}
          </li>
        </ul>
      </div>
    </div>
  );
}
