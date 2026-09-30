import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type CommandButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "bracket" | "prompt";
  download?: string;
  className?: string;
};

export function CommandButton({
  href,
  children,
  variant = "bracket",
  download,
  className,
}: CommandButtonProps) {
  return (
    <a
      href={href}
      download={download}
      className={cn(
        "group inline-flex h-11 items-center gap-2 border border-border px-5 font-mono text-sm text-foreground transition-colors hover:border-accent-strong hover:bg-accent-strong/5 hover:text-accent active:scale-[0.98]",
        className
      )}
    >
      {variant === "bracket" ? (
        <>
          <span aria-hidden className="text-accent">
            [
          </span>
          <span className="inline-flex items-center gap-2">{children}</span>
          <span aria-hidden className="text-accent">
            ]
          </span>
        </>
      ) : (
        <>
          <span aria-hidden className="text-accent">
            {">"}
          </span>
          <span className="inline-flex items-center gap-2">{children}</span>
        </>
      )}
    </a>
  );
}
