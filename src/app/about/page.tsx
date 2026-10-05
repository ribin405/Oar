import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { CTASection } from "@/components/sections/CTASection";
import { buildMetadata } from "@/lib/seo";
import { placeholderImages } from "@/lib/images";

export const metadata: Metadata = buildMetadata({
  title: "About Oar Shipping",
  description:
    "Oar Shipping is a UAE-based marine logistics and port execution company connecting shore-side supply chains with vessel operations.",
  path: "/about",
});

const approach = [
  { step: "Understand", description: "The vessel, cargo and timing requirement is confirmed." },
  { step: "Coordinate", description: "Suppliers, documentation, storage and transport are aligned." },
  { step: "Execute", description: "Cargo moves through the shore-side chain toward the port." },
  { step: "Deliver", description: "Cargo reaches the vessel, and delivery is confirmed." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        heading="The execution layer between shore and vessel."
        description="Oar Shipping is a UAE-based marine logistics and port execution company focused on connecting shore-side supply chains with vessel operations."
        breadcrumb={[{ label: "Home", href: "/" }, { label: "About" }]}
        image={placeholderImages.portAerial}
      />

      <section className="bg-white py-20 sm:py-24">
        <Container className="max-w-3xl">
          <SectionHeader eyebrow="Who We Are" heading="Port logistics is complicated. Oar coordinates the moving parts." />
          <div className="mdx-content mt-8">
            <p>
              A vessel requirement rarely has a single owner. Suppliers, documentation,
              customs, storage, transportation and the vessel&rsquo;s own schedule all
              have to resolve in the right order, often on short notice. Oar sits
              between the supplier and the vessel, coordinating that chain as one
              operation rather than a series of separate handoffs.
            </p>
            <p>
              We work with ship management companies, ship chandlers, shipping agents,
              freight forwarders and marine &amp; offshore operators across UAE ports —
              each with a different relationship to the same underlying problem:
              getting cargo and support to a vessel, reliably, on schedule.
            </p>
          </div>
        </Container>
      </section>

      <ProcessSteps
        eyebrow="Our Approach"
        heading="How we coordinate an operation."
        steps={approach}
        tone="dark"
      />

      <section className="bg-midnight py-20 text-white sm:py-24">
        <Container className="max-w-3xl">
          <SectionHeader
            eyebrow="Why Oar"
            heading="Control, speed, reliability, visibility."
            description="Those are the four things an operations team is really buying when they hand Oar a vessel requirement — not a list of services, but confidence that the shore-side chain will hold together."
            tone="light"
          />
        </Container>
      </section>

      <CTASection />
    </>
  );
}
