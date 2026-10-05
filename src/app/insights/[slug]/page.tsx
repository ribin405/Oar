import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/sections/PageHero";
import { MdxBody } from "@/components/sections/MdxBody";
import { CTASection } from "@/components/sections/CTASection";
import { JsonLd } from "@/components/seo/JsonLd";
import { getAllInsights, getInsightBySlug } from "@/lib/content";
import { breadcrumbJsonLd, buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";

export function generateStaticParams() {
  return getAllInsights().map((doc) => ({ slug: doc.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const doc = getInsightBySlug(slug);
  if (!doc) return {};

  return buildMetadata({
    title: doc.frontmatter.title,
    description: doc.frontmatter.summary,
    path: `/insights/${slug}`,
  });
}

export default async function InsightDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const doc = getInsightBySlug(slug);
  if (!doc) notFound();

  const { frontmatter, content } = doc;

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Insights", path: "/insights" },
          { name: frontmatter.title, path: `/insights/${slug}` },
        ])}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: frontmatter.title,
          description: frontmatter.summary,
          datePublished: frontmatter.publishedAt,
          author: { "@type": "Organization", name: siteConfig.name },
          publisher: { "@type": "Organization", name: siteConfig.name },
        }}
      />

      <PageHero
        eyebrow={frontmatter.category}
        heading={frontmatter.title}
        description={frontmatter.summary}
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Insights", href: "/insights" },
          { label: frontmatter.title },
        ]}
      />

      <MdxBody content={content} />

      <CTASection />
    </>
  );
}
