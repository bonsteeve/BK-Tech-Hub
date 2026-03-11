export default function HomePage() {
  return (
    <main className="container py-24">
      <div className="surface-glow rounded-lg border border-border bg-card/70 p-8 backdrop-blur">
        <p className="mb-3 inline-flex rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-accent">
          Rebuild In Progress
        </p>
        <h1 className="mb-4 font-heading text-4xl font-semibold tracking-tight text-balance">
          BK Tech Hub Next.js Foundation Ready
        </h1>
        <p className="max-w-2xl text-muted-foreground">
          The App Router foundation, dark premium theme tokens, and shared utilities are now in place.
          Full marketing pages are being implemented in the next step branches.
        </p>
      </div>
    </main>
  );
}
