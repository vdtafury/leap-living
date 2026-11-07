import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";

export function CtaBand({ eyebrow, title, text, button, href, onClick, variant = "dark", secondaryButton, secondaryHref, secondaryOnClick }: {
  eyebrow: string; title: string; text: string; button: string; href?: string;
  onClick?: () => void; variant?: "dark" | "photo";
  secondaryButton?: string; secondaryHref?: string; secondaryOnClick?: () => void;
}) {
  return <section className={`cta-band${variant === "photo" ? " cta-band--photo" : ""}`}>
    {variant === "photo" && <div className="cta-band-photo">
      <Image src="/images/hero/cta-architecture.jpg" alt="Contemporary glass architecture" fill sizes="30vw" />
    </div>}
    <div className="wrap cta-band-inner">
      <div>
        <p className="eyebrow eyebrow--light">{eyebrow}<span /></p>
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
      <div className="cta-band-actions">
        {href
          ? <Link className="button button-white" href={href}>{button} <ArrowRight size={17} /></Link>
          : <button className="button button-white" onClick={onClick}>{button} <ArrowRight size={17} /></button>}
        {secondaryButton && (secondaryHref
          ? <Link className="button cta-secondary-button" href={secondaryHref}><Phone size={16} />{secondaryButton}</Link>
          : <button className="button cta-secondary-button" onClick={secondaryOnClick}><Phone size={16} />{secondaryButton}</button>)}
      </div>
    </div>
  </section>;
}
