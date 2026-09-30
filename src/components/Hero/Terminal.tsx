"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";
import { useIsClient } from "@/lib/useIsClient";

const TYPE_SPEED_MS = 45;
const LINE_PAUSE_MS = 350;

type Phase = "name" | "role" | "done";

export function Terminal({
  command,
  name,
  role,
}: {
  command: string;
  name: string;
  role: string;
}) {
  const prefersReducedMotion = useReducedMotion();
  const isClient = useIsClient();
  const reduce = isClient && !!prefersReducedMotion;

  const [typedName, setTypedName] = useState("");
  const [typedRole, setTypedRole] = useState("");
  const [phase, setPhase] = useState<Phase>("name");

  useEffect(() => {
    if (reduce) return;

    let cancelled = false;
    let i = 0;
    const id = setInterval(() => {
      if (cancelled) return;
      i++;
      setTypedName(name.slice(0, i));
      if (i >= name.length) {
        clearInterval(id);
        setTimeout(() => {
          if (!cancelled) setPhase("role");
        }, LINE_PAUSE_MS);
      }
    }, TYPE_SPEED_MS);

    return () => {
      cancelled = true;
      clearInterval(id);
    };
  }, [name, reduce]);

  useEffect(() => {
    if (reduce || phase !== "role") return;

    let cancelled = false;
    let i = 0;
    const id = setInterval(() => {
      if (cancelled) return;
      i++;
      setTypedRole(role.slice(0, i));
      if (i >= role.length) {
        clearInterval(id);
        setPhase("done");
      }
    }, TYPE_SPEED_MS);

    return () => {
      cancelled = true;
      clearInterval(id);
    };
  }, [phase, role, reduce]);

  const displayName = reduce ? name : typedName;
  const displayRole = reduce ? role : typedRole;
  const showNameCursor = !reduce && phase === "name";
  const showRoleCursor = reduce || phase !== "name";

  return (
    <div className="w-full border border-border bg-background-elevated">
      <div className="flex items-center gap-1.5 border-b border-border px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-accent/60" aria-hidden />
        <span className="h-2.5 w-2.5 rounded-full bg-accent/40" aria-hidden />
        <span className="h-2.5 w-2.5 rounded-full bg-accent/25" aria-hidden />
      </div>

      <div className="px-5 py-6">
        <p className="font-mono text-sm text-foreground-muted" aria-hidden>
          <span className="text-accent">$</span> {command}
        </p>

        <h1 className="sr-only">
          {name} — {role}
        </h1>

        <div aria-hidden>
          <p className="mt-3 font-mono text-sm text-accent">
            {displayName}
            {showNameCursor ? <Cursor blink={!reduce} /> : null}
          </p>
          <p className="mt-1 text-2xl font-semibold tracking-tight text-foreground md:text-4xl">
            {displayRole}
            {showRoleCursor ? <Cursor blink={!reduce} /> : null}
          </p>
        </div>
      </div>
    </div>
  );
}

function Cursor({ blink }: { blink: boolean }) {
  return (
    <span
      aria-hidden
      className={cn(
        "ml-0.5 inline-block h-[0.85em] w-[0.5em] -translate-y-[0.05em] bg-accent align-middle",
        blink && "animate-cursor-blink"
      )}
    />
  );
}
