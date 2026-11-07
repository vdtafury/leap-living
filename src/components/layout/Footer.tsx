import Link from "next/link";
import { Linkedin, Mail, MapPin } from "lucide-react";
import { siteConfig } from "@/config/site";
import { BrandMark } from "./BrandMark";

export function Footer() {
  return <footer className="site-footer" id="footer"><div className="wrap">
    <div className="footer-main">
      <div className="footer-brand">
        <BrandMark tone="light" />
        <p>{siteConfig.tagline}</p>
        <span>{siteConfig.description}</span>
        <span className="footer-registration">Real Estate Consultancy<br />Dubai, United Arab Emirates</span>
      </div>
      <div className="footer-col footer-office">
        <h3>Office</h3>
        <p><MapPin size={15} /><span>{siteConfig.address[0]}<br />{siteConfig.address[1]}</span></p>
        <p><Mail size={15} /><a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a></p>
      </div>
      <div className="footer-col">
        <h3>Explore</h3>
        <Link href="/">Home</Link><Link href="/about">About</Link><Link href="/contact">Contact</Link>
      </div>
      <div className="footer-col">
        <h3>Properties</h3>
        <Link href="/buy">Buy</Link><Link href="/rent">Rent</Link><Link href="/sell">Sell</Link><Link href="/buy?category=commercial">Commercial</Link>
      </div>
      <div className="footer-col">
        <h3>Resources</h3>
        <Link href="/about">Company Profile</Link><Link href="/about">Our Approach</Link><Link href="/privacy">Privacy Policy</Link><Link href="/terms">Terms of Use</Link>
      </div>
      <div className="footer-col">
        <h3>Follow Us</h3>
        <div className="footer-social">
          <a href="https://www.linkedin.com/in/mohab-samak-ccim-44909a16/" target="_blank" rel="noreferrer" aria-label="Follow Mohab Samak on LinkedIn"><Linkedin size={17} /></a>
          <a href={`mailto:${siteConfig.email}`} aria-label="Email LEAP LIVING"><Mail size={17} /></a>
        </div>
      </div>
    </div>
    <div className="footer-bottom">
      <span>{siteConfig.copyright}</span>
      <div><Link href="/privacy">Privacy Policy</Link><i /><Link href="/terms">Terms of Use</Link></div>
    </div>
  </div></footer>;
}
