import { Card, CardContent } from "@/shared/@core/ui/card";
import { FEATURES } from "@/features/landing/lib/constants";

const LandingPageContactUsWhyCard = () => (
  <Card className="bg-slate-900/50 backdrop-blur-sm border border-slate-800/50">
    <CardContent className="p-8">
      <h4 className="text-white font-semibold text-lg mb-4">
        Why Choose FinanceAI?
      </h4>
      <div className="grid grid-cols-2 gap-4">
        {FEATURES.map((feature, index) => (
          <div key={index} className="flex items-center text-slate-300">
            <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-3"></div>
            <span className="text-sm">{feature}</span>
          </div>
        ))}
      </div>
    </CardContent>
  </Card>
);

export default LandingPageContactUsWhyCard;
