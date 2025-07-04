"use client";

import { useState } from "react";
import LandingPageContactUsHeader from "./landing-page-contact-us-header";
import LandingPageContactUsInfo from "./landing-page-contact-us-info";
import LandingPageContactUsWhyCard from "./landing-page-contact-us-why-card";
import LandingPageContactUsForm from "./landing-page-contact-us-form";

const LandingPageContactUs = () => {
  return (
    <section id="contact" className="py-32 px-4 sm:px-6 lg:px-8 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/50 to-slate-900/50"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <LandingPageContactUsHeader />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <LandingPageContactUsInfo />
            <LandingPageContactUsWhyCard />
          </div>
          <LandingPageContactUsForm />
        </div>
      </div>
    </section>
  );
};

export default LandingPageContactUs;
