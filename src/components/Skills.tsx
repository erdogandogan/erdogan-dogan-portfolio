import Reveal from "@/components/Reveal";
import { SectionMarker } from "@/components/ui/SectionMarker";
import { skillGroups } from "@/lib/content";

export default function Skills() {
  return (
    <section id="beceriler" className="mx-auto max-w-5xl px-6 py-24 md:py-32">
      <Reveal>
        <SectionMarker index={3} />
        <h2 className="mt-3 text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
          Beceriler
        </h2>
      </Reveal>

      <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, i) => (
          <Reveal key={group.heading} delay={Math.min(i * 0.05, 0.2)}>
            <h3 className="text-sm font-medium text-foreground-muted">{group.heading}</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-sm border border-border px-2.5 py-1 font-mono text-xs text-foreground"
                >
                  {item}
                </span>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
