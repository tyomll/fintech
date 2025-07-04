import { CardHeader, CardTitle } from "@/shared/@core/ui/card";
import type { FC } from "react";
import { PricingPlan } from "@/features/landing/lib/types";

type Props = {
  plan: PricingPlan;
};

const LandingPagePricingPlanCardHeader: FC<Props> = ({ plan }) => {
  const IconComponent = plan.icon;
  return (
    <CardHeader className="text-center pb-8 relative">
      {plan.popular && (
        <>
          <div className="absolute -top-4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
          <div className="absolute top-4 right-4">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
              Most Popular
            </span>
          </div>
        </>
      )}
      <div className="flex justify-center mb-6">
        <div
          className={`bg-gradient-to-r ${plan.gradient} p-4 rounded-2xl shadow-lg`}
        >
          <IconComponent className="h-8 w-8 text-white" />
        </div>
      </div>
      <CardTitle className="text-white text-2xl mb-2">{plan.name}</CardTitle>
      <div className="mb-4">
        <span className="text-5xl font-bold bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
          {plan.price}
        </span>
        <span className="text-slate-400 text-lg">{plan.period}</span>
      </div>
      <p className="text-slate-400 leading-relaxed">{plan.description}</p>
    </CardHeader>
  );
};

export default LandingPagePricingPlanCardHeader;
