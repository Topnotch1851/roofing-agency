import Link from "next/link";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { CTABlock } from "@/components/sections/CTABlock";

export type LegalSection = {
  heading: string;
  body: React.ReactNode;
};

export function LegalLayout({
  eyebrow,
  title,
  lede,
  updated,
  sections,
}: {
  eyebrow: string;
  title: React.ReactNode;
  lede: string;
  updated: string;
  sections: LegalSection[];
}) {
  return (
    <>
      {/* Hero — title stacked, lede directly below */}
      <section className="pt-28 sm:pt-32 lg:pt-44 pb-12 md:pb-20">
        <div className="container-x">
          <Reveal>
            <Eyebrow>{eyebrow}</Eyebrow>
            <h1 className="mt-5 font-display text-[36px] leading-[0.98] tracking-[-0.035em] sm:text-[60px] lg:text-[80px] font-bold text-balance">
              {title}
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-2xl text-[15.5px] sm:text-[16.5px] leading-[1.7] text-[var(--ink-2)] text-pretty">
              {lede}
            </p>
            <p className="mt-5 font-mono text-[10.5px] uppercase tracking-[0.18em] text-[var(--muted)]">
              Last updated · {updated}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Body */}
      <section className="pb-16 md:pb-32">
        <div className="container-x">
          <div className="grid gap-10 lg:grid-cols-12">
            {/* Sticky table of contents */}
            <aside className="lg:col-span-3">
              <div className="lg:sticky lg:top-28">
                <p className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-[var(--muted)] mb-4">
                  Contents
                </p>
                <ol className="space-y-2.5 text-[14px] text-[var(--ink-2)]">
                  {sections.map((s, i) => (
                    <li key={s.heading}>
                      <Link
                        href={`#section-${i + 1}`}
                        className="hover:text-[var(--rust)] transition-colors"
                      >
                        <span className="font-mono text-[11px] text-[var(--muted)] mr-2">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        {s.heading}
                      </Link>
                    </li>
                  ))}
                </ol>
              </div>
            </aside>

            {/* Sections */}
            <div className="lg:col-span-8 lg:col-start-5 space-y-12">
              {sections.map((s, i) => (
                <Reveal key={s.heading} delay={0.05 * i}>
                  <article
                    id={`section-${i + 1}`}
                    className="border-t border-[var(--line)] pt-8 scroll-mt-28"
                  >
                    <p className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-[var(--muted)] mb-3">
                      {String(i + 1).padStart(2, "0")} ·{" "}
                      <span className="text-[var(--ink-2)]">Section</span>
                    </p>
                    <h2 className="font-display text-[26px] sm:text-[30px] font-bold leading-tight tracking-[-0.02em] text-[var(--ink)] mb-5 text-balance">
                      {s.heading}
                    </h2>
                    <div className="space-y-4 text-[15.5px] leading-[1.75] text-[var(--ink-2)] text-pretty [&_a]:text-[var(--rust)] [&_a]:underline [&_a]:underline-offset-2 [&_strong]:text-[var(--ink)] [&_strong]:font-semibold [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-2 [&_ul]:mt-3">
                      {s.body}
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTABlock />
    </>
  );
}
