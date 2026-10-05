import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { InsightCard } from "@/components/cards/InsightCard";
import { CtaLink } from "@/components/ui/CtaLink";
import { getAllInsights } from "@/lib/content";

export function InsightsSection() {
  const insights = getAllInsights().slice(0, 3);
  if (insights.length === 0) return null;

  return (
    <section className="bg-off-white py-24 sm:py-28">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeader eyebrow="Insights" heading="Maritime logistics insights." />
          <CtaLink href="/insights" variant="outline" size="sm">
            Explore insights
          </CtaLink>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {insights.map((doc) => (
            <InsightCard key={doc.slug} insight={doc.frontmatter} />
          ))}
        </div>
      </Container>
    </section>
  );
}
