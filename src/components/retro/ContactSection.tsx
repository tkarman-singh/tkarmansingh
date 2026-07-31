import React from 'react';
import Image from 'next/image';

export function ContactSection() {
  return (
    <section className="scroll-mt-[80px] md:scroll-mt-[100px] min-h-screen flex flex-col items-center justify-center py-[90px] px-[24px] md:px-[60px] relative" id="contact-section">
      <span className="absolute top-[40px] left-1/2 -translate-x-1/2 text-[13px] md:text-[16px] tracking-[.3em] uppercase text-[#6b6a56]">
        05 · contact
      </span>

      {/* Top Left Decoration (14) */}
      <Image 
        src="/14.png" 
        alt="Decoration" 
        width={300}
        height={300}
        className="absolute top-[15%] md:top-[20%] left-[5%] md:left-[15%] w-[150px] md:w-[280px] h-auto object-contain pointer-events-none select-none z-0 drop-shadow-sm"
      />

      {/* Bottom Right Decoration (15) */}
      <Image 
        src="/15.png" 
        alt="Decoration" 
        width={300}
        height={300}
        className="absolute bottom-[10%] md:bottom-[20%] right-[5%] md:right-[15%] w-[180px] md:w-[320px] h-auto object-contain pointer-events-none select-none z-0 drop-shadow-sm"
      />
      
      {/* Postcard Container */}
      <div className="relative w-full max-w-[600px] mt-[60px]">
        {/* The Tape */}
        <div className="absolute -top-[15px] left-1/2 -translate-x-1/2 w-[120px] h-[35px] bg-[#e8e4d3]/70 backdrop-blur-[2px] z-20 shadow-[1px_2px_4px_rgba(0,0,0,0.05)] rotate-[-3deg]">
          {/* Jagged tape edges (simple pseudo-element simulation or just straight cut is fine for retro masking tape) */}
        </div>

        {/* The Card */}
        <div className="bg-[#fdf9f1] border-[1.5px] border-[#22241a] rounded-[4px] p-[40px] md:p-[60px] relative shadow-[6px_6px_0_rgba(0,0,0,1)] rotate-[1deg] hover:rotate-[0deg] transition-transform duration-300">
          
          {/* Decorative Postmark / Stamp */}
          <div className="absolute top-[30px] right-[40px] w-[60px] h-[60px] rounded-full border-[2px] border-dashed border-[#df7a3e]/40 flex items-center justify-center opacity-70 rotate-[15deg] pointer-events-none hidden md:flex">
            <span className="font-sans font-bold text-[#df7a3e] text-[10px] uppercase tracking-wider text-center leading-tight">
              Approved
            </span>
          </div>

          <h2 className="font-great-vibes text-[#d351f7] text-[50px] md:text-[70px] leading-none mb-[20px]">
            Let&apos;s connect!
          </h2>
          
          <p className="font-kalam text-[#5a5a5a] text-[18px] md:text-[22px] leading-[1.6] mb-[40px] max-w-[85%]">
            I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your visions. Drop me a line!
          </p>

          <div className="flex flex-col gap-[20px]">
            <div className="flex flex-col sm:flex-row sm:items-baseline gap-[5px] sm:gap-[15px]">
              <span className="font-sans font-bold text-[#6b6a56] text-[12px] tracking-[.1em] uppercase w-[90px]">Email</span>
              <a href="mailto:t.karman.singh@gmail.com" className="font-kalam text-[#2a2a2a] text-[20px] md:text-[24px] border-b-[2px] border-dashed border-[#22241a]/30 hover:text-[#df7a3e] hover:border-[#df7a3e] transition-colors w-fit">
                t.karman.singh@gmail.com
              </a>
            </div>
            
            <div className="flex flex-col sm:flex-row sm:items-baseline gap-[5px] sm:gap-[15px]">
              <span className="font-sans font-bold text-[#6b6a56] text-[12px] tracking-[.1em] uppercase w-[90px]">LinkedIn</span>
              <a href="https://www.linkedin.com/in/t-karman-singh/" target="_blank" rel="noopener noreferrer" className="font-kalam text-[#2a2a2a] text-[20px] md:text-[24px] border-b-[2px] border-dashed border-[#22241a]/30 hover:text-[#d351f7] hover:border-[#d351f7] transition-colors w-fit">
                /in/t-karman-singh
              </a>
            </div>
            
            <div className="flex flex-col sm:flex-row sm:items-baseline gap-[5px] sm:gap-[15px]">
              <span className="font-sans font-bold text-[#6b6a56] text-[12px] tracking-[.1em] uppercase w-[90px]">GitHub</span>
              <a href="https://github.com/tkarman-singh" target="_blank" rel="noopener noreferrer" className="font-kalam text-[#2a2a2a] text-[20px] md:text-[24px] border-b-[2px] border-dashed border-[#22241a]/30 hover:text-[#df7a3e] hover:border-[#df7a3e] transition-colors w-fit">
                @tkarman-singh
              </a>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-baseline gap-[5px] sm:gap-[15px]">
              <span className="font-sans font-bold text-[#6b6a56] text-[12px] tracking-[.1em] uppercase w-[90px]">Resume</span>
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="font-kalam text-[#2a2a2a] text-[20px] md:text-[24px] border-b-[2px] border-dashed border-[#22241a]/30 hover:text-[#d351f7] hover:border-[#d351f7] transition-colors w-fit">
                Have a peek
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
