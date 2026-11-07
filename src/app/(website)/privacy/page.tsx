import { LegalPage } from "@/components/shared/LegalPage";

export default function PrivacyPage() {
  return <LegalPage eyebrow="PRIVACY POLICY" title="Privacy, handled with clarity." description="How information is handled on the LEAP LIVING website." sections={[
    { title: "Information you enter", body: "The enquiry, consultation, viewing and valuation forms currently operate as front-end prototypes. They do not transmit or store your submissions. Please do not include confidential or sensitive information until the live enquiry service is connected." },
    { title: "Browser-based preferences", body: "Property favourites are held only in the current page session and are removed when the page is refreshed or closed. This website does not use advertising cookies or analytics profiles." },
    { title: "Assets and external links", body: "Website photography and fonts are served locally rather than by third-party image or font trackers. If you follow an external link, such as LinkedIn or email, that service's own privacy terms apply." },
    { title: "Privacy questions", body: "For a question about privacy or the future live enquiry service, contact advisory@leapliving.ae. This page will be updated before personal-data collection is enabled." },
  ]} />;
}
