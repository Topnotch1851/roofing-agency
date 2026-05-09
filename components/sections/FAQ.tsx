"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "@phosphor-icons/react/dist/ssr";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";

type FAQ = { q: string; a: string };

export function FAQAccordion({
  faqs,
  heading,
  intro,
  showCta = true,
}: {
  faqs: FAQ[];
  heading?: string;
  intro?: string;
  showCta?: boolean;
}) {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="section-y">
      <div className="container-x">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Reveal>
              <Eyebrow>FAQ</Eyebrow>
              <h2 className="h-section mt-5">
                {heading ?? "Questions homeowners actually ask."}
              </h2>
              {intro && (
                <p className="mt-5 max-w-md text-[15px] leading-[1.7] text-[var(--ink-2)]">
                  {intro}
                </p>
              )}
              {showCta && (
                <div className="mt-8 hidden lg:block">
                  <Button href="/contact" variant="outline" size="md">
                    Ask a different question
                  </Button>
                </div>
              )}
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <ul className="divide-y divide-[var(--line)] border-y border-[var(--line)]">
              {faqs.map((f, i) => {
                const open = openIdx === i;
                return (
                  <li key={f.q}>
                    <button
                      onClick={() => setOpenIdx(open ? null : i)}
                      aria-expanded={open}
                      className="group flex w-full items-start justify-between gap-4 py-5 sm:gap-6 sm:py-6 text-left"
                    >
                      <span className="font-display text-[16px] font-semibold leading-snug tracking-[-0.015em] text-[var(--ink)] sm:text-[20px]">
                        {f.q}
                      </span>
                      <span
                        className={`mt-0.5 inline-flex h-8 w-8 sm:h-9 sm:w-9 shrink-0 items-center justify-center rounded-full border border-[var(--line)] bg-[var(--paper)] transition-all duration-500 ease-[var(--ease-haptic)] ${
                          open ? "rotate-45 border-[var(--ink)] bg-[var(--ink)] text-[var(--paper)]" : "text-[var(--ink-2)]"
                        }`}
                      >
                        <Plus size={14} weight="bold" />
                      </span>
                    </button>
                    <AnimatePresence initial={false}>
                      {open && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
                          className="overflow-hidden"
                        >
                          <p className="pb-5 sm:pb-6 pr-10 sm:pr-14 text-[14px] sm:text-[14.5px] leading-[1.7] text-[var(--ink-2)]">
                            {f.a}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
