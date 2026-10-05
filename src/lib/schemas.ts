import { z } from "zod";

export const quoteRequestSchema = z.object({
  name: z.string().trim().min(2, "Enter your full name."),
  company: z.string().trim().min(2, "Enter your company name."),
  email: z.string().trim().email("Enter a valid business email."),
  phone: z.string().trim().min(5, "Enter a phone or WhatsApp number."),
  country: z.string().trim().min(2, "Enter your country."),
  service: z.string().trim().min(1, "Select the service you need."),
  cargoType: z.string().trim().optional().or(z.literal("")),
  pickupLocation: z.string().trim().optional().or(z.literal("")),
  deliveryPort: z.string().trim().min(2, "Enter the delivery port."),
  vesselName: z.string().trim().optional().or(z.literal("")),
  eta: z.string().trim().optional().or(z.literal("")),
  cargoDetails: z.string().trim().optional().or(z.literal("")),
  requiredDeliveryDate: z.string().trim().optional().or(z.literal("")),
  message: z.string().trim().optional().or(z.literal("")),
  // Honeypot field — real users never fill this in.
  website: z.string().max(0).optional().or(z.literal("")),
});

export type QuoteRequestInput = z.infer<typeof quoteRequestSchema>;

export const serviceOptions = [
  { value: "port-logistics", label: "Port Logistics" },
  { value: "vessel-delivery", label: "Vessel Delivery" },
  { value: "customs-clearance", label: "Customs Clearance" },
  { value: "warehousing", label: "Warehousing" },
  { value: "cargo-transportation", label: "Cargo Transportation" },
  { value: "port-coordination", label: "Port Coordination" },
  { value: "other", label: "Other / Not sure" },
] as const;
