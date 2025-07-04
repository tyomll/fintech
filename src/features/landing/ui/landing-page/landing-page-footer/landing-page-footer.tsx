"use client";

import LandingPageFooterCompanyInfo from "./landing-page-footer-company-info";
import LandingPageFooterLinksColumn from "./landing-page-footer-links-column";
import LandingPageFooterNewsletter from "./landing-page-footer-newsletter";
import LandingPageFooterBottom from "./landing-page-footer-bottom";
import { PRODUCT_LINKS } from "@/features/landing/lib/constants";

const LandingPageFooter = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-slate-950 border-t border-slate-800/50">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/20 to-slate-950"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-center gap-12 flex-wrap">
          <LandingPageFooterCompanyInfo />
          <LandingPageFooterLinksColumn
            title="Product"
            links={PRODUCT_LINKS}
          />
        </div>
        <LandingPageFooterNewsletter />
        <LandingPageFooterBottom scrollToTop={scrollToTop} />
      </div>
    </footer>
  );
};

export default LandingPageFooter;
