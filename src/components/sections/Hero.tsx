"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CtaLink } from "@/components/ui/CtaLink";
import { Container } from "@/components/layout/Container";
import { PhotoCredit } from "@/components/media/PhotoCredit";
import { placeholderImages } from "@/lib/images";
import { primaryCta, siteConfig } from "@/lib/site-config";

const heroImage = placeholderImages.heroVessel;

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

export function Hero() {
  return (
    <section className="relative flex min-h-[88vh] items-end overflow-hidden bg-midnight pt-32 pb-20 text-white sm:min-h-[92vh] sm:pb-28">
      {/* Real maritime photography — temporary, see lib/images.ts. */}
      <Image
        src={heroImage.src}
        alt={heroImage.alt}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      {/* Darkening + brand-color wash so white text stays legible over the photo. */}
      <div
        className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/80 to-midnight/50"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(10,126,164,0.35),_transparent_55%),_radial-gradient(ellipse_at_bottom_left,_rgba(11,96,125,0.3),_transparent_55%)]"
        aria-hidden="true"
      />
      {/* Subtle operational graphic — technical grid overlay. */}
      <div
        className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] [background-size:64px_64px]"
        aria-hidden="true"
      />
      <PhotoCredit credit={heroImage.credit} tone="light" />
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full"
        viewBox="0 0 1440 800"
        fill="none"
        aria-hidden="true"
        preserveAspectRatio="xMidYMid slice"
      >
        <motion.path
          d="M -50 620 C 250 560, 420 680, 680 540 S 1100 420, 1500 300"
          stroke="url(#heroRoute)"
          strokeWidth="1.5"
          strokeDasharray="6 10"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2.2, ease: "easeInOut", delay: 0.3 }}
        />
        <defs>
          <linearGradient id="heroRoute" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#27B8D6" stopOpacity="0" />
            <stop offset="50%" stopColor="#27B8D6" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#27B8D6" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>

      <Container className="relative">
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0}
          className="text-xs font-semibold tracking-[0.22em] text-white/60 uppercase"
        >
          Marine Logistics &bull; Port Execution
        </motion.p>

        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0.1}
          className="mt-5 max-w-3xl text-5xl font-semibold tracking-tight sm:text-6xl lg:text-[4.5rem] lg:leading-[1.03]"
        >
          {siteConfig.tagline}.
        </motion.h1>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0.2}
          className="mt-6 max-w-xl text-lg text-white/70 sm:text-xl"
        >
          {siteConfig.description}
        </motion.p>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0.3}
          className="mt-10 flex flex-col gap-4 sm:flex-row"
        >
          <CtaLink href={primaryCta.href} variant="inverse" size="lg">
            {primaryCta.label}
          </CtaLink>
          <CtaLink
            href="/services"
            variant="outline-inverse"
            size="lg"
            showArrow={false}
          >
            Explore Services
          </CtaLink>
        </motion.div>
      </Container>
    </section>
  );
}
