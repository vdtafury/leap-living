"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { BrandMark } from "./BrandMark";
import { MobileNavigation } from "./MobileNavigation";
import { useSite } from "./SiteContext";

export function Header() {
  const pathname = usePathname();
  const { openModal } = useSite();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isHome = pathname === "/";
  const light = isHome && !scrolled && !menuOpen;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [pathname]);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (event: KeyboardEvent) => { if (event.key === "Escape") setMenuOpen(false); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  return <header className={`site-header${isHome ? " is-home" : ""}${scrolled ? " is-scrolled" : ""}${menuOpen ? " menu-open" : ""}`}>
    <div className="header-shell wrap">
      <BrandMark tone={light ? "light" : "dark"} />
      <MobileNavigation
        open={menuOpen}
        onToggle={() => setMenuOpen(!menuOpen)}
        onNavigate={() => setMenuOpen(false)}
      />
      <div className="header-actions">
        <button className="button button-teal button--compact header-cta" onClick={() => openModal({ kind: "consultation" })}>
          Private Advisory <ArrowRight size={16} />
        </button>
      </div>
    </div>
  </header>;
}
