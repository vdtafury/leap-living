import { LegalPage } from "@/components/shared/LegalPage";

export default function TermsPage() {
  return <LegalPage eyebrow="TERMS OF USE" title="Clear terms for using this website." description="The terms that apply when browsing the LEAP LIVING website and its illustrative portfolio." sections={[
    { title: "Portfolio information", body: "Property records, photography, availability and prices are illustrative and do not constitute verified live inventory, an offer, or a commitment to transact. All details require confirmation by a LEAP LIVING advisor." },
    { title: "Advisory relationship", body: "Browsing this website or using a prototype form does not create an advisory, fiduciary, brokerage or client relationship. Any professional engagement must be agreed separately with LEAP LIVING." },
    { title: "Acceptable use", body: "Do not misuse the website, attempt to disrupt its operation, access restricted systems, or present its illustrative content as verified property inventory." },
    { title: "Brand and third-party material", body: "LEAP LIVING branding and original website content may not be misrepresented. Third-party photography and developer names remain associated with their respective owners and documented sources." },
    { title: "Questions", body: "For questions about these terms or the website, contact advisory@leapliving.ae." },
  ]} />;
}
