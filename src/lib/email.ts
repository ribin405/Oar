import { Resend } from "resend";
import type { QuoteRequestInput } from "@/lib/schemas";

/**
 * Email delivery for quote requests.
 *
 * Requires two environment variables, neither of which is set by default:
 *   RESEND_API_KEY   — API key for the Resend account that will send mail.
 *   QUOTE_NOTIFY_TO  — the inbox at Oar that should receive quote requests.
 *   QUOTE_NOTIFY_FROM (optional) — a verified "from" address on your Resend
 *                       domain. Defaults to Resend's onboarding sender,
 *                       which only works for testing.
 *
 * Until these are configured, submitQuoteRequestEmail throws a clear error
 * rather than silently failing or sending to a fabricated address.
 */

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function row(label: string, value?: string) {
  if (!value) return "";
  return `<tr><td style="padding:6px 12px;color:#647481;font-size:12px;white-space:nowrap;vertical-align:top;">${escapeHtml(label)}</td><td style="padding:6px 12px;color:#10212B;font-size:14px;">${escapeHtml(value)}</td></tr>`;
}

export async function sendQuoteRequestEmail(data: QuoteRequestInput) {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.QUOTE_NOTIFY_TO;

  if (!apiKey || !to) {
    throw new Error(
      "Email delivery is not configured yet. Set RESEND_API_KEY and QUOTE_NOTIFY_TO before going live.",
    );
  }

  const from = process.env.QUOTE_NOTIFY_FROM || "Oar Website <onboarding@resend.dev>";
  const resend = new Resend(apiKey);

  const html = `
    <table style="font-family:sans-serif;border-collapse:collapse;width:100%;max-width:560px;">
      ${row("Name", data.name)}
      ${row("Company", data.company)}
      ${row("Email", data.email)}
      ${row("Phone", data.phone)}
      ${row("Country", data.country)}
      ${row("Service", data.service)}
      ${row("Vessel name", data.vesselName)}
      ${row("Delivery port", data.deliveryPort)}
      ${row("ETA", data.eta)}
      ${row("Required delivery date", data.requiredDeliveryDate)}
      ${row("Cargo type", data.cargoType)}
      ${row("Pickup location", data.pickupLocation)}
      ${row("Cargo details", data.cargoDetails)}
      ${row("Message", data.message)}
    </table>
  `;

  await resend.emails.send({
    from,
    to,
    replyTo: data.email,
    subject: `New quote request — ${data.company}`,
    html,
  });
}
