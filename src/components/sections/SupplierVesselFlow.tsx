"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { Ship, Warehouse, FileCheck2, Truck, Anchor } from "lucide-react";

const oarCapabilities = [
  { icon: Warehouse, label: "Collection & Storage" },
  { icon: FileCheck2, label: "Customs" },
  { icon: Truck, label: "Transportation" },
  { icon: Anchor, label: "Port Coordination" },
];

function Connector() {
  return (
    <div className="relative my-4 h-10 w-px overflow-hidden bg-white/10 lg:my-0 lg:h-px lg:w-16">
      <motion.span
        className="absolute inset-0 bg-gradient-to-b from-transparent via-signal to-transparent lg:bg-gradient-to-r"
        animate={{
          y: ["-100%", "200%"],
        }}
        transition={{
          duration: 2.2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}

export function SupplierVesselFlow() {
  return (
    <section className="bg-midnight py-24 text-white sm:py-28">
      <Container>
        <SectionHeader
          eyebrow="How We Think About It"
          heading="Everything between shore and vessel."
          description="We coordinate the shore-side complexity so your team can stay focused on the vessel."
          tone="light"
        />

        <div className="mt-16 flex flex-col items-center lg:flex-row lg:items-stretch lg:justify-center">
          <div className="flex flex-col items-center rounded-lg border border-white/10 bg-white/[0.03] px-8 py-6 text-center">
            <p className="text-xs font-semibold tracking-[0.18em] text-white/50 uppercase">
              Origin
            </p>
            <p className="mt-2 text-lg font-semibold">Supplier</p>
          </div>

          <Connector />

          <div className="flex min-w-[260px] flex-col items-center rounded-lg border border-signal/30 bg-gradient-to-b from-marine/20 to-navy/40 px-8 py-8 text-center shadow-[0_0_40px_rgba(39,184,214,0.08)]">
            <p className="text-xs font-semibold tracking-[0.18em] text-signal uppercase">
              Execution Layer
            </p>
            <p className="mt-2 font-heading text-2xl font-semibold">Oar</p>
            <ul className="mt-5 grid grid-cols-2 gap-3 text-left">
              {oarCapabilities.map(({ icon: Icon, label }) => (
                <li
                  key={label}
                  className="flex items-center gap-2 text-xs text-white/70"
                >
                  <Icon className="h-4 w-4 shrink-0 text-signal" aria-hidden="true" />
                  {label}
                </li>
              ))}
            </ul>
          </div>

          <Connector />

          <div className="flex flex-col items-center rounded-lg border border-white/10 bg-white/[0.03] px-8 py-6 text-center">
            <p className="text-xs font-semibold tracking-[0.18em] text-white/50 uppercase">
              Destination
            </p>
            <p className="mt-2 flex items-center gap-2 text-lg font-semibold">
              <Ship className="h-5 w-5 text-white/60" aria-hidden="true" />
              Vessel
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
