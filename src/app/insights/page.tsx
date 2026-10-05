import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/layout/Container";
import { InsightCard } from "@/components/cards/InsightCard";
import { CTASection } from "@/components/sections/CTASection";
import { getAllInsights } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Maritime Logistics Insights",
  description:
    "Practical insights on port execution, vessel delivery and UAE marine logistics from Oar Shipping.",
  path: "/insights",
});

export default function InsightsPage() {
  const insights = getAllInsights();

  return (
    <>
      <PageHero
        eyebrow="Insights"
        heading="Maritime logistics insights."
        description="Practical notes on port execution, vessel delivery and the coordination problems that sit behind a UAE vessel call."
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Insights" }]}
      />

      <section className="bg-off-white py-20 sm:py-24">
        <Container>
          {insights.length > 0 ? (
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {insights.map((doc) => (
                <InsightCard key={doc.slug} insight={doc.frontmatter} />
              ))}
            </div>
          ) : (
            <p className="text-slate">New articles are on the way.</p>
          )}
        </Container>
      </section>

      <CTASection />
    </>
  );
}
