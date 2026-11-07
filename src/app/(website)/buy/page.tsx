"use client";

import Link from "next/link";
import { Suspense } from "react";
import { ArrowRight, KeyRound, Layers3, Search } from "lucide-react";
import { useSite } from "@/components/layout/SiteContext";
import Catalogue from "@/features/properties/filters/Catalogue";
import { CtaBand } from "@/components/shared/CtaBand";
import { PageHero } from "@/components/shared/PageHero";
import { Steps } from "@/components/shared/Steps";

export default function BuyPage() {
  const { openModal } = useSite();
  return <>
    <PageHero
      crumb="BUY"
      eyebrow="PRIME REAL ESTATE ACQUISITIONS · DUBAI"
      title="Curated Properties. Institutional Diligence."
      description="Every property in the Leap Living portfolio has been commercially vetted for location durability, developer track record, yield potential, and long-term capital preservation."
      image="/images/hero/hero-skyline.jpg"
      alt="Dubai skyline and Burj Khalifa at sunset"
    >
      <Link className="button button-teal" href="#catalogue">Browse Verified Properties <ArrowRight size={17} /></Link>
      <Link className="button button-ghost" href="/contact">Request a Private Dossier <ArrowRight size={17} /></Link>
    </PageHero>

    <Suspense fallback={<div className="catalogue-loading">Loading properties…</div>}><Catalogue category="buy" allowCommercial eyebrow="CURATED PROPERTIES" title="Featured Acquisitions" /></Suspense>

    <CtaBand variant="photo" eyebrow="PRIVATE & OFF-MARKET ACCESS" title="Looking for Off-Market or Institutional Acquisitions?" text="A substantial portion of Dubai's ultra-prime transactions occur privately. Leap Living maintains discreet, direct access to unlisted penthouses, private island plots, and full-building opportunities." button="Inquire for Private Off-Market Portfolio" onClick={() => openModal({ kind: "offmarket" })} />

    <Steps
      eyebrow="THE LEAP LIVING ADVANTAGE"
      title="The Buyer's Journey"
      supporting="A structured, end-to-end acquisition process designed to protect your capital, minimize risk, and secure the right asset in Dubai."
      items={[
        { number: "01", title: "Sourcing & Validation", text: "Verification of developer escrow accounts, title deeds, and realistic price-per-square-foot benchmarks.", icon: Search },
        { number: "02", title: "Commercial Structuring", text: "Negotiation of payment plans, developer waivers, and tax/fee optimization.", icon: Layers3 },
        { number: "03", title: "Conveyancing & Handover", text: "Complete coordination with the Dubai Land Department (DLD) and developer asset teams.", icon: KeyRound },
      ]}
    />

    <CtaBand eyebrow="READY TO ACQUIRE" title="Ready to Acquire in Dubai?" text="Speak with a senior advisor and receive a curated selection of properties aligned with your investment objectives." button="Schedule a Private Consultation" href="/contact" />
  </>;
}
