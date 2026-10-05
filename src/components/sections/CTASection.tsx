import { Container } from "@/components/layout/Container";
import { CtaLink } from "@/components/ui/CtaLink";
import { primaryCta } from "@/lib/site-config";

export function CTASection({
  heading = "Need to move cargo to a vessel?",
  description = "Tell us what you need, where it's going and when the vessel requires it. Our team will coordinate the shore-side execution.",
  secondaryHref,
  secondaryLabel,
}: {
  heading?: string;
  description?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-navy py-24 text-white sm:py-28">
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(39,184,214,0.12),_transparent_60%)]"
        aria-hidden="true"
      />
      <Container className="relative text-center">
        <h2 className="mx-auto max-w-2xl font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
          {heading}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base text-white/70 sm:text-lg">
          {description}
        </p>
        <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <CtaLink href={primaryCta.href} variant="inverse" size="lg">
            {primaryCta.label}
          </CtaLink>
          {secondaryHref && secondaryLabel ? (
            <CtaLink
              href={secondaryHref}
              variant="outline-inverse"
              size="lg"
              showArrow={false}
            >
              {secondaryLabel}
            </CtaLink>
          ) : null}
        </div>
      </Container>
    </section>
  );
}
