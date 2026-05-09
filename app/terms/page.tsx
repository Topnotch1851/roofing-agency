import type { Metadata } from "next";
import { site } from "@/lib/config";
import { LegalLayout, type LegalSection } from "@/components/legal/LegalLayout";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `Terms of service for ${site.name}.`,
  alternates: { canonical: "/terms" },
};

const updated = "May 1, 2026";

const sections: LegalSection[] = [
  {
    heading: "Acceptance of terms",
    body: (
      <p>
        By accessing or using the {site.name} website and services, you agree to be bound by these
        Terms of Service. If you do not agree, please do not use our website or services.
      </p>
    ),
  },
  {
    heading: "Services we provide",
    body: (
      <p>
        {site.name} provides residential and commercial roofing services across the Dallas–Fort Worth
        metroplex, including roof replacement, repair, storm-damage restoration, and gutter installation.
        All work is performed by licensed, insured technicians and backed by the warranties stated at
        time of contract.
      </p>
    ),
  },
  {
    heading: "Estimates and quotes",
    body: (
      <p>
        Free inspections and quotes are provided in good faith based on visible conditions at the time
        of inspection. Final pricing may be adjusted if hidden damage is discovered, with{" "}
        <strong>written approval from the homeowner</strong> before any additional work begins.
      </p>
    ),
  },
  {
    heading: "Insurance claims assistance",
    body: (
      <p>
        We assist homeowners with the insurance claims process but are not insurance adjusters. Final
        claim approval and payout decisions rest with your insurance carrier. We never ask homeowners
        to commit insurance fraud or to sign over their claim before inspection.
      </p>
    ),
  },
  {
    heading: "Warranties",
    body: (
      <p>
        Workmanship warranties and manufacturer warranties are detailed in your signed contract.
        Warranties are non-transferable unless explicitly stated and require routine maintenance per
        manufacturer guidelines.
      </p>
    ),
  },
  {
    heading: "Payment terms",
    body: (
      <p>
        Payment terms are outlined in your signed contract. We accept check, ACH, and major credit
        cards. Financing is available through approved third-party lenders.
      </p>
    ),
  },
  {
    heading: "Limitation of liability",
    body: (
      <p>
        {site.name} is not liable for indirect, incidental, or consequential damages arising from use
        of this website or our services beyond the value of the contracted work.
      </p>
    ),
  },
  {
    heading: "Governing law",
    body: (
      <p>
        These terms are governed by the laws of the State of Texas. Any disputes will be resolved in
        the courts of Dallas County, Texas.
      </p>
    ),
  },
  {
    heading: "Contact",
    body: (
      <p>
        Questions about these Terms? Email{" "}
        <a href={`mailto:${site.email}`}>{site.email}</a> or call{" "}
        <a href={`tel:${site.phoneRaw}`}>{site.phone}</a>.
      </p>
    ),
  },
];

export default function TermsPage() {
  return (
    <LegalLayout
      eyebrow="Legal"
      title={
        <>
          Terms<br />
          <span className="text-[var(--ink-2)]">of service.</span>
        </>
      }
      lede={`The agreement that governs your use of ${site.name} services and this website. Plain language, no surprises.`}
      updated={updated}
      sections={sections}
    />
  );
}
