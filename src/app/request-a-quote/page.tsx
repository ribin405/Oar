import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/layout/Container";
import { QuoteForm } from "@/components/forms/QuoteForm";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Request a Quote",
  description:
    "Tell Oar what you need to move, where it's going and when the vessel requires it.",
  path: "/request-a-quote",
});

export default function RequestAQuotePage() {
  return (
    <>
      <PageHero
        eyebrow="Request a Quote"
        heading="Tell us what you need to move."
        description="Share your vessel, cargo and delivery requirements. Our team will review the request and confirm next steps."
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Request a Quote" }]}
      />

      <section className="bg-off-white py-16 sm:py-20">
        <Container className="max-w-3xl">
          <QuoteForm />
        </Container>
      </section>
    </>
  );
}
