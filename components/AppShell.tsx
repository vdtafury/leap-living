"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import {
  ArrowRight, Check, CheckCircle2, Mail, MapPin, Menu, Phone, Send, X,
} from "lucide-react";
import { navItems, type Listing } from "./site-data";

export type ModalState = { kind: "dossier" | "viewing" | "valuation" | "consultation" | "offmarket"; listing?: Listing } | null;

type SiteContext = {
  language: string;
  setLanguage: (value: string) => void;
  showToast: (message: string) => void;
  openModal: (state: ModalState) => void;
  favorites: string[];
  toggleFavorite: (id: string) => void;
};

const SiteContext = createContext<SiteContext | null>(null);

export function useSite() {
  const value = useContext(SiteContext);
  if (!value) throw new Error("useSite must be used inside AppShell");
  return value;
}

export function BrandMark({ tone = "dark" }: { tone?: "dark" | "light" }) {
  return <Link className="brand-mark" href="/" aria-label="LEAP LIVING — home">
    <Image src={tone === "dark" ? "/images/brand-dark.png" : "/images/brand-light.png"} alt="LEAP LIVING" width={104} height={75} priority />
    <span className="brand-divider" />
    <span className="brand-sub">REAL ESTATE<br />CONSULTANCY</span>
  </Link>;
}

export default function AppShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [language, setLanguageState] = useState("EN");
  const [scrolled, setScrolled] = useState(false);
  const [toast, setToast] = useState("");
  const [modal, setModal] = useState<ModalState>(null);
  const [modalSent, setModalSent] = useState(false);
  const [favorites, setFavorites] = useState<string[]>([]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [pathname]);

  useEffect(() => {
    if (!toast) return;
    const timer = window.setTimeout(() => setToast(""), 4200);
    return () => window.clearTimeout(timer);
  }, [toast]);

  useEffect(() => {
    if (!modal) return;
    const onKey = (event: KeyboardEvent) => { if (event.key === "Escape") setModal(null); };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => { document.body.style.overflow = ""; window.removeEventListener("keydown", onKey); };
  }, [modal]);

  const setLanguage = (value: string) => {
    setLanguageState(value);
    if (value === "AR") setToast("The Arabic edition is coming soon. You are viewing the English experience.");
  };
  const showToast = (message: string) => setToast(message);
  const openModal = (state: ModalState) => { setModalSent(false); setModal(state); setMenuOpen(false); };
  const toggleFavorite = (id: string) => setFavorites((saved) => saved.includes(id) ? saved.filter((item) => item !== id) : [...saved, id]);

  const modalCopy = (() => {
    if (!modal) return { eyebrow: "", title: "", subtitle: "" };
    switch (modal.kind) {
      case "dossier": return { eyebrow: "PRIVATE DOSSIER REQUEST", title: "Request Private Dossier", subtitle: `${modal.listing?.name ?? "This property"} · ${modal.listing?.community ?? ""}. A senior advisor will share the full commercial brief and disclosure pack.` };
      case "viewing": return { eyebrow: "PRIVATE VIEWING", title: "Schedule a Viewing", subtitle: `Arrange a discreet, accompanied viewing of ${modal.listing?.name ?? "this property"} at a time that suits you.` };
      case "valuation": return { eyebrow: "SELLING & VALUATION", title: "Request Valuation & Selling Plan", subtitle: "Receive an objective, data-backed commercial valuation and a discreet private marketing plan." };
      case "offmarket": return { eyebrow: "PRIVATE PORTFOLIO", title: "Off-Market Enquiry", subtitle: "Tell us your acquisition mandate and we will share relevant unlisted opportunities privately." };
      default: return { eyebrow: "PRIVATE ADVISORY", title: "Schedule a Strategic Consultation", subtitle: "Speak with a senior advisor about your acquisition, disposal or portfolio objectives in Dubai." };
    }
  })();

  return <SiteContext.Provider value={{ language, setLanguage, showToast, openModal, favorites, toggleFavorite }}>
    <header className={`site-header${scrolled ? " is-scrolled" : ""}`}>
      <div className="header-shell wrap">
        <BrandMark />
        <button className="menu-toggle" aria-label={menuOpen ? "Close navigation" : "Open navigation"} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={22} /> : <Menu size={22} />}</button>
        <nav className={`main-nav${menuOpen ? " is-open" : ""}`} aria-label="Main navigation">
          {navItems.map((item) => <Link key={item.label} href={item.href} className={item.href === "/" ? (pathname === "/" ? "active" : "") : (pathname.startsWith(item.href) ? "active" : "")} onClick={() => setMenuOpen(false)}>{item.label}</Link>)}
          <div className="mobile-language">
            <button className={language === "EN" ? "selected" : ""} onClick={() => setLanguage("EN")}>EN</button><span>/</span>
            <button className={language === "AR" ? "selected" : ""} onClick={() => setLanguage("AR")}>AR</button>
          </div>
        </nav>
        <div className="header-actions">
          <div className="language-switch" aria-label="Choose language">
            <button className={language === "EN" ? "selected" : ""} onClick={() => setLanguage("EN")}>EN</button><i />
            <button className={language === "AR" ? "selected" : ""} onClick={() => setLanguage("AR")}>AR</button>
          </div>
          <button className="button button-teal header-cta" onClick={() => openModal({ kind: "consultation" })}>Private Advisory <ArrowRight size={16} /></button>
        </div>
      </div>
    </header>

    <main id="top">{children}</main>

    <footer className="site-footer" id="footer"><div className="wrap">
      <div className="footer-main">
        <div className="footer-brand"><BrandMark tone="light" /><p>Certainty through precision.</p><span>Institutional real estate advisory · Dubai, UAE</span></div>
        <div className="footer-col"><h3>Explore</h3>{navItems.slice(0, 4).map((item) => <Link key={item.label} href={item.href}>{item.label}</Link>)}</div>
        <div className="footer-col"><h3>Properties</h3><Link href="/buy">Buy</Link><Link href="/rent">Rent</Link><Link href="/buy?category=commercial">Commercial</Link><Link href="/sell">Sell</Link></div>
        <div className="footer-col"><h3>Information</h3><Link href="/about">Company Profile</Link><Link href="/about">Our Approach</Link><Link href="/contact">Privacy Policy</Link><Link href="/contact">Terms of Use</Link></div>
        <div className="footer-col footer-contact"><h3>Location</h3><p><MapPin size={15} /> Dubai, United Arab Emirates<br />Office 3401, Downtown Dubai</p><p><Mail size={15} /> advisory@leapliving.ae</p><p><Phone size={15} /> +971 4 000 0000</p></div>
      </div>
      <div className="footer-bottom"><span>© 2026 Leap Living Real Estate Consultancy. All Rights Reserved.</span><div><Link href="/contact">Privacy Policy</Link><i /><Link href="/contact">Terms of Use</Link></div></div>
    </div></footer>

    <button className="mobile-advisory" onClick={() => openModal({ kind: "consultation" })}>Private Advisory <ArrowRight size={16} /></button>

    {toast && <div className="toast" role="status"><CheckCircle2 size={18} />{toast}<button onClick={() => setToast("")} aria-label="Dismiss message"><X size={15} /></button></div>}

    {modal && <div className="modal-backdrop" onMouseDown={() => setModal(null)}>
      <div className="modal" role="dialog" aria-modal="true" aria-labelledby="modal-title" onMouseDown={(event) => event.stopPropagation()}>
        <button className="modal-close" onClick={() => setModal(null)} aria-label="Close dialog"><X size={20} /></button>
        <p className="eyebrow">{modalCopy.eyebrow} <span /></p>
        <h2 id="modal-title">{modalCopy.title}</h2>
        <p className="modal-sub">{modalCopy.subtitle}</p>
        {modalSent ? <div className="modal-success"><CheckCircle2 size={38} /><h3>Request received</h3><p>Thank you. A senior Leap Living advisor will be in touch shortly to discuss your objectives in confidence.</p><button className="button button-teal" onClick={() => setModal(null)}>Close <Check size={16} /></button></div>
          : <form className="modal-form" onSubmit={(event) => { event.preventDefault(); setModalSent(true); }}>
            <label>Full name<input required placeholder="Your full name" autoComplete="name" /></label>
            <div className="modal-form-row"><label>Email address<input required type="email" placeholder="name@company.com" autoComplete="email" /></label><label>Phone number<input type="tel" placeholder="+971 ..." autoComplete="tel" /></label></div>
            <label>How can we help?<textarea rows={3} placeholder="Tell us about your mandate, timing, or preferred communities" /></label>
            <button className="button button-teal" type="submit">Send Request <Send size={16} /></button>
            <p className="modal-fine">Prototype form — no data leaves this browser.</p>
          </form>}
      </div>
    </div>}
  </SiteContext.Provider>;
}
