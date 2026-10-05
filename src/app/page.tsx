import { Hero } from "@/components/sections/Hero";
import { CapabilityStrip } from "@/components/sections/CapabilityStrip";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { SupplierVesselFlow } from "@/components/sections/SupplierVesselFlow";
import { ServiceGrid } from "@/components/sections/ServiceGrid";
import { IndustrySelector } from "@/components/sections/IndustrySelector";
import { PortNetworkSection } from "@/components/sections/PortNetworkSection";
import { WhyOarSection } from "@/components/sections/WhyOarSection";
import { ProofSection } from "@/components/sections/ProofSection";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { InsightsSection } from "@/components/sections/InsightsSection";
import { CTASection } from "@/components/sections/CTASection";
import { JsonLd } from "@/components/seo/JsonLd";
import { getAllIndustries } from "@/lib/content";
import { organizationJsonLd } from "@/lib/seo";

export default function HomePage() {
  const industries = getAllIndustries().map((doc) => doc.frontmatter);

  return (
    <>
      <JsonLd data={organizationJsonLd()} />
      <Hero />
      <CapabilityStrip />
      <ProblemSection />
      <SupplierVesselFlow />
      <ServiceGrid />
      <IndustrySelector industries={industries} />
      <PortNetworkSection />
      <WhyOarSection />
      <ProofSection />
      <ProcessSteps tone="dark" />
      <InsightsSection />
      <CTASection
        secondaryHref="/industries/ship-chandlers"
        secondaryLabel="Partner With Oar"
      />
    </>
  );
}
