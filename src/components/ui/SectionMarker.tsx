import { cn } from "@/lib/utils";

type SectionMarkerProps = {
  index: number;
  className?: string;
};

export function SectionMarker({ index, className }: SectionMarkerProps) {
  const n = String(index).padStart(2, "0");

  return (
    <p
      aria-hidden
      className={cn(
        "select-none font-mono text-xs tracking-widest text-foreground-muted/70",
        className
      )}
    >
      {"───── // "}
      {n}
      {" ─────"}
    </p>
  );
}
