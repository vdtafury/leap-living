import Image from "next/image";
import { Building2 } from "lucide-react";
import { PropertySearch } from "@/components/property-search";

export function HeroSection() {
  return (
    <section className="hero" aria-label="LEAP LIVING real estate advisory">
      <Image
        className="hero-image"
        src="/images/hero-palm.jpg"
        alt="Dubai skyline beyond the waters of Palm Jumeirah"
        fill
        priority
        sizes="100vw"
      />
      <div className="hero-scrim" />
      <div className="hero-copy wrap">
        <p className="hero-eyebrow">CERTAINTY THROUGH PRECISION <span /></p>
        <h1>Unlock your<br />next move</h1>
        <p className="hero-description">
          In a market driven by noise and speculation, Leap Living brings institutional clarity, strategic foresight, and over two decades of Dubai real estate leadership to high-value property decisions.
        </p>
        <a className="hero-badge" href="#partners">
          <Building2 size={16} /> Exclusive Developer Representation <b>·</b> Prime Dubai Portfolios
        </a>
      </div>
      <div className="search-wrap wrap"><PropertySearch /></div>
    </section>
  );
}
