import Link from "next/link";
import {
  House,
  Wrench,
  CloudLightning,
  Drop,
  ArrowUpRight,
} from "@phosphor-icons/react/dist/ssr";
import { services, type Service } from "@/lib/content";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";

const iconMap = {
  replacement: House,
  repair: Wrench,
  storm: CloudLightning,
  gutter: Drop,
} as const;

function ServiceCard({ s, featured }: { s: Service; featured?: boolean }) {
  const Icon = iconMap[s.iconKey];
  return (
    <Link
      href={`/services/${s.slug}` as never}
      className={`group relative flex flex-col justify-between overflow-hidden rounded-[24px] sm:rounded-[28px] border border-[var(--line)] bg-[var(--paper)] p-5 sm:p-7 transition-all duration-700 ease-[var(--ease-haptic)] hover:border-[var(--ink-2)] hover:-translate-y-1 ${
        featured ? "lg:col-span-2 lg:row-span-1" : ""
      }`}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-[var(--rust)] opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-30"
      />

      <div className="flex items-start justify-between">
        <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--ink)] text-[var(--paper)]">
          <Icon size={20} weight="duotone" />
        </div>
        <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[var(--paper-2)] text-[var(--ink-2)] transition-all duration-500 group-hover:bg-[var(--ink)] group-hover:text-[var(--paper)] group-hover:translate-x-1 group-hover:-translate-y-1">
          <ArrowUpRight size={15} weight="bold" />
        </span>
      </div>

      <div className="mt-12">
        <h3 className="h-card font-bold">
          {s.name}
        </h3>
        <p className="body-copy mt-3 max-w-md">
          {s.short}
        </p>
        <div className="mt-6 flex items-center gap-3 border-t border-[var(--line)] pt-4">
          <span className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-[var(--muted)]">
            {s.startingPrice}
          </span>
          <span aria-hidden className="h-1 w-1 rounded-full bg-[var(--line-2)]" />
          <span className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-[var(--muted)]">
            {s.timeline.split(",")[0]}
          </span>
        </div>
      </div>
    </Link>
  );
}

export function ServicesGrid() {
  return (
    <section id="services" className="section-y">
      <div className="container-x">
        <div className="max-w-3xl">
          <Reveal>
            <Eyebrow>What we do</Eyebrow>
            <h2 className="h-section mt-5 max-w-[18ch]">
              Four services. <span className="text-[var(--rust)]">Done properly.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="lede mt-6 max-w-xl">
              We do not pretend to be a generalist. Roofs, repairs, storm
              claims, gutters. The same crew handles every job — there is no
              separate B-team for warranty work.
            </p>
          </Reveal>
        </div>

        <Reveal>
          <div className="mt-10 sm:mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-2">
            {services.map((s) => (
              <ServiceCard key={s.slug} s={s} />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
