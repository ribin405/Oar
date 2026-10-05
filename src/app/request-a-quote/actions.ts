"use server";

import { quoteRequestSchema, type QuoteRequestInput } from "@/lib/schemas";
import { sendQuoteRequestEmail } from "@/lib/email";

export type SubmitQuoteResult = { ok: true } | { ok: false; error: string };

export async function submitQuoteRequest(
  input: QuoteRequestInput,
): Promise<SubmitQuoteResult> {
  const parsed = quoteRequestSchema.safeParse(input);
  if (!parsed.success) {
    return { ok: false, error: "Please check the form for errors and try again." };
  }

  // Honeypot: bots fill hidden fields. Report success without sending mail.
  if (parsed.data.website) {
    return { ok: true };
  }

  try {
    await sendQuoteRequestEmail(parsed.data);
    return { ok: true };
  } catch (error) {
    console.error("Failed to send quote request email:", error);
    return {
      ok: false,
      error:
        "We couldn't submit your request automatically right now. Please try again shortly, or reach out directly.",
    };
  }
}
