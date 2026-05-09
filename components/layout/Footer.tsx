import Link from "next/link";
import { Phone, MapPin, EnvelopeSimple, Clock } from "@phosphor-icons/react/dist/ssr";
import { site, nav } from "@/lib/config";
import { areas, services } from "@/lib/content";
import { telHref } from "@/lib/utils";
import { Logo } from "@/components/ui/Logo";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-[var(--ink)] text-[var(--paper)] border-t border-white/10">
      <div className="container-x py-20 md:py-24">
        {/* Top row */}
        <div className="grid gap-10 sm:gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Logo inverted />
            <p className="mt-5 max-w-sm text-[14.5px] leading-relaxed" style={{ color: "rgba(255,255,255,0.6)" }}>
              {site.longTagline}
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-2.5 text-[11px] font-mono uppercase tracking-[0.15em] text-white/90">
              <span>{site.license}</span>
              <span aria-hidden className="h-1 w-1 rounded-full bg-current opacity-60" />
              <span>{site.guarantee}</span>
            </div>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3 lg:col-span-8">
            <div>
              <h4 className="font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-white/85">
                Services
              </h4>
              <ul className="mt-4 space-y-2.5">
                {services.map((s) => (
                  <li key={s.slug}>
                    <Link
                      href={`/services/${s.slug}` as never}
                      className="inline-block text-[14px] text-white/95 transition-all duration-300 hover:text-[var(--rust)] hover:translate-x-[3px]"
                    >
                      {s.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-white/85">
                Service Areas
              </h4>
              <ul className="mt-4 space-y-2.5">
                {areas.map((a) => (
                  <li key={a.slug}>
                    <Link
                      href={`/service-areas/${a.slug}` as never}
                      className="inline-block text-[14px] text-white/95 transition-all duration-300 hover:text-[var(--rust)] hover:translate-x-[3px]"
                    >
                      {a.name}, TX
                    </Link>
                  </li>
                ))}
                {nav.primary.slice(2).map((n) => (
                  <li key={n.href}>
                    <Link
                      href={n.href as never}
                      className="inline-block text-[14px] text-white/95 transition-all duration-300 hover:text-[var(--rust)] hover:translate-x-[3px]"
                    >
                      {n.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="sm:col-span-2 md:col-span-1">
              <h4 className="font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-white/85">
                Contact
              </h4>
              <ul className="mt-4 space-y-3 text-[14px] text-white/95">
                <li className="flex items-start gap-2.5">
                  <Phone size={15} weight="fill" className="mt-1 shrink-0 text-[var(--rust)]" />
                  <a href={telHref(site.phone)} className="hover:text-[var(--rust)] transition-colors">
                    {site.phone}
                  </a>
                </li>
                <li className="flex items-start gap-2.5">
                  <EnvelopeSimple size={15} weight="fill" className="mt-1 shrink-0 text-[var(--rust)]" />
                  <a href={`mailto:${site.email}`} className="hover:text-[var(--rust)] transition-colors break-all">
                    {site.email}
                  </a>
                </li>
                <li className="flex items-start gap-2.5">
                  <MapPin size={15} weight="fill" className="mt-1 shrink-0 text-[var(--rust)]" />
                  <span>
                    {site.address.street}<br />
                    {site.address.city}, {site.address.region} {site.address.postal}
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Clock size={15} weight="fill" className="mt-1 shrink-0 text-[var(--rust)]" />
                  <span>
                    {site.hours.map((h) => (
                      <span key={h.day} className="block">
                        <span className="font-mono text-[11px] uppercase tracking-wider">{h.day}</span>{" "}
                        {h.close ? `${h.open} – ${h.close}` : h.open}
                      </span>
                    ))}
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-white/20 pt-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-[11px] uppercase tracking-[0.15em]" style={{ color: "rgba(255,255,255,0.6)" }}>
            © {year} {site.legalName}. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[12px] text-white/95">
            <Link href={"/privacy" as never} className="transition-colors duration-300 hover:text-[var(--rust)]">Privacy</Link>
            <Link href={"/terms" as never} className="transition-colors duration-300 hover:text-[var(--rust)]">Terms</Link>
            <Link href={"/sitemap.xml" as never} className="transition-colors duration-300 hover:text-[var(--rust)]">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
