import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/layout/Container";
import { ServiceCard } from "@/components/cards/ServiceCard";
import { CTASection } from "@/components/sections/CTASection";
import { getAllServices } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";
import { placeholderImages } from "@/lib/images";

export const metadata: Metadata = buildMetadata({
  title: "Marine Logistics Services in UAE",
  description:
    "Port logistics, vessel delivery, customs clearance, warehousing, cargo transportation and port coordination across UAE ports.",
  path: "/services",
});

export default function ServicesPage() {
  const services = getAllServices();

  return (
    <>
      <PageHero
        eyebrow="Services"
        heading="Marine logistics built around the vessel."
        description="From cargo collection and customs clearance to warehousing, transportation and vessel delivery, Oar coordinates the shore-side execution required to keep maritime operations moving."
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Services" }]}
        image={placeholderImages.heroVessel}
      />

      <section className="bg-off-white py-20 sm:py-24">
        <Container>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((doc, index) => (
              <ServiceCard key={doc.slug} service={doc.frontmatter} index={index} />
            ))}
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
