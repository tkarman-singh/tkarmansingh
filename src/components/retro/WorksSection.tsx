import React from 'react';

const skills = [
  { name: 'TypeScript', icon: 'TS' },
  { name: 'React', icon: 'Re' },
  { name: 'Next.js', icon: 'Nx' },
  { name: 'Tailwind', icon: 'Tw' },
  { name: 'Node.js', icon: 'No' },
  { name: 'Prisma', icon: 'Pr' },
  { name: 'PostgreSQL', icon: 'Pg' },
  { name: 'Git', icon: 'Gi' },
];

export function WorksSection() {
  return (
    <section className="scroll-mt-[80px] md:scroll-mt-[100px] min-h-screen flex flex-col items-center justify-center py-[90px] px-[24px] md:px-[150px] relative" id="works-section">
      <span className="absolute top-[40px] left-1/2 -translate-x-1/2 text-[13px] md:text-[16px] tracking-[.3em] uppercase text-[#6b6a56]">
        02 · works
      </span>
      
      <div className="w-full max-w-[780px] mt-[40px]">
        <h3 className="font-fraunces text-center text-[32px] md:text-[42px] font-medium tracking-wide mb-[50px] text-[#7c1f2b]">
          Technical Skills
        </h3>
        
        <div className="mb-[26px]">
          <h4 className="font-kalam text-[20px] md:text-[24px] text-[#df7a3e] m-0 mb-[24px] text-center">
            Languages & Frameworks
          </h4>
          <div className="grid grid-cols-4 md:grid-cols-8 gap-y-[30px] gap-x-[15px]">
            {skills.map((skill) => (
              <div key={skill.name} className="flex flex-col items-center gap-[12px] group">
                <div className="w-[56px] h-[56px] rounded-[16px] bg-[#f6f1e4] border-[1.5px] border-[#c9c2a3] flex items-center justify-center shrink-0 font-bold text-[#3f3f2e] text-[18px] transition-transform duration-300 group-hover:-translate-y-[4px] shadow-[0_4px_12px_rgba(0,0,0,0.03)] group-hover:shadow-[0_8px_20px_rgba(223,122,62,0.15)] group-hover:border-[#df7a3e]">
                  {skill.icon}
                </div>
                <span className="text-[12px] text-center text-[#6b6a56] font-medium group-hover:text-[#3f3f2e] transition-colors duration-300">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
