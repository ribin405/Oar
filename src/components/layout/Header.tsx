"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { CtaLink } from "@/components/ui/CtaLink";
import { mainNav, primaryCta } from "@/lib/site-config";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [mobileOpen]);

  const transparent = isHome && !scrolled && !mobileOpen;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300 ease-[var(--ease-oar)]",
        transparent
          ? "bg-transparent"
          : "border-b border-white/10 bg-midnight/95 backdrop-blur-md shadow-[0_1px_0_rgba(255,255,255,0.05)]",
      )}
    >
      <Container>
        <div className="flex h-16 items-center justify-between py-4 md:h-20">
          <Link
            href="/"
            className="font-heading text-lg font-semibold tracking-tight text-white"
          >
            Oar
            <span className="ml-1 font-normal text-white/70">SHIPPING</span>
          </Link>

          <nav className="hidden items-center gap-8 lg:flex">
            {mainNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-sm font-medium text-white/80 transition-colors hover:text-white",
                  pathname === item.href && "text-white",
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:block">
            <CtaLink
              href={primaryCta.href}
              variant="inverse"
              size="sm"
              showArrow
            >
              {primaryCta.label}
            </CtaLink>
          </div>

          <button
            type="button"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-md text-white lg:hidden"
          >
            {mobileOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </Container>

      <AnimatePresence>
        {mobileOpen ? (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-white/10 bg-midnight lg:hidden"
          >
            <Container className="flex flex-col gap-1 py-6">
              {mainNav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-md px-3 py-3 text-base font-medium text-white/90 hover:bg-white/5 hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
              <CtaLink
                href={primaryCta.href}
                variant="inverse"
                className="mt-4 w-full"
                onClick={() => setMobileOpen(false)}
              >
                {primaryCta.label}
              </CtaLink>
            </Container>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
