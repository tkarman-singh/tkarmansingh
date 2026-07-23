"use client";

const skills = [
  { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Anime.js"] },
  { category: "Backend", items: ["Node.js", "Express", "Python", "REST APIs", "GraphQL"] },
  { category: "Database", items: ["PostgreSQL", "MongoDB", "Prisma", "Redis"] },
  { category: "DevOps & Cloud", items: ["Docker", "AWS", "CI/CD", "Linux", "Git"] },
];

export function SkillsPage() {
  return (
    <div className="w-full h-full flex flex-col font-caveat text-gray-900 pt-6">
      <h2 className="text-5xl md:text-6xl font-bold mb-8 border-b-2 border-black/20 pb-4 inline-block w-fit">
        Technical Skills
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skills.map((skillGroup, idx) => (
          <div key={idx} className="relative">
            {/* Hand-drawn underline for category */}
            <h3 className="text-3xl font-bold mb-4 inline-block relative">
              {skillGroup.category}
              <svg className="absolute -bottom-2 left-0 w-full h-3" preserveAspectRatio="none" viewBox="0 0 100 100">
                <path d="M0,50 Q50,90 100,50" fill="none" stroke="rgba(255,0,0,0.4)" strokeWidth="4" strokeLinecap="round" />
              </svg>
            </h3>
            
            <div className="flex flex-wrap gap-3">
              {skillGroup.items.map((skill, i) => (
                <span 
                  key={i} 
                  className="px-4 py-1 text-xl bg-white border-2 border-black/80 shadow-[4px_4px_0_rgba(0,0,0,0.8)] transform -rotate-1 hover:rotate-2 hover:-translate-y-1 transition-all cursor-crosshair"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Doodles */}
      <div className="absolute bottom-10 right-10 opacity-60">
        <svg width="100" height="100" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="40" fill="none" stroke="blue" strokeWidth="2" strokeDasharray="5,5" />
          <path d="M30,50 L50,70 L80,30" fill="none" stroke="blue" strokeWidth="4" strokeLinecap="round" />
        </svg>
      </div>
    </div>
  );
}
