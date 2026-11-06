"use client";

import Link from "next/link";
import { ArrowRight, CalendarDays, Compass, KeyRound, ShieldCheck } from "lucide-react";
import Catalogue from "@/components/Catalogue";
import { CtaBand, PageHero, Steps } from "@/components/ui";

export default function RentPage() {
  return <>
    <PageHero
      crumb="RENT"
      eyebrow="PRIME RESIDENCES · DUBAI"
      title="Considered Living. Verified Residences."
      description="A curated selection of long-term rental homes with transparent monthly pricing, confirmed availability, and the key features that matter — from private beach access to concierge service."
      image="/images/property-terrace.jpg"
      alt="Elegant contemporary residence opening onto a waterfront terrace"
    >
      <Link className="button button-teal" href="#catalogue">Browse Rental Residences <ArrowRight size={17} /></Link>
      <Link className="button button-ghost" href="/contact">Speak With a Leasing Advisor <ArrowRight size={17} /></Link>
    </PageHero>

    <Catalogue category="rent" eyebrow="PRIME RESIDENCES" title="Rental Listings" />

    <Steps
      eyebrow="THE LEASING ADVISORY"
      title="A Simpler Way to Rent in Dubai"
      supporting="From shortlisting to key handover, our advisors protect your time and your terms."
      items={[
        { number: "01", title: "Curated Shortlist", text: "Only residences that match your location, space and lifestyle criteria — with verified availability.", icon: Compass },
        { number: "02", title: "Terms & Protection", text: "Review of Ejari registration, deposit terms, chiller charges and renewal clauses before you commit.", icon: ShieldCheck },
        { number: "03", title: "Viewing & Handover", text: "Accompanied viewings, move-in coordination and snagging support through key collection.", icon: KeyRound },
      ]}
    />

    <section className="info-band"><div className="wrap info-band-inner">
      <div><p className="eyebrow">FLEXIBLE ARRANGEMENTS <span /></p><h2>Corporate, long-term and furnished mandates.</h2><p>Whether you are relocating a family, housing executives, or seeking a seasonal pied-à-terre, Leap Living sources residences privately and negotiates terms on your behalf.</p></div>
      <div className="info-band-points">
        <span><CalendarDays size={18} /> Monthly pricing shown on every listing</span>
        <span><ShieldCheck size={18} /> Availability confirmed by an advisor</span>
        <span><KeyRound size={18} /> Ejari, deposits and renewals handled</span>
      </div>
    </div></section>

    <CtaBand eyebrow="READY TO MOVE" title="Find the Right Residence, With Certainty." text="Tell us your timing, budget and preferred communities. We will share a private shortlist within one working day." button="Contact a Leasing Advisor" href="/contact" />
  </>;
}
