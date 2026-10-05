import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { ServiceCard } from "@/components/cards/ServiceCard";
import { CtaLink } from "@/components/ui/CtaLink";
import { FadeIn } from "@/components/motion/FadeIn";
import { getAllServices } from "@/lib/content";

// Port Coordination is the clearest expression of Oar's "one coordinated
// operation" positioning, so it anchors the section as the featured card.
const FEATURED_SLUG = "port-coordination";

export function ServiceGrid() {
  const services = getAllServices();
  const featured = services.find((doc) => doc.slug === FEATURED_SLUG);
  const supporting = services.filter((doc) => doc.slug !== FEATURED_SLUG);

  return (
    <section className="bg-off-white py-24 sm:py-28">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeader
            eyebrow="What We Do"
            heading="From shore to vessel, we handle the execution."
          />
          <CtaLink href="/services" variant="outline" size="sm">
            View all services
          </CtaLink>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 lg:grid-cols-3 lg:grid-rows-3">
          {featured ? (
            <FadeIn className="lg:col-span-2 lg:row-span-2">
              <ServiceCard service={featured.frontmatter} index={0} featured />
            </FadeIn>
          ) : null}
          {supporting.map((doc, index) => (
            <FadeIn key={doc.slug} delay={(index + 1) * 0.06}>
              <ServiceCard service={doc.frontmatter} index={index + 1} />
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
