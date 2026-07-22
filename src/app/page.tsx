import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Experience } from "@/components/sections/Experience";
import { Projects } from "@/components/sections/Projects";
import { ScrollEffects } from "@/components/ScrollEffects";
import { CursorTracker } from "@/components/CursorTracker";

export default function Home() {
  return (
    <>
      <CursorTracker />
      <ScrollEffects />
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
      </main>
      <Footer />
    </>
  );
}
