import { partners } from "@/features/advisory/data/methods";
import { SectionHeader } from "./SectionHeader";

export function PartnersRow({ supporting }: { supporting?: string }) {
  return <section className="partners-section" id="partners"><div className="wrap">
    <SectionHeader
      eyebrow="DEVELOPERS WE WORK WITH"
      title="Trusted Relationships Across Dubai"
      supporting={supporting ?? "Deep, enduring relationships with Dubai's premier master developers — ensuring early project access, preferential allocations, and commercial insight."}
    />
    <div className="partners-list">
      {partners.map((partner, index) => <div className={`partner-logo partner-${index + 1}`} key={partner}>
        <span>{partner}</span>
        {index === 0 && <small>PROPERTIES</small>}
        {index === 3 && <small>REALTY</small>}
        {index === 6 && <small>DEVELOPMENTS</small>}
      </div>)}
    </div>
  </div></section>;
}
