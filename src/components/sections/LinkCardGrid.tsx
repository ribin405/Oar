import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/sections/SectionHeader";

export function LinkCardGrid({
  items,
  eyebrow,
  heading,
  basePath,
}: {
  items: { slug: string; title: string; summary: string }[];
  eyebrow: string;
  heading: string;
  basePath: string;
}) {
  if (items.length === 0) return null;

  return (
    <section className="bg-white py-20 sm:py-24">
      <Container>
        <SectionHeader eyebrow={eyebrow} heading={heading} />
        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <Link
              key={item.slug}
              href={`${basePath}/${item.slug}`}
              className="group flex flex-col justify-between rounded-lg border border-border p-6 transition-colors duration-200 ease-[var(--ease-oar)] hover:border-ocean"
            >
              <div>
                <h3 className="text-base font-semibold text-ink">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate">
                  {item.summary}
                </p>
              </div>
              <span className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-navy">
                Learn more
                <ArrowUpRight
                  className="h-4 w-4 transition-transform duration-200 ease-[var(--ease-oar)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  aria-hidden="true"
                />
              </span>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
