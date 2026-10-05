import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { CtaLink } from "@/components/ui/CtaLink";
import { PhotoCredit } from "@/components/media/PhotoCredit";
import type { PlaceholderImage } from "@/lib/images";
import { cn } from "@/lib/utils";

export function PageHero({
  eyebrow,
  heading,
  description,
  breadcrumb,
  primaryCta,
  secondaryCta,
  image,
}: {
  eyebrow: string;
  heading: string;
  description?: string;
  breadcrumb?: { label: string; href?: string }[];
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  image?: PlaceholderImage;
}) {
  return (
    <section
      className={cn(
        "relative overflow-hidden pt-36 pb-16 text-white sm:pt-40 sm:pb-20",
        !image && "bg-midnight",
      )}
    >
      {image ? (
        <>
          <Image
            src={image.src}
            alt={image.alt}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/85 to-midnight/70"
            aria-hidden="true"
          />
          <PhotoCredit credit={image.credit} tone="light" />
        </>
      ) : null}

      <Container className="relative">
        {breadcrumb && breadcrumb.length > 0 ? (
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex flex-wrap items-center gap-1.5 text-xs text-white/50">
              {breadcrumb.map((item, index) => (
                <li key={item.label} className="flex items-center gap-1.5">
                  {index > 0 ? (
                    <ChevronRight className="h-3 w-3" aria-hidden="true" />
                  ) : null}
                  {item.href ? (
                    <Link href={item.href} className="hover:text-white/80">
                      {item.label}
                    </Link>
                  ) : (
                    <span className="text-white/70">{item.label}</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        ) : null}

        <p className="text-xs font-semibold tracking-[0.2em] text-ocean uppercase">
          {eyebrow}
        </p>
        <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl lg:leading-[1.05]">
          {heading}
        </h1>
        {description ? (
          <p className="mt-5 max-w-2xl text-lg text-white/70">{description}</p>
        ) : null}

        {primaryCta || secondaryCta ? (
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            {primaryCta ? (
              <CtaLink href={primaryCta.href} variant="inverse" size="default">
                {primaryCta.label}
              </CtaLink>
            ) : null}
            {secondaryCta ? (
              <CtaLink
                href={secondaryCta.href}
                variant="outline-inverse"
                size="default"
                showArrow={false}
              >
                {secondaryCta.label}
              </CtaLink>
            ) : null}
          </div>
        ) : null}
      </Container>
    </section>
  );
}
