import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, MapPin } from "@phosphor-icons/react/dist/ssr";
import { areas } from "@/lib/content";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { AreaMap } from "@/components/sections/AreaMap";
import { CTABlock } from "@/components/sections/CTABlock";
import { BreadcrumbSchema } from "@/components/schema/JsonLd";

export const metadata: Metadata = {
  title: "Service Areas — Dallas, Plano, Frisco",
  description:
    "Apex Roofing serves the entire Dallas-Fort Worth metro. Two crews dispatched daily. Average emergency response 2.5 hours.",
  alternates: { canonical: "/service-areas" },
};

export default function ServiceAreasHub() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Service Areas", url: "/service-areas" },
        ]}
      />

      <section className="hero-pad-top pb-12 md:pb-16">
        <div className="container-x">
          <Eyebrow>Service areas</Eyebrow>
          <h1 className="h-display mt-5 max-w-[18ch]">
            We work the entire <span className="text-[var(--rust)]">DFW metro.</span>
          </h1>
          <p className="lede mt-6 max-w-2xl">
            Two crews dispatched daily from East Dallas. Below are our three
            primary service cities — but we cover the entire metro from Frisco
            down to Cedar Hill.
          </p>
        </div>
      </section>

      <AreaMap />

      <section className="section-y">
        <div className="container-x">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {areas.map((a, i) => (
              <Reveal key={a.slug} delay={i * 0.06}>
                <Link
                  href={`/service-areas/${a.slug}` as never}
                  className="group flex h-full flex-col justify-between rounded-[24px] border border-[var(--line)] bg-[var(--paper)] p-5 sm:p-7 transition-all duration-500 hover:-translate-y-1 hover:border-[var(--ink-2)] min-h-[280px] sm:min-h-[340px]"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[color-mix(in_oklch,var(--rust)_12%,transparent)] text-[var(--rust)]">
                        <MapPin size={18} weight="fill" />
                      </span>
                      <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[var(--paper-2)] text-[var(--ink-2)] transition-all duration-500 group-hover:bg-[var(--ink)] group-hover:text-[var(--paper)] group-hover:translate-x-1 group-hover:-translate-y-1">
                        <ArrowUpRight size={14} weight="bold" />
                      </span>
                    </div>
                    <h2 className="h-sub mt-8 font-bold">
                      {a.name}, TX
                    </h2>
                    <p className="mt-1 font-mono text-[10.5px] uppercase tracking-[0.16em] text-[var(--muted)]">
                      {a.county} • {a.population} pop
                    </p>
                    <p className="mt-5 text-[14px] leading-[1.65] text-[var(--ink-2)] line-clamp-4">
                      {a.intro}
                    </p>
                  </div>
                  <div className="mt-7 border-t border-[var(--line)] pt-4">
                    <p className="font-mono text-[10.5px] uppercase tracking-[0.16em] text-[var(--muted)]">
                      {a.neighborhoods.length} neighbourhoods
                    </p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTABlock />
    </>
  );
}
