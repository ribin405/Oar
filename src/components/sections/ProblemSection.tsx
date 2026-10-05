import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { FadeIn } from "@/components/motion/FadeIn";
import { PhotoCredit } from "@/components/media/PhotoCredit";
import { placeholderImages } from "@/lib/images";

const factors = [
  "Multiple suppliers",
  "Tight vessel schedules",
  "Customs documentation",
  "Storage & consolidation",
  "Last-minute changes",
  "Port requirements",
];

const image = placeholderImages.portTerminal;

export function ProblemSection() {
  return (
    <section className="bg-off-white py-24 sm:py-28">
      <Container>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeader
              eyebrow="The Problem"
              heading="Port logistics shouldn't be the complicated part."
              description="A vessel call depends on suppliers, documentation, customs, storage and transportation all lining up on a schedule that doesn't wait. Coordinating that shouldn't become another operational burden for your team."
            />

            <FadeIn delay={0.15}>
              <ul className="mt-10 flex flex-wrap gap-3">
                {factors.map((factor) => (
                  <li
                    key={factor}
                    className="rounded-md border border-border bg-white px-4 py-2 text-sm font-medium text-ink"
                  >
                    {factor}
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>

          <FadeIn delay={0.1}>
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg border border-border">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-midnight/30 via-transparent to-transparent"
                aria-hidden="true"
              />
              <PhotoCredit credit={image.credit} tone="light" />
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
