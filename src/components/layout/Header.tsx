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

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [pathname]);

  return <header className={`site-header${scrolled ? " is-scrolled" : ""}`}>
    <div className="header-shell wrap">
      <BrandMark />
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
