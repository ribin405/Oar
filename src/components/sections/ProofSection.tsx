import { BadgeCheck, ClipboardCheck, Users } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { FadeIn } from "@/components/motion/FadeIn";

/**
 * Deliberately honest proof architecture: no fabricated client logos,
 * certifications, stats or testimonials. Each category is populated as
 * verified material becomes available — see Part 18 of the UI brief.
 */
const proofCategories = [
  {
    icon: ClipboardCheck,
    title: "Case studies",
    description:
      "Real vessel deliveries and port operations, documented as projects complete.",
  },
  {
    icon: BadgeCheck,
    title: "Certifications",
    description:
      "Verified credentials and industry memberships, published once confirmed.",
  },
  {
    icon: Users,
    title: "Client partnerships",
    description:
      "Named partners and testimonials, shared only with permission.",
  },
];

export function ProofSection() {
  return (
    <section className="bg-white py-24 sm:py-28">
      <Container>
        <SectionHeader
          eyebrow="Proof"
          heading="Built on operational trust, not borrowed credibility."
          description="We'd rather show verified work than claim it in advance. This is what we're building out as projects complete."
        />

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-3">
          {proofCategories.map((category, index) => (
            <FadeIn key={category.title} delay={index * 0.08}>
              <div className="h-full rounded-lg border border-dashed border-border bg-off-white p-7">
                <category.icon className="h-5 w-5 text-ocean" aria-hidden="true" />
                <h3 className="mt-4 text-base font-semibold text-ink">
                  {category.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate">
                  {category.description}
                </p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-xs font-medium text-slate/70">
                  <span className="h-1.5 w-1.5 rounded-full bg-slate/40" aria-hidden="true" />
                  Published as confirmed
                </span>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
