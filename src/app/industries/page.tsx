import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/layout/Container";
import { IndustryCard } from "@/components/cards/IndustryCard";
import { CTASection } from "@/components/sections/CTASection";
import { getAllIndustries } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Industries We Serve",
  description:
    "Oar supports ship management companies, ship chandlers, shipping agents, freight forwarders and marine & offshore operators across UAE ports.",
  path: "/industries",
});

export default function IndustriesPage() {
  const industries = getAllIndustries();

  return (
    <>
      <PageHero
        eyebrow="Industries"
        heading="Built around maritime operations."
        description="Every operator between a supplier and a vessel has a different problem. Oar's role changes shape depending on which side of that chain you sit on."
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Industries" }]}
      />

      <section className="bg-off-white py-20 sm:py-24">
        <Container>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((doc) => (
              <IndustryCard key={doc.slug} industry={doc.frontmatter} />
            ))}
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
