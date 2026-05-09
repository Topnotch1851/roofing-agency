import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";

const steps = [
  {
    n: "01",
    title: "Free on-site inspection",
    copy: "A HAAG-certified inspector walks the roof, photographs every penetration, and emails a documented report within 24 hours.",
    detail: "45 minutes",
  },
  {
    n: "02",
    title: "Written estimate, line-itemed",
    copy: "Materials, labour, permits, dump fees — all itemised. No verbal quotes, no surprise change orders.",
    detail: "Under 48hrs",
  },
  {
    n: "03",
    title: "Install, in one day",
    copy: "Most single-family replacements complete in a single working day with full yard protection and magnetic nail sweep.",
    detail: "1 day on-site",
  },
  {
    n: "04",
    title: "Walkthrough & 25-year guarantee",
    copy: "Owner walkthrough with crew lead. Workmanship certificate emailed within 24 hours. Manufacturer warranty registered for you.",
    detail: "Lifetime support",
  },
];

export function Process() {
  return (
    <section className="section-y bg-[var(--paper-2)] border-y border-[var(--line)]">
      <div className="container-x">
        <div className="max-w-3xl">
          <Reveal>
            <Eyebrow>Our process</Eyebrow>
            <h2 className="h-section mt-5">
              From inspection to <span className="text-[var(--rust)]">final walk</span> — four steps, written down.
            </h2>
          </Reveal>
        </div>

        <div className="mt-12 sm:mt-16 grid gap-px overflow-hidden rounded-[24px] sm:rounded-[28px] border border-[var(--line)] bg-[var(--line)] sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.06}>
              <div className="group flex h-full flex-col justify-between bg-[var(--paper)] p-5 sm:p-7 transition-colors duration-500 hover:bg-[var(--paper-3)] min-h-[220px] sm:min-h-[280px]">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10.5px] uppercase tracking-[0.2em] text-[var(--rust)]">
                    Step {s.n}
                  </span>
                  <span className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-[var(--muted)]">
                    {s.detail}
                  </span>
                </div>
                <div>
                  <h3 className="h-card">
                    {s.title}
                  </h3>
                  <p className="body-copy mt-3">
                    {s.copy}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
