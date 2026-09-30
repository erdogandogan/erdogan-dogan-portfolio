"use client";

import { useState } from "react";
import { CaretDown } from "@phosphor-icons/react";
import { otherProjects } from "@/lib/content";

export default function OtherProjectsAccordion() {
  const [open, setOpen] = useState(false);

  return (
    <div className="rounded-2xl border border-border">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-center justify-between px-6 py-5 text-left text-sm font-medium text-foreground"
      >
        Diğer Projeler
        <CaretDown
          size={16}
          weight="bold"
          className={`text-foreground-muted transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open ? (
        <div className="grid grid-cols-1 gap-4 border-t border-border px-6 py-5 md:grid-cols-2">
          {otherProjects.map((project) => (
            <div key={project.title}>
              <p className="text-sm font-medium text-foreground">{project.title}</p>
              <p className="mt-1 text-sm leading-relaxed text-foreground-muted">{project.detail}</p>
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
}
