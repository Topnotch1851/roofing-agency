"use client";

import { useState, useEffect } from "react";
import { Star, Quotes, CaretLeft, CaretRight } from "@phosphor-icons/react/dist/ssr";
import { reviews } from "@/lib/content";
import { site } from "@/lib/config";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";

export function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);

  useEffect(() => {
    const updateCardsPerView = () => {
      if (window.innerWidth < 640) setCardsPerView(1);
      else if (window.innerWidth < 1024) setCardsPerView(2);
      else setCardsPerView(3);
    };
    updateCardsPerView();
    window.addEventListener("resize", updateCardsPerView);
    return () => window.removeEventListener("resize", updateCardsPerView);
  }, []);

  const nextSlide = () => {
    const maxIndex = Math.max(0, reviews.length - cardsPerView);
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    const maxIndex = Math.max(0, reviews.length - cardsPerView);
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  return (
    <section id="reviews" className="section-y">
      <div className="container-x">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <Reveal>
              <Eyebrow>Verified reviews</Eyebrow>
              <h2 className="h-section mt-5 max-w-[18ch]">
                {site.rating.value}★ across {site.rating.count} Google reviews.
              </h2>
            </Reveal>
          </div>
          <div className="lg:col-span-5 flex items-center justify-end gap-3">
            <Reveal delay={0.1}>
              <div className="flex items-center gap-2">
                <button
                  onClick={prevSlide}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--line)] bg-[var(--paper)] text-[var(--ink)] transition-all duration-500 ease-[var(--ease-haptic)] hover:bg-[var(--ink)] hover:text-[var(--paper)] hover:border-[var(--ink)] active:scale-[0.94]"
                  aria-label="Previous review"
                >
                  <CaretLeft size={18} weight="bold" />
                </button>
                <button
                  onClick={nextSlide}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--line)] bg-[var(--paper)] text-[var(--ink)] transition-all duration-500 ease-[var(--ease-haptic)] hover:bg-[var(--ink)] hover:text-[var(--paper)] hover:border-[var(--ink)] active:scale-[0.94]"
                  aria-label="Next review"
                >
                  <CaretRight size={18} weight="bold" />
                </button>
              </div>
            </Reveal>
            <Reveal delay={0.15}>
              <Button href={site.socials.google} external variant="outline" size="md">
                Read all on Google
              </Button>
            </Reveal>
          </div>
        </div>

        <div className="mt-10 sm:mt-14">
          <div className="overflow-hidden">
            <div
              className="flex gap-4 transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * (100 / cardsPerView)}%)` }}
            >
              {reviews.map((r) => (
                <div
                  key={r.name}
                  className="flex-shrink-0"
                  style={{ width: `calc((100% - ${(cardsPerView - 1) * 16}px) / ${cardsPerView})` }}
                >
                  <article className="h-full rounded-[24px] border border-[var(--line)] bg-[var(--paper)] p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-0.5">
                        {Array.from({ length: 5 }).map((_, k) => (
                          <Star key={k} size={14} weight="fill" className="text-[var(--rust)]" />
                        ))}
                      </div>
                      <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-[var(--muted)]">
                        {r.date}
                      </span>
                    </div>

                    <Quotes
                      size={24}
                      weight="fill"
                      className="mt-3 text-[color-mix(in_oklch,var(--rust)_20%,transparent)]"
                    />

                    <p className="mt-2 text-[14px] leading-[1.65] text-[var(--ink-2)] line-clamp-4">
                      {r.text}
                    </p>

                    <footer className="mt-4 flex items-center gap-3 border-t border-[var(--line)] pt-3">
                      <div
                        aria-hidden
                        className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--ink)] font-display text-[12px] font-bold text-[var(--paper)]"
                      >
                        {r.name
                          .split(" ")
                          .slice(0, 2)
                          .map((n) => n[0])
                          .join("")}
                      </div>
                      <div className="min-w-0">
                        <p className="truncate font-display text-[13px] font-semibold tracking-[-0.01em] text-[var(--ink)]">
                          {r.name}
                        </p>
                        <p className="truncate font-mono text-[9px] uppercase tracking-[0.12em] text-[var(--muted)]">
                          {r.neighborhood} • {r.jobType}
                        </p>
                      </div>
                    </footer>
                  </article>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
