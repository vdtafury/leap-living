"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems } from "@/config/navigation";

export function Navigation({ open = false, onNavigate }: { open?: boolean; onNavigate?: () => void }) {
  const pathname = usePathname();
  return <nav className={`main-nav${open ? " is-open" : ""}`} aria-label="Main navigation">
    {navItems.map((item) => <Link
      key={item.label}
      href={item.href}
      className={item.href === "/" ? (pathname === "/" ? "active" : "") : (pathname.startsWith(item.href) ? "active" : "")}
      onClick={onNavigate}
    >{item.label}</Link>)}
  </nav>;
}
