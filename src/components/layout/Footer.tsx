import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { navItems } from "@/config/navigation";
import { siteConfig } from "@/config/site";
import { BrandMark } from "./BrandMark";

export function Footer() {
  return <footer className="site-footer" id="footer"><div className="wrap">
    <div className="footer-main">
      <div className="footer-brand">
        <BrandMark tone="light" />
        <p>{siteConfig.tagline}</p>
        <span>{siteConfig.description}</span>
      </div>
      <div className="footer-col">
        <h3>Explore</h3>
        {navItems.slice(0, 4).map((item) => <Link key={item.label} href={item.href}>{item.label}</Link>)}
      </div>
      <div className="footer-col">
        <h3>Properties</h3>
        <Link href="/buy">Buy</Link>
        <Link href="/rent">Rent</Link>
        <Link href="/buy?category=commercial">Commercial</Link>
        <Link href="/sell">Sell</Link>
      </div>
      <div className="footer-col">
        <h3>Information</h3>
        <Link href="/about">Company Profile</Link>
        <Link href="/about">Our Approach</Link>
        <Link href="/contact">Privacy Policy</Link>
        <Link href="/contact">Terms of Use</Link>
      </div>
      <div className="footer-col footer-contact">
        <h3>Location</h3>
        <p><MapPin size={15} /> {siteConfig.address[0]}<br />{siteConfig.address[1]}</p>
        <p><Mail size={15} /> {siteConfig.email}</p>
        <p><Phone size={15} /> {siteConfig.phone}</p>
      </div>
    </div>
    <div className="footer-bottom">
      <span>{siteConfig.copyright}</span>
      <div><Link href="/contact">Privacy Policy</Link><i /><Link href="/contact">Terms of Use</Link></div>
    </div>
  </div></footer>;
}
