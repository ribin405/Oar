import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { cn } from "@/lib/utils";

const baseFieldClasses =
  "h-12 w-full rounded-md border border-border bg-white px-4 text-sm text-ink placeholder:text-slate/60 transition-colors duration-200 ease-[var(--ease-oar)] focus:border-ocean focus:outline-none focus:ring-2 focus:ring-ocean/20";

function FieldShell({
  label,
  required,
  error,
  htmlFor,
  children,
}: {
  label: string;
  required?: boolean;
  error?: string;
  htmlFor: string;
  children: ReactNode;
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className="text-sm font-medium text-ink">
        {label}
        {required ? <span className="text-ocean"> *</span> : null}
      </label>
      <div className="mt-1.5">{children}</div>
      {error ? (
        <p role="alert" className="mt-1.5 text-xs text-red-600">
          {error}
        </p>
      ) : null}
    </div>
  );
}

export function TextField({
  label,
  required,
  error,
  className,
  ...props
}: ComponentPropsWithoutRef<"input"> & {
  label: string;
  required?: boolean;
  error?: string;
}) {
  const id = props.id ?? props.name;
  return (
    <FieldShell label={label} required={required} error={error} htmlFor={id!}>
      <input
        id={id}
        className={cn(baseFieldClasses, className)}
        aria-invalid={Boolean(error)}
        {...props}
      />
    </FieldShell>
  );
}

export function TextareaField({
  label,
  required,
  error,
  className,
  ...props
}: ComponentPropsWithoutRef<"textarea"> & {
  label: string;
  required?: boolean;
  error?: string;
}) {
  const id = props.id ?? props.name;
  return (
    <FieldShell label={label} required={required} error={error} htmlFor={id!}>
      <textarea
        id={id}
        rows={4}
        className={cn(baseFieldClasses, "h-auto resize-none py-3", className)}
        aria-invalid={Boolean(error)}
        {...props}
      />
    </FieldShell>
  );
}

export function SelectField({
  label,
  required,
  error,
  className,
  options,
  placeholder,
  ...props
}: ComponentPropsWithoutRef<"select"> & {
  label: string;
  required?: boolean;
  error?: string;
  options: { value: string; label: string }[];
  placeholder?: string;
}) {
  const id = props.id ?? props.name;
  return (
    <FieldShell label={label} required={required} error={error} htmlFor={id!}>
      <select
        id={id}
        className={cn(baseFieldClasses, "appearance-none", className)}
        aria-invalid={Boolean(error)}
        defaultValue=""
        {...props}
      >
        <option value="" disabled>
          {placeholder ?? "Select"}
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </FieldShell>
  );
}
