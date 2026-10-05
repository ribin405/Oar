/**
 * Central site configuration: navigation, CTAs, and company-facing facts.
 *
 * Anything marked "CONFIRM WITH CLIENT" is intentionally left unset rather
 * than fabricated. Components reading these values must handle the empty
 * case gracefully (hide the row, don't render a placeholder as if real).
 */

export const siteConfig = {
  name: "Oar Shipping",
  legalName: "Oar Shipping", // CONFIRM WITH CLIENT: full registered entity name
  tagline: "Creators of Calm Port Calls",
  category: "Marine Logistics & Port Execution",
  description:
    "Oar Shipping provides marine logistics and port execution services across UAE ports, coordinating cargo collection, customs, storage, transportation and vessel delivery.",
  // CONFIRM WITH CLIENT: production domain
  url: "https://www.oarshipping.com",
};

export type NavItem = {
  label: string;
  href: string;
};

export const mainNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "Ports & Locations", href: "/ports" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
];

export const primaryCta: NavItem = {
  label: "Request a Quote",
  href: "/request-a-quote",
};

export const footerNav: { heading: string; items: NavItem[] }[] = [
  {
    heading: "Services",
    items: [
      { label: "Port Logistics", href: "/services/port-logistics" },
      { label: "Vessel Delivery", href: "/services/vessel-delivery" },
      { label: "Customs Clearance", href: "/services/customs-clearance" },
      { label: "Warehousing", href: "/services/warehousing" },
      { label: "Cargo Transportation", href: "/services/cargo-transportation" },
      { label: "Port Coordination", href: "/services/port-coordination" },
    ],
  },
  {
    heading: "Industries",
    items: [
      { label: "Ship Management", href: "/industries/ship-management" },
      { label: "Ship Chandlers", href: "/industries/ship-chandlers" },
      { label: "Shipping Agents", href: "/industries/shipping-agents" },
      { label: "Freight Forwarders", href: "/industries/freight-forwarders" },
      { label: "Marine & Offshore", href: "/industries/marine-offshore" },
    ],
  },
  {
    heading: "Company",
    items: [
      { label: "About", href: "/about" },
      { label: "Why Oar", href: "/why-oar" },
      { label: "Insights", href: "/insights" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

/**
 * Contact details. Left empty until the client confirms official,
 * monitored channels. The Footer/Contact components must only render
 * a channel when its value is non-null — never fall back to a fake one.
 */
export const contactInfo: {
  email: string | null;
  phone: string | null;
  whatsapp: string | null; // full https://wa.me/... link
  address: string | null;
  linkedin: string | null;
} = {
  email: null,
  phone: null,
  whatsapp: null,
  address: null,
  linkedin: null,
};
