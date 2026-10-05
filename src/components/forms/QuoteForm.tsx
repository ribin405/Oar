"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SelectField, TextField, TextareaField } from "@/components/forms/fields";
import { quoteRequestSchema, serviceOptions, type QuoteRequestInput } from "@/lib/schemas";
import { submitQuoteRequest } from "@/app/request-a-quote/actions";

export function QuoteForm() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<QuoteRequestInput>({
    resolver: zodResolver(quoteRequestSchema),
    defaultValues: {
      name: "",
      company: "",
      email: "",
      phone: "",
      country: "",
      service: "",
      cargoType: "",
      pickupLocation: "",
      deliveryPort: "",
      vesselName: "",
      eta: "",
      cargoDetails: "",
      requiredDeliveryDate: "",
      message: "",
      website: "",
    },
  });

  async function onSubmit(data: QuoteRequestInput) {
    setServerError(null);
    const result = await submitQuoteRequest(data);
    if (result.ok) {
      setStatus("success");
      reset();
    } else {
      setStatus("error");
      setServerError(result.error);
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-lg border border-border bg-white p-10 text-center">
        <CheckCircle2 className="mx-auto h-10 w-10 text-ocean" aria-hidden="true" />
        <h3 className="mt-4 text-xl font-semibold text-ink">Request received.</h3>
        <p className="mt-2 text-sm text-slate">
          Thank you. Your requirement has been submitted to the Oar team, and
          we&rsquo;ll follow up with next steps.
        </p>
        <Button
          type="button"
          variant="outline"
          size="sm"
          className="mt-6"
          onClick={() => setStatus("idle")}
        >
          Submit another request
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="rounded-lg border border-border bg-white p-6 sm:p-10"
      noValidate
    >
      {/* Honeypot — hidden from real users, left empty by them. */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="website">Leave this field empty</label>
        <input
          id="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          {...register("website")}
        />
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <TextField
          label="Full name"
          required
          error={errors.name?.message}
          {...register("name")}
        />
        <TextField
          label="Company"
          required
          error={errors.company?.message}
          {...register("company")}
        />
        <TextField
          label="Business email"
          type="email"
          required
          error={errors.email?.message}
          {...register("email")}
        />
        <TextField
          label="Phone / WhatsApp"
          type="tel"
          required
          error={errors.phone?.message}
          {...register("phone")}
        />
        <TextField
          label="Country"
          required
          error={errors.country?.message}
          {...register("country")}
        />
        <SelectField
          label="Service required"
          required
          options={[...serviceOptions]}
          error={errors.service?.message}
          {...register("service")}
        />
      </div>

      <div className="mt-8 border-t border-border pt-8">
        <h3 className="text-sm font-semibold tracking-wide text-slate uppercase">
          Vessel &amp; port
        </h3>
        <div className="mt-5 grid grid-cols-1 gap-6 sm:grid-cols-2">
          <TextField label="Vessel name" {...register("vesselName")} />
          <TextField
            label="Delivery port"
            required
            error={errors.deliveryPort?.message}
            {...register("deliveryPort")}
          />
          <TextField label="ETA" type="date" {...register("eta")} />
          <TextField
            label="Required delivery date"
            type="date"
            {...register("requiredDeliveryDate")}
          />
        </div>
      </div>

      <div className="mt-8 border-t border-border pt-8">
        <h3 className="text-sm font-semibold tracking-wide text-slate uppercase">
          Cargo
        </h3>
        <div className="mt-5 grid grid-cols-1 gap-6 sm:grid-cols-2">
          <TextField label="Cargo type" {...register("cargoType")} />
          <TextField label="Pickup / supplier location" {...register("pickupLocation")} />
        </div>
        <div className="mt-6">
          <TextareaField
            label="Cargo details"
            placeholder="Description, quantity, weight, dimensions..."
            {...register("cargoDetails")}
          />
        </div>
      </div>

      <div className="mt-8 border-t border-border pt-8">
        <TextareaField
          label="Additional requirements"
          {...register("message")}
        />
      </div>

      {serverError ? (
        <p role="alert" className="mt-6 text-sm text-red-600">
          {serverError}
        </p>
      ) : null}

      <Button type="submit" size="lg" className="mt-8 w-full sm:w-auto" disabled={isSubmitting}>
        {isSubmitting ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
            Submitting...
          </>
        ) : (
          "Submit request"
        )}
      </Button>
    </form>
  );
}
