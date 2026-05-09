import { SealCheck, ShieldCheck, Star } from "@phosphor-icons/react/dist/ssr";
import { trustLogos } from "@/lib/content";

function GoogleG({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path fill="#4285F4" d="M23.49 12.27c0-.79-.07-1.54-.19-2.27H12v4.51h6.44c-.28 1.5-1.12 2.77-2.39 3.62v3.01h3.86c2.26-2.08 3.58-5.15 3.58-8.87z" />
      <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.86-3.01c-1.08.72-2.45 1.16-4.07 1.16-3.13 0-5.78-2.11-6.73-4.96H1.29v3.09C3.26 21.3 7.31 24 12 24z" />
      <path fill="#FBBC05" d="M5.27 14.28A7.21 7.21 0 0 1 4.86 12c0-.79.14-1.56.38-2.28V6.63H1.29A11.99 11.99 0 0 0 0 12c0 1.94.46 3.78 1.29 5.41l3.98-3.13z" />
      <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.31 0 3.26 2.7 1.29 6.63l3.98 3.09C6.22 6.86 8.87 4.75 12 4.75z" />
    </svg>
  );
}

function Mark({ kind }: { kind: "seal" | "shield" | "google" | "star" }) {
  if (kind === "google") return <GoogleG className="h-4 w-4" />;
  if (kind === "shield") return <ShieldCheck size={16} weight="duotone" className="text-[var(--ink)]" />;
  if (kind === "star") return <Star size={16} weight="fill" className="text-[var(--rust)]" />;
  return <SealCheck size={16} weight="duotone" className="text-[var(--ink)]" />;
}

export function TrustStrip() {
  return (
    <section className="border-y border-[var(--line)] bg-[var(--paper-2)]">
      <div className="container-x">
        <div className="flex flex-col items-start gap-6 py-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-[10.5px] uppercase tracking-[0.2em] text-[var(--muted)]">
            Trusted across DFW since 2009 —
          </p>
          <ul className="flex flex-wrap items-center gap-x-6 gap-y-3 sm:gap-x-8">
            {trustLogos.map((l) => (
              <li
                key={l.name}
                className="flex items-center gap-2 font-display text-[13.5px] font-semibold tracking-[-0.01em] text-[var(--ink-2)]"
              >
                <Mark kind={l.mark} />
                <span className="hidden sm:inline">{l.name}</span>
                <span className="sm:hidden">{l.name.split(" ").slice(0, 2).join(" ")}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
