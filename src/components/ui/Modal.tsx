"use client";

import { useState } from "react";
import { Check, CheckCircle2, Send, X } from "lucide-react";
import type { ModalState } from "@/components/layout/SiteContext";

type ModalKind = NonNullable<ModalState>;

function getCopy(state: ModalKind) {
  switch (state.kind) {
    case "dossier":
      return {
        eyebrow: "PRIVATE DOSSIER REQUEST",
        title: "Request Private Dossier",
        subtitle: `${state.listing?.name ?? "This property"} · ${state.listing?.community ?? ""}. A senior advisor will share the full commercial brief and disclosure pack.`,
      };
    case "viewing":
      return {
        eyebrow: "PRIVATE VIEWING",
        title: "Schedule a Viewing",
        subtitle: `Arrange a discreet, accompanied viewing of ${state.listing?.name ?? "this property"} at a time that suits you.`,
      };
    case "valuation":
      return {
        eyebrow: "SELLING & VALUATION",
        title: "Request Valuation & Selling Plan",
        subtitle: "Receive an objective, data-backed commercial valuation and a discreet private marketing plan.",
      };
    case "offmarket":
      return {
        eyebrow: "PRIVATE PORTFOLIO",
        title: "Off-Market Enquiry",
        subtitle: "Tell us your acquisition mandate and we will share relevant unlisted opportunities privately.",
      };
    default:
      return {
        eyebrow: "PRIVATE ADVISORY",
        title: "Schedule a Strategic Consultation",
        subtitle: "Speak with a senior advisor about your acquisition, disposal or portfolio objectives in Dubai.",
      };
  }
}

export function EnquiryModal({ state, onClose }: { state: ModalKind; onClose: () => void }) {
  const [sent, setSent] = useState(false);
  const copy = getCopy(state);

  return <div className="modal-backdrop" onMouseDown={onClose}>
    <div className="modal" role="dialog" aria-modal="true" aria-labelledby="modal-title" onMouseDown={(event) => event.stopPropagation()}>
      <button className="modal-close" onClick={onClose} aria-label="Close dialog"><X size={20} /></button>
      <p className="eyebrow">{copy.eyebrow} <span /></p>
      <h2 id="modal-title">{copy.title}</h2>
      <p className="modal-sub">{copy.subtitle}</p>
      {sent
        ? <div className="modal-success">
            <CheckCircle2 size={38} />
            <h3>Request received</h3>
            <p>Thank you. A senior Leap Living advisor will be in touch shortly to discuss your objectives in confidence.</p>
            <button className="button button-teal" onClick={onClose}>Close <Check size={16} /></button>
          </div>
        : <form className="modal-form" onSubmit={(event) => { event.preventDefault(); setSent(true); }}>
            <label>Full name<input required placeholder="Your full name" autoComplete="name" /></label>
            <div className="modal-form-row">
              <label>Email address<input required type="email" placeholder="name@company.com" autoComplete="email" /></label>
              <label>Phone number<input type="tel" placeholder="+971 ..." autoComplete="tel" /></label>
            </div>
            <label>How can we help?<textarea rows={3} placeholder="Tell us about your mandate, timing, or preferred communities" /></label>
            <button className="button button-teal" type="submit">Send Request <Send size={16} /></button>
            <p className="modal-fine">Prototype form — no data leaves this browser.</p>
          </form>}
    </div>
  </div>;
}
