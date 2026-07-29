import { Navbar } from "@/components/retro/Navbar";
import { HeroSection } from "@/components/retro/HeroSection";
import { ProfileSection } from "@/components/retro/ProfileSection";
import { WorksSection } from "@/components/retro/WorksSection";
import { ContactSection } from "@/components/retro/ContactSection";
import { FooterMarquee } from "@/components/retro/FooterMarquee";

export default function Home() {
  return (
    <main className="relative w-full overflow-hidden selection:bg-[#df7a3e] selection:text-white pb-[70px]">
      {/* Left Decorative Border */}
      <div 
        className="absolute top-0 left-0 bottom-0 w-[30px] md:w-[50px] z-50 pointer-events-none" 
        style={{ 
          backgroundImage: 'url(/ka-icon.png)', 
          backgroundRepeat: 'repeat-y', 
          backgroundSize: '100% auto' 
        }}
      />
      
      {/* Right Decorative Border */}
      <div 
        className="absolute top-0 right-0 bottom-0 w-[30px] md:w-[50px] z-50 pointer-events-none" 
        style={{ 
          backgroundImage: 'url(/ka-icon.png)', 
          backgroundRepeat: 'repeat-y', 
          backgroundSize: '100% auto' 
        }}
      />

      <Navbar />
      <HeroSection />
      <ProfileSection />
      <WorksSection />
      <ContactSection />
      
      <FooterMarquee />
      <footer className="text-center pt-[50px] pb-[70px] px-[20px] text-[11px] text-[#6b6a56] tracking-[.08em] font-mono">
        © 2026 Karman Singh. Built with Next.js & Tailwind.
      </footer>
    </main>
  );
}
