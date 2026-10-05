import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { IndustryFrontmatter } from "@/types/content";

export function IndustryCard({ industry }: { industry: IndustryFrontmatter }) {
  return (
    <Link
      href={`/industries/${industry.slug}`}
      className="group flex flex-col justify-between rounded-lg border border-border bg-white p-7 transition-colors duration-200 ease-[var(--ease-oar)] hover:border-ocean"
    >
      <div>
        <h3 className="text-lg font-semibold text-ink">{industry.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-slate">
          {industry.summary}
        </p>
      </div>
      <span className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-navy">
        {industry.ctaLabel}
        <ArrowUpRight
          className="h-4 w-4 transition-transform duration-200 ease-[var(--ease-oar)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          aria-hidden="true"
        />
      </span>
    </Link>
  );
}
