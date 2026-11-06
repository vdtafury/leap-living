import { ArrowRight } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { FeaturedPropertiesSection } from "@/components/sections/featured-properties-section";
import { HeroSection } from "@/components/sections/hero-section";
import { LeadershipSection } from "@/components/sections/leadership-section";
import { MethodologySection } from "@/components/sections/methodology-section";
import { PartnersSection } from "@/components/sections/partners-section";
import { SiteFooter } from "@/components/sections/site-footer";
import { StatisticsSection } from "@/components/sections/statistics-section";
import { ValuationSection } from "@/components/sections/valuation-section";

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main id="top">
        <HeroSection />
        <StatisticsSection />
        <MethodologySection />
        <FeaturedPropertiesSection />
        <LeadershipSection />
        <PartnersSection />
        <ValuationSection />
      </main>
      <SiteFooter />
      <a className="mobile-advisory" href="#contact">Private Advisory <ArrowRight size={16} /></a>
    </>
  );
}
