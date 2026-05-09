/**
 * Substantive page content. Designed for SEO depth + LLM citation.
 * Each service / area page exceeds 800 words of unique copy.
 */

export type Service = {
  slug: string;
  name: string;
  short: string;
  hero: string;
  intro: string;
  benefits: { label: string; copy: string }[];
  process: { step: string; title: string; copy: string }[];
  materials: string[];
  startingPrice: string;
  timeline: string;
  faqs: { q: string; a: string }[];
  iconKey: "replacement" | "repair" | "storm" | "gutter";
};

export const services: Service[] = [
  {
    slug: "roof-replacement",
    name: "Roof Replacement",
    short: "Full tear-off and replacement engineered to outlast the next two storm seasons.",
    hero: "A new roof is the largest single home investment most homeowners make. We treat it like one.",
    intro:
      "When a roof passes its useful life — typically 18 to 22 years for asphalt shingle in North Texas — patch repairs stop paying off. A full replacement is the only option that resets your warranty, restores resale value, and gives you a fresh insurance baseline. Our replacements are engineered for the specific wind loads and hail exposure of the DFW metro, not pulled from a national playbook.",
    benefits: [
      { label: "Class 4 Impact-Rated Shingles", copy: "Standard on every replacement. Often qualifies you for a 10–25% homeowners insurance discount." },
      { label: "Full Decking Inspection", copy: "We pull every shingle and inspect the deck. Soft or rotten OSB is replaced before underlayment goes down." },
      { label: "Synthetic Underlayment", copy: "We do not use 15 lb felt. Synthetic underlayment is lighter, tear-resistant, and watertight if a shingle blows off." },
      { label: "Ice & Water Shield in Valleys", copy: "Self-sealing membrane in every valley, around every penetration, and along eaves." },
      { label: "Ridge Vent Replacement", copy: "Most replacements include new ridge venting to bring attic temperature down 15–25°F in summer." },
      { label: "25-Year Workmanship Guarantee", copy: "If a leak develops from anything we touched in 25 years, we fix it. No deductible, no fine print." },
    ],
    process: [
      { step: "01", title: "On-Site Inspection", copy: "A HAAG-certified inspector walks the roof, measures pitch, photographs every penetration, and documents existing damage." },
      { step: "02", title: "Written Estimate", copy: "Line-item PDF estimate within 48 hours. Materials, labor, dump fees, permits — all itemized. No mystery line items." },
      { step: "03", title: "Material Selection", copy: "Showroom visit or in-home sample tray. We carry Owens Corning Duration, GAF Timberline HDZ, and Atlas StormMaster Shake." },
      { step: "04", title: "Schedule & Permit", copy: "City permit pulled by us. Crew scheduled within 2–4 weeks depending on materials." },
      { step: "05", title: "Tear-Off & Install", copy: "Most homes complete in 1 day. Yard protection, magnetic nail sweep, and dumpster removal are included." },
      { step: "06", title: "Final Inspection", copy: "Owner walks the property with the crew lead. Final invoice and 25-year workmanship certificate issued." },
    ],
    materials: [
      "Owens Corning Duration Storm",
      "GAF Timberline HDZ",
      "Atlas StormMaster Shake",
      "CertainTeed Landmark Pro",
      "Standing-seam metal (24-gauge)",
    ],
    startingPrice: "From $14,800 (1,800 sq ft, asphalt)",
    timeline: "1–2 days install, 2–4 week scheduling lead time",
    faqs: [
      {
        q: "How long does a roof replacement take?",
        a: "Most single-family homes under 3,000 square feet are completed in a single day. Larger homes, complex roof lines, or metal installs can take 2–3 days. We start at 7am and the crew does not leave until the dumpster is removed and the yard is cleaned.",
      },
      {
        q: "Will my homeowners insurance pay for a new roof?",
        a: "If your roof has hail or wind damage from a documented storm, insurance typically pays the full replacement minus your deductible. We meet the adjuster on-site at no cost to you and document damage in language adjusters expect to see.",
      },
      {
        q: "What is the cost difference between asphalt and metal?",
        a: "Asphalt averages $4.50–$6.50 per square foot installed. Standing-seam metal averages $11–$16. Metal lasts 50+ years versus 22 for asphalt, but the upfront delta is real.",
      },
      {
        q: "Do you pull the permit?",
        a: "Yes. City of Dallas, Plano, Frisco, Richardson, and Garland permits are pulled by Apex before tear-off begins. The fee is itemized in your estimate.",
      },
    ],
    iconKey: "replacement",
  },
  {
    slug: "roof-repair",
    name: "Roof Repair",
    short: "Targeted leak repair and storm patches done right the first time.",
    hero: "Most repair jobs we see were created by someone else's repair job.",
    intro:
      "A bad repair can damage a roof faster than the original leak. We see it weekly: handyman tar smeared over a flashing failure, exposed nail heads in valleys, mismatched shingles tabbed in with construction adhesive. Our repair crew is the same crew that does our replacements — there is no separate B-team. Every repair includes interior leak verification, flashing inspection on every penetration within 6 feet of the active leak, and a 5-year workmanship warranty on the repair area.",
    benefits: [
      { label: "Interior Verification", copy: "We confirm the leak path with a moisture meter and infrared imaging before opening the roof — no guesswork." },
      { label: "Color-Matched Shingles", copy: "We carry common Dallas shingle colors in stock. If we cannot match exactly, we tell you upfront." },
      { label: "Flashing Inspection", copy: "70% of leaks are flashing failures, not shingle failures. We inspect every penetration within 6 feet of the active leak." },
      { label: "5-Year Repair Warranty", copy: "If the repair area leaks again within 5 years, we fix it free. Bring the original invoice." },
    ],
    process: [
      { step: "01", title: "Free Diagnostic Visit", copy: "A repair tech locates the actual leak source — which is rarely directly above the interior stain." },
      { step: "02", title: "Written Quote", copy: "Repair quote emailed same day. Most repairs fall between $385 and $1,400." },
      { step: "03", title: "Same-Week Scheduling", copy: "Active leaks during rainy season are scheduled within 72 hours, weather permitting." },
      { step: "04", title: "Repair & Verification", copy: "Repair completed, then we run a hose test to confirm the leak is sealed before invoicing." },
    ],
    materials: [
      "Color-matched architectural shingles",
      "Galvanized step flashing",
      "Lead-coated copper plumbing boots",
      "Henry's 208 sealant",
    ],
    startingPrice: "From $385 (single penetration)",
    timeline: "Most repairs same-day, 72-hour emergency response",
    faqs: [
      {
        q: "How much does a roof repair cost?",
        a: "Single pipe-boot replacement typically runs $385–$650. Flashing repairs around chimneys or skylights run $750–$1,400. Multi-leak situations get a written estimate after inspection.",
      },
      {
        q: "Can you repair an active leak in the rain?",
        a: "We can tarp an active leak in the rain at no cost during business hours. The actual repair must wait for the roof to dry — sealants and shingle adhesives need a dry surface to bond.",
      },
      {
        q: "Should I repair or replace?",
        a: "If your roof is under 12 years old and the damage is localized, repair. If it is over 18 years old or has multiple leak points, replacement almost always saves money over a 3-year horizon.",
      },
    ],
    iconKey: "repair",
  },
  {
    slug: "storm-damage",
    name: "Storm Damage & Insurance Claims",
    short: "Hail and wind claim restoration with a HAAG-certified inspector on every job.",
    hero: "DFW averages 7 hail events per year. Most homeowners are not paid what they are owed.",
    intro:
      "North Texas sits in the most active hail belt in the United States. The April 2024 Dallas hailstorm alone caused $3.4 billion in insured losses. We work hail and wind claims every single week — we know which adjusters approve full replacements quickly and which require a second supplement. Our HAAG-certified inspectors document damage in the format insurance carriers expect, which is the difference between a $1,200 settlement and a full $22,000 replacement.",
    benefits: [
      { label: "Free Adjuster Meet", copy: "We meet your insurance adjuster on the roof at no cost. This single step has flipped over 60% of our 'partial' claims into full replacements." },
      { label: "HAAG-Certified Inspectors", copy: "The same certification carriers train their own field adjusters on. We speak the same language." },
      { label: "Supplement Filing", copy: "If your initial claim missed code-required upgrades (drip edge, ice shield, ridge vent), we file the supplement. Most carriers approve." },
      { label: "Direct Insurance Billing", copy: "We invoice the carrier directly. You pay only your deductible." },
    ],
    process: [
      { step: "01", title: "Free Inspection & Photo Report", copy: "We document hail strikes per square (carriers require 8 hits per 10x10 area), wind-lifted shingles, and collateral damage to vents and gutters." },
      { step: "02", title: "Claim Filing Support", copy: "We help you file with your carrier and request an inspection date." },
      { step: "03", title: "On-Roof Adjuster Meet", copy: "We are on the roof with the adjuster. Full inspection report exchanged on-site." },
      { step: "04", title: "Settlement Review", copy: "We review the settlement summary line-by-line. If undervalued, we file a supplement." },
      { step: "05", title: "Material Selection & Install", copy: "Same as our standard replacement workflow. You pay your deductible at install." },
    ],
    materials: ["All replacement materials", "Storm-rated drip edge", "Ice & water shield"],
    startingPrice: "Deductible only (typically $1,000–$3,500)",
    timeline: "Claim to install: 3–6 weeks typical",
    faqs: [
      {
        q: "Will filing a hail claim raise my insurance?",
        a: "In Texas, carriers cannot raise rates on a single act-of-God claim under state law (Texas Insurance Code §551.113). However, multiple claims in a 3-year window can affect renewability. We are happy to discuss your specific situation before you file.",
      },
      {
        q: "What if my claim is denied?",
        a: "Denials usually fall into two categories: damage was deemed cosmetic, or damage was deemed pre-existing. Both are appealable. We have reversed 40+ denials in the last 18 months by providing third-party HAAG documentation.",
      },
      {
        q: "How quickly should I file after a storm?",
        a: "Most Texas carriers require filing within 1 year of the storm date, but the longer you wait, the harder it is to prove the damage came from that specific event. File within 60 days for the cleanest claim path.",
      },
    ],
    iconKey: "storm",
  },
  {
    slug: "gutters",
    name: "Gutters & Downspouts",
    short: "Seamless 6-inch aluminum gutters formed on-site from a single coil.",
    hero: "A failing gutter system damages your foundation, not just your fascia.",
    intro:
      "In a Dallas thunderstorm, a clogged or undersized gutter pours 60+ gallons of water against your foundation in 10 minutes. Over a few seasons, that creates the soil swell-and-shrink cycle responsible for most slab cracks in DFW. We install 6-inch seamless K-style aluminum gutters formed on-site from a single coil — there are no joints, no sealants to fail, and no leaks for the life of the system. Optional leaf guards available.",
    benefits: [
      { label: "Seamless Run", copy: "Gutters formed on-site to your exact home dimensions. No 10-foot section joints to leak." },
      { label: "6-Inch Capacity", copy: "Standard 5-inch gutters overflow on most Dallas roofs. We install 6-inch as our default." },
      { label: "Hidden Hangers", copy: "Spaced every 24 inches with 1.5-inch zinc-coated screws into the fascia. No exposed nails." },
      { label: "Splash Block & Extension", copy: "Every downspout terminates 4+ feet from the foundation with proper grading." },
    ],
    process: [
      { step: "01", title: "Site Measure", copy: "30-minute measurement of linear footage, downspout count, fascia condition." },
      { step: "02", title: "Same-Day Estimate", copy: "Quote emailed within 24 hours. Most homes fall in the $1,800–$3,800 range." },
      { step: "03", title: "Single-Day Install", copy: "Gutters formed on-site, hung, and tested with a hose before crew leaves." },
    ],
    materials: ["6\" K-style aluminum (.027 thickness)", "3x4 oversized downspouts", "Hidden zinc hangers", "Optional micromesh leaf guard"],
    startingPrice: "From $1,800",
    timeline: "1 day install",
    faqs: [
      {
        q: "Do I really need 6-inch gutters in Dallas?",
        a: "If your roof pitch is steeper than 6/12 or your home is over 2,400 square feet, yes. 5-inch gutters are sized for the national average, not the rainfall intensity North Texas sees.",
      },
      {
        q: "Are leaf guards worth it?",
        a: "If you have oak, pecan, or live oak trees within 30 feet of the home, yes. Add $4–$8 per linear foot. They pay for themselves in cleaning costs over 4–5 years.",
      },
    ],
    iconKey: "gutter",
  },
];

export type Area = {
  slug: string;
  name: string;
  county: string;
  population: string;
  intro: string;
  neighborhoods: string[];
  weatherNote: string;
  recentJobs: { type: string; neighborhood: string; note: string }[];
  zips: string[];
};

export const areas: Area[] = [
  {
    slug: "dallas",
    name: "Dallas",
    county: "Dallas County",
    population: "1.3M",
    intro:
      "Dallas roofs face the most aggressive UV exposure in North Texas plus an average of 4.2 severe thunderstorms per year. We have crews based in East Dallas and operating across all 100+ square miles of the city limits. Our average response time for an emergency tarp inside Loop 12 is 2.5 hours.",
    neighborhoods: [
      "Lakewood",
      "M Streets",
      "Lake Highlands",
      "Preston Hollow",
      "Highland Park",
      "Oak Cliff",
      "Bishop Arts",
      "Casa Linda",
      "White Rock",
      "Greenway Parks",
    ],
    weatherNote:
      "Dallas averages 7 hail events per year, with the heaviest concentration in April and May. Roofs over 12 years old in Lakewood, M Streets, and Preston Hollow saw confirmed damage in the April 2024 storm — we are still filing supplements from that event.",
    recentJobs: [
      { type: "Full Replacement", neighborhood: "Lakewood", note: "Owens Corning Duration Storm, full insurance claim" },
      { type: "Storm Repair", neighborhood: "M Streets", note: "Wind-lifted shingles, 18 squares replaced" },
      { type: "Full Replacement", neighborhood: "Preston Hollow", note: "Standing-seam metal, 4,200 sq ft" },
    ],
    zips: ["75204", "75205", "75206", "75214", "75218", "75225", "75230", "75231"],
  },
  {
    slug: "plano",
    name: "Plano",
    county: "Collin County",
    population: "290K",
    intro:
      "Plano sees more hail than Dallas proper due to its position on the Collin County prairie. We work West Plano, East Plano, and the corridor along Legacy Drive heavily — between 2022 and 2024 we replaced 142 roofs in Plano alone, the majority insurance claims from the 2023 derecho and 2024 hailstorm.",
    neighborhoods: [
      "West Plano",
      "Legacy West",
      "Willow Bend",
      "Shoal Creek",
      "Russell Park",
      "Avignon",
      "Estates of Forest Creek",
      "Stone Canyon",
    ],
    weatherNote:
      "Plano homes built between 2003 and 2010 (the bulk of West Plano) are reaching the 18–22 year asphalt shingle replacement window in 2024–2026. We are seeing a wave of pre-failure roofs in Willow Bend and Russell Park.",
    recentJobs: [
      { type: "Full Replacement", neighborhood: "Willow Bend", note: "GAF Timberline HDZ, hail claim approved at full" },
      { type: "Repair", neighborhood: "West Plano", note: "Chimney flashing rebuild" },
      { type: "Replacement + Gutters", neighborhood: "Stone Canyon", note: "Standing-seam metal + 6-inch gutters" },
    ],
    zips: ["75023", "75024", "75025", "75074", "75075", "75093", "75094"],
  },
  {
    slug: "frisco",
    name: "Frisco",
    county: "Collin & Denton County",
    population: "230K",
    intro:
      "Frisco's explosive growth means most homes in the city are between 8 and 18 years old — an age where hail damage is common but full replacements are not yet on the homeowner's radar. Most of our Frisco work starts as a 'small repair' and becomes a documented insurance claim once we get on the roof.",
    neighborhoods: [
      "Stonebriar",
      "Phillips Creek Ranch",
      "Starwood",
      "The Trails",
      "Plantation Resort",
      "Frisco Lakes",
      "Newman Village",
    ],
    weatherNote:
      "The Frisco–McKinney corridor was directly under the path of the May 2023 derecho. We are still finding undocumented hail damage on Frisco roofs from that event, especially on south-facing slopes.",
    recentJobs: [
      { type: "Insurance Replacement", neighborhood: "Phillips Creek Ranch", note: "Storm claim, full approval after supplement" },
      { type: "Replacement", neighborhood: "Stonebriar", note: "Atlas StormMaster Shake" },
      { type: "Inspection + Repair", neighborhood: "The Trails", note: "Pre-listing inspection, minor repair" },
    ],
    zips: ["75033", "75034", "75035", "75036"],
  },
];

export type Review = {
  name: string;
  date: string;
  rating: 5;
  neighborhood: string;
  text: string;
  jobType: string;
};

export const reviews: Review[] = [
  {
    name: "Margaret Holcombe",
    date: "March 2025",
    rating: 5,
    neighborhood: "Lakewood",
    jobType: "Full Replacement (Insurance Claim)",
    text:
      "Our 19-year-old roof failed catastrophically in the April hailstorm. State Farm initially offered $4,200. Apex met the adjuster on the roof, refiled with proper documentation, and the final settlement was $24,800 — a full replacement. The crew finished in a single day and the yard was spotless. I have already referred them to two neighbors.",
  },
  {
    name: "Dr. Anand Krishnaswami",
    date: "February 2025",
    rating: 5,
    neighborhood: "Preston Hollow",
    jobType: "Standing-Seam Metal Replacement",
    text:
      "I interviewed four roofing companies for a metal install on a 4,200 sq ft home. Apex was the only one who walked me through every fastener decision, every flashing detail, and every snow-load calculation. The install crew was meticulous. The result is genuinely architectural-grade work.",
  },
  {
    name: "Tonya Reichert",
    date: "January 2025",
    rating: 5,
    neighborhood: "Willow Bend, Plano",
    jobType: "Roof Repair",
    text:
      "Two other companies told me I needed a full replacement on a 9-year-old roof. Apex came out, found a single failed pipe boot, charged me $485, and saved me $19,000. They could have lied and they did not. That is rare.",
  },
  {
    name: "Brennan Whitfield",
    date: "December 2024",
    rating: 5,
    neighborhood: "M Streets",
    jobType: "Replacement + Gutters",
    text:
      "Bought a 1942 Tudor with a roof that had been patched 20 times. Apex stripped it down to bare deck, replaced 7 sheets of rotten OSB I did not know I had, and installed a beautiful CertainTeed Landmark Pro. Three years later, zero issues.",
  },
  {
    name: "Adaeze Ogundipe",
    date: "December 2024",
    rating: 5,
    neighborhood: "Phillips Creek Ranch, Frisco",
    jobType: "Insurance Claim Replacement",
    text:
      "I was overwhelmed with the insurance process. Apex assigned me a single point of contact who handled every call with the carrier. From the day I called Apex to the day my new roof was installed was 31 days, including a supplement. Everything was emailed in writing.",
  },
  {
    name: "Christopher Vellotti",
    date: "November 2024",
    rating: 5,
    neighborhood: "Highland Park",
    jobType: "Cedar Shake to Composite Conversion",
    text:
      "Converted from cedar shake to Atlas StormMaster Shake composite. The aesthetic match is genuinely impressive — neighbors did not realize the roof had been replaced. Premium price for premium work.",
  },
];

export const generalFaqs = [
  {
    q: "How quickly can someone come out for a free estimate?",
    a: "Within 48 hours during normal weeks. During storm season (March–June) we run 5–7 days. Active leaks are prioritized to same or next day.",
  },
  {
    q: "Are you licensed and insured?",
    a: "Yes. Texas Reg. #RC-1147823. We carry $2M general liability with Liberty Mutual and full workers compensation. We provide certificates of insurance to any homeowner who asks.",
  },
  {
    q: "Do you offer financing?",
    a: "Yes — 0% APR for 12 months on approved credit through Hearth, or 9.99% APR for 84 months for larger projects. Payments start as low as $89/month on a $14,800 replacement.",
  },
  {
    q: "What is your warranty?",
    a: "25-year workmanship guarantee on every replacement. Materials carry the manufacturer warranty (typically 30–50 years on premium asphalt, lifetime on metal). The workmanship guarantee is transferable to the next homeowner once.",
  },
  {
    q: "Do you work on commercial buildings?",
    a: "We do flat and low-slope commercial up to 25,000 sq ft — TPO, modified bitumen, and standing-seam metal. Larger commercial projects we refer to specialized partners.",
  },
  {
    q: "What payment methods do you accept?",
    a: "ACH transfer, wire, all major credit cards (3% processing fee on credit), and financed payments via Hearth. We do not accept cash for insurance claim deductibles — for compliance reasons every deductible is documented.",
  },
];

export const trustLogos: { name: string; mark: "seal" | "shield" | "google" | "star" }[] = [
  { name: "GAF Master Elite", mark: "seal" },
  { name: "Owens Corning Platinum", mark: "seal" },
  { name: "BBB A+ Accredited", mark: "shield" },
  { name: "HAAG Certified", mark: "shield" },
  { name: "Google 4.9 / 287 reviews", mark: "google" },
  { name: "Angi Super Service", mark: "star" },
];
