import { Card, CardContent } from "@/shared/@core/ui/card";
import LandingPagePricingPlanCardHeader from "./landing-page-pricing-plan-card-header";
import LandingPagePricingPlanCardFeatures from "./landing-page-pricing-plan-card-features";
import { ArrowRight } from "lucide-react";
import { Button } from "@/shared/@core/ui/button";
import type { FC } from "react";
import { PricingPlan } from "@/features/landing/lib/types";

type Props = {
  plan: PricingPlan;
  animationDelay?: string;
};

const LandingPagePricingPlanCard: FC<Props> = ({ plan, animationDelay }) => (
  <Card
    className={`group relative bg-slate-900/50 backdrop-blur-sm border transition-all duration-500 hover:scale-105 overflow-hidden ${
      plan.popular
        ? "border-blue-500/50 shadow-2xl shadow-blue-500/20"
        : "border-slate-800/50 hover:border-slate-700/50"
    }`}
    style={animationDelay ? { animationDelay } : {}}
    tabIndex={0}
    aria-label={`Pricing plan card for ${plan.name}`}
  >
    <LandingPagePricingPlanCardHeader plan={plan} />
    <CardContent className="h-full space-y-8 flex flex-col justify-between">
      <LandingPagePricingPlanCardFeatures features={plan.features} />
      <Button
        className={`w-full py-4 text-white font-semibold rounded-xl shadow-lg transition-all duration-300 group-hover:shadow-xl ${plan.buttonStyle}`}
        tabIndex={0}
        aria-label={`Get started with ${plan.name}`}
      >
        Get Started
        <ArrowRight
          className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform"
          aria-hidden="true"
        />
      </Button>
    </CardContent>
  </Card>
);

export default LandingPagePricingPlanCard;
