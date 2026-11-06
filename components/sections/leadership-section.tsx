import Image from "next/image";
import { ArrowRight } from "lucide-react";

export function LeadershipSection() {
  return (
    <section className="leadership-section" id="about">
      <div className="leadership-inner wrap">
        <div className="leadership-image">
          <Image
            src="/images/property-residence.jpg"
            alt="Contemporary residence interior with an ocean-facing window"
            fill
            sizes="(max-width: 760px) 100vw, 32vw"
          />
          <span>LEAP LIVING / LEADERSHIP</span>
        </div>
        <div className="leadership-quote">
          <p className="eyebrow">EXECUTIVE LEADERSHIP</p>
          <blockquote>
            “Informed decisions create exceptional outcomes. Every property decision carries financial, strategic, and personal significance. Our responsibility is to ensure clients have clarity and insight.”
          </blockquote>
          <p className="leader-name">Mohab Samak</p>
          <p className="leader-role">Founder &amp; CEO</p>
        </div>
        <div className="leadership-bio">
          <p>
            A real estate leader with over two decades of experience shaping Dubai’s skyline, including leadership roles at Emaar Properties, Hamptons International, Engel &amp; Völkers Dubai, and Coldwell Banker.
          </p>
          <a href="#contact">Read Company Profile &amp; Approach <ArrowRight size={17} /></a>
        </div>
      </div>
    </section>
  );
}
