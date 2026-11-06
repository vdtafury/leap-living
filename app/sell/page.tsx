"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ArrowRight, ArrowUpRight, Check, CheckCircle2, FileText, Phone, TrendingUp, Users } from "lucide-react";
import { useSite } from "@/components/AppShell";
import { CtaBand, PageHero, SectionHeading, Steps } from "@/components/ui";

export default function SellPage() {
  const { openModal, showToast } = useSite();
  const [sent, setSent] = useState(false);

  return <>
    <PageHero
      crumb="SELL"
      eyebrow="PRIVATE SELLING & VALUATION ADVISORY"
      title="Thinking of Selling or Repositioning Your Prime Asset?"
      description="Receive an objective, data-backed commercial valuation and a discreet private marketing plan tailored for institutional and private capital."
      image="/images/band-architecture.jpg"
      alt="Modern glass architecture seen from below"
    >
      <button className="button button-teal" onClick={() => openModal({ kind: "valuation" })}>Request Valuation &amp; Selling Plan <ArrowUpRight size={17} /></button>
      <Link className="button button-ghost" href="/contact">Speak Directly with an Advisor <Phone size={16} /></Link>
    </PageHero>

    {/* ------------------------------------------------------- valuation CTA */}
    <section className="valuation-section">
      <div className="valuation-photo"><Image src="/images/cta-architecture.jpg" alt="Close-up of a contemporary glass facade" fill sizes="100vw" /></div>
      <div className="valuation-overlay" />
      <div className="wrap valuation-inner">
        <div><p className="eyebrow eyebrow--light">OBJECTIVE VALUATION <span /></p><h2>What Is Your Asset Really Worth?</h2><p>We benchmark recent transactions, developer repricing, yield expectations and buyer depth — then position your asset to the right capital, without public exposure.</p></div>
        <div className="valuation-actions">
          <button className="button button-teal" onClick={() => openModal({ kind: "valuation" })}>Request Valuation &amp; Selling Plan <ArrowUpRight size={17} /></button>
          <button className="button button-outline" onClick={() => openModal({ kind: "consultation" })}><Phone size={16} /> Speak Directly with an Advisor</button>
        </div>
      </div>
    </section>

    {/* -------------------------------------------------- valuation request */}
    <section className="form-section section-pad"><div className="wrap form-grid">
      <div className="form-intro">
        <SectionHeading eyebrow="START WITH A CONVERSATION" title="Request a Private Valuation" supporting="Share a few details and a senior advisor will prepare an initial view of your asset's positioning, pricing and buyer universe." />
        <div className="form-intro-points">
          <p><Check size={16} /> Confidential, no public listing required</p>
          <p><Check size={16} /> Data-backed comparable analysis</p>
          <p><Check size={16} /> Discreet placement to qualified capital</p>
          <p><Check size={16} /> No obligation, no upfront fee</p>
        </div>
      </div>
      {sent ? <div className="form-panel form-success"><CheckCircle2 size={40} /><h3>Valuation request received</h3><p>Thank you. A senior Leap Living advisor will contact you shortly to arrange a confidential discussion about your asset.</p><button className="button button-teal" onClick={() => setSent(false)}>Send Another Request <ArrowRight size={16} /></button></div>
        : <form className="form-panel" onSubmit={(event) => { event.preventDefault(); setSent(true); showToast("Your valuation request has been recorded."); }}>
          <label>Full name<input required placeholder="Your full name" autoComplete="name" /></label>
          <div className="modal-form-row"><label>Email address<input required type="email" placeholder="name@company.com" autoComplete="email" /></label><label>Phone number<input type="tel" placeholder="+971 ..." autoComplete="tel" /></label></div>
          <label>Asset location / community<input required placeholder="e.g. Palm Jumeirah, Downtown Dubai" /></label>
          <label>Asset type<select defaultValue=""><option value="" disabled>Select an asset type</option><option>Apartment</option><option>Penthouse</option><option>Villa</option><option>Townhouse</option><option>Land / Plot</option><option>Commercial</option></select></label>
          <label>Anything else we should know?<textarea rows={3} placeholder="Size, current status, target timing..." /></label>
          <button className="button button-teal" type="submit">Get in Touch <ArrowRight size={16} /></button>
          <p className="modal-fine">Prototype form — no data leaves this browser.</p>
        </form>}
    </div></section>

    <Steps
      eyebrow="THE SELLING JOURNEY"
      title="From Valuation to Discreet Placement"
      supporting="A measured process built to protect value, privacy and timing."
      items={[
        { number: "01", title: "Objective Valuation", text: "Transaction benchmarking, yield analysis and a defensible pricing range.", icon: TrendingUp },
        { number: "02", title: "Discreet Positioning", text: "A private marketing plan and curated buyer universe — no public exposure.", icon: FileText },
        { number: "03", title: "Institutional Placement", text: "Qualified capital, negotiated terms and coordinated transfer through DLD.", icon: Users },
      ]}
    />

    <CtaBand eyebrow="PRIVATE ADVISORY" title="Confidence Before You Come to Market." text="Speak with a senior advisor about your disposal, repositioning or portfolio objectives in complete confidence." button="Contact Our Team" href="/contact" />
  </>;
}
