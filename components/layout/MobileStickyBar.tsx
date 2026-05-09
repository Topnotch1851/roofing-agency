"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Phone } from "@phosphor-icons/react/dist/ssr";
import { site } from "@/lib/config";
import { telHref } from "@/lib/utils";

export function MobileStickyBar() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div
      role="region"
      aria-label="Quick contact"
      className="fixed inset-x-0 bottom-0 z-40 md:hidden"
    >
      <div className="container-x pb-3" style={{ paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))" }}>
        <div className="bezel-shell flex gap-1 shadow-[0_24px_48px_-12px_color-mix(in_oklch,var(--ink)_30%,transparent)]">
          <a
            href={telHref(site.phone)}
            className="bezel-core flex flex-1 items-center justify-center gap-2 py-3.5 text-[14px] font-medium text-[var(--ink)] active:scale-[0.98] transition-transform"
          >
            <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[var(--rust)] text-[var(--paper)]">
              <Phone size={13} weight="fill" />
            </span>
            <span>Call Now</span>
          </a>
          <Link
            href={"/quote" as never}
            className="flex flex-1 items-center justify-center rounded-[22px] bg-[var(--ink)] py-3.5 text-[14px] font-semibold text-[var(--paper)] active:scale-[0.98] transition-transform"
          >
            Free Estimate
          </Link>
        </div>
      </div>
    </div>
  );
}
