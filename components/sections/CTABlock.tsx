import { Phone, Clock, MapPin } from "@phosphor-icons/react/dist/ssr";
import { site } from "@/lib/config";
import { telHref } from "@/lib/utils";
import { QuoteForm } from "@/components/forms/QuoteForm";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/Eyebrow";

export function CTABlock() {
  return (
    <section className="section-y relative overflow-hidden bg-[var(--ink)] text-[var(--paper)]">
      <div
        aria-hidden
        className="absolute inset-0 -z-0 opacity-50"
        style={{
          background:
            "radial-gradient(55% 60% at 85% 0%, color-mix(in oklch, var(--rust) 28%, transparent) 0%, transparent 55%), radial-gradient(60% 65% at 0% 100%, color-mix(in oklch, var(--paper) 7%, transparent) 0%, transparent 55%)",
        }}
      />

      <div className="container-x relative">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6">
            <Reveal>
              <span className="flex items-center gap-2 font-mono text-[10.5px] uppercase tracking-[0.22em] text-white"><span className="inline-block h-1 w-6 bg-[var(--rust)]" />Free inspection</span>
              <h2 className="h-display mt-5 font-bold text-white">
                Three fields.<br />
                <span className="text-white">
                  Inspector at your house this week.
                </span>
              </h2>
              <p className="lede mt-6 max-w-lg" style={{ color: "rgba(255,255,255,0.65)" }}>
                Or skip the form and call. We answer between 7am and 6pm Monday
                through Friday and through 2pm Saturdays. Storm-damage emergencies
                are 24/7.
              </p>

              <div className="mt-9 grid gap-3 sm:grid-cols-2">
                <a
                  href={telHref(site.phone)}
                  className="group flex items-center gap-4 rounded-[22px] border border-white/20 bg-white/10 p-5 transition-all duration-500 hover:bg-white/15 hover:border-white/30"
                >
                  <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[var(--rust)] text-white">
                    <Phone size={20} weight="fill" />
                  </span>
                  <div className="min-w-0">
                    <p className="font-mono text-[10px] uppercase tracking-[0.18em]" style={{ color: "rgba(255,255,255,0.6)" }}>
                      Call now
                    </p>
                    <p className="font-display text-[17px] sm:text-[18px] font-semibold tracking-[-0.015em]" style={{ color: "white" }}>
                      {site.phone}
                    </p>
                  </div>
                </a>

                <div className="flex items-center gap-4 rounded-[22px] border border-white/20 bg-white/10 p-5">
                  <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/20 text-white">
                    <Clock size={20} weight="fill" />
                  </span>
                  <div className="min-w-0">
                    <p className="font-mono text-[10px] uppercase tracking-[0.18em]" style={{ color: "rgba(255,255,255,0.6)" }}>
                      Avg response
                    </p>
                    <p className="font-display text-[17px] sm:text-[18px] font-semibold tracking-[-0.015em]" style={{ color: "white" }}>
                      41 minutes today
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-2 font-mono text-[11px] uppercase tracking-[0.16em] text-white/90">
                <MapPin size={13} weight="fill" className="text-[var(--rust)]" />
                <span>{site.address.city}, {site.address.region} • {site.license}</span>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-5 lg:col-start-8">
            <Reveal delay={0.1}>
              <div className="rounded-[28px] border border-[color-mix(in_oklch,var(--paper)_15%,transparent)] bg-[var(--paper)] p-1.5 shadow-[0_40px_80px_-24px_color-mix(in_oklch,var(--ink)_60%,transparent)]">
                <div className="rounded-[22px] bg-[var(--paper)] p-4 text-[var(--ink)]">
                  <div className="flex items-center justify-between border-b border-[var(--line)] pb-4">
                    <Eyebrow>Quote form</Eyebrow>
                    <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--muted)]">
                      ~60 seconds
                    </span>
                  </div>
                  <div className="pt-5">
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
