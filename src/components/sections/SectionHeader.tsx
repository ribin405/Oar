import { cn } from "@/lib/utils";

export function SectionHeader({
  eyebrow,
  heading,
  description,
  align = "left",
  tone = "dark",
  className,
}: {
  eyebrow?: string;
  heading: string;
  description?: string;
  align?: "left" | "center";
  tone?: "dark" | "light";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? (
        <p
          className={cn(
            "text-xs font-semibold tracking-[0.18em] uppercase",
            tone === "dark" ? "text-ocean" : "text-signal",
          )}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={cn(
          "mt-3 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-[2.75rem]",
          tone === "dark" ? "text-ink" : "text-white",
        )}
      >
        {heading}
      </h2>
      {description ? (
        <p
          className={cn(
            "mt-4 text-base leading-relaxed sm:text-lg",
            tone === "dark" ? "text-slate" : "text-white/70",
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
