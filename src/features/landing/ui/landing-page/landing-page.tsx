import LandingPageHero from "@/features/landing/ui/landing-page/landing-page-hero/landing-page-hero";
import LandingPageTrendingStocks from "@/features/landing/ui/landing-page/landing-page-trending-stocks/landing-page-trending-stocks";
import LandingPagePricingPlans from "@/features/landing/ui/landing-page/landing-page-pricing-plans/landing-page-pricing-plans";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <LandingPageHero />
      <LandingPageTrendingStocks />
      <LandingPagePricingPlans />
    </div>
  );
};

export default LandingPage;
