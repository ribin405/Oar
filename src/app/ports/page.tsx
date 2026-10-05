import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { LinkCardGrid } from "@/components/sections/LinkCardGrid";
import { CTASection } from "@/components/sections/CTASection";
import { getVerifiedPorts } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "UAE Port Network",
  description:
    "The UAE ports where Oar coordinates marine logistics and port-side execution.",
  path: "/ports",
});

export default function PortsPage() {
  const ports = getVerifiedPorts();

  return (
    <>
      <PageHero
        eyebrow="Ports & Locations"
        heading="Connected to the ports that keep vessels moving."
        description="Oar only publishes a port page once operational coverage there is confirmed, so what you see here reflects where we genuinely coordinate execution today."
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Ports & Locations" }]}
      />

      {ports.length > 0 ? (
        <LinkCardGrid
          eyebrow="UAE Port Network"
          heading="Verified operating locations."
          basePath="/ports"
          items={ports.map((doc) => ({
            slug: doc.slug,
            title: doc.frontmatter.title,
            summary: doc.frontmatter.summary,
          }))}
        />
      ) : (
        <section className="bg-off-white py-20 sm:py-24">
          <Container>
            <SectionHeader
              eyebrow="Coverage"
              heading="Port-specific pages are being confirmed."
              description="We're finalizing which UAE ports to publish detailed coverage for. In the meantime, tell us your port and vessel requirement directly and our team will confirm what's achievable."
            />
          </Container>
        </section>
      )}

      <CTASection
        heading="Need support at a specific port?"
        description="Share your vessel, port and cargo details and we'll confirm how Oar can help."
      />
    </>
  );
}
