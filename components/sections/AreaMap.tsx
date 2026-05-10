"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { areas } from "@/lib/content";
import { Reveal } from "@/components/ui/Reveal";

const MapBackground = dynamic(() => import("@/components/map/MapBackground"), {
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 bg-[var(--paper-2)]" aria-hidden />
  ),
});

export function AreaMap() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [shouldLoadMap, setShouldLoadMap] = useState(false);

  useEffect(() => {
    if (!sectionRef.current || shouldLoadMap) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setShouldLoadMap(true);
          observer.disconnect();
        }
      },
      { rootMargin: "300px" }
    );
    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [shouldLoadMap]);

  return (
    <section ref={sectionRef} className="relative overflow-hidden border-y border-[var(--line)]">
      {/* Map fills entire section */}
      <div className="absolute inset-0 -z-0 map-warm-filter">
        {shouldLoadMap ? (
          <MapBackground />
        ) : (
          <div className="absolute inset-0 bg-[var(--paper-2)]" aria-hidden />
        )}
      </div>

      {/* Warm cream wash over the map so palette stays consistent */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(90deg, color-mix(in oklch, var(--paper) 60%, transparent) 0%, color-mix(in oklch, var(--paper) 20%, transparent) 50%, transparent 100%)",
        }}
      />
      {/* Top/bottom fade to blend with adjacent sections */}
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-24 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, var(--paper) 0%, transparent 100%)",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-24 pointer-events-none"
        style={{
          background:
            "linear-gradient(0deg, var(--paper) 0%, transparent 100%)",
        }}
      />

      <div className="container-x relative py-10 sm:py-16 md:py-32 lg:py-40 min-h-[420px] sm:min-h-[640px] lg:min-h-[760px] flex items-center">
        <div className="grid w-full gap-6 sm:gap-8 lg:grid-cols-12">
          {/* Left — overlaid glass card */}
          <div className="max-w-[340px] sm:max-w-none lg:col-span-6 xl:col-span-5">
            <Reveal>
              <div className="bezel-shell backdrop-blur-md">
                <div className="bezel-core p-4 sm:p-9">
                  <div className="flex items-center gap-2 font-mono text-[9px] sm:text-[10.5px] uppercase tracking-[0.22em] text-[var(--muted)]">
                    <span className="inline-block h-1 w-6 bg-[var(--rust)]" />
                    Service areas
                  </div>
                  <h2 className="h-section mt-2 sm:mt-4 text-[20px] leading-[1.1] sm:text-inherit">
                    We work the entire DFW metro<span className="text-[var(--rust)]">.</span>
                  </h2>
                  <p className="body-copy mt-2 sm:mt-4 max-w-md text-[12.5px] leading-snug sm:text-inherit">
                    Two crews dispatched daily from East Dallas. Emergency tarp
                    response inside Loop 12 averages 2.5 hours.
                  </p>

                  <ul className="mt-4 sm:mt-8 divide-y divide-[var(--line)] border-y border-[var(--line)]">
                    {areas.map((a, i) => (
                      <li key={a.slug}>
                        <Link
                          href={`/service-areas/${a.slug}` as never}
                          className="group flex items-center justify-between gap-2 py-2.5 sm:py-4 transition-colors hover:text-[var(--rust)]"
                        >
                          <div className="flex items-center gap-2.5 sm:gap-4 min-w-0">
                            <span className="font-mono text-[9px] sm:text-[10px] tabular-nums tracking-[0.18em] text-[var(--muted)] shrink-0">
                              /{String(i + 1).padStart(2, "0")}
                            </span>
                            <div className="min-w-0">
                              <p className="truncate font-display text-[13px] sm:text-[17px] font-semibold tracking-[-0.015em] text-[var(--ink)] group-hover:text-[var(--rust)] transition-colors">
                                {a.name}
                              </p>
                              <p className="truncate font-mono text-[8.5px] sm:text-[10px] uppercase tracking-[0.14em] text-[var(--muted)]">
                                {a.county} • {a.population} pop
                              </p>
                            </div>
                          </div>
                          <span className="inline-flex h-6 w-6 sm:h-8 sm:w-8 shrink-0 items-center justify-center rounded-full border border-[var(--line-2)] text-[var(--ink-2)] transition-all duration-500 group-hover:bg-[var(--ink)] group-hover:text-[var(--paper)] group-hover:border-[var(--ink)] group-hover:translate-x-1 group-hover:-translate-y-1">
                            <ArrowUpRight size={10} weight="bold" />
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>

                  <p className="mt-3 sm:mt-6 font-mono text-[8.5px] sm:text-[10px] uppercase tracking-[0.18em] text-[var(--muted)]">
                    + 8 other DFW cities covered on request
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right — floating legend */}
          <div className="lg:col-span-5 lg:col-start-8 xl:col-span-4 xl:col-start-9 flex lg:items-end lg:justify-end">
            <Reveal delay={0.1}>
              <div className="inline-flex flex-col gap-2 rounded-2xl border border-[var(--line)] bg-[color-mix(in_oklch,var(--paper)_88%,transparent)] p-4 backdrop-blur-md shadow-[0_20px_40px_-20px_color-mix(in_oklch,var(--ink)_25%,transparent)]">
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--muted)]">
                  Coverage map
                </p>
                <div className="flex items-center gap-2.5 text-[12px] text-[var(--ink-2)]">
                  <span className="h-2.5 w-2.5 rounded-full bg-[var(--rust)]" />
                  Primary cities
                </div>
                <div className="flex items-center gap-2.5 text-[12px] text-[var(--ink-2)]">
                  <span className="h-2.5 w-2.5 rounded-full bg-[var(--ink)]" />
                  Secondary coverage
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
