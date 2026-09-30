import { EnvelopeSimple, Phone, GithubLogo, DownloadSimple } from "@phosphor-icons/react/dist/ssr";
import Reveal from "@/components/Reveal";
import { SectionMarker } from "@/components/ui/SectionMarker";
import { contact } from "@/lib/content";

export default function Contact() {
  return (
    <section id="iletisim" className="mx-auto max-w-5xl px-6 py-24 md:py-32">
      <Reveal>
        <div className="md:grid md:grid-cols-[minmax(0,220px)_1fr] md:gap-12">
          <div>
            <SectionMarker index={5} />
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
              İletişim
            </h2>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-foreground-muted">
              Bir pozisyon veya proje için görüşmek isterseniz aşağıdaki kanallardan bana
              ulaşabilirsiniz.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 md:mt-0">
            <a
              href={`mailto:${contact.email}`}
              className="flex items-center gap-4 rounded-2xl border border-border p-5 transition-colors hover:border-accent-strong/60"
            >
              <EnvelopeSimple size={22} weight="regular" className="shrink-0 text-accent" />
              <div>
                <p className="text-sm font-medium text-foreground">E-posta</p>
                <p className="mt-0.5 text-sm text-foreground-muted">{contact.email}</p>
              </div>
            </a>

            <a
              href={`tel:${contact.phoneHref}`}
              className="flex items-center gap-4 rounded-2xl border border-border p-5 transition-colors hover:border-accent-strong/60"
            >
              <Phone size={22} weight="regular" className="shrink-0 text-accent" />
              <div>
                <p className="text-sm font-medium text-foreground">Telefon</p>
                <p className="mt-0.5 text-sm text-foreground-muted">{contact.phone}</p>
              </div>
            </a>

            <a
              href={contact.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 rounded-2xl border border-border p-5 transition-colors hover:border-accent-strong/60"
            >
              <GithubLogo size={22} weight="regular" className="shrink-0 text-accent" />
              <div>
                <p className="text-sm font-medium text-foreground">GitHub</p>
                <p className="mt-0.5 text-sm text-foreground-muted">{contact.github}</p>
              </div>
            </a>

            <a
              href={contact.cvUrl}
              download="Erdogan_Dogan_CV.pdf"
              className="flex items-center gap-4 rounded-2xl border border-border p-5 transition-colors hover:border-accent-strong/60"
            >
              <DownloadSimple size={22} weight="regular" className="shrink-0 text-accent" />
              <div>
                <p className="text-sm font-medium text-foreground">CV</p>
                <p className="mt-0.5 text-sm text-foreground-muted">PDF indir</p>
              </div>
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
