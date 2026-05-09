import type { Metadata } from "next";
import { CheckCircle, Phone, Clock, ShieldCheck } from "@phosphor-icons/react/dist/ssr";
import { site } from "@/lib/config";
import { telHref } from "@/lib/utils";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { QuoteForm } from "@/components/forms/QuoteForm";

export const metadata: Metadata = {
  title: "Free Roof Inspection",
  description:
    "Three-field form. Inspector at your house this week. No pressure, no salesperson, no obligation.",
  alternates: { canonical: "/quote" },
};

const promises = [
  "HAAG-certified inspector — not a commission salesperson",
  "Written line-item estimate within 48 hours",
  "Direct insurance billing if storm damage is found",
  "No deposit due until material is on-site",
];

export default function QuotePage() {
  return (
    <section className="hero-pad-top pb-16 md:pb-24">
      <div className="container-x">
        <div className="grid gap-10 sm:gap-12 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-6">
            <Reveal>
              <Eyebrow>Free roof inspection</Eyebrow>
              <h1 className="h-display mt-5">
                Booked in under a <span className="text-[var(--rust)]">minute.</span>
              </h1>
              <p className="lede mt-6 max-w-lg">
                Three fields. Instant SMS confirmation. An Apex inspector
                contacts you within one business hour to schedule a same-week
                visit.
              </p>
            </Reveal>

            <ul className="mt-10 space-y-3">
              {promises.map((p, i) => (
                <Reveal key={p} delay={i * 0.05}>
                  <li className="flex items-start gap-3 text-[15px] text-[var(--ink-2)]">
                    <CheckCircle size={20} weight="fill" className="mt-0.5 shrink-0 text-[var(--rust)]" />
                    <span>{p}</span>
                  </li>
                </Reveal>
              ))}
            </ul>

            <div className="mt-8 grid grid-cols-3 gap-2 sm:gap-3">
              {[
                { icon: Clock, label: "Avg response", value: "41 min" },
                { icon: ShieldCheck, label: "Guarantee", value: "25 years" },
                { icon: Phone, label: "Direct line", value: site.phone },
              ].map((stat) => (
                <a
                  key={stat.label}
                  href={stat.label === "Direct line" ? telHref(site.phone) : undefined}
                  className="rounded-[16px] border border-[var(--line)] bg-[var(--paper)] p-3 sm:p-4 transition-colors duration-300 hover:border-[var(--ink-2)]"
                >
                  <stat.icon size={14} weight="fill" className="text-[var(--rust)]" />
                  <p className="mt-2.5 font-mono text-[9.5px] sm:text-[10px] uppercase tracking-[0.16em] text-[var(--muted)]">
                    {stat.label}
                  </p>
                  <p className="mt-0.5 font-display text-[13px] sm:text-[15px] font-semibold tracking-[-0.01em] text-[var(--ink)] truncate">
                    {stat.value}
                  </p>
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 lg:col-start-8">
            <Reveal delay={0.1}>
              <div className="bezel-shell shadow-[0_40px_80px_-24px_color-mix(in_oklch,var(--ink)_22%,transparent)]">
                <div className="bezel-core p-5 sm:p-9">
                  <div className="flex items-center justify-between border-b border-[var(--line)] pb-4">
                    <Eyebrow>Quote form</Eyebrow>
                    <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--muted)]">
                      ~60 sec
                    </span>
                  </div>
                  <div className="pt-6">
                    <QuoteForm compact />
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
