import type { Metadata } from "next";
import { Phone, EnvelopeSimple, MapPin, Clock } from "@phosphor-icons/react/dist/ssr";
import { site } from "@/lib/config";
import { telHref } from "@/lib/utils";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { QuoteForm } from "@/components/forms/QuoteForm";
import { BreadcrumbSchema } from "@/components/schema/JsonLd";

export const metadata: Metadata = {
  title: "Contact Apex Roofing",
  description:
    "Call, email, or request a free roof inspection in Dallas, Plano, or Frisco. Average response 41 minutes.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Contact", url: "/contact" },
        ]}
      />

      <section className="hero-pad-top pb-16 md:pb-24">
        <div className="container-x">
          <div className="grid gap-10 sm:gap-12 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <Reveal>
                <Eyebrow>Contact</Eyebrow>
                <h1 className="h-display mt-5">
                  Talk to a real <span className="text-[var(--rust)]">roofer.</span>
                </h1>
                <p className="lede mt-6 max-w-lg">
                  Calls answered by an Apex team member, not a call centre. We
                  return every email within 4 working hours.
                </p>
              </Reveal>

              <div className="mt-10 grid gap-3">
                {[
                  {
                    label: "Call",
                    value: site.phone,
                    sub: "Mon–Fri 7am–6pm, Sat 8am–2pm",
                    href: telHref(site.phone),
                    icon: Phone,
                  },
                  {
                    label: "Email",
                    value: site.email,
                    sub: "Replied within 4 working hours",
                    href: `mailto:${site.email}`,
                    icon: EnvelopeSimple,
                  },
                  {
                    label: "Visit",
                    value: `${site.address.street}, ${site.address.city}, TX`,
                    sub: "By appointment only",
                    href: `https://maps.google.com/?q=${encodeURIComponent(
                      `${site.address.street} ${site.address.city} ${site.address.region}`
                    )}`,
                    icon: MapPin,
                  },
                  {
                    label: "Storm emergency",
                    value: site.emergencyLine,
                    sub: "24/7 active leak / tarp dispatch",
                    href: telHref(site.emergencyLine),
                    icon: Clock,
                  },
                ].map((c) => (
                  <a
                    key={c.label}
                    href={c.href}
                    className="group flex items-center gap-4 rounded-[20px] border border-[var(--line)] bg-[var(--paper)] p-4 sm:p-5 transition-all duration-500 hover:border-[var(--ink-2)] hover:-translate-y-0.5"
                  >
                    <span className="flex h-11 w-11 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-2xl bg-[var(--ink)] text-[var(--rust)]">
                      <c.icon size={18} weight="fill" />
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--muted)]">
                        {c.label}
                      </p>
                      <p className="mt-1 truncate font-display text-[16px] sm:text-[18px] font-semibold tracking-[-0.015em] text-[var(--ink)]">
                        {c.value}
                      </p>
                      <p className="mt-0.5 truncate text-[12px] sm:text-[12.5px] text-[var(--ink-2)]">
                        {c.sub}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 lg:col-start-8">
              <Reveal delay={0.1}>
                <div className="sticky top-32">
                  <Eyebrow>Free inspection</Eyebrow>
                  <h2 className="mt-4 font-display text-[24px] font-bold leading-tight tracking-[-0.02em] text-[var(--ink)]">
                    Book in under a minute.
                  </h2>
                  <div className="mt-6">
                    <QuoteForm />
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
