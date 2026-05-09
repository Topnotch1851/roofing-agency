import { Calculator, Percent } from "@phosphor-icons/react/dist/ssr";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";

export function Financing() {
  return (
    <section className="section-y">
      <div className="container-x">
        <Reveal>
          <div className="bezel-shell shadow-[0_40px_80px_-32px_color-mix(in_oklch,var(--ink)_25%,transparent)]">
            <div className="bezel-core overflow-hidden">
              <div className="grid gap-8 p-5 sm:gap-10 sm:p-10 lg:grid-cols-12 lg:p-16 lg:items-center">
                <div className="lg:col-span-7">
                  <Eyebrow>Financing</Eyebrow>
                  <h2 className="h-section mt-4">
                    From <span className="text-[var(--rust)]">$89/month</span> on a full replacement.
                  </h2>
                  <p className="lede mt-4 max-w-lg">
                    0% APR for 12 months on approved credit through Hearth, or
                    9.99% APR for 84 months for larger projects. No prepayment
                    penalty, no contractor markup. Pre-qualification is a soft
                    credit pull — your score does not move.
                  </p>

                  <div className="mt-8 flex flex-wrap items-center gap-3">
                    <Button href="/quote" variant="ink" size="md">
                      Pre-qualify in 60 seconds
                    </Button>
                    <Button href="/services/roof-replacement" variant="ghost" size="md">
                      See replacement details
                    </Button>
                  </div>
                </div>

                <div className="lg:col-span-5">
                  <div className="rounded-[20px] sm:rounded-[24px] border border-[var(--line)] bg-[var(--paper-2)] p-5 sm:p-6">
                    <div className="flex items-center justify-between border-b border-[var(--line)] pb-4">
                      <span className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-[var(--muted)]">
                        Sample financing
                      </span>
                      <Calculator size={16} weight="duotone" className="text-[var(--ink-2)]" />
                    </div>
                    <div className="mt-5 space-y-4">
                      {[
                        { label: "Project total", value: "$14,800" },
                        { label: "Term", value: "84 months" },
                        { label: "Rate", value: "9.99% APR" },
                      ].map((row) => (
                        <div key={row.label} className="flex items-baseline justify-between text-[14px]">
                          <span className="text-[var(--muted)]">{row.label}</span>
                          <span className="font-mono font-medium text-[var(--ink)]">{row.value}</span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-6 flex items-baseline justify-between border-t border-[var(--line)] pt-5">
                      <span className="text-[13px] uppercase tracking-[0.12em] text-[var(--muted)]">
                        Monthly
                      </span>
                      <span className="font-display text-[30px] sm:text-[36px] font-bold leading-none tracking-[-0.025em] text-[var(--ink)]">
                        $246
                      </span>
                    </div>
                    <p className="mt-3 flex items-center gap-1.5 text-[11px] text-[var(--muted)]">
                      <Percent size={12} weight="fill" className="text-[var(--rust)]" />
                      <span>0% APR option available for 12-month terms.</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
