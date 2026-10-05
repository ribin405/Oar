import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { CtaLink } from "@/components/ui/CtaLink";
import { FadeIn } from "@/components/motion/FadeIn";
import { getVerifiedPorts } from "@/lib/content";

export function PortNetworkSection() {
  const verifiedPorts = getVerifiedPorts();

  return (
    <section className="bg-off-white py-24 sm:py-28">
      <Container>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <SectionHeader
            eyebrow="UAE Port Network"
            heading="Connected to the ports that keep vessels moving."
            description={
              verifiedPorts.length > 0
                ? "Oar coordinates marine logistics and port-side execution across its operating network in the UAE."
                : "Oar coordinates marine logistics and port-side execution across UAE ports. Our verified port coverage is published as it's confirmed."
            }
          />

          <FadeIn delay={0.1}>
            <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden rounded-lg border border-border bg-navy">
              <svg
                viewBox="0 0 400 300"
                className="h-full w-full opacity-80"
                aria-hidden="true"
              >
                <path
                  d="M60 240 C 110 180, 140 140, 210 120 S 320 60, 360 40"
                  stroke="#27B8D6"
                  strokeOpacity="0.35"
                  strokeWidth="1.5"
                  fill="none"
                />
                {[
                  [60, 240],
                  [210, 120],
                  [360, 40],
                ].map(([cx, cy]) => (
                  <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="5" fill="#27B8D6" fillOpacity="0.9" />
                ))}
              </svg>
              <span className="absolute bottom-4 left-4 text-xs font-medium tracking-wide text-white/50 uppercase">
                UAE operating network
              </span>
            </div>
          </FadeIn>
        </div>

        <div className="mt-10">
          <CtaLink href="/ports" variant="outline" size="sm">
            Explore UAE port network
          </CtaLink>
        </div>
      </Container>
    </section>
  );
}
