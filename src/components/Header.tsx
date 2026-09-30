"use client";

import { useState } from "react";
import { List, X } from "@phosphor-icons/react";
import { nav, site } from "@/lib/content";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border/80 bg-background/85 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <a href="#top" className="font-mono text-sm text-foreground">
          {site.name}
        </a>

        <nav className="hidden items-center gap-8 text-sm text-foreground-muted md:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          aria-label={open ? "Menüyü kapat" : "Menüyü aç"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-9 w-9 items-center justify-center text-foreground md:hidden"
        >
          {open ? <X size={22} weight="regular" /> : <List size={22} weight="regular" />}
        </button>
      </div>

      {open ? (
        <nav className="flex flex-col gap-1 border-t border-border/80 bg-background px-6 py-4 text-sm md:hidden">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="py-2 text-foreground-muted transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>
      ) : null}
    </header>
  );
}
