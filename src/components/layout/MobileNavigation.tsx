"use client";

import { Menu, X } from "lucide-react";
import { Navigation } from "./Navigation";

export function MobileNavigation({
  open, onToggle, onNavigate,
}: { open: boolean; onToggle: () => void; onNavigate: () => void }) {
  return <>
    <button
      className="menu-toggle"
      aria-label={open ? "Close navigation" : "Open navigation"}
      aria-expanded={open}
      onClick={onToggle}
    >{open ? <X size={22} /> : <Menu size={22} />}</button>
    <Navigation open={open} onNavigate={onNavigate} />
  </>;
}
