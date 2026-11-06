import Image from "next/image";
import { ArrowUpRight, Phone } from "lucide-react";

export function ValuationSection() {
  return (
    <section className="valuation-section" id="valuation">
      <Image src="/images/method-move.jpg" alt="Close-up of contemporary architecture" fill sizes="100vw" />
      <div className="valuation-overlay" />
      <div className="valuation-inner wrap">
        <div>
          <p className="eyebrow">PRIVATE SELLING &amp; VALUATION ADVISORY</p>
          <h2>Thinking of Selling or Repositioning<br className="desktop-break" /> Your Prime Asset?</h2>
          <p>Receive an objective, data-backed commercial valuation and a discrete private marketing plan tailored for institutional and private capital.</p>
        </div>
        <div className="valuation-actions">
          <a className="button button-teal" href="#contact">Request Valuation &amp; Selling Plan <ArrowUpRight size={17} /></a>
          <a className="button button-outline" href="#contact"><Phone size={16} /> Speak Directly with an Advisor</a>
        </div>
      </div>
    </section>
  );
}
