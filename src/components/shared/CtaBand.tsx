import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function CtaBand({ eyebrow, title, text, button, href, onClick, variant = "dark" }: {
  eyebrow: string; title: string; text: string; button: string; href?: string;
  onClick?: () => void; variant?: "dark" | "photo";
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
      {href
        ? <Link className="button button-white" href={href}>{button} <ArrowRight size={17} /></Link>
        : <button className="button button-white" onClick={onClick}>{button} <ArrowRight size={17} /></button>}
    </div>
  </section>;
}
