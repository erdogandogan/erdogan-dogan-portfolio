import type { Project } from "@/lib/content";

function getCommentLabel(project: Project) {
  if (project.featured) return "// bitirme projesi";
  if (project.status) return "// müşteri projesi";
  return "// kişisel proje";
}

function StatusTag({ project }: { project: Project }) {
  const isLive = project.status?.toLowerCase().startsWith("canlı");

  return (
    <div className="flex flex-wrap items-center gap-2 font-mono text-[11px] text-foreground-muted">
      <span className="border border-border px-1.5 py-0.5">v1.0</span>
      {project.status ? (
        <span className="flex items-center gap-1.5">
          <span
            className={
              isLive
                ? "h-1.5 w-1.5 rounded-full bg-accent"
                : "h-1.5 w-1.5 rounded-full border border-foreground-muted"
            }
            aria-hidden
          />
          {project.status}
        </span>
      ) : null}
    </div>
  );
}

export default function ProjectCard({ project }: { project: Project }) {
  if (project.featured) {
    return (
      <article className="flex h-full flex-col rounded-2xl border border-border bg-background-elevated p-6 transition-colors hover:border-accent-strong/60 md:p-10">
        <p className="font-mono text-xs text-foreground-muted">{getCommentLabel(project)}</p>

        <div className="mt-3 grid grid-cols-1 gap-8 lg:grid-cols-[1fr_auto]">
          <div>
            <p className="mb-3 font-mono text-xs text-accent">{project.badge}</p>
            <h3 className="text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
              {project.title}
            </h3>
            <ul className="mt-4 space-y-2 text-sm leading-relaxed text-foreground-muted">
              {project.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </div>

          <div className="flex flex-row flex-wrap gap-2 lg:w-40 lg:flex-col lg:items-end lg:justify-start">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="rounded-sm border border-border px-2.5 py-1 text-center font-mono text-xs text-foreground-muted"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-auto pt-6">
          <StatusTag project={project} />
        </div>
      </article>
    );
  }

  return (
    <article className="group flex h-full flex-col justify-between rounded-2xl border border-border p-6 transition-colors hover:border-accent-strong/60 md:p-8">
      <div>
        <p className="mb-3 font-mono text-xs text-foreground-muted">{getCommentLabel(project)}</p>

        <h3 className="text-lg font-semibold tracking-tight text-foreground">{project.title}</h3>

        <ul className="mt-4 space-y-2 text-sm leading-relaxed text-foreground-muted">
          {project.bullets.map((bullet) => (
            <li key={bullet}>{bullet}</li>
          ))}
        </ul>
      </div>

      <div className="mt-6 space-y-4">
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="rounded-sm border border-border px-2.5 py-1 font-mono text-xs text-foreground-muted"
            >
              {tech}
            </span>
          ))}
        </div>

        <StatusTag project={project} />
      </div>
    </article>
  );
}
