import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";
import { photos } from "@/lib/images";
import { Reveal } from "@/components/ui/Reveal";
import { CTABlock } from "@/components/sections/CTABlock";

const post = {
  slug: "filing-hail-claim-texas",
  category: "Insurance",
  date: "March 12, 2025",
  readTime: "9 min read",
  title: "How to file a Texas hail claim that doesn't get undervalued",
  author: "Marcus Holcombe",
  authorRole: "Founder, GAF Master Elite",
  image: photos.blogClaims,
};

export function generateStaticParams() {
  return [{ slug: post.slug }];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  if (slug !== post.slug) return {};
  return {
    title: post.title,
    description:
      "A field-tested guide to filing a Texas hail damage claim — from documentation to supplement.",
    alternates: { canonical: `/blog/${post.slug}` },
  };
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  if (slug !== post.slug) notFound();

  return (
    <article className="hero-pad-top pb-12 md:pb-24">
      <div className="container-x">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 font-mono text-[10.5px] uppercase tracking-[0.18em] text-[var(--ink-2)] hover:text-[var(--ink)]"
        >
          <ArrowLeft size={12} weight="bold" />
          All articles
        </Link>

        <div className="mt-8 max-w-3xl">
          <Reveal>
            <div className="flex items-center gap-2 font-mono text-[10.5px] uppercase tracking-[0.18em] text-[var(--muted)]">
              <span className="text-[var(--rust)]">{post.category}</span>
              <span aria-hidden>•</span>
              <span>{post.date}</span>
              <span aria-hidden>•</span>
              <span>{post.readTime}</span>
            </div>
            <h1 className="mt-5 font-display text-[28px] leading-[1.1] tracking-[-0.025em] sm:text-[52px] lg:text-[64px] font-bold text-balance">
              {post.title}
            </h1>
            <div className="mt-8 flex items-center gap-4">
              <div
                aria-hidden
                className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--ink)] font-display text-[14px] font-bold text-[var(--paper)]"
              >
                MH
              </div>
              <div>
                <p className="font-display text-[14px] font-semibold tracking-[-0.01em] text-[var(--ink)]">
                  {post.author}
                </p>
                <p className="font-mono text-[10.5px] uppercase tracking-[0.16em] text-[var(--muted)]">
                  {post.authorRole}
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Hero */}
      <div className="container-x mt-10">
        <div className="relative aspect-[5/3] sm:aspect-[16/8] overflow-hidden rounded-[20px] sm:rounded-[28px] border border-[var(--line)]">
          <Image
            src={post.image}
            alt={post.title}
            fill
            sizes="(max-width: 1320px) 100vw, 1320px"
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* Body */}
      <div className="container-x mt-12">
        <div className="mx-auto max-w-[680px] [&_h2]:font-display [&_h2]:text-[22px] sm:[&_h2]:text-[28px] [&_h2]:font-bold [&_h2]:tracking-[-0.02em] [&_h2]:mt-10 sm:[&_h2]:mt-12 [&_h2]:mb-3 sm:[&_h2]:mb-4 [&_h2]:leading-tight [&_h3]:font-display [&_h3]:text-[18px] sm:[&_h3]:text-[20px] [&_h3]:font-semibold [&_h3]:mt-7 sm:[&_h3]:mt-8 [&_h3]:mb-3 [&_p]:text-[15.5px] sm:[&_p]:text-[16.5px] [&_p]:leading-[1.75] sm:[&_p]:leading-[1.8] [&_p]:text-[var(--ink-2)] [&_p]:my-4 sm:[&_p]:my-5 [&_blockquote]:my-7 sm:[&_blockquote]:my-8 [&_blockquote]:border-l-2 [&_blockquote]:border-[var(--rust)] [&_blockquote]:pl-5 sm:[&_blockquote]:pl-6 [&_blockquote]:font-display [&_blockquote]:text-[17px] sm:[&_blockquote]:text-[20px] [&_blockquote]:italic [&_blockquote]:text-[var(--ink)] [&_ul]:my-5 [&_li]:text-[14.5px] sm:[&_li]:text-[15.5px] [&_li]:leading-[1.7] [&_li]:text-[var(--ink-2)] [&_li]:my-2 [&_li]:pl-2 [&_li]:list-disc [&_li]:list-inside">
          <p>
            North Texas insurance carriers paid out $3.4 billion in hail-related
            claims after the April 2024 Dallas storm. We worked over 80 of those
            claims directly. The pattern was consistent: the average homeowner
            received an initial settlement that covered about 40% of their
            actual replacement cost. Most accepted it.
          </p>
          <p>
            They did not have to. Filing a successful supplement is not
            adversarial. It is a documentation exercise — and most carriers
            approve them when the documentation is correct.
          </p>

          <h2>Step 1 — Get a third-party inspection before you file</h2>
          <p>
            Carriers send their adjuster after you file. By that point, you have
            no leverage. A HAAG-certified inspector documents damage in the same
            language adjusters are trained to look for: number of hail strikes
            per 10x10 square (8 is the typical threshold for full replacement),
            collateral damage to soft metals (vents, gutters, AC fins), and
            wind-lifted shingle evidence.
          </p>

          <blockquote>
            The single biggest reason claims get undervalued is that the
            adjuster sees what they are looking for, not what is there.
          </blockquote>

          <h2>Step 2 — Be on the roof when the adjuster arrives</h2>
          <p>
            We have flipped over 60% of partial settlements into full
            replacements simply by being physically on the roof during the
            adjuster inspection. The conversation changes. Areas that would have
            been missed get documented. The adjuster leaves with our written
            inspection report, which becomes part of their file.
          </p>

          <h2>Step 3 — Read your scope of loss carefully</h2>
          <p>
            The scope of loss document carriers issue after inspection is the
            single most important document in your claim. It lists every line
            item the carrier intends to pay for. Code-required upgrades that are
            commonly missed:
          </p>
          <ul>
            <li>Drip edge (Texas code requirement since 2012)</li>
            <li>Ice and water shield in valleys</li>
            <li>Synthetic underlayment (replaces felt)</li>
            <li>Ridge ventilation if existing system was non-compliant</li>
            <li>Decking replacement (per inspection findings)</li>
          </ul>

          <h2>Step 4 — File a supplement if the scope is incomplete</h2>
          <p>
            A supplement is not a re-opening of your claim. It is an addendum
            requesting payment for items that were missed or undervalued in the
            original scope. We file supplements via the carrier&apos;s standard
            supplement process — usually a one-page form attached to a written
            justification.
          </p>
          <p>
            The success rate on properly documented supplements is around 70%.
            The success rate on shouted-into-the-phone complaints is around 0%.
          </p>

          <h2>What this looks like in practice</h2>
          <p>
            Margaret Holcombe in Lakewood received an initial $4,200 settlement
            on a 19-year-old roof after the April 2024 storm. We met her
            adjuster on a re-inspection, documented 14 hail strikes per square
            on the south slope (the carrier had recorded 4), and filed a
            supplement requesting full replacement. The final settlement was
            $24,800. The new roof was installed two weeks later.
          </p>

          <p>
            None of this is unusual. It is just documentation, done correctly.
          </p>
        </div>
      </div>

      <div className="mt-16 md:mt-24">
        <CTABlock />
      </div>
    </article>
  );
}
