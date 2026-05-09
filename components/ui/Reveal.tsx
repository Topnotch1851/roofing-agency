"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState, type ReactNode } from "react";

/**
 * SSR-safe scroll reveal.
 * - Renders children fully visible on server + before hydration (no FOUC, no permanent invisibility if JS fails).
 * - On the client, after mount, switches to a controlled animation that fires when the element enters the viewport.
 * - Respects prefers-reduced-motion.
 */
export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const reduced = useReducedMotion();
  const [mounted, setMounted] = useState(false);
  const inView = useInView(ref, { once: true, amount: 0.15 });

  useEffect(() => {
    setMounted(true);
  }, []);

  // Pre-mount or reduced motion → render content visible immediately.
  const animate =
    !mounted || reduced
      ? { opacity: 1, y: 0, filter: "blur(0px)" }
      : inView
        ? { opacity: 1, y: 0, filter: "blur(0px)" }
        : { opacity: 0, y: 24, filter: "blur(8px)" };

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={false}
      animate={animate}
      transition={{
        duration: 0.85,
        ease: [0.165, 0.84, 0.44, 1],
        delay: mounted ? delay : 0,
      }}
    >
      {children}
    </motion.div>
  );
}

export function Stagger({
  children,
  className,
  stagger = 0.08,
}: {
  children: ReactNode;
  className?: string;
  stagger?: number;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const reduced = useReducedMotion();
  const [mounted, setMounted] = useState(false);
  const inView = useInView(ref, { once: true, amount: 0.15 });

  useEffect(() => {
    setMounted(true);
  }, []);

  if (reduced || !mounted) {
    return (
      <div ref={ref} className={className}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: stagger } },
      }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: 24, filter: "blur(8px)" },
        show: {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          transition: { duration: 0.85, ease: [0.165, 0.84, 0.44, 1] },
        },
      }}
    >
      {children}
    </motion.div>
  );
}
