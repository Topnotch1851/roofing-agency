export default function Loading() {
  return (
    <div className="flex min-h-[60dvh] items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="relative h-12 w-12">
          <div className="absolute inset-0 animate-spin rounded-full border-2 border-[var(--line)] border-t-[var(--rust)]" />
        </div>
        <p className="font-mono text-[10.5px] uppercase tracking-[0.2em] text-[var(--muted)]">
          Loading
        </p>
      </div>
    </div>
  );
}
