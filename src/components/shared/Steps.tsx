import { ArrowUpRight, type LucideIcon } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

export function Steps({ eyebrow, title, supporting, items }: {
  eyebrow: string; title: string; supporting?: string;
  items: { number: string; title: string; text: string; icon: LucideIcon }[];
}) {
  return <section className="steps-section section-pad"><div className="wrap">
    <SectionHeader eyebrow={eyebrow} title={title} supporting={supporting} centered />
    <div className="steps-grid">
      {items.map(({ number, title: stepTitle, text, icon: Icon }, index) => <article className="step-card" key={number}>
        <span className="step-number">{number}</span>
        <span className="step-icon"><Icon size={24} strokeWidth={1.6} /></span>
        <h3>{stepTitle}</h3><p>{text}</p>
        {index < items.length - 1 && <span className="step-arrow"><ArrowUpRight size={18} /></span>}
      </article>)}
    </div>
  </div></section>;
}
