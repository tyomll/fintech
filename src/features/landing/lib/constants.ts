import {
  Crown,
  MapPin,
  Mail,
  Phone,
  Star,
  Zap,
  Github,
  Twitter,
  Linkedin,
} from "lucide-react";

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

export const FEATURES = [
  "99.9% Uptime",
  "24/7 Support",
  "AI-Powered",
  "50K+ Users",
  "Real-time Data",
];

export const CONTACT_ITEMS = [
  {
    icon: Mail,
    title: "Email",
    content: "hello@financeai.com",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Phone,
    title: "Phone",
    content: "+374 (91) 91 91 91",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: MapPin,
    title: "Address",
    content: "Currently at the VTC!!",
    gradient: "from-green-500 to-emerald-500",
  },
];

export const SOCIAL_LINKS = [
  { icon: Twitter, href: "#", color: "hover:text-blue-400" },
  { icon: Linkedin, href: "#", color: "hover:text-blue-600" },
  { icon: Github, href: "#", color: "hover:text-slate-300" },
  { icon: Mail, href: "#", color: "hover:text-green-400" },
];

export const PRODUCT_LINKS = [
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "API", href: "/docs/api" },
];
