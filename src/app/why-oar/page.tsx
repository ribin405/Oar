import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { WhyOarSection } from "@/components/sections/WhyOarSection";
import { CTASection } from "@/components/sections/CTASection";
import { buildMetadata } from "@/lib/seo";
import { placeholderImages } from "@/lib/images";

export const metadata: Metadata = buildMetadata({
  title: "Why Oar",
  description:
    "Oar's advantage isn't scale — it's focus on the shore-to-vessel execution layer that most logistics providers treat as someone else's problem.",
  path: "/why-oar",
});

const focusPoints = [
  {
    title: "Port execution, not general freight",
    description:
      "We specialize in the specific chain between supplier and vessel, not broad freight forwarding.",
  },
  {
    title: "Local UAE knowledge",
    description:
      "Coordinating UAE port-side requirements is the core of what we do, not a sideline.",
  },
  {
    title: "One point of coordination",
    description:
      "Suppliers, customs, storage, transport and delivery are managed as one operation with one point of contact.",
  },
  {
    title: "Built for the vessel's schedule",
    description:
      "The operation is planned around the vessel's actual delivery window, not a generic logistics timeline.",
  },
];

export default function WhyOarPage() {
  return (
    <>
      <PageHero
        eyebrow="Why Oar"
        heading="We make the complicated part of port logistics simple."
        description="Oar doesn't compete on fleet size or service breadth. The advantage is focus — on the specific shore-to-vessel execution problem most providers treat as someone else's responsibility."
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Why Oar" }]}
        image={placeholderImages.portTerminal}
      />

      <section className="bg-white py-20 sm:py-24">
        <Container>
          <SectionHeader eyebrow="Focus" heading="What we focus on." />
          <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2">
            {focusPoints.map((point) => (
              <div key={point.title}>
                <h3 className="text-lg font-semibold text-ink">{point.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate">
                  {point.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <WhyOarSection />

      <CTASection />
    </>
  );
}
