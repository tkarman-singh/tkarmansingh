"use client";

export function AboutPage() {
  return (
    <div className="w-full h-full flex flex-col font-caveat text-gray-900 pt-6">
      <h2 className="text-5xl md:text-6xl font-bold mb-8 border-b-2 border-black/20 pb-4 inline-block w-fit">
        About Me
      </h2>
      
      <div className="space-y-6 text-2xl md:text-3xl leading-relaxed max-w-2xl">
        <p>
          I am an IT undergraduate at NIT Jalandhar and a passionate Software Engineer. I specialize in building 
          scalable full-stack web applications, optimizing cloud infrastructure, and integrating machine learning models.
        </p>
        <p>
          My journey involves everything from designing complex systems using the MERN stack to deploying containerized 
          applications with Docker on AWS.
        </p>
      </div>

      {/* Sticky Note */}
      <div className="absolute top-10 right-4 md:right-10 w-48 h-48 bg-yellow-200 shadow-md transform rotate-3 p-4 flex flex-col justify-center items-center text-center">
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-10 h-4 bg-red-400/30 rotate-[-5deg]"></div>
        <p className="text-xl">Hackathon Finalist</p>
        <p className="text-3xl font-bold mt-2">IIT Delhi '25</p>
      </div>
      
    </div>
  );
}
