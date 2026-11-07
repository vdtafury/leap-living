"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems } from "@/config/navigation";

export function Navigation({ open = false, onNavigate }: { open?: boolean; onNavigate?: () => void }) {
  const pathname = usePathname();
  return <nav id="main-navigation" className={`main-nav${open ? " is-open" : ""}`} aria-label="Main navigation">
    {navItems.map((item) => {
      const isActive = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
      return <Link
        key={item.label}
        href={item.href}
        className={isActive ? "active" : ""}
        aria-current={isActive ? "page" : undefined}
        onClick={onNavigate}
      >{item.label}</Link>;
    })}
  </nav>;
}
