import { ShieldCheck, Stack, HandCoins } from "@phosphor-icons/react/dist/ssr";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";

const pillars = [
  {
    icon: ShieldCheck,
    title: "Certified & accountable",
    copy:
      "GAF Master Elite is held by less than 2% of roofers nationwide. We hold it. The certification means failed jobs cost us our credentials, not just our reputation.",
    stat: "2%",
    statLabel: "of US roofers",
  },
  {
    icon: Stack,
    title: "We do not subcontract",
    copy:
      "Every crew on every job is W-2 Apex staff. Subcontracting is how warranty work goes wrong. Our installers have averaged 9 years tenure with us.",
    stat: "9 yrs",
    statLabel: "avg installer tenure",
  },
  {
    icon: HandCoins,
    title: "Insurance done right",
    copy:
      "We have walked over 1,400 roofs with adjusters since 2018. Most homeowners do not realise their settlement is undervalued — until we file a supplement.",
    stat: "62%",
    statLabel: "of partial claims flipped to full",
  },
];

export function WhyApex() {
  return (
    <section className="section-y">
      <div className="container-x">
        <div className="max-w-3xl">
          <Reveal>
            <Eyebrow>Why Apex</Eyebrow>
            <h2 className="h-section mt-5 max-w-[16ch]">
              Most roofers fail the same three tests.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="lede mt-6 max-w-xl">
              Roofing has a credibility problem because most companies treat
              warranty work as a cost center and customer service as an
              afterthought. We treat both as the product.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 sm:mt-16 grid gap-4 sm:gap-5 lg:grid-cols-3">
          {pillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08}>
              <article className="bezel-shell h-full">
                <div className="bezel-core flex h-full flex-col justify-between p-5 sm:p-7 min-h-[280px] sm:min-h-[340px]">
                  <div>
                    <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[color-mix(in_oklch,var(--rust)_12%,transparent)] text-[var(--rust)]">
                      <p.icon size={20} weight="duotone" />
                    </div>
                    <h3 className="h-card mt-6 font-bold">
                      {p.title}
                    </h3>
                    <p className="body-copy mt-3">
                      {p.copy}
                    </p>
                  </div>
                  <div className="mt-7 flex items-baseline gap-2 border-t border-[var(--line)] pt-5">
                    <span className="font-display text-[36px] font-bold leading-none tracking-[-0.03em] text-[var(--rust)]">
                      {p.stat}
                    </span>
                    <span className="font-mono text-[10.5px] uppercase tracking-[0.16em] text-[var(--muted)]">
                      {p.statLabel}
                    </span>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
