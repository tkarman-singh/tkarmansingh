import { Navbar } from "@/components/retro/Navbar";
import { HeroSection } from "@/components/retro/HeroSection";
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
      
      <FooterMarquee />
      <footer className="text-center pt-[50px] pb-[70px] px-[20px] text-[11px] text-[#6b6a56] tracking-[.08em] font-mono">
        © 2026 Karman Singh. Built with Next.js & Tailwind.
      </footer>
    </main>
  );
}
