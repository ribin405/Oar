import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { InsightFrontmatter } from "@/types/content";

export function InsightCard({ insight }: { insight: InsightFrontmatter }) {
  return (
    <Link
      href={`/insights/${insight.slug}`}
      className="group flex h-full flex-col justify-between rounded-lg border border-border bg-white p-7 transition-colors duration-200 ease-[var(--ease-oar)] hover:border-ocean"
    >
      <div>
        <p className="text-xs font-semibold tracking-wide text-ocean uppercase">
          {insight.category}
        </p>
        <h3 className="mt-3 text-lg font-semibold text-ink">{insight.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-slate">
          {insight.summary}
        </p>
      </div>
      <span className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-navy">
        Read
        <ArrowUpRight
          className="h-4 w-4 transition-transform duration-200 ease-[var(--ease-oar)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          aria-hidden="true"
        />
      </span>
    </Link>
  );
}
