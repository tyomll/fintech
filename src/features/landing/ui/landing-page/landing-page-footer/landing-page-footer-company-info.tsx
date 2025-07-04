import Link from "next/link";
import { TrendingUp } from "lucide-react";
import { SOCIAL_LINKS } from "@/features/landing/lib/constants";

const LandingPageFooterCompanyInfo = () => (
  <div className="space-y-6">
    <Link
      href="/"
      className="flex items-center space-x-3 group"
      tabIndex={0}
      aria-label="FinanceAI Home"
    >
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl blur opacity-75 group-hover:opacity-100 transition-opacity"></div>
        <div className="relative bg-gradient-to-r from-blue-500 to-purple-600 p-3 rounded-xl">
          <TrendingUp className="h-6 w-6 text-white" aria-hidden="true" />
        </div>
      </div>
      <span className="text-2xl font-bold bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
        FinanceAI
      </span>
    </Link>
    <p className="text-slate-400 max-w-sm leading-relaxed">
      Empowering the next generation of investors with cutting-edge AI
      technology and personalized financial insights.
    </p>
    <div className="flex space-x-4">
      {SOCIAL_LINKS.map((social, index) => (
        <Link
          key={index}
          href={social.href}
          className={`text-slate-500 ${social.color} transition-colors p-2 rounded-lg hover:bg-slate-800/50`}
          tabIndex={0}
          aria-label={social.icon.displayName || "Social Link"}
        >
          <social.icon className="h-5 w-5" aria-hidden="true" />
        </Link>
      ))}
    </div>
  </div>
);

export default LandingPageFooterCompanyInfo;
