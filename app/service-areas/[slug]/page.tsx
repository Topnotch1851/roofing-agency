import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { MapPin, ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { areas, services } from "@/lib/content";
import { areaPhotos, photos } from "@/lib/images";
import { site } from "@/lib/config";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { CTABlock } from "@/components/sections/CTABlock";
import { Reviews } from "@/components/sections/Reviews";
import { BreadcrumbSchema } from "@/components/schema/JsonLd";

export function generateStaticParams() {
  return areas.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const a = areas.find((x) => x.slug === slug);
  if (!a) return {};
  return {
    title: `Roofing in ${a.name}, TX`,
    description: `Roof replacement, repair, and storm restoration in ${a.name}. ${site.guarantee}, ${site.rating.value}★ across ${site.rating.count} Google reviews.`,
    alternates: { canonical: `/service-areas/${a.slug}` },
  };
}

export default async function AreaPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const a = areas.find((x) => x.slug === slug);
  if (!a) notFound();

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Service Areas", url: "/service-areas" },
          { name: a.name, url: `/service-areas/${a.slug}` },
        ]}
      />

      <section className="hero-pad-top pb-12 md:pb-24">
        <div className="container-x">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 font-mono text-[10.5px] uppercase tracking-[0.18em] text-[var(--muted)]">
            <span>Service Areas</span>
            <span aria-hidden>/</span>
            <span className="text-[var(--ink)]">{a.name}, TX</span>
          </nav>

          <div className="mt-7 grid gap-10 sm:gap-12 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <Reveal>
                <span className="eyebrow">
                  <MapPin size={11} weight="fill" />
                  {a.county} • {a.population} pop
                </span>
                <h1 className="h-display mt-5">
                  Roofing in <span className="text-[var(--rust)]">{a.name}</span>, TX.
                </h1>
                <p className="lede mt-6 max-w-xl">
                  {a.intro}
                </p>
                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <Button href="/quote" variant="ink" size="lg">
                    Free inspection
                  </Button>
                  <Button href={`tel:${site.phoneRaw}`} variant="ghost" size="lg" icon="phone">
                    {site.phone}
                  </Button>
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-5">
              <Reveal delay={0.1}>
                <div className="rounded-[24px] border border-[var(--line)] bg-[var(--paper-2)] p-6">
                  <h2 className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-[var(--muted)]">
                    Weather note
                  </h2>
                  <p className="mt-4 text-[14.5px] leading-[1.65] text-[var(--ink-2)]">
                    {a.weatherNote}
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Hero photo */}
      <section className="container-x">
        <Reveal>
          <div className="relative aspect-[16/8] overflow-hidden rounded-[28px] border border-[var(--line)]">
            <Image
              src={areaPhotos[a.slug] ?? photos.craftsman}
              alt={`Roofing in ${a.name}, TX`}
              fill
              sizes="(max-width: 1320px) 100vw, 1320px"
              className="object-cover"
              priority
            />
          </div>
        </Reveal>
      </section>

      {/* Neighborhoods + Recent jobs */}
      <section className="py-24 md:py-32">
        <div className="container-x">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <Reveal>
                <Eyebrow>Neighbourhoods we work</Eyebrow>
                <h2 className="mt-5 font-display text-[28px] font-bold leading-tight tracking-[-0.02em] sm:text-[36px] text-balance">
                  Coverage across {a.name}.
                </h2>
                <ul className="mt-8 grid grid-cols-2 gap-x-4 gap-y-1.5">
                  {a.neighborhoods.map((n) => (
                    <li
                      key={n}
                      className="border-b border-[var(--line)] py-2.5 font-display text-[15px] font-medium tracking-[-0.01em] text-[var(--ink-2)]"
                    >
                      {n}
                    </li>
                  ))}
                </ul>
                <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.15em] text-[var(--muted)]">
                  ZIP codes: {a.zips.join(" / ")}
                </p>
              </Reveal>
            </div>

            <div className="lg:col-span-6 lg:col-start-7">
              <Reveal delay={0.1}>
                <Eyebrow>Recent {a.name} jobs</Eyebrow>
                <h3 className="mt-5 font-display text-[28px] font-bold leading-tight tracking-[-0.02em] sm:text-[36px]">
                  Real homes, photographed.
                </h3>
                <ul className="mt-8 space-y-3">
                  {a.recentJobs.map((j, i) => (
                    <li key={i}>
                      <article className="rounded-[20px] border border-[var(--line)] bg-[var(--paper)] p-5">
                        <div className="flex items-center justify-between gap-4">
                          <span className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-[var(--rust)]">
                            {j.type}
                          </span>
                          <span className="font-mono text-[10.5px] uppercase tracking-[0.15em] text-[var(--muted)]">
                            {j.neighborhood}
                          </span>
                        </div>
                        <p className="mt-3 text-[14px] text-[var(--ink-2)]">{j.note}</p>
                      </article>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Services in this area */}
      <section className="py-24 md:py-32 bg-[var(--paper-2)] border-y border-[var(--line)]">
        <div className="container-x">
          <Reveal>
            <Eyebrow>Services in {a.name}</Eyebrow>
            <h2 className="mt-5 font-display text-[32px] font-bold leading-[1.05] tracking-[-0.025em] sm:text-[44px] lg:text-[52px] text-balance">
              All four services available across {a.name}.
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {services.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}` as never}
                className="group flex items-center justify-between gap-6 rounded-[24px] border border-[var(--line)] bg-[var(--paper)] p-6 transition-all duration-500 hover:-translate-y-0.5 hover:border-[var(--ink-2)]"
              >
                <div>
                  <h3 className="font-display text-[20px] font-semibold tracking-[-0.015em] text-[var(--ink)]">
                    {s.name} in {a.name}
                  </h3>
                  <p className="mt-1 text-[13.5px] leading-[1.55] text-[var(--ink-2)]">
                    {s.startingPrice} • {s.timeline.split(",")[0]}
                  </p>
                </div>
                <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--paper-3)] text-[var(--ink-2)] transition-all duration-500 group-hover:bg-[var(--ink)] group-hover:text-[var(--paper)] group-hover:translate-x-1 group-hover:-translate-y-1">
                  <ArrowUpRight size={15} weight="bold" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Reviews />
      <CTABlock />
    </>
  );
}
