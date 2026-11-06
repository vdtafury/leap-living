import Image from "next/image";
import { methodology } from "@/lib/home-data";
import { SectionHeading } from "@/components/section-heading";

export function MethodologySection() {
  return (
    <section className="method-section section-pad" id="methodology">
      <div className="wrap">
        <SectionHeading
          eyebrow="OUR ADVISORY METHODOLOGY"
          title="A Disciplined Approach to Real Estate"
          supporting="Discover · Decide · Move"
        />
        <div className="method-grid">
          {methodology.map(({ number, title, text, icon: Icon, image, alt }) => (
            <article className="method-card" key={number}>
              <div className="method-image">
                <Image src={image} alt={alt} fill sizes="(max-width: 760px) 100vw, 30vw" />
              </div>
              <div className="method-content">
                <div className="method-topline">
                  <span>{number} · {title}</span>
                  <span className="method-icon"><Icon size={21} aria-hidden="true" /></span>
                </div>
                <p>{text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
