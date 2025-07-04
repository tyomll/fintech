import { Crown } from "lucide-react";

const LandingPagePricingPlansHeader = () => (
  <div className="text-center mb-20">
    <div
      className="inline-flex items-center px-4 py-2 rounded-full bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 mb-6"
      tabIndex={0}
      aria-label="Flexible Pricing Plans Badge"
    >
      <Crown className="h-4 w-4 text-yellow-400 mr-2" aria-hidden="true" />
      <span className="text-slate-300 text-sm font-medium">
        Flexible Pricing Plans
      </span>
    </div>
    <h2
      className="text-4xl sm:text-5xl font-bold mb-6"
      tabIndex={0}
      aria-label="Choose Your Path to Success"
    >
      <span className="bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
        Choose Your Path to Success
      </span>
    </h2>
    <p
      className="text-xl text-slate-400 max-w-3xl mx-auto"
      tabIndex={0}
      aria-label="Pricing Subtitle"
    >
      Unlock the power of AI-driven financial insights with our flexible pricing
      options. Start free, scale as you grow.
    </p>
  </div>
);

export default LandingPagePricingPlansHeader;
