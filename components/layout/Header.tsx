"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone } from "@phosphor-icons/react/dist/ssr";
import { nav, site } from "@/lib/config";
import { telHref } from "@/lib/utils";
import { Button } from "@/components/ui/Button";

export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 pointer-events-none">
        <div className="container-x pt-3 sm:pt-5">
          <div className="nav-pill">
            <Link href="/" className="font-display text-[19px] font-bold leading-none tracking-[-0.02em] text-[var(--ink)]">
              Apex<span className="text-[var(--rust)]">.</span>
            </Link>

            <nav className="hidden md:flex items-center gap-1">
              {nav.primary.map((item) => (
                <Link
                  key={item.href}
                  href={item.href as never}
                  className="rounded-full px-3.5 py-2 text-[13.5px] font-medium text-[var(--ink-2)] transition-colors duration-300 hover:text-[var(--ink)] hover:bg-[color-mix(in_oklch,var(--ink)_5%,transparent)]"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              <a
                href={telHref(site.phone)}
                className="hidden lg:inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-[13px] font-medium text-[var(--ink)] transition-colors duration-300 hover:bg-[color-mix(in_oklch,var(--ink)_5%,transparent)]"
              >
                <Phone size={14} weight="fill" className="text-[var(--rust)]" />
                <span>{site.phone}</span>
              </a>
              <div className="hidden md:block">
                <Button href={nav.cta.href} variant="amber" size="sm" icon="arrow">
                  {nav.cta.label}
                </Button>
              </div>
              <button
                aria-label={open ? "Close menu" : "Open menu"}
                aria-expanded={open}
                onClick={() => setOpen((v) => !v)}
                className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full bg-[var(--ink)] text-[var(--paper)]"
              >
                <span className="relative block h-3 w-4">
                  <motion.span
                    animate={{
                      y: open ? 0 : -5,
                      rotate: open ? 45 : 0,
                    }}
                    transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
                    className="absolute inset-x-0 top-1/2 h-[1.5px] -translate-y-1/2 bg-current"
                  />
                  <motion.span
                    animate={{
                      y: open ? 0 : 5,
                      rotate: open ? -45 : 0,
                    }}
                    transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
                    className="absolute inset-x-0 top-1/2 h-[1.5px] -translate-y-1/2 bg-current"
                  />
                </span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-40 md:hidden bg-[color-mix(in_oklch,var(--paper)_92%,transparent)] backdrop-blur-3xl"
          >
            <div className="container-x flex h-full flex-col pt-24 pb-10">
              <motion.nav
                initial="hidden"
                animate="show"
                variants={{
                  hidden: {},
                  show: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } },
                }}
                className="flex flex-col gap-1 mt-4"
              >
                {nav.primary.map((item) => (
                  <motion.div
                    key={item.href}
                    variants={{
                      hidden: { opacity: 0, y: 24, filter: "blur(8px)" },
                      show: {
                        opacity: 1,
                        y: 0,
                        filter: "blur(0px)",
                        transition: { duration: 0.6, ease: [0.165, 0.84, 0.44, 1] },
                      },
                    }}
                  >
                    <Link
                      href={item.href as never}
                      onClick={() => setOpen(false)}
                      className="block py-3 font-display text-[22px] font-semibold leading-tight tracking-[-0.02em] text-[var(--ink)]"
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </motion.nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
