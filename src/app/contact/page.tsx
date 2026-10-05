import type { Metadata } from "next";
import { Mail, MessageCircle, Phone } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/layout/Container";
import { CtaLink } from "@/components/ui/CtaLink";
import { contactInfo } from "@/lib/site-config";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Contact Oar Shipping",
  description: "Get in touch with Oar Shipping for marine logistics and port execution support across UAE ports.",
  path: "/contact",
});

const channels = [
  contactInfo.email
    ? { icon: Mail, label: contactInfo.email, href: `mailto:${contactInfo.email}` }
    : null,
  contactInfo.phone
    ? { icon: Phone, label: contactInfo.phone, href: `tel:${contactInfo.phone.replace(/\s+/g, "")}` }
    : null,
  contactInfo.whatsapp
    ? { icon: MessageCircle, label: "WhatsApp", href: contactInfo.whatsapp }
    : null,
].filter(Boolean) as { icon: typeof Mail; label: string; href: string }[];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        heading="What do you need?"
        description="The fastest way to reach Oar's team is to submit your requirement directly — we'll follow up from there."
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Contact" }]}
      />

      <section className="bg-off-white py-20 sm:py-24">
        <Container className="max-w-3xl">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div className="rounded-lg border border-border bg-white p-7">
              <h3 className="text-lg font-semibold text-ink">
                Have a vessel or cargo requirement?
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate">
                Submit your vessel, port and cargo details and our team will
                confirm next steps.
              </p>
              <CtaLink href="/request-a-quote" variant="primary" size="sm" className="mt-6">
                Request a Quote
              </CtaLink>
            </div>

            <div className="rounded-lg border border-border bg-white p-7">
              <h3 className="text-lg font-semibold text-ink">
                Ship chandler, agent or forwarder?
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate">
                Explore how Oar works alongside your business as a UAE
                execution partner.
              </p>
              <CtaLink
                href="/industries/ship-chandlers"
                variant="outline"
                size="sm"
                className="mt-6"
              >
                Partner With Oar
              </CtaLink>
            </div>
          </div>

          {channels.length > 0 ? (
            <div className="mt-10 border-t border-border pt-8">
              <h3 className="text-sm font-semibold tracking-wide text-slate uppercase">
                Direct contact
              </h3>
              <ul className="mt-4 space-y-3">
                {channels.map((channel) => (
                  <li key={channel.label}>
                    <a
                      href={channel.href}
                      className="inline-flex items-center gap-2 text-sm font-medium text-navy hover:text-ocean"
                    >
                      <channel.icon className="h-4 w-4" aria-hidden="true" />
                      {channel.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </Container>
      </section>
    </>
  );
}
