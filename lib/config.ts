/**
 * APEX ROOFING — Single Source of Truth
 * Change values here to rebrand the entire site.
 * Used by every page, component, and JSON-LD schema block.
 */

export const site = {
  name: "Apex Roofing",
  legalName: "Apex Roofing & Restoration LLC",
  tagline: "Dallas's Most Trusted Roof",
  longTagline:
    "Storm-grade roof replacements & insurance-claim restoration across the Dallas–Fort Worth metro. Backed by a 25-year workmanship guarantee.",
  url: "https://apexroofing-dallas.com",
  ogImage: "/og.png",
  founded: 2009,

  // NAP (Name, Address, Phone) — must match Google Business Profile
  phone: "(214) 597-1928",
  phoneRaw: "+12145971928",
  email: "estimates@apexroofing-dallas.com",
  emergencyLine: "(214) 597-2400",

  address: {
    street: "4218 Live Oak Street, Suite 220",
    city: "Dallas",
    region: "TX",
    postal: "75204",
    country: "US",
    geo: { lat: 32.797, lng: -96.781 },
  },

  hours: [
    { day: "Mon-Fri", open: "07:00", close: "18:00" },
    { day: "Saturday", open: "08:00", close: "14:00" },
    { day: "Sunday", open: "Emergency only", close: "" },
  ],

  // Trust signals
  license: "Texas Reg. #RC-1147823",
  insurance: "Liberty Mutual — $2M Liability + $1M Workers Comp",
  guarantee: "25-Year Workmanship Guarantee",
  certifications: [
    "GAF Master Elite",
    "Owens Corning Platinum Preferred",
    "BBB A+ Accredited",
    "HAAG Certified Inspectors",
  ],

  // Aggregate rating (kept here so Schema + UI stay in sync)
  rating: { value: 4.9, count: 287 },

  // Social
  socials: {
    google: "https://g.page/apex-roofing-dallas",
    facebook: "https://facebook.com/apexroofingdallas",
    instagram: "https://instagram.com/apexroofingdallas",
    linkedin: "https://linkedin.com/company/apex-roofing-dallas",
  },
} as const;

export const nav = {
  primary: [
    { label: "Services", href: "/services" },
    { label: "Service Areas", href: "/service-areas" },
    { label: "About", href: "/about" },
    { label: "Reviews", href: "/#reviews" },
    { label: "Resources", href: "/blog" },
  ],
  cta: { label: "Free Estimate", href: "/quote" },
} as const;

export const palette = {
  paper: "oklch(0.972 0.010 80)",
  ink: "oklch(0.185 0.022 250)",
  rust: "oklch(0.595 0.155 38)",
  amber: "oklch(0.795 0.155 75)",
  forest: "oklch(0.30 0.055 150)",
};
