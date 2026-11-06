"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight, Building2, CalendarDays, Clock3, Layers3, Quote, ShieldCheck,
  Target, TrendingUp, Users,
} from "lucide-react";
import { CtaBand, PageHero, PartnersRow, SectionHeading } from "@/components/ui";
import { commitments, methods, stats } from "@/components/site-data";

const commitmentIcons = [Target, Users, Layers3, TrendingUp, ShieldCheck];
const statIcons = [Clock3, Layers3, ShieldCheck, Users];

export default function AboutPage() {
  return <>
    <PageHero
      crumb="ABOUT"
      eyebrow="ABOUT LEAP LIVING · STRATEGIC REAL ESTATE CONSULTANCY"
      title="Better Decisions Come From Clarity & Precision."
      description="In a market often shaped by noise, speculation, and artificial urgency, Leap Living operates with certainty. Our advice is grounded in deep market intelligence, direct access to key stakeholders, and long-standing relationships across the UAE real estate ecosystem."
      image="/images/hero-skyline.jpg"
      alt="Dubai skyline at sunset across calm water"
    >
      <Link className="button button-teal" href="/contact">Schedule Strategic Consultation <ArrowRight size={17} /></Link>
      <Link className="button button-ghost" href="/buy">Explore Properties <ArrowRight size={17} /></Link>
    </PageHero>

    {/* ------------------------------------------------------ company stats */}
    <section className="stats-strip" aria-label="Company at a glance"><div className="wrap stats-inner">
      {stats.map((stat, index) => { const Icon = statIcons[index]; return <div className="stat" key={stat.value}><span className="stat-icon"><Icon size={25} strokeWidth={1.5} /></span><div><strong>{stat.value}</strong><p>{stat.text}</p></div></div>; })}
    </div></section>

    {/* ------------------------------------------------------- CEO message */}
    <section className="leadership-section"><div className="wrap">
      <div className="leadership-grid">
        <div className="leadership-photo"><Image src="/images/ceo-portrait.jpg" alt="Editorial portrait of a business leader in a suit (illustrative)" fill sizes="(max-width: 760px) 100vw, 32vw" /><span>Illustrative editorial portrait</span></div>
        <div className="leadership-message">
          <p className="eyebrow">A MESSAGE FROM OUR CEO <span /></p>
          <blockquote><Quote size={26} /> With more than 21 years of experience across corporate real estate, asset management, leasing, and commercialization, I have built my career around one principle: informed decisions create exceptional outcomes.</blockquote>
          <p className="leader-name">Mohab Samak</p>
          <p className="leader-role">Founder &amp; CEO</p>
          <Link className="text-link" href="/contact">Speak With Our Advisory Team <ArrowRight size={17} /></Link>
        </div>
        <div className="leadership-facts">
          <div><span><CalendarDays size={19} /></span><div><strong>Active since 2005</strong><p>Two decades in the UAE real estate market.</p></div></div>
          <div><span><Building2 size={19} /></span><div><strong>Senior leadership roles</strong><p>Emaar Properties, Hamptons International, Coldwell Banker, Engel &amp; Völkers, ERA Volke and Metropolitan Premium Properties.</p></div></div>
          <div><span><Layers3 size={19} /></span><div><strong>End-to-end expertise</strong><p>Developer representation, exclusive project sales, commercial &amp; residential advisory, land acquisition, and strategic expansion.</p></div></div>
        </div>
      </div>
    </div></section>

    {/* ------------------------------------------------- three-step approach */}
    <section className="method-section section-pad"><div className="wrap">
      <SectionHeading eyebrow="OUR APPROACH" title="A Disciplined Approach to Real Estate" supporting="We operate as a trusted advisory partner rather than a conventional brokerage. Every opportunity is carefully evaluated against our clients' long-term objectives — in three deliberate steps." />
      <div className="method-grid">{methods.map(({ number, title, heading, text, image, alt }) => <article className="method-card" key={number}>
        <div className="method-image"><Image src={image} alt={alt} fill sizes="(max-width: 760px) 100vw, 30vw" /></div>
        <div className="method-content">
          <div className="method-topline"><span><b>{number}</b> · {title}</span></div>
          <h3>{heading}</h3><p>{text}</p>
        </div>
      </article>)}</div>
    </div></section>

    {/* ------------------------------------------------------- commitments */}
    <section className="commitments-section"><div className="wrap">
      <SectionHeading eyebrow="OUR CORE COMMITMENTS" title="What Sets Our Advisory Apart" centered />
      <div className="commitments-grid">{commitments.map((item, index) => { const Icon = commitmentIcons[index]; return <article className="commitment" key={item.title}>
        <span className="commitment-icon"><Icon size={25} strokeWidth={1.6} /></span>
        <h3>{item.title}</h3><i /><p>{item.text}</p>
      </article>; })}</div>
    </div></section>

    <PartnersRow />

    <CtaBand eyebrow="PRIVATE ADVISORY" title="Begin Your Property Journey with Certainty." text="Schedule a confidential consultation with the Leap Living advisory team and discover what disciplined advice can do for your capital." button="Contact Our Team" href="/contact" />
  </>;
}
