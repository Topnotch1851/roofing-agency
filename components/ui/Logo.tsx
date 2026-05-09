import Link from "next/link";
import { site } from "@/lib/config";

export function Logo({
  compact = false,
  inverted = false,
}: {
  compact?: boolean;
  inverted?: boolean;
}) {
  const wordColor = inverted ? "var(--paper)" : "var(--ink)";
  return (
    <Link
      href="/"
      aria-label={`${site.name} home`}
      className="group inline-flex items-center gap-2.5"
    >
      {!compact && (
        <span
          className="font-display text-[19px] font-bold leading-none tracking-[-0.02em]"
          style={{ color: wordColor }}
        >
          Apex<span className="text-[var(--rust)]">.</span>
        </span>
      )}
    </Link>
  );
}
