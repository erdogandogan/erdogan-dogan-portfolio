import Reveal from "@/components/Reveal";
import { SectionMarker } from "@/components/ui/SectionMarker";
import { about } from "@/lib/content";

export default function About() {
  return (
    <section id="hakkimda" className="mx-auto max-w-5xl px-6 py-24 md:py-32">
      <Reveal>
        <div className="md:grid md:grid-cols-[minmax(0,220px)_1fr] md:gap-12">
          <div>
            <SectionMarker index={1} />
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
              {about.heading}
            </h2>
          </div>

          <div className="mt-8 md:mt-0">
            <p className="max-w-2xl border-l-2 border-accent/30 pl-6 text-base leading-relaxed text-foreground-muted md:text-lg">
              {about.paragraph}
            </p>

            {/* Tamamlanmış bir proje değil, yönelim ifadesi: proje kartlarından
                ayrışsın diye kesikli kenarlık, rozet/tag yok. */}
            <Reveal delay={0.1}>
              <aside className="mt-10 max-w-2xl rounded-2xl border border-dashed border-accent/40 bg-accent-strong/5 p-6 md:p-8">
                <p className="font-mono text-xs text-accent">{about.focus.label}</p>
                <h3 className="mt-2 text-lg font-semibold tracking-tight text-foreground">
                  {about.focus.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-foreground-muted md:text-base">
                  {about.focus.paragraph}
                </p>
              </aside>
            </Reveal>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
