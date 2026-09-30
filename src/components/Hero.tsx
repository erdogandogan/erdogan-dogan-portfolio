import { ArrowRight, DownloadSimple } from "@phosphor-icons/react/dist/ssr";
import { StaggerReveal, StaggerItem } from "@/components/StaggerReveal";
import { Terminal } from "@/components/Hero/Terminal";
import { CodeSnippet } from "@/components/Hero/CodeSnippet";
import { CommandButton } from "@/components/ui/CommandButton";
import { hero } from "@/lib/content";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="relative mx-auto flex min-h-[100dvh] max-w-5xl flex-col justify-center gap-10 px-6 py-24">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-16">
          <div className="w-full lg:max-w-xl">
            <StaggerReveal>
              <StaggerItem>
                <Terminal command="whoami" name={hero.name} role={hero.headline} />
              </StaggerItem>

              <StaggerItem>
                <p className="mt-8 max-w-xl text-base leading-relaxed text-foreground-muted md:text-lg">
                  {hero.summary}
                </p>
              </StaggerItem>

              <StaggerItem className="mt-10 flex flex-wrap items-center gap-4">
                <CommandButton href={hero.primaryCta.href} variant="bracket">
                  {hero.primaryCta.label}
                  <ArrowRight
                    size={14}
                    weight="bold"
                    className="transition-transform group-hover:translate-x-0.5"
                  />
                </CommandButton>

                <CommandButton
                  href={hero.secondaryCta.href}
                  variant="prompt"
                  download="Erdogan_Dogan_CV.pdf"
                >
                  <DownloadSimple size={14} weight="bold" />
                  {hero.secondaryCta.label}
                </CommandButton>
              </StaggerItem>
            </StaggerReveal>
          </div>

          <div className="hidden flex-1 justify-center lg:flex">
            <CodeSnippet />
          </div>
        </div>
      </div>
    </section>
  );
}
