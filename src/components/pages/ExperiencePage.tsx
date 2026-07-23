"use client";

const experiences = [
  {
    role: "DevOps Engineer & ML Enthusiast",
    company: "Self-Employed / Projects",
    date: "2023 - Present",
    desc: "Building containerized applications, integrating machine learning pipelines, and deploying to AWS."
  },
  {
    role: "Full Stack Developer",
    company: "Freelance",
    date: "2022 - 2023",
    desc: "Developed modern web applications using React, Next.js, and Node.js for various clients."
  }
];

export function ExperiencePage() {
  return (
    <div className="w-full h-full flex flex-col font-caveat text-gray-900 pt-6">
      <h2 className="text-5xl md:text-6xl font-bold mb-8 border-b-2 border-black/20 pb-4 inline-block w-fit">
        Experience
      </h2>
      
      <div className="relative pl-8">
        {/* Vertical hand-drawn timeline line */}
        <svg className="absolute left-0 top-2 bottom-0 w-4 h-full" preserveAspectRatio="none">
          <path d="M2,0 Q8,100 2,200 T2,400 T2,600 T2,800" fill="none" stroke="rgba(0,0,0,0.3)" strokeWidth="3" strokeLinecap="round" />
        </svg>

        <div className="space-y-10">
          {experiences.map((exp, idx) => (
            <div key={idx} className="relative">
              {/* Node dot */}
              <div className="absolute -left-[37px] top-2 w-4 h-4 bg-red-400 rounded-full border-2 border-black"></div>
              
              <div className="bg-white/50 p-4 border border-black/20 shadow-sm rotate-1 hover:-rotate-1 transition-transform">
                <h3 className="text-3xl font-bold">{exp.role}</h3>
                <div className="text-xl text-gray-600 flex items-center justify-between mt-1">
                  <span className="underline decoration-wavy decoration-red-300">{exp.company}</span>
                  <span className="bg-yellow-200 px-2 rotate-[-2deg] font-playfair italic text-sm">{exp.date}</span>
                </div>
                <p className="mt-3 text-2xl leading-tight">
                  {exp.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
