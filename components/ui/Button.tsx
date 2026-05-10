import * as React from "react";
import Link from "next/link";
import { ArrowUpRight, Phone } from "@phosphor-icons/react/dist/ssr";
import { cn } from "@/lib/utils";

type Variant = "primary" | "ghost" | "outline" | "amber" | "ink" | "paper";
type Size = "sm" | "md" | "lg";

const base =
  "group relative inline-flex items-center justify-center gap-2 font-medium tracking-tight transition-all duration-500 active:scale-[0.985] disabled:opacity-50 disabled:pointer-events-none whitespace-nowrap";

const sizes: Record<Size, string> = {
  sm: "h-10 pl-3 pr-1.5 text-[13px] rounded-full",
  md: "h-12 pl-4 pr-1.5 text-[14px] rounded-full",
  lg: "h-14 pl-5 pr-2 text-[15px] rounded-full",
};

const variants: Record<Variant, string> = {
  primary:
    "bg-[var(--ink)] text-[var(--paper)] hover:bg-[color-mix(in_oklch,var(--ink)_92%,var(--rust))]",
  ink: "bg-[var(--ink)] text-[var(--paper)] hover:bg-[color-mix(in_oklch,var(--ink)_92%,var(--rust))]",
  amber:
    "bg-[var(--ink)] text-[var(--paper)] hover:bg-[color-mix(in_oklch,var(--ink)_92%,var(--rust))]",
  ghost:
    "bg-transparent text-[var(--ink)] hover:bg-[color-mix(in_oklch,var(--ink)_5%,transparent)]",
  outline:
    "bg-transparent text-[var(--ink)] border border-[var(--line-2)] hover:bg-[var(--paper-2)]",
  paper:
    "bg-[var(--paper)] text-[var(--ink)] hover:bg-white",
};

const iconBg: Record<Variant, string> = {
  primary: "bg-[color-mix(in_oklch,var(--paper)_15%,transparent)] text-[var(--paper)]",
  ink: "bg-[color-mix(in_oklch,var(--paper)_15%,transparent)] text-[var(--paper)]",
  amber: "bg-[color-mix(in_oklch,var(--paper)_15%,transparent)] text-[var(--paper)]",
  ghost: "bg-[color-mix(in_oklch,var(--ink)_8%,transparent)] text-[var(--ink)]",
  outline: "bg-[color-mix(in_oklch,var(--ink)_8%,transparent)] text-[var(--ink)]",
  paper: "bg-[var(--ink)] text-[var(--paper)]",
};

export type ButtonProps = {
  variant?: Variant;
  size?: Size;
  href?: string;
  external?: boolean;
  icon?: "arrow" | "phone" | "none";
  children: React.ReactNode;
  className?: string;
} & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "children">;

export function Button({
  variant = "primary",
  size = "md",
  href,
  external,
  icon = "arrow",
  children,
  className,
  ...rest
}: ButtonProps) {
  const iconSize = size === "lg" ? 16 : size === "md" ? 15 : 14;
  const wrapperSize =
    size === "lg" ? "h-10 w-10" : size === "md" ? "h-9 w-9" : "h-8 w-8";

  const content = (
    <>
      <span>{children}</span>
      {icon !== "none" && (
        <span
          className={cn(
            "ml-1 inline-flex items-center justify-center rounded-full transition-all duration-500 ease-[var(--ease-haptic)] group-hover:translate-x-[2px] group-hover:-translate-y-[1px]",
            wrapperSize,
            iconBg[variant]
          )}
          aria-hidden
        >
          {icon === "phone" ? (
            <Phone size={iconSize} weight="fill" />
          ) : (
            <ArrowUpRight size={iconSize} weight="bold" />
          )}
        </span>
      )}
    </>
  );

  const cls = cn(base, sizes[size], variants[variant], className);

  if (href) {
    if (external) {
      return (
        <a className={cls} href={href} target="_blank" rel="noreferrer noopener">
          {content}
        </a>
      );
    }
    return (
      <Link className={cls} href={href as never}>
        {content}
      </Link>
    );
  }

  return (
    <button className={cls} {...rest}>
      {content}
    </button>
  );
}
