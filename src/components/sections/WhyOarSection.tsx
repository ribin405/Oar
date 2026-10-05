import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { FadeIn } from "@/components/motion/FadeIn";

const pillars = [
  {
    number: "01",
    title: "Control",
    description: "One coordinated execution layer across the shore-side operation.",
  },
  {
    number: "02",
    title: "Speed",
    description: "Responsive coordination for time-sensitive vessel requirements.",
  },
  {
    number: "03",
    title: "Reliability",
    description: "Structured execution designed around the vessel's own schedule.",
  },
  {
    number: "04",
    title: "Visibility",
    description: "Clear communication from collection through to delivery.",
  },
];

export function WhyOarSection() {
  return (
    <section className="bg-midnight py-24 text-white sm:py-28">
      <Container>
        <SectionHeader
          eyebrow="Why Oar"
          heading="Why operations teams choose Oar."
          tone="light"
        />

        <div className="mt-14 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar, index) => (
            <FadeIn key={pillar.title} delay={index * 0.08}>
              <p className="text-sm font-semibold text-signal">{pillar.number}</p>
              <h3 className="mt-3 font-heading text-xl font-semibold">
                {pillar.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/60">
                {pillar.description}
              </p>
              <div className="mt-6 h-px w-full bg-white/10" />
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
