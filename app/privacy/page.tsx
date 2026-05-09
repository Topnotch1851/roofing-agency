import type { Metadata } from "next";
import { site } from "@/lib/config";
import { LegalLayout, type LegalSection } from "@/components/legal/LegalLayout";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy policy for ${site.name}.`,
  alternates: { canonical: "/privacy" },
};

const updated = "May 1, 2026";

const sections: LegalSection[] = [
  {
    heading: "What we collect",
    body: (
      <p>
        When you request a quote or contact {site.name}, we collect the information you provide:
        name, address, phone number, email, and details about your roofing project. We also collect
        basic analytics data — page views, device type, referrer — to improve our website.
      </p>
    ),
  },
  {
    heading: "How we use your information",
    body: (
      <ul>
        <li>To schedule your free roof inspection and prepare an estimate.</li>
        <li>To communicate with you about your project, appointments, and warranty.</li>
        <li>To assist with insurance claims when you have requested our help.</li>
        <li>To improve our website and services through aggregated analytics.</li>
      </ul>
    ),
  },
  {
    heading: "Information sharing",
    body: (
      <>
        <p>
          We do <strong>not</strong> sell your personal information. We share information only with:
        </p>
        <ul>
          <li>Material suppliers and manufacturers, when needed to fulfill warranty registration.</li>
          <li>Financing partners, only when you apply for financing through our referral.</li>
          <li>Insurance carriers, only when assisting with your claim at your request.</li>
          <li>Law enforcement when legally required.</li>
        </ul>
      </>
    ),
  },
  {
    heading: "Cookies and analytics",
    body: (
      <p>
        We use cookies and standard web analytics tools (such as Google Analytics) to understand how
        visitors use our site. You can disable cookies in your browser settings. Doing so may limit
        some features.
      </p>
    ),
  },
  {
    heading: "SMS and phone communications",
    body: (
      <p>
        By providing your phone number, you consent to receive calls and SMS from {site.name}{" "}
        regarding your project. Message and data rates may apply.{" "}
        <strong>Reply STOP to opt out of SMS at any time.</strong>
      </p>
    ),
  },
  {
    heading: "Data security",
    body: (
      <p>
        We use industry-standard safeguards — TLS encryption, secure CRM systems, access controls —
        to protect your information. No method of transmission over the internet is 100% secure, but
        we take reasonable steps to protect your data.
      </p>
    ),
  },
  {
    heading: "Your rights",
    body: (
      <p>
        You may request access to, correction of, or deletion of your personal information at any
        time by contacting us. Texas and California residents have additional rights under state
        privacy laws.
      </p>
    ),
  },
  {
    heading: "Children's privacy",
    body: (
      <p>
        Our services are directed to homeowners. We do not knowingly collect information from
        children under 13.
      </p>
    ),
  },
  {
    heading: "Changes to this policy",
    body: (
      <p>
        We may update this policy from time to time. The &ldquo;Last updated&rdquo; date at the top
        reflects the most recent revision.
      </p>
    ),
  },
  {
    heading: "Contact",
    body: (
      <p>
        Questions about this Privacy Policy? Email{" "}
        <a href={`mailto:${site.email}`}>{site.email}</a> or call{" "}
        <a href={`tel:${site.phoneRaw}`}>{site.phone}</a>.
      </p>
    ),
  },
];

export default function PrivacyPage() {
  return (
    <LegalLayout
      eyebrow="Legal"
      title={
        <>
          Privacy<br />
          <span className="text-[var(--ink-2)]">policy.</span>
        </>
      }
      lede={`How ${site.name} collects, uses, and protects your information when you visit this site or hire us for work.`}
      updated={updated}
      sections={sections}
    />
  );
}
