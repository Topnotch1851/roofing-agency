import Image from "next/image";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { projectPhotos, photos } from "@/lib/images";

const projects = [
  {
    id: "lakewood",
    neighborhood: "Lakewood, Dallas",
    type: "Full Replacement",
    material: "Owens Corning Duration Storm",
    settlement: "$24,800 insurance",
    span: "lg:col-span-7",
    aspect: "aspect-[16/10]",
    seed: "apex-lakewood-1",
  },
  {
    id: "preston-hollow",
    neighborhood: "Preston Hollow",
    type: "Standing-seam metal",
    material: "24-gauge Galvalume",
    settlement: "Owner pay — $68k",
    span: "lg:col-span-5",
    aspect: "aspect-[4/5]",
    seed: "apex-preston-1",
  },
  {
    id: "willow-bend",
    neighborhood: "Willow Bend, Plano",
    type: "Storm Restoration",
    material: "GAF Timberline HDZ",
    settlement: "$22,400 insurance",
    span: "lg:col-span-5",
    aspect: "aspect-[4/3]",
    seed: "apex-plano-1",
  },
  {
    id: "phillips-creek",
    neighborhood: "Phillips Creek Ranch, Frisco",
    type: "Insurance Replacement",
    material: "Atlas StormMaster Shake",
    settlement: "$31,200 insurance",
    span: "lg:col-span-7",
    aspect: "aspect-[16/9]",
    seed: "apex-frisco-1",
  },
];

export function Gallery() {
  return (
    <section className="section-y bg-[var(--paper-2)] border-y border-[var(--line)]">
      <div className="container-x">
        <div className="max-w-3xl">
          <Reveal>
            <Eyebrow>Recent work</Eyebrow>
            <h2 className="h-section mt-5">
              2,400+ DFW roofs.<br />
              <span className="text-[var(--ink-2)]">Each photographed, documented, warrantied.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="lede mt-6 max-w-xl">
              Every job in our archive is a real job we have done in the last
              36 months. We cite the neighbourhood and the material because
              you should be able to drive past and verify.
            </p>
          </Reveal>
        </div>

        <Reveal>
          <div className="mt-10 sm:mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-12">
            {projects.map((p) => (
              <article
                key={p.id}
                className={`group relative h-full min-h-[280px] rounded-[24px] border border-[var(--line)] bg-[var(--paper)] ${p.span}`}
              >
                <div className="relative h-full overflow-hidden">
                  <Image
                    src={projectPhotos[p.id] ?? photos.craftsman}
                    alt={`${p.type} in ${p.neighborhood}`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover transition-transform duration-[1200ms] ease-[var(--ease-out-expo)] group-hover:scale-[1.04]"
                  />
                  <div
                    aria-hidden
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(180deg, transparent 40%, color-mix(in oklch, var(--ink) 85%, transparent) 100%)",
                    }}
                  />
                  <div className="absolute inset-x-0 bottom-0 p-6" style={{ textShadow: "0 2px 12px rgba(0,0,0,0.5)" }}>
                    <p className="font-mono text-[10.5px] uppercase tracking-[0.18em] opacity-95" style={{ color: "white" }}>
                      {p.neighborhood}
                    </p>
                    <h3 className="mt-1.5 font-display text-[22px] font-bold leading-tight tracking-[-0.015em] sm:text-[26px]" style={{ color: "white" }}>
                      {p.type}
                    </h3>
                    <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-[12px] opacity-95" style={{ color: "white" }}>
                      <span>{p.material}</span>
                      <span aria-hidden className="h-1 w-1 rounded-full bg-white/60" />
                      <span>{p.settlement}</span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
