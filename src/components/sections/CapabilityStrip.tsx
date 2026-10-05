import { Container } from "@/components/layout/Container";
import { getAllServices } from "@/lib/content";

export function CapabilityStrip() {
  const services = getAllServices();

  return (
    <div className="border-y border-white/10 bg-navy py-5">
      <Container>
        <ul className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-xs font-medium tracking-wide text-white/60 uppercase sm:justify-between sm:gap-x-6">
          {services.map((service, index) => (
            <li key={service.slug} className="flex items-center gap-x-3 sm:gap-x-6">
              <span>{service.frontmatter.title}</span>
              {index < services.length - 1 ? (
                <span className="hidden text-white/20 sm:inline" aria-hidden="true">
                  &bull;
                </span>
              ) : null}
            </li>
          ))}
        </ul>
      </Container>
    </div>
  );
}
