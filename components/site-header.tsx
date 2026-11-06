"use client";

import { useEffect, useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import { BrandMark } from "@/components/brand-mark";

const navigation = [
  ["Home", "#top"],
  ["About", "#about"],
  ["Buy", "#properties"],
  ["Rent", "#properties"],
  ["Sell", "#valuation"],
  ["Contact", "#contact"],
] as const;

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`site-header${scrolled ? " is-scrolled" : ""}`}>
      <div className="header-inner">
        <BrandMark />
        <span className="header-divider" aria-hidden="true" />
        <button
          className="menu-toggle"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
        <nav id="primary-navigation" className={`main-nav${menuOpen ? " is-open" : ""}`} aria-label="Main navigation">
          {navigation.map(([label, href], index) => (
            <a
              key={label}
              className={index === 0 ? "active" : ""}
              href={href}
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </a>
          ))}
        </nav>
        <div className="header-actions">
          <a className="button button-teal header-cta" href="#contact">
            Private Advisory <ArrowRight size={17} />
          </a>
        </div>
      </div>
    </header>
  );
}
