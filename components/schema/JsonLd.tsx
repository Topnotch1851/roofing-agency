import { site } from "@/lib/config";
import { areas, services } from "@/lib/content";

function Json({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function LocalBusinessSchema() {
  const data = {
    "@context": "https://schema.org",
    "@type": "RoofingContractor",
    "@id": `${site.url}#business`,
    name: site.name,
    legalName: site.legalName,
    description: site.longTagline,
    url: site.url,
    telephone: site.phoneRaw,
    email: site.email,
    image: `${site.url}/og.png`,
    logo: `${site.url}/logo.png`,
    priceRange: "$$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.city,
      addressRegion: site.address.region,
      postalCode: site.address.postal,
      addressCountry: site.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: site.address.geo.lat,
      longitude: site.address.geo.lng,
    },
    areaServed: areas.map((a) => ({
      "@type": "City",
      name: a.name,
    })),
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: site.rating.value,
      reviewCount: site.rating.count,
      bestRating: 5,
    },
    openingHoursSpecification: site.hours
      .filter((h) => h.close)
      .map((h) => ({
        "@type": "OpeningHoursSpecification",
        dayOfWeek: h.day,
        opens: h.open,
        closes: h.close,
      })),
    sameAs: Object.values(site.socials),
    foundingDate: String(site.founded),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Roofing Services",
      itemListElement: services.map((s) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: s.name, description: s.short },
      })),
    },
  };
  return <Json data={data} />;
}

export function BreadcrumbSchema({ items }: { items: { name: string; url: string }[] }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: `${site.url}${it.url}`,
    })),
  };
  return <Json data={data} />;
}

export function FAQSchema({ faqs }: { faqs: { q: string; a: string }[] }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
  return <Json data={data} />;
}

export function ServiceSchema({
  name,
  description,
  slug,
}: {
  name: string;
  description: string;
  slug: string;
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: name,
    description,
    url: `${site.url}/services/${slug}`,
    provider: { "@id": `${site.url}#business` },
    areaServed: areas.map((a) => ({ "@type": "City", name: a.name })),
  };
  return <Json data={data} />;
}
