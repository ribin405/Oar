import Link, { type LinkProps } from "next/link";
import type { ComponentPropsWithoutRef } from "react";
import { ArrowRight } from "lucide-react";
import { type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/Button";

export interface CtaLinkProps
  extends Omit<ComponentPropsWithoutRef<"a">, "href">,
    LinkProps,
    VariantProps<typeof buttonVariants> {
  showArrow?: boolean;
}

export function CtaLink({
  className,
  variant,
  size,
  showArrow = true,
  children,
  ...props
}: CtaLinkProps) {
  return (
    <Link
      className={cn("group", buttonVariants({ variant, size }), className)}
      {...props}
    >
      {children}
      {showArrow ? (
        <ArrowRight
          className="h-4 w-4 transition-transform duration-200 ease-[var(--ease-oar)] group-hover:translate-x-1"
          aria-hidden="true"
        />
      ) : null}
    </Link>
  );
}
