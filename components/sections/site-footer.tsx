import { ArrowUpRight, MapPin } from "lucide-react";
import { BrandMark } from "@/components/brand-mark";

const footerLinks = [
  { title: "Explore", items: [["Home", "#top"], ["About", "#about"], ["Contact", "#contact"]] },
  { title: "Properties", items: [["Buy", "#properties"], ["Rent", "#properties"], ["Sell", "#valuation"]] },
  { title: "Resources", items: [["Company Profile", "#about"], ["Our Approach", "#methodology"], ["Privacy Policy", "#contact"]] },
];

export function SiteFooter() {
  return (
    <footer className="site-footer" id="contact">
      <div className="wrap footer-main">
        <div className="footer-brand">
          <BrandMark compact />
          <p>REAL ESTATE CONSULTANCY</p>
          <p>Certainty through precision.</p>
        </div>
        <div className="footer-license">
          <p>RERA Registered</p>
          <p>License No. 1234567</p>
        </div>
        <div className="footer-address">
          <MapPin size={18} />
          <p>Dubai, United Arab Emirates<br />Office 3401, Downtown Dubai</p>
        </div>
        {footerLinks.map(({ title, items }) => (
          <div className="footer-col" key={title}>
            <h3>{title}</h3>
            {items.map(([label, href]) => <a href={href} key={label}>{label}</a>)}
          </div>
        ))}
        <div className="footer-col">
          <h3>Follow Us</h3>
          <a href="#contact">LinkedIn <ArrowUpRight size={12} /></a>
          <a href="#contact">Instagram <ArrowUpRight size={12} /></a>
        </div>
      </div>
      <div className="footer-bottom wrap">
        <span>© 2026 Leap Living Real Estate Consultancy. All Rights Reserved.</span>
        <div><a href="#contact">Privacy Policy</a><i /> <a href="#contact">Terms of Use</a></div>
      </div>
    </footer>
  );
}
