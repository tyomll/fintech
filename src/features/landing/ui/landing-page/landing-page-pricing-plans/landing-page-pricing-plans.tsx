"use client";
import LandingPagePricingPlansHeader from "@/features/landing/ui/landing-page/landing-page-pricing-plans/landing-page-pricing-plans-header";
import LandingPagePricingPlanCard from "@/features/landing/ui/landing-page/landing-page-pricing-plans/landing-page-pricing-plan-card";
import LandingPagePricingPlansAdditionalInfo from "@/features/landing/ui/landing-page/landing-page-pricing-plans/landing-page-pricing-plans-additional-info";
import { PRICING_PLANS } from "@/features/landing/lib/constants";

const LandingPagePricingPlans = () => {
  return (
    <section id="pricing" className="py-32 px-4 sm:px-6 lg:px-8 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 to-slate-950/50"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <LandingPagePricingPlansHeader />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRICING_PLANS.map((plan, index) => (
            <LandingPagePricingPlanCard
              key={plan.name}
              plan={plan}
              animationDelay={`${index * 0.1}s`}
            />
          ))}
        </div>
        <LandingPagePricingPlansAdditionalInfo />
      </div>
    </section>
  );
};

export default LandingPagePricingPlans;
