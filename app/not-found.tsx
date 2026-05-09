import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";

export default function NotFound() {
  return (
    <section className="flex min-h-[100dvh] items-center justify-center px-6 py-32">
      <div className="text-center">
        <Eyebrow>404 — page not found</Eyebrow>
        <h1 className="mt-6 font-display text-[64px] leading-none tracking-[-0.035em] sm:text-[120px] lg:text-[160px] font-bold text-[var(--ink)]">
          404<span className="text-[var(--rust)]">.</span>
        </h1>
        <p className="mx-auto mt-6 max-w-md text-[15.5px] leading-[1.7] text-[var(--ink-2)]">
          The page you&apos;re looking for has been moved or never existed. Try
          one of the links below.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <Button href="/" variant="ink" size="md">
            Back to home
          </Button>
          <Button href="/services" variant="outline" size="md">
            View services
          </Button>
        </div>
      </div>
    </section>
  );
}
