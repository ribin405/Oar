"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { CtaLink } from "@/components/ui/CtaLink";
import { cn } from "@/lib/utils";
import type { IndustryFrontmatter } from "@/types/content";

export function IndustrySelector({
  industries,
}: {
  industries: IndustryFrontmatter[];
}) {
  const [activeSlug, setActiveSlug] = useState(industries[0]?.slug);
  const active =
    industries.find((industry) => industry.slug === activeSlug) ??
    industries[0];

  if (!active) return null;

  return (
    <section className="bg-navy py-24 text-white sm:py-28">
      <Container>
        <SectionHeader
          eyebrow="Who We Serve"
          heading="Built around maritime operations."
          tone="light"
        />

        <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-[320px_1fr]">
          <div className="flex gap-2 overflow-x-auto pb-2 lg:flex-col lg:overflow-visible lg:pb-0">
            {industries.map((industry) => (
              <button
                key={industry.slug}
                type="button"
                onClick={() => setActiveSlug(industry.slug)}
                className={cn(
                  "shrink-0 rounded-md border px-4 py-3 text-left text-sm font-medium transition-colors duration-200 ease-[var(--ease-oar)]",
                  industry.slug === active.slug
                    ? "border-signal/40 bg-white/[0.06] text-white"
                    : "border-white/10 text-white/60 hover:border-white/20 hover:text-white/90",
                )}
              >
                {industry.title}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={active.slug}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-lg border border-white/10 bg-white/[0.03] p-8 sm:p-10"
            >
              <h3 className="font-heading text-2xl font-semibold sm:text-3xl">
                {active.heroHeadline}
              </h3>
              <ul className="mt-6 space-y-3">
                {active.painPoints.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-sm text-white/75">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-signal" aria-hidden="true" />
                    {point}
                  </li>
                ))}
              </ul>
              <CtaLink
                href={`/industries/${active.slug}`}
                variant="inverse"
                size="sm"
                className="mt-8"
              >
                {active.ctaLabel}
              </CtaLink>
            </motion.div>
          </AnimatePresence>
        </div>
      </Container>
    </section>
  );
}
