import { Check } from "lucide-react";
import type { FC } from "react";

type Props = {
  features: string[];
};

const LandingPagePricingPlanCardFeatures: FC<Props> = ({ features }) => (
  <ul className="space-y-4">
    {features.map((feature, featureIndex) => (
      <li
        key={featureIndex}
        className="flex items-center text-slate-300"
        tabIndex={0}
        aria-label={feature}
      >
        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center mr-3">
          <Check className="h-3 w-3 text-green-400" aria-hidden="true" />
        </div>
        <span>{feature}</span>
      </li>
    ))}
  </ul>
);

export default LandingPagePricingPlanCardFeatures;
