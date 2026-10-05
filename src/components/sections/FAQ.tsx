import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/sections/SectionHeader";

export function FAQ({
  items,
  heading = "Frequently asked questions.",
  eyebrow = "FAQ",
}: {
  items: { question: string; answer: string }[];
  heading?: string;
  eyebrow?: string;
}) {
  if (items.length === 0) return null;

  return (
    <section className="bg-white py-24 sm:py-28">
      <Container className="max-w-3xl">
        <SectionHeader eyebrow={eyebrow} heading={heading} />
        <dl className="mt-10 divide-y divide-border border-t border-border">
          {items.map((item) => (
            <details key={item.question} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-medium text-ink marker:content-none">
                <dt>{item.question}</dt>
                <span
                  className="shrink-0 text-xl leading-none text-slate transition-transform duration-200 ease-[var(--ease-oar)] group-open:rotate-45"
                  aria-hidden="true"
                >
                  +
                </span>
              </summary>
              <dd className="mt-3 pr-8 text-sm leading-relaxed text-slate">
                {item.answer}
              </dd>
            </details>
          ))}
        </dl>
      </Container>
    </section>
  );
}
