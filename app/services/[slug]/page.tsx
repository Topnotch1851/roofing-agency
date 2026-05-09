import { notFound } from "next/navigation";
import Image from "next/image";
import type { Metadata } from "next";
import { CheckCircle, ShieldCheck } from "@phosphor-icons/react/dist/ssr";
import { services } from "@/lib/content";
import { servicePhotos } from "@/lib/images";
import { site } from "@/lib/config";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { FAQAccordion } from "@/components/sections/FAQ";
import { CTABlock } from "@/components/sections/CTABlock";
import { Reviews } from "@/components/sections/Reviews";
import {
  BreadcrumbSchema,
  FAQSchema,
  ServiceSchema,
} from "@/components/schema/JsonLd";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const s = services.find((x) => x.slug === slug);
  if (!s) return {};
  return {
    title: `${s.name} in Dallas, TX`,
    description: s.short,
    alternates: { canonical: `/services/${s.slug}` },
    openGraph: {
      title: `${s.name} | ${site.name}`,
      description: s.short,
    },
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const s = services.find((x) => x.slug === slug);
  if (!s) notFound();

  return (
    <>
      <ServiceSchema name={s.name} description={s.short} slug={s.slug} />
      <FAQSchema faqs={s.faqs} />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Services", url: "/services" },
          { name: s.name, url: `/services/${s.slug}` },
        ]}
      />

      {/* Hero */}
      <section className="hero-pad-top pb-12 md:pb-24">
        <div className="container-x">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 font-mono text-[10.5px] uppercase tracking-[0.18em] text-[var(--muted)]">
            <span>Services</span>
            <span aria-hidden>/</span>
            <span className="text-[var(--ink)]">{s.name}</span>
          </nav>

          <div className="mt-7 grid gap-10 sm:gap-12 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <Reveal>
                <h1 className="h-display">
                  {s.name}
                </h1>
                <p className="lede mt-6 max-w-xl">
                  {s.hero}
                </p>
                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <Button href="/quote" variant="ink" size="lg">
                    Free inspection
                  </Button>
                  <Button href="/contact" variant="ghost" size="lg">
                    Talk to a roofer
                  </Button>
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-5">
              <Reveal delay={0.1}>
                <dl className="grid grid-cols-2 gap-3">
                  <div className="rounded-[20px] border border-[var(--line)] bg-[var(--paper)] p-5">
                    <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--muted)]">
                      Starting from
                    </dt>
                    <dd className="mt-2 font-display text-[20px] font-bold leading-tight tracking-[-0.015em]">
                      {s.startingPrice}
                    </dd>
                  </div>
                  <div className="rounded-[20px] border border-[var(--line)] bg-[var(--paper)] p-5">
                    <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--muted)]">
                      Timeline
                    </dt>
                    <dd className="mt-2 font-display text-[20px] font-bold leading-tight tracking-[-0.015em]">
                      {s.timeline}
                    </dd>
                  </div>
                  <div className="col-span-2 flex items-center gap-3 rounded-[20px] border border-[var(--line)] bg-[var(--paper-2)] p-5">
                    <ShieldCheck size={22} weight="fill" className="text-[var(--rust)]" />
                    <p className="text-[13.5px] leading-[1.55] text-[var(--ink-2)]">
                      <span className="font-medium text-[var(--ink)]">25-year workmanship guarantee.</span>{" "}
                      Transferable once. No deductible on warranty claims.
                    </p>
                  </div>
                </dl>
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
              src={servicePhotos[s.slug] ?? servicePhotos["roof-replacement"]}
              alt={`Apex Roofing ${s.name.toLowerCase()} project`}
              fill
              sizes="(max-width: 1320px) 100vw, 1320px"
              className="object-cover"
              priority
            />
          </div>
        </Reveal>
      </section>

      {/* Intro long copy */}
      <section className="py-24 md:py-32">
        <div className="container-x">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <Reveal>
                <Eyebrow>Why this matters</Eyebrow>
                <h2 className="mt-5 font-display text-[28px] font-bold leading-tight tracking-[-0.02em] sm:text-[36px] text-balance">
                  What sets our {s.name.toLowerCase()} work apart.
                </h2>
              </Reveal>
            </div>
            <div className="lg:col-span-7 lg:col-start-6">
              <Reveal delay={0.1}>
                <p className="text-[16.5px] leading-[1.75] text-[var(--ink-2)] text-pretty">
                  {s.intro}
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits grid */}
      <section className="py-24 md:py-32 bg-[var(--paper-2)] border-y border-[var(--line)]">
        <div className="container-x">
          <Reveal>
            <Eyebrow>Included</Eyebrow>
            <h2 className="mt-5 max-w-[20ch] font-display text-[32px] font-bold leading-[1.05] tracking-[-0.025em] sm:text-[44px] lg:text-[52px] text-balance">
              What every {s.name.toLowerCase()} job ships with.
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {s.benefits.map((b, i) => (
              <Reveal key={b.label} delay={i * 0.04}>
                <article className="h-full rounded-[24px] border border-[var(--line)] bg-[var(--paper)] p-6">
                  <CheckCircle size={20} weight="fill" className="text-[var(--rust)]" />
                  <h3 className="mt-5 font-display text-[18px] font-semibold leading-tight tracking-[-0.015em] text-[var(--ink)]">
                    {b.label}
                  </h3>
                  <p className="mt-2.5 text-[14px] leading-[1.6] text-[var(--ink-2)]">
                    {b.copy}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process steps */}
      <section className="py-24 md:py-32">
        <div className="container-x">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <Reveal>
                <Eyebrow>Process</Eyebrow>
                <h2 className="mt-5 font-display text-[32px] font-bold leading-[1.05] tracking-[-0.025em] sm:text-[44px] text-balance">
                  How we deliver this work.
                </h2>
                <p className="mt-5 max-w-md text-[15px] leading-[1.7] text-[var(--ink-2)]">
                  Every step is documented and the homeowner receives written
                  confirmation at each stage. No verbal scope changes.
                </p>
              </Reveal>
            </div>
            <div className="lg:col-span-6 lg:col-start-7">
              <ol className="relative">
                {s.process.map((p, i) => (
                  <Reveal key={p.step} delay={i * 0.05}>
                    <li className="flex gap-6 border-b border-[var(--line)] py-6 last:border-b-0">
                      <span className="font-mono text-[12px] font-medium tracking-[0.05em] text-[var(--rust)]">
                        {p.step}
                      </span>
                      <div className="flex-1">
                        <h3 className="font-display text-[18px] font-semibold leading-tight tracking-[-0.015em] text-[var(--ink)]">
                          {p.title}
                        </h3>
                        <p className="mt-2 text-[14.5px] leading-[1.65] text-[var(--ink-2)]">
                          {p.copy}
                        </p>
                      </div>
                    </li>
                  </Reveal>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* Materials strip */}
      <section className="py-20 bg-[var(--ink)] text-[var(--paper)]">
        <div className="container-x">
          <Eyebrow>
            <span className="text-[var(--rust)]">Materials we install</span>
          </Eyebrow>
          <ul className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
            {s.materials.map((m, i) => (
              <li key={m} className="flex items-center gap-3">
                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[color-mix(in_oklch,var(--paper)_55%,transparent)]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-display text-[16px] font-medium tracking-[-0.01em] sm:text-[18px]">
                  {m}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <FAQAccordion faqs={s.faqs} heading={`${s.name} — questions`} showCta={false} />
      <Reviews />
      <CTABlock />
    </>
  );
}
