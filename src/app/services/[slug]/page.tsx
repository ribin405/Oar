import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/sections/PageHero";
import { MdxBody } from "@/components/sections/MdxBody";
import { ChecklistGrid } from "@/components/sections/ChecklistGrid";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { LinkCardGrid } from "@/components/sections/LinkCardGrid";
import { FAQ } from "@/components/sections/FAQ";
import { CTASection } from "@/components/sections/CTASection";
import { JsonLd } from "@/components/seo/JsonLd";
import { getAllServices, getIndustriesBySlugs, getServiceBySlug } from "@/lib/content";
import { breadcrumbJsonLd, buildMetadata, faqJsonLd, serviceJsonLd } from "@/lib/seo";
import { primaryCta } from "@/lib/site-config";

export function generateStaticParams() {
  return getAllServices().map((doc) => ({ slug: doc.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const doc = getServiceBySlug(slug);
  if (!doc) return {};

  return buildMetadata({
    title: `${doc.frontmatter.title} Services in UAE`,
    description: doc.frontmatter.summary,
    path: `/services/${slug}`,
  });
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const doc = getServiceBySlug(slug);
  if (!doc) notFound();

  const { frontmatter, content } = doc;
  const relatedIndustries = getIndustriesBySlugs(frontmatter.relatedIndustries).map(
    (d) => ({ slug: d.slug, title: d.frontmatter.title, summary: d.frontmatter.summary }),
  );

  return (
    <>
      <JsonLd
        data={serviceJsonLd({
          name: frontmatter.title,
          description: frontmatter.summary,
          path: `/services/${slug}`,
        })}
      />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: frontmatter.title, path: `/services/${slug}` },
        ])}
      />
      {frontmatter.faq.length > 0 ? <JsonLd data={faqJsonLd(frontmatter.faq)!} /> : null}

      <PageHero
        eyebrow={frontmatter.eyebrow}
        heading={frontmatter.heroHeadline}
        description={frontmatter.summary}
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: frontmatter.title },
        ]}
        primaryCta={primaryCta}
      />

      <MdxBody content={content} />

      <ChecklistGrid
        eyebrow="What We Handle"
        heading={`What Oar handles for ${frontmatter.title.toLowerCase()}.`}
        items={frontmatter.whatWeHandle}
      />

      <ProcessSteps
        eyebrow="Process"
        heading={`How ${frontmatter.title.toLowerCase()} works.`}
        steps={frontmatter.process.map((p) => ({
          step: p.step,
          description: p.description,
        }))}
      />

      <LinkCardGrid
        eyebrow="Who It's For"
        heading="Who uses this service."
        basePath="/industries"
        items={relatedIndustries}
      />

      <FAQ items={frontmatter.faq} />

      <CTASection />
    </>
  );
}
