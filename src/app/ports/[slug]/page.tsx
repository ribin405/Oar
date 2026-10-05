import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/sections/PageHero";
import { MdxBody } from "@/components/sections/MdxBody";
import { LinkCardGrid } from "@/components/sections/LinkCardGrid";
import { CTASection } from "@/components/sections/CTASection";
import { JsonLd } from "@/components/seo/JsonLd";
import { getPortBySlug, getServicesBySlugs, getVerifiedPorts } from "@/lib/content";
import { breadcrumbJsonLd, buildMetadata } from "@/lib/seo";
import { primaryCta } from "@/lib/site-config";

export function generateStaticParams() {
  return getVerifiedPorts().map((doc) => ({ slug: doc.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const doc = getPortBySlug(slug);
  if (!doc || !doc.frontmatter.verified) return {};

  return buildMetadata({
    title: `Marine Logistics & Vessel Support in ${doc.frontmatter.title}`,
    description: doc.frontmatter.summary,
    path: `/ports/${slug}`,
  });
}

export default async function PortDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const doc = getPortBySlug(slug);
  if (!doc || !doc.frontmatter.verified) notFound();

  const { frontmatter, content } = doc;
  const services = getServicesBySlugs(frontmatter.servicesAvailable).map((d) => ({
    slug: d.slug,
    title: d.frontmatter.title,
    summary: d.frontmatter.summary,
  }));

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Ports & Locations", path: "/ports" },
          { name: frontmatter.title, path: `/ports/${slug}` },
        ])}
      />

      <PageHero
        eyebrow="Ports & Locations"
        heading={frontmatter.heroHeadline}
        description={frontmatter.summary}
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Ports & Locations", href: "/ports" },
          { label: frontmatter.title },
        ]}
        primaryCta={primaryCta}
      />

      <MdxBody content={content} />

      <LinkCardGrid
        eyebrow="Services Available"
        heading={`Supporting operations in ${frontmatter.title}.`}
        basePath="/services"
        items={services}
      />

      <CTASection />
    </>
  );
}
