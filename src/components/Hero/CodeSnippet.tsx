const stack = [".NET 8", "Next.js", "React Native", "PostgreSQL", "Ollama"];

export function CodeSnippet() {
  return (
    <div
      aria-hidden
      className="hidden w-full max-w-sm select-none border border-border bg-background-elevated/60 p-6 font-mono text-xs leading-relaxed text-foreground-muted lg:block"
    >
      <p className="text-foreground-muted/60">{"// stack.ts"}</p>
      <p className="mt-3">
        <span className="text-accent">const</span> stack = [
      </p>
      {stack.map((item) => (
        <p key={item} className="pl-4">
          &quot;{item}&quot;,
        </p>
      ))}
      <p>];</p>
      <p className="mt-3">
        <span className="text-accent">export default</span> stack;
      </p>
    </div>
  );
}
