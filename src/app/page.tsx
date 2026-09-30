import Hero from "@/components/Hero";
import About from "@/components/About";
import ProjectsSection from "@/components/Projects/ProjectsSection";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <About />
      <ProjectsSection />
      <Skills />
      <Education />
      <Contact />
    </main>
  );
}
