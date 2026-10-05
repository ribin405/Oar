import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { CtaLink } from "@/components/ui/CtaLink";
import {
  contactInfo,
  footerNav,
  primaryCta,
  siteConfig,
} from "@/lib/site-config";

export function Footer() {
  const year = new Date().getFullYear();

  const contactRows = [
    contactInfo.email ? { label: contactInfo.email, href: `mailto:${contactInfo.email}` } : null,
    contactInfo.phone ? { label: contactInfo.phone, href: `tel:${contactInfo.phone.replace(/\s+/g, "")}` } : null,
    contactInfo.whatsapp ? { label: "WhatsApp", href: contactInfo.whatsapp } : null,
    contactInfo.linkedin ? { label: "LinkedIn", href: contactInfo.linkedin } : null,
  ].filter(Boolean) as { label: string; href: string }[];

  return (
    <footer className="bg-midnight text-white">
      <Container className="py-16 lg:py-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <p className="font-heading text-xl font-semibold">
              Oar <span className="font-normal text-white/70">SHIPPING</span>
            </p>
            <p className="mt-3 max-w-xs text-sm text-white/60">
              {siteConfig.category}
            </p>
            <p className="mt-1 text-sm text-white/40">{siteConfig.tagline}</p>

            {contactRows.length > 0 ? (
              <ul className="mt-6 space-y-2 text-sm text-white/70">
                {contactRows.map((row) => (
                  <li key={row.label}>
                    <a
                      href={row.href}
                      className="transition-colors hover:text-white"
                    >
                      {row.label}
                    </a>
                  </li>
                ))}
              </ul>
            ) : null}
            {contactInfo.address ? (
              <p className="mt-4 text-sm text-white/50">{contactInfo.address}</p>
            ) : null}
          </div>

          {footerNav.map((column) => (
            <div key={column.heading}>
              <p className="text-xs font-semibold tracking-wide text-white/40 uppercase">
                {column.heading}
              </p>
              <ul className="mt-4 space-y-3">
                {column.items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-white/70 transition-colors hover:text-white"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 border-t border-white/10 pt-8">
          <CtaLink href={primaryCta.href} variant="inverse" size="sm">
            {primaryCta.label}
          </CtaLink>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {siteConfig.name}. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
