import { GraduationCap } from "@phosphor-icons/react/dist/ssr";
import Reveal from "@/components/Reveal";
import { SectionMarker } from "@/components/ui/SectionMarker";
import { education } from "@/lib/content";

export default function Education() {
  return (
    <section id="egitim" className="mx-auto max-w-5xl px-6 py-16 md:py-20">
      <Reveal>
        <div className="md:pl-8">
          <SectionMarker index={4} />
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
            Eğitim
          </h2>
        </div>

        <div className="mt-8 flex items-start gap-4 rounded-2xl border border-border p-6 md:ml-8 md:p-8">
          <GraduationCap size={24} weight="regular" className="mt-0.5 shrink-0 text-accent" />
          <div>
            <p className="font-medium text-foreground">{education.school}</p>
            <p className="mt-1 text-sm text-foreground-muted">{education.program}</p>
            <p className="mt-1 font-mono text-xs text-foreground-muted">{education.period}</p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
