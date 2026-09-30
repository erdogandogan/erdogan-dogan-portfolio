import Reveal from "@/components/Reveal";
import ProjectCard from "@/components/Projects/ProjectCard";
import OtherProjectsAccordion from "@/components/Projects/OtherProjectsAccordion";
import { SectionMarker } from "@/components/ui/SectionMarker";
import { projects } from "@/lib/content";

export default function ProjectsSection() {
  return (
    <section id="projeler" className="mx-auto max-w-5xl px-6 py-24 md:py-32">
      <Reveal>
        <SectionMarker index={2} />
        <h2 className="mt-3 text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
          Öne Çıkan Projeler
        </h2>
      </Reveal>

      <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2">
        {projects.map((project, i) => (
          <Reveal
            key={project.slug}
            delay={Math.min(i * 0.05, 0.2)}
            className={project.featured ? "md:col-span-2" : ""}
          >
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-4">
        <OtherProjectsAccordion />
      </Reveal>
    </section>
  );
}
