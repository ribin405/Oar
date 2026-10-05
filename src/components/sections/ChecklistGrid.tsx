import { Check } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/sections/SectionHeader";

export function ChecklistGrid({
  items,
  eyebrow,
  heading,
}: {
  items: string[];
  eyebrow: string;
  heading: string;
}) {
  if (items.length === 0) return null;

  return (
    <section className="bg-off-white py-20 sm:py-24">
      <Container>
        <SectionHeader eyebrow={eyebrow} heading={heading} />
        <ul className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {items.map((item) => (
            <li
              key={item}
              className="flex items-start gap-3 rounded-md border border-border bg-white p-4 text-sm text-ink"
            >
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-ocean" aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
