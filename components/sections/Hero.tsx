import Image from "next/image";
import { ShieldCheck, Star, ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { Button } from "@/components/ui/Button";
import { site } from "@/lib/config";
import { telHref } from "@/lib/utils";

export function Hero() {
  return (
    <section className="relative isolate h-screen flex flex-col overflow-hidden bg-[var(--ink)]">
      {/* Background photo — Next/Image auto-serves AVIF/WebP at viewport size */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/Hero background.png"
          alt=""
          fill
          priority
          fetchPriority="high"
          quality={72}
          sizes="100vw"
          className="object-cover object-[60%_45%] scale-[1.02]"
        />
      </div>

      {/* Cinematic scrim — covers the editorial column, lets the right edge breathe */}
      <div
        aria-hidden
        className="absolute inset-0 z-[1]"
        style={{
          background:
            "linear-gradient(92deg, color-mix(in oklch, var(--ink) 40%, transparent) 0%, color-mix(in oklch, var(--ink) 30%, transparent) 35%, color-mix(in oklch, var(--ink) 20%, transparent) 55%, transparent 70%)",
        }}
      />
      {/* Top + bottom feathering — keeps nav and section seam clean */}
      <div
        aria-hidden
        className="absolute inset-0 z-[1]"
        style={{
          background:
            "linear-gradient(180deg, color-mix(in oklch, var(--ink) 35%, transparent) 0%, color-mix(in oklch, var(--ink) 15%, transparent) 14%, transparent 28%, transparent 68%, color-mix(in oklch, var(--ink) 40%, transparent) 100%)",
        }}
      />
      {/* Warm rust accent — subtle, sunset side */}
      <div
        aria-hidden
        className="absolute inset-0 z-[1]"
        style={{
          background:
            "radial-gradient(38% 55% at 88% 30%, color-mix(in oklch, var(--rust) 12%, transparent) 0%, transparent 70%)",
        }}
      />
      {/* Fine grain — kills banding without hurting perf */}
      <div
        aria-hidden
        className="absolute inset-0 z-[2] opacity-[0.06] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/><feColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
        }}
      />

      <div className="container-x relative z-10 flex flex-col flex-1 justify-end text-[var(--paper)] pb-16">
        {/* Editorial — text-led, full-bleed photo behind */}
        <div className="mt-12 w-full">
          <h1 className="h-display !text-white drop-shadow-[0_2px_24px_rgba(0,0,0,0.45)]">
            The roof
            <br />
            <span className="text-white">your neighbours</span>
            <br />
            keep recommending<span className="text-[var(--rust)]">.</span>
          </h1>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <Button href="/quote" variant="paper" size="lg">
              Free inspection
            </Button>
            <a
              href={telHref(site.phone)}
              className="group inline-flex items-center gap-3 pl-1 text-[14.5px] font-medium text-white"
            >
              <span>or call {site.phone}</span>
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-white/40 transition-all duration-500 group-hover:bg-white group-hover:text-[var(--ink)] group-hover:border-white">
                <ArrowUpRight size={11} weight="bold" />
              </span>
            </a>
          </div>
        </div>

        {/* Eyebrow row — small, premium */}
        <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-b border-white/15 pb-5">
          <span className="flex items-center gap-2 font-mono text-[10.5px] uppercase tracking-[0.22em] text-white/75">
            <span className="inline-block h-1 w-6 bg-[var(--rust)]" />
            Roofing, Dallas — Fort Worth
          </span>
          <span className="hidden sm:flex items-center gap-2 font-mono text-[10.5px] uppercase tracking-[0.22em] text-white/75">
            Est. {site.founded}
            <span aria-hidden className="h-1 w-1 rounded-full bg-white/30" />
            License {site.license}
          </span>
        </div>

      </div>
    </section>
  );
}
