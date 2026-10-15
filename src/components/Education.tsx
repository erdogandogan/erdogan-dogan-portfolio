import { Certificate, GraduationCap } from "@phosphor-icons/react/dist/ssr";
import Reveal from "@/components/Reveal";
import { SectionMarker } from "@/components/ui/SectionMarker";
import { certifications, education } from "@/lib/content";

export default function Education() {
  return (
    <section id="egitim" className="mx-auto max-w-5xl px-6 py-16 md:py-20">
      <Reveal>
        <div className="md:pl-8">
          <SectionMarker index={4} />
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
            Eğitim &amp; Sertifikalar
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

        {certifications.map((cert) => (
          <div
            key={cert.verifyUrl}
            className="mt-4 flex items-start gap-4 rounded-2xl border border-border p-6 md:ml-8 md:p-8"
          >
            <Certificate size={24} weight="regular" className="mt-0.5 shrink-0 text-accent" />
            <div>
              <p className="font-medium text-foreground">{cert.title}</p>
              <p className="mt-1 text-sm text-foreground-muted">{cert.issuer}</p>
              <p className="mt-1 font-mono text-xs text-foreground-muted">{cert.date}</p>
              <p className="mt-3 text-sm text-foreground-muted">{cert.detail}</p>
              <a
                href={cert.verifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-block font-mono text-xs text-accent underline-offset-4 hover:underline"
              >
                Sertifikayı doğrula ↗
              </a>
            </div>
          </div>
        ))}
      </Reveal>
    </section>
  );
}
