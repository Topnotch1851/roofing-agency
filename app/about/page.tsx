import type { Metadata } from "next";
import Image from "next/image";
import { ShieldCheck, Buildings, UsersThree, Trophy } from "@phosphor-icons/react/dist/ssr";
import { site } from "@/lib/config";
import { photos } from "@/lib/images";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { CTABlock } from "@/components/sections/CTABlock";
import { Reviews } from "@/components/sections/Reviews";

export const metadata: Metadata = {
  title: "About Apex Roofing",
  description:
    "Founded in 2009. Family-operated. GAF Master Elite. Why DFW homeowners trust us with the largest investment on their property.",
  alternates: { canonical: "/about" },
};

const stats = [
  { n: "2009", l: "Founded", icon: Buildings },
  { n: "2,400+", l: "DFW roofs", icon: Trophy },
  { n: "47", l: "W-2 staff", icon: UsersThree },
  { n: "4.9★", l: "287 reviews", icon: ShieldCheck },
];

export default function AboutPage() {
  return (
    <>
      <section className="pt-28 sm:pt-32 lg:pt-44 pb-12 md:pb-24">
        <div className="container-x">
          <Reveal>
            <Eyebrow>About</Eyebrow>
            <h1 className="mt-5 font-display text-[40px] leading-[0.98] tracking-[-0.035em] sm:text-[60px] lg:text-[88px] font-bold text-balance">
              Started by a roofer.<br />
              <span className="text-[var(--ink-2)]">Still run by one.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-7 max-w-2xl text-[15.5px] sm:text-[16.5px] leading-[1.7] text-[var(--ink-2)] text-pretty">
              Apex was founded in {site.founded} after Marcus Holcombe spent
              eleven years working on someone else&apos;s crews and watching
              good homeowners get poorly served. We have grown to 47 W-2
              employees and zero subcontractors. Our installers stay because
              the company is built around their work — not the other way
              around.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Hero photo */}
      <section className="container-x">
        <Reveal>
          <div className="relative aspect-[16/8] overflow-hidden rounded-[28px] border border-[var(--line)]">
            <Image
              src={photos.teamMeeting}
              alt="Apex Roofing team in Dallas"
              fill
              sizes="(max-width: 1320px) 100vw, 1320px"
              className="object-cover"
              priority
            />
          </div>
        </Reveal>
      </section>

      {/* Stats */}
      <section className="py-16 md:py-24">
        <div className="container-x">
          <div className="grid gap-px overflow-hidden rounded-[20px] sm:rounded-[24px] border border-[var(--line)] bg-[var(--line)] grid-cols-2 lg:grid-cols-4">
            {stats.map((s) => (
              <div key={s.l} className="bg-[var(--paper)] p-5 sm:p-7">
                <s.icon size={20} weight="duotone" className="text-[var(--rust)]" />
                <p className="mt-5 sm:mt-6 font-display text-[28px] sm:text-[40px] font-bold leading-none tracking-[-0.025em] text-[var(--ink)]">
                  {s.n}
                </p>
                <p className="mt-2 font-mono text-[10.5px] uppercase tracking-[0.18em] text-[var(--muted)]">
                  {s.l}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 md:py-32 bg-[var(--paper-2)] border-y border-[var(--line)]">
        <div className="container-x">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <Reveal>
                <Eyebrow>Our standard</Eyebrow>
                <h2 className="mt-5 font-display text-[24px] font-bold leading-tight tracking-[-0.02em] sm:text-[36px] text-balance">
                  Three commitments we make in writing.
                </h2>
              </Reveal>
            </div>
            <div className="lg:col-span-7 lg:col-start-6 space-y-8">
              {[
                {
                  n: "01",
                  title: "We do not subcontract installs",
                  body: "Subcontracting is the single biggest reason warranty claims fail. Every roof is installed by a W-2 Apex employee. If a problem develops in year 14, the same company is still here to fix it.",
                },
                {
                  n: "02",
                  title: "We document everything",
                  body: "Every job ships with photos before, during, and after. Every quote is line-itemed. Every change order is emailed and signed. There are no verbal agreements on a six-figure repair.",
                },
                {
                  n: "03",
                  title: "We tell you when you don't need us",
                  body: "If you call us for a replacement and your roof has 5 good years left, we will say so. Two of our top-referring clients are homeowners we told to wait. That is the long game.",
                },
              ].map((c) => (
                <Reveal key={c.n}>
                  <article className="border-b border-[var(--line)] pb-8 last:border-b-0">
                    <span className="font-mono text-[11px] tracking-[0.05em] text-[var(--rust)]">
                      {c.n}
                    </span>
                    <h3 className="mt-3 font-display text-[24px] font-bold leading-tight tracking-[-0.015em] text-[var(--ink)]">
                      {c.title}
                    </h3>
                    <p className="mt-3 max-w-2xl text-[15px] leading-[1.7] text-[var(--ink-2)]">
                      {c.body}
                    </p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 md:py-32">
        <div className="container-x">
          <Reveal>
            <Eyebrow>Credentials</Eyebrow>
            <h2 className="mt-5 max-w-[20ch] font-display text-[26px] font-bold leading-[1.08] tracking-[-0.025em] sm:text-[44px] text-balance">
              Certified, licensed, and proven.
            </h2>
          </Reveal>
          <ul className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {site.certifications.map((c) => (
              <li
                key={c}
                className="flex items-center gap-4 rounded-[20px] border border-[var(--line)] bg-[var(--paper)] p-5"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[var(--ink)] text-[var(--paper)]">
                  <ShieldCheck size={18} weight="fill" />
                </span>
                <p className="font-display text-[15px] font-semibold leading-tight tracking-[-0.01em] text-[var(--ink)]">
                  {c}
                </p>
              </li>
            ))}
          </ul>
          <p className="mt-8 max-w-3xl font-mono text-[11.5px] uppercase tracking-[0.16em] text-[var(--muted)]">
            License: {site.license} • Insurance: {site.insurance}
          </p>
        </div>
      </section>

      <Reviews />
      <CTABlock />
    </>
  );
}
