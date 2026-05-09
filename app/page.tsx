import { Hero } from "@/components/sections/Hero";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { WhyApex } from "@/components/sections/WhyApex";
import { Process } from "@/components/sections/Process";
import { Gallery } from "@/components/sections/Gallery";
import { Reviews } from "@/components/sections/Reviews";
import { AreaMap } from "@/components/sections/AreaMap";
import { Financing } from "@/components/sections/Financing";
import { FAQAccordion } from "@/components/sections/FAQ";
import { CTABlock } from "@/components/sections/CTABlock";
import { generalFaqs } from "@/lib/content";
import { FAQSchema } from "@/components/schema/JsonLd";

export default function HomePage() {
  return (
    <>
      <FAQSchema faqs={generalFaqs} />
      <Hero />
      <ServicesGrid />
      <WhyApex />
      <Process />
      <Gallery />
      <Reviews />
      <AreaMap />
      <Financing />
      <FAQAccordion faqs={generalFaqs} />
      <CTABlock />
    </>
  );
}
