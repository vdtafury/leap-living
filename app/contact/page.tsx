"use client";

import Image from "next/image";
import { useState } from "react";
import { ArrowRight, CheckCircle2, Clock3, Mail, MapPin, Phone, Send } from "lucide-react";
import { useSite } from "@/components/AppShell";
import { CtaBand, PageHero, SectionHeading } from "@/components/ui";

export default function ContactPage() {
  const { showToast } = useSite();
  const [sent, setSent] = useState(false);

  return <>
    <PageHero
      crumb="CONTACT"
      eyebrow="PRIVATE ADVISORY · DUBAI"
      title="Begin Your Property Journey with Certainty."
      description="Schedule a confidential consultation with Founder & CEO Mohab Samak and the Leap Living advisory team. Tell us how we can help."
      image="/images/hero-villa.jpg"
      alt="Curved contemporary villa with warm evening lighting"
    >
      <a className="button button-teal" href="#contact-form">Get in Touch <ArrowRight size={17} /></a>
      <a className="button button-ghost" href="mailto:advisory@leapliving.ae">advisory@leapliving.ae <Mail size={16} /></a>
    </PageHero>

    <section className="form-section section-pad" id="contact-form"><div className="wrap form-grid">
      <div className="form-intro">
        <SectionHeading eyebrow="GET IN TOUCH" title="We'll Be In Touch Shortly" supporting="A simple note is enough. Share your name, email and a few words about your objectives, and a senior advisor will respond personally." />
        <div className="contact-details">
          <div><span><MapPin size={19} /></span><div><strong>Our Office</strong><p>Dubai, United Arab Emirates<br />Office 3401, Downtown Dubai</p></div></div>
          <div><span><Mail size={19} /></span><div><strong>Email</strong><p>advisory@leapliving.ae</p></div></div>
          <div><span><Phone size={19} /></span><div><strong>Telephone</strong><p>+971 4 000 0000</p></div></div>
          <div><span><Clock3 size={19} /></span><div><strong>Office Hours</strong><p>Sunday – Thursday · 9:00 – 18:00 GST</p></div></div>
        </div>
      </div>

      {sent ? <div className="form-panel form-success"><CheckCircle2 size={40} /><h3>Thank you for getting in touch</h3><p>Your note has been received. A senior Leap Living advisor will respond personally to discuss your objectives in confidence.</p><button className="button button-teal" onClick={() => setSent(false)}>Send Another Message <ArrowRight size={16} /></button></div>
        : <form className="form-panel" onSubmit={(event) => { event.preventDefault(); setSent(true); showToast("Your message has been recorded. Our team will be in touch."); }}>
          <label>Name<input required placeholder="Your full name" autoComplete="name" /></label>
          <label>Email<input required type="email" placeholder="name@company.com" autoComplete="email" /></label>
          <label>How can we help?<textarea rows={5} placeholder="Tell us about your acquisition, rental, disposal or advisory objectives..." /></label>
          <button className="button button-teal" type="submit">Get in Touch <Send size={16} /></button>
          <p className="modal-fine">Prototype form — no data leaves this browser.</p>
        </form>}
    </div></section>

    <section className="contact-visual"><div className="wrap contact-visual-inner">
      <div className="contact-visual-copy"><p className="eyebrow">CERTAINTY THROUGH PRECISION <span /></p><h2>A senior advisor, not a call centre.</h2><p>Leap Living was built around long-term fiduciary relationships. Every enquiry is handled by a senior member of the advisory team, in complete discretion.</p></div>
      <div className="contact-visual-photo"><Image src="/images/property-waterfront.jpg" alt="Contemporary waterfront villa at dusk" fill sizes="(max-width: 760px) 100vw, 45vw" /></div>
    </div></section>

    <CtaBand eyebrow="PRIVATE ADVISORY" title="Prefer to Speak Directly?" text="Request a confidential call with a senior advisor at a time that suits you." button="Schedule Strategic Consultation" onClick={() => document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" })} />
  </>;
}
