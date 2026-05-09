import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { photos } from "@/lib/images";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { CTABlock } from "@/components/sections/CTABlock";

export const metadata: Metadata = {
  title: "Resources & Insights",
  description:
    "Field-tested roofing knowledge for Dallas-Fort Worth homeowners. Storm prep, insurance claims, materials, and maintenance.",
  alternates: { canonical: "/blog" },
};

const posts = [
  {
    slug: "filing-hail-claim-texas",
    category: "Insurance",
    date: "March 12, 2025",
    readTime: "9 min read",
    title:
      "How to file a Texas hail claim that doesn't get undervalued",
    excerpt:
      "Most Texas homeowners accept the first settlement they're offered. Here is how to read your scope of loss, identify what's missing, and file a successful supplement.",
    image: photos.blogClaims,
  },
  {
    slug: "asphalt-vs-metal-dallas",
    category: "Materials",
    date: "February 28, 2025",
    readTime: "12 min read",
    title:
      "Asphalt shingle or standing-seam metal? A Dallas-specific cost analysis",
    excerpt:
      "We replaced 142 roofs in Plano in 2024. Here is the real 25-year ownership cost of asphalt vs metal — including hail repair frequency, insurance discount maths, and resale data.",
    image: photos.blogMaterials,
  },
  {
    slug: "spotting-hail-damage",
    category: "Inspection",
    date: "February 15, 2025",
    readTime: "6 min read",
    title:
      "What hail damage actually looks like (and what it doesn't)",
    excerpt:
      "Three signs that mean replacement, three signs that mean repair, and one sign that means you've been lied to by a door-knocker.",
    image: photos.blogInspect,
  },
  {
    slug: "gutters-foundation-dallas",
    category: "Maintenance",
    date: "January 30, 2025",
    readTime: "7 min read",
    title:
      "How a $400 gutter mistake leads to a $40,000 foundation repair",
    excerpt:
      "Dallas's clay soil moves dramatically with moisture. We walk through the chain of failure that turns a clogged gutter into a slab crack — and how to break the chain.",
    image: photos.blogGutters,
  },
];

export default function BlogHub() {
  const [featured, ...rest] = posts;

  return (
    <>
      <section className="hero-pad-top pb-12 md:pb-16">
        <div className="container-x">
          <Eyebrow>Resources</Eyebrow>
          <h1 className="h-display mt-5 max-w-[18ch]">
            Field-tested <span className="text-[var(--rust)]">roofing knowledge.</span>
          </h1>
          <p className="lede mt-6 max-w-2xl">
            Written by our project managers and HAAG-certified inspectors —
            not by a marketing agency. If you read it here, we have done it.
          </p>
        </div>
      </section>

      {/* Featured */}
      <section className="container-x">
        <Reveal>
          <Link
            href={`/blog/${featured.slug}` as never}
            className="group grid items-center gap-6 sm:gap-10 rounded-[24px] sm:rounded-[28px] border border-[var(--line)] bg-[var(--paper)] p-4 sm:p-6 transition-all duration-700 hover:border-[var(--ink-2)] lg:grid-cols-12 lg:p-10"
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-[20px] lg:col-span-6 lg:aspect-[5/4]">
              <Image
                src={featured.image}
                alt={featured.title}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-[1200ms] ease-[var(--ease-out-expo)] group-hover:scale-[1.04]"
              />
            </div>
            <div className="lg:col-span-6">
              <div className="flex items-center gap-3 font-mono text-[10.5px] uppercase tracking-[0.18em] text-[var(--muted)]">
                <span className="text-[var(--rust)]">{featured.category}</span>
                <span aria-hidden>•</span>
                <span>{featured.date}</span>
                <span aria-hidden>•</span>
                <span>{featured.readTime}</span>
              </div>
              <h2 className="mt-5 font-display text-[22px] font-bold leading-[1.15] tracking-[-0.02em] sm:text-[36px] lg:text-[44px] text-balance">
                {featured.title}
              </h2>
              <p className="mt-4 sm:mt-5 max-w-md text-[14.5px] sm:text-[15.5px] leading-[1.65] text-[var(--ink-2)]">
                {featured.excerpt}
              </p>
              <span className="mt-7 inline-flex items-center gap-2 font-mono text-[12px] uppercase tracking-[0.16em] text-[var(--ink)]">
                Read article
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[var(--paper-2)] text-[var(--ink-2)] transition-all duration-500 group-hover:bg-[var(--ink)] group-hover:text-[var(--paper)] group-hover:translate-x-1 group-hover:-translate-y-1">
                  <ArrowUpRight size={14} weight="bold" />
                </span>
              </span>
            </div>
          </Link>
        </Reveal>
      </section>

      {/* List */}
      <section className="section-y">
        <div className="container-x">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.06}>
                <Link
                  href={`/blog/${p.slug}` as never}
                  className="group flex h-full flex-col rounded-[20px] sm:rounded-[24px] border border-[var(--line)] bg-[var(--paper)] p-5 sm:p-6 transition-all duration-500 hover:-translate-y-0.5 hover:border-[var(--ink-2)]"
                >
                  <div className="relative aspect-[16/10] overflow-hidden rounded-[16px]">
                    <Image
                      src={p.image}
                      alt={p.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 33vw"
                      className="object-cover transition-transform duration-[1200ms] ease-[var(--ease-out-expo)] group-hover:scale-[1.05]"
                    />
                  </div>
                  <div className="mt-5 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--muted)]">
                    <span className="text-[var(--rust)]">{p.category}</span>
                    <span aria-hidden>•</span>
                    <span>{p.readTime}</span>
                  </div>
                  <h3 className="mt-3 font-display text-[20px] font-bold leading-tight tracking-[-0.015em] text-[var(--ink)]">
                    {p.title}
                  </h3>
                  <p className="mt-2 flex-1 text-[14px] leading-[1.6] text-[var(--ink-2)]">
                    {p.excerpt}
                  </p>
                  <span className="mt-5 font-mono text-[10.5px] uppercase tracking-[0.16em] text-[var(--ink-2)]">
                    {p.date}
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTABlock />
    </>
  );
}
