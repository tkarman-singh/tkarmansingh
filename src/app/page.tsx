import { Navbar } from "@/components/retro/Navbar";
import { HeroSection } from "@/components/retro/HeroSection";
import Image from 'next/image';
import { ProfileSection } from "@/components/retro/ProfileSection";
import { TechStackSection } from "@/components/retro/TechStackSection";
import { WorksSection } from "@/components/retro/WorksSection";
import { ProjectsSection } from "@/components/retro/ProjectsSection";
import { ContactSection } from "@/components/retro/ContactSection";
import { FooterMarquee } from "@/components/retro/FooterMarquee";
import { SideBorders } from "@/components/retro/SideBorders";

export default function Home() {
  return (
    <main className="relative w-full overflow-x-hidden selection:bg-[#df7a3e] selection:text-white pb-[70px]">
      <SideBorders />

      <Navbar />
      <HeroSection />
      <ProfileSection />
      <TechStackSection />
      <WorksSection />
      <ProjectsSection />
      <ContactSection />
      
      <div className="relative w-full pt-[20px]">
        {/* Left Decoration (17) */}
        <Image 
          src="/17.png" 
          alt="Decoration" 
          width={250}
          height={250}
          className="absolute top-[40%] -translate-y-1/2 left-[5%] md:left-[15%] w-[120px] md:w-[200px] h-auto object-contain pointer-events-none select-none z-0 drop-shadow-sm"
        />

        <FooterMarquee />
      </div>
      <footer className="text-center pt-[50px] pb-[70px] px-[20px] text-[11px] text-[#6b6a56] tracking-[.08em] font-mono">
        © 2026 Karman Singh. Built with Next.js & Tailwind.
      </footer>
      {/* 16.png and Text Decoration at Bottom Right Corner */}
      <div className="absolute bottom-[20px] right-[20px] md:bottom-[40px] md:right-[40px] flex flex-col items-center pointer-events-none z-10">
        <span className="font-kalam text-[#5a5a5a] text-[14px] md:text-[18px] mb-[10px] -rotate-6">
          The song will take you home
        </span>
        <Image 
          src="/16.png" 
          alt="Decoration" 
          width={200}
          height={200}
          className="w-[100px] md:w-[150px] h-auto object-contain select-none drop-shadow-sm"
        />
      </div>
    </main>
  );
}
