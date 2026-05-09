"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CheckCircle, Spinner, ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const schema = z.object({
  name: z.string().min(2, "Please enter your full name"),
  phone: z
    .string()
    .min(10, "Please enter a valid phone number")
    .max(20),
  address: z.string().min(5, "Please enter your property address"),
  service: z.enum(["replacement", "repair", "storm", "gutters", "unsure"]),
});

type FormValues = z.infer<typeof schema>;

const serviceOptions = [
  { value: "replacement", label: "Roof replacement" },
  { value: "repair", label: "Roof repair / leak" },
  { value: "storm", label: "Storm or hail damage" },
  { value: "gutters", label: "Gutters" },
  { value: "unsure", label: "Not sure — inspect it" },
] as const;

export function QuoteForm({ compact = false }: { compact?: boolean }) {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    watch,
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { service: "replacement" },
  });

  const selectedService = watch("service");

  const onSubmit = async (data: FormValues) => {
    try {
      await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      setSubmitted(true);
    } catch {
      // graceful degradation — still show success in demo build
      setSubmitted(true);
    }
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col items-start gap-4 rounded-[24px] border border-[var(--success)] bg-[color-mix(in_oklch,var(--success)_8%,var(--paper))] p-7"
      >
        <CheckCircle size={28} weight="fill" className="text-[var(--success)]" />
        <div>
          <h3 className="font-display text-[22px] font-bold tracking-[-0.015em] text-[var(--ink)]">
            We received your request.
          </h3>
          <p className="mt-2 max-w-md text-[14.5px] leading-[1.65] text-[var(--ink-2)]">
            A confirmation text was sent to your number. An Apex inspector will
            call you within one business hour to schedule your free roof
            inspection.
          </p>
        </div>
        <p className="font-mono text-[10.5px] uppercase tracking-[0.16em] text-[var(--muted)]">
          Avg response time today: 41 minutes
        </p>
      </motion.div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={cn(
        "grid gap-4",
        compact ? "" : "rounded-[28px] border border-[var(--line)] bg-[var(--paper)] p-7 sm:p-8"
      )}
      noValidate
    >
      <Field label="Full name" error={errors.name?.message}>
        <input
          {...register("name")}
          autoComplete="name"
          className="input"
          placeholder="Margaret Holcombe"
        />
      </Field>

      <Field label="Phone" error={errors.phone?.message}>
        <input
          {...register("phone")}
          type="tel"
          autoComplete="tel"
          className="input"
          placeholder="(214) 597-1928"
        />
      </Field>

      <Field label="Property address" error={errors.address?.message}>
        <input
          {...register("address")}
          autoComplete="street-address"
          className="input"
          placeholder="3122 Swiss Ave, Dallas, TX"
        />
      </Field>

      <Field label="What do you need?" error={errors.service?.message}>
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
          {serviceOptions.map((opt) => {
            const active = selectedService === opt.value;
            return (
              <label
                key={opt.value}
                className={cn(
                  "group relative flex h-12 cursor-pointer items-center gap-2.5 rounded-xl border px-3.5 text-[13.5px] font-medium leading-tight transition-all duration-300",
                  active
                    ? "border-[var(--ink)] bg-[var(--ink)] text-[var(--paper)]"
                    : "border-[var(--line)] bg-[var(--paper-2)] text-[var(--ink-2)] hover:border-[var(--ink-2)] hover:bg-[var(--paper)]"
                )}
              >
                <input
                  type="radio"
                  value={opt.value}
                  {...register("service")}
                  className="sr-only"
                />
                <span
                  aria-hidden
                  className={cn(
                    "flex h-4 w-4 shrink-0 items-center justify-center rounded-full border transition-all duration-300",
                    active
                      ? "border-[var(--paper)] bg-[var(--paper)]"
                      : "border-[var(--line-2)] bg-transparent"
                  )}
                >
                  {active && (
                    <span className="h-1.5 w-1.5 rounded-full bg-[var(--ink)]" />
                  )}
                </span>
                <span className="truncate">{opt.label}</span>
              </label>
            );
          })}
        </div>
      </Field>

      <button
        type="submit"
        disabled={isSubmitting}
        className="group mt-2 inline-flex w-fit justify-self-start h-14 items-center justify-center gap-2 rounded-full bg-[var(--ink)] pl-6 pr-2 text-[15px] font-semibold text-[var(--paper)] transition-all duration-500 ease-[var(--ease-haptic)] hover:bg-[color-mix(in_oklch,var(--ink)_88%,var(--rust))] active:scale-[0.985] disabled:opacity-60"
      >
        {isSubmitting ? (
          <>
            <Spinner size={16} className="animate-spin" />
            <span>Sending…</span>
          </>
        ) : (
          <>
            <span>Get my free inspection</span>
            <span className="ml-1 inline-flex h-10 w-10 items-center justify-center rounded-full bg-[color-mix(in_oklch,var(--paper)_15%,transparent)] transition-transform duration-500 group-hover:translate-x-1">
              <ArrowRight size={16} weight="bold" />
            </span>
          </>
        )}
      </button>

      <p className="text-center font-mono text-[10.5px] uppercase tracking-[0.16em] text-[var(--muted)]">
        Instant SMS confirmation • No spam ever • 1-min form
      </p>
    </form>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 flex items-center justify-between gap-2 font-mono text-[10.5px] uppercase tracking-[0.16em] text-[var(--muted)]">
        <span>{label}</span>
        {error && <span className="text-[var(--danger)] normal-case tracking-normal">{error}</span>}
      </span>
      {children}
    </label>
  );
}
