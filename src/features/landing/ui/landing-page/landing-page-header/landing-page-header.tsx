"use client";

import { useState, useEffect } from "react";
import LandingPageHeaderLogo from "./landing-page-header-logo";
import LandingPageHeaderNav from "./landing-page-header-nav";
import LandingPageHeaderAuth from "./landing-page-header-auth";
import LandingPageHeaderMobileMenuButton from "./landing-page-header-mobile-menu-button";
import LandingPageHeaderMobileMenu from "./landing-page-header-mobile-menu";

const LandingPageHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMenuToggle = () => setIsMenuOpen((prev) => !prev);
  const handleMenuClose = () => setIsMenuOpen(false);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-slate-950/80 backdrop-blur-xl border-b border-slate-800/50 shadow-2xl"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <LandingPageHeaderLogo />
          <LandingPageHeaderNav />
          <LandingPageHeaderAuth />
          <LandingPageHeaderMobileMenuButton
            isMenuOpen={isMenuOpen}
            handleToggle={handleMenuToggle}
          />
        </div>
        {isMenuOpen && (
          <LandingPageHeaderMobileMenu handleClose={handleMenuClose} />
        )}
      </div>
    </header>
  );
};

export default LandingPageHeader;
