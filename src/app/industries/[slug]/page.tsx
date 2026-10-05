import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/sections/PageHero";
import { MdxBody } from "@/components/sections/MdxBody";
import { ChecklistGrid } from "@/components/sections/ChecklistGrid";
import { LinkCardGrid } from "@/components/sections/LinkCardGrid";
import { CTASection } from "@/components/sections/CTASection";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  getAllIndustries,
  getIndustryBySlug,
  getServicesBySlugs,
} from "@/lib/content";
import { breadcrumbJsonLd, buildMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return getAllIndustries().map((doc) => ({ slug: doc.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const doc = getIndustryBySlug(slug);
  if (!doc) return {};

  return buildMetadata({
    title: `Marine Logistics for ${doc.frontmatter.title}`,
    description: doc.frontmatter.summary,
    path: `/industries/${slug}`,
  });
}

export default async function IndustryDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const doc = getIndustryBySlug(slug);
  if (!doc) notFound();

  const { frontmatter, content } = doc;
  const relatedServices = getServicesBySlugs(frontmatter.relatedServices).map(
    (d) => ({ slug: d.slug, title: d.frontmatter.title, summary: d.frontmatter.summary }),
  );

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Industries", path: "/industries" },
          { name: frontmatter.title, path: `/industries/${slug}` },
        ])}
      />

      <PageHero
        eyebrow="Industries"
        heading={frontmatter.heroHeadline}
        description={frontmatter.summary}
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Industries", href: "/industries" },
          { label: frontmatter.title },
        ]}
        primaryCta={{ label: frontmatter.ctaLabel, href: "/request-a-quote" }}
      />

      <MdxBody content={content} />

      <ChecklistGrid
        eyebrow="The Challenge"
        heading={`What ${frontmatter.title.toLowerCase()} teams deal with.`}
        items={frontmatter.painPoints}
      />

      <LinkCardGrid
        eyebrow="How Oar Helps"
        heading="Relevant services."
        basePath="/services"
        items={relatedServices}
      />

      <CTASection
        heading={frontmatter.ctaLabel}
        description={`Tell us about your requirement and we'll confirm how Oar can support your ${frontmatter.title.toLowerCase()} operation.`}
      />
    </>
  );
}
