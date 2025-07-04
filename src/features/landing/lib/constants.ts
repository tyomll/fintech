import { Crown, Star, Zap } from "lucide-react";

export const PRICING_PLANS = [
  {
    name: "Starter",
    price: "$29",
    period: "/month",
    description: "Perfect for individual investors getting started",
    icon: Star,
    features: [
      "Basic AI predictions",
      "Portfolio tracking",
      "Email alerts",
      "Mobile app access",
      "Community support",
      "5 stock watchlists",
    ],
    popular: false,
    gradient: "from-slate-600 to-slate-700",
    buttonStyle: "bg-slate-700 hover:bg-slate-600",
  },
  {
    name: "Professional",
    price: "$79",
    period: "/month",
    description: "Advanced tools for serious traders and investors",
    icon: Zap,
    features: [
      "Advanced AI predictions",
      "Real-time market analysis",
      "Custom alerts & notifications",
      "Portfolio optimization",
      "Priority support",
      "API access",
      "Advanced charting tools",
      "Unlimited watchlists",
    ],
    popular: true,
    gradient: "from-blue-600 to-purple-600",
    buttonStyle:
      "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700",
  },
  {
    name: "Enterprise",
    price: "$199",
    period: "/month",
    description: "Complete solution for financial professionals",
    icon: Crown,
    features: [
      "Everything in Professional",
      "Dedicated account manager",
      "Custom integrations",
      "White-label solutions",
      "Advanced analytics",
      "Team collaboration tools",
      "24/7 phone support",
      "Custom AI models",
    ],
    popular: false,
    gradient: "from-purple-600 to-pink-600",
    buttonStyle:
      "bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700",
  },
];
