import Link from "next/link";
import Image from "next/image";
import {
  Anchor,
  ArrowUpRight,
  Check,
  Compass,
  FileCheck2,
  Ship,
  Truck,
  Warehouse,
  type LucideIcon,
} from "lucide-react";
import { PhotoCredit } from "@/components/media/PhotoCredit";
import { placeholderImages } from "@/lib/images";
import type { ServiceFrontmatter } from "@/types/content";

const iconBySlug: Record<string, LucideIcon> = {
  "port-logistics": Anchor,
  "vessel-delivery": Ship,
  "customs-clearance": FileCheck2,
  warehousing: Warehouse,
  "cargo-transportation": Truck,
  "port-coordination": Compass,
};

export function ServiceCard({
  service,
  index,
  featured = false,
}: {
  service: ServiceFrontmatter;
  index: number;
  featured?: boolean;
}) {
  const Icon = iconBySlug[service.slug] ?? Compass;

  if (featured) {
    const image = placeholderImages.portAerial;
    return (
      <Link
        href={`/services/${service.slug}`}
        className="group relative flex h-full min-h-[360px] flex-col justify-end overflow-hidden rounded-lg border border-border bg-midnight p-8 text-white transition-shadow duration-200 ease-[var(--ease-oar)] hover:shadow-[0_0_0_1px_rgba(10,126,164,0.4)] sm:p-10"
      >
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover opacity-50 transition-opacity duration-300 ease-[var(--ease-oar)] group-hover:opacity-40"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/75 to-midnight/20"
          aria-hidden="true"
        />
        <PhotoCredit credit={image.credit} tone="light" />

        <div className="relative">
          <span className="inline-flex items-center gap-1.5 rounded-sm bg-signal/15 px-2.5 py-1 text-[11px] font-semibold tracking-wide text-signal uppercase">
            <Icon className="h-3.5 w-3.5" aria-hidden="true" />
            Featured service
          </span>
          <h3 className="mt-4 font-heading text-2xl font-semibold sm:text-3xl">
            {service.title}
          </h3>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-white/70">
            {service.summary}
          </p>
          <ul className="mt-5 grid gap-2 sm:grid-cols-2">
            {service.whatWeHandle.slice(0, 4).map((item) => (
              <li key={item} className="flex items-start gap-2 text-xs text-white/60">
                <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-signal" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
          <span className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-white">
            Explore {service.title}
            <ArrowUpRight
              className="h-4 w-4 transition-transform duration-200 ease-[var(--ease-oar)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              aria-hidden="true"
            />
          </span>
        </div>
      </Link>
    );
  }

  return (
    <Link
      href={`/services/${service.slug}`}
      className="group flex flex-col justify-between rounded-lg border border-border bg-white p-7 transition-colors duration-200 ease-[var(--ease-oar)] hover:border-ocean"
    >
      <div>
        <div className="flex items-center justify-between">
          <span className="text-xs font-semibold text-slate">
            {String(index + 1).padStart(2, "0")}
          </span>
          <Icon className="h-5 w-5 text-ocean" aria-hidden="true" />
        </div>
        <h3 className="mt-5 text-lg font-semibold text-ink">
          {service.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-slate">
          {service.summary}
        </p>
      </div>
      <span className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-navy">
        Explore
        <ArrowUpRight
          className="h-4 w-4 transition-transform duration-200 ease-[var(--ease-oar)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          aria-hidden="true"
        />
      </span>
    </Link>
  );
}
