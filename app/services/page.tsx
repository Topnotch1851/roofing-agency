import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, House, Wrench, CloudLightning, Drop } from "@phosphor-icons/react/dist/ssr";
import { services } from "@/lib/content";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { CTABlock } from "@/components/sections/CTABlock";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { BreadcrumbSchema } from "@/components/schema/JsonLd";

const iconMap = {
  replacement: House,
  repair: Wrench,
  storm: CloudLightning,
  gutter: Drop,
} as const;

export const metadata: Metadata = {
  title: "Roofing Services in Dallas, TX",
  description:
    "Roof replacement, repair, storm-damage restoration, and gutters across the DFW metro. Licensed, insured, GAF Master Elite.",
  alternates: { canonical: "/services" },
};

export default function ServicesHub() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Services", url: "/services" },
        ]}
      />
      <section className="hero-pad-top pb-12 md:pb-16">
        <div className="container-x">
          <Eyebrow>Services</Eyebrow>
          <h1 className="h-display mt-5 max-w-[20ch]">
            Four services. <span className="text-[var(--rust)]">Done properly.</span>
          </h1>
          <p className="lede mt-6 max-w-2xl">
            We do not pretend to be a generalist contractor. We replace roofs,
            repair leaks, restore storm damage, and install gutters. Every job
            is staffed by W-2 Apex employees with an average tenure of 9 years.
          </p>
        </div>
      </section>

      <TrustStrip />

      <section className="section-y">
        <div className="container-x">
          <div className="grid gap-px overflow-hidden rounded-[24px] sm:rounded-[32px] border border-[var(--line)] bg-[var(--line)]">
            {services.map((s, i) => {
              const Icon = iconMap[s.iconKey];
              return (
                <Reveal key={s.slug} delay={i * 0.05}>
                  <Link
                    href={`/services/${s.slug}` as never}
                    className="group grid items-center gap-5 bg-[var(--paper)] p-5 transition-colors duration-500 hover:bg-[var(--paper-2)] sm:grid-cols-12 sm:gap-6 sm:p-10 lg:p-12"
                  >
                    <div className="flex items-center gap-3 sm:contents">
                      <span className="font-mono text-[11px] tabular-nums uppercase tracking-[0.18em] text-[var(--muted)] sm:col-span-1">
                        / {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="inline-flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-2xl bg-[var(--ink)] text-[var(--paper)] sm:col-span-1">
                        <Icon size={18} weight="duotone" />
                      </span>
                    </div>
                    <div className="sm:col-span-7">
                      <h2 className="h-sub font-bold">
                        {s.name}
                      </h2>
                      <p className="body-copy mt-2 max-w-2xl">
                        {s.short}
                      </p>
                    </div>
                    <div className="flex items-end justify-between gap-3 sm:contents">
                      <div className="sm:col-span-2 sm:text-right">
                        <p className="font-display text-[17px] sm:text-[18px] font-semibold tracking-[-0.015em] text-[var(--ink)]">
                          {s.startingPrice.replace("From ", "")}
                        </p>
                        <p className="font-mono text-[10px] sm:text-[10.5px] uppercase tracking-[0.16em] text-[var(--muted)]">
                          {s.timeline.split(",")[0]}
                        </p>
                      </div>
                      <span className="inline-flex h-10 w-10 sm:h-11 sm:w-11 sm:col-span-1 sm:justify-self-end items-center justify-center rounded-full bg-[var(--paper-3)] text-[var(--ink-2)] transition-all duration-500 group-hover:bg-[var(--ink)] group-hover:text-[var(--paper)] group-hover:translate-x-1 group-hover:-translate-y-1">
                        <ArrowUpRight size={14} weight="bold" />
                      </span>
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <CTABlock />
    </>
  );
}
