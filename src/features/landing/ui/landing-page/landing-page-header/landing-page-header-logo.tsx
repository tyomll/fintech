import Link from "next/link";
import { TrendingUp } from "lucide-react";

const LandingPageHeaderLogo = () => (
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
);

export default LandingPageHeaderLogo;
