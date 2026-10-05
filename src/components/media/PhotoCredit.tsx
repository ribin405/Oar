import type { PlaceholderImage } from "@/lib/images";
import { cn } from "@/lib/utils";

export function PhotoCredit({
  credit,
  tone = "light",
  className,
}: {
  credit: PlaceholderImage["credit"];
  tone?: "light" | "dark";
  className?: string;
}) {
  if (!credit) return null;

  return (
    <a
      href={credit.sourceUrl}
      target="_blank"
      rel="noopener noreferrer nofollow"
      className={cn(
        "absolute right-3 bottom-3 z-10 rounded-sm px-1.5 py-0.5 text-[10px] leading-none backdrop-blur-sm transition-opacity hover:opacity-100",
        tone === "light"
          ? "bg-black/30 text-white/50 hover:text-white/80"
          : "bg-white/60 text-ink/40 hover:text-ink/70",
        className,
      )}
    >
      {credit.author} &middot; {credit.license}
    </a>
  );
}
