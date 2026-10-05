import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { FadeIn } from "@/components/motion/FadeIn";

const defaultSteps = [
  { step: "Understand", description: "Vessel, port and cargo requirement confirmed." },
  { step: "Collect", description: "Cargo collected from the supplier location." },
  { step: "Clear", description: "Documentation and customs coordinated." },
  { step: "Transport", description: "Cargo moved toward the port on schedule." },
  { step: "Deliver", description: "Cargo delivered to the vessel and confirmed." },
];

export function ProcessSteps({
  eyebrow = "How It Works",
  heading = "One operation. From collection to confirmation.",
  steps = defaultSteps,
  tone = "light",
}: {
  eyebrow?: string;
  heading?: string;
  steps?: { step: string; description: string }[];
  tone?: "light" | "dark";
}) {
  return (
    <section className={tone === "light" ? "bg-white py-24 sm:py-28" : "bg-off-white py-24 sm:py-28"}>
      <Container>
        <SectionHeader eyebrow={eyebrow} heading={heading} />

        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5 lg:gap-0">
          {steps.map((item, index) => (
            <FadeIn key={item.step} delay={index * 0.08} className="relative">
              <div className="flex items-center gap-3 lg:flex-col lg:items-start lg:gap-0">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-ocean text-sm font-semibold text-ocean">
                  {index + 1}
                </span>
                <h3 className="font-heading text-base font-semibold text-ink lg:mt-4">
                  {item.step}
                </h3>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-slate lg:pr-6">
                {item.description}
              </p>
              {index < steps.length - 1 ? (
                <div
                  className="absolute top-[18px] right-0 hidden h-px w-full -translate-y-1/2 bg-border lg:block"
                  style={{ left: "calc(2.25rem + 0.75rem)" }}
                  aria-hidden="true"
                />
              ) : null}
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
