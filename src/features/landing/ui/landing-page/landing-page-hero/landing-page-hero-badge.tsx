import { Sparkles } from "lucide-react";

const LandingPageHeroBadge = () => (
  <div
    className="inline-flex items-center px-4 py-2 rounded-full bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 mb-8"
    tabIndex={0}
    aria-label="AI-Powered Financial Intelligence Badge"
  >
    <Sparkles className="h-4 w-4 text-blue-400 mr-2" aria-hidden="true" />
    <span className="text-slate-300 text-sm font-medium">
      AI-Powered Financial Intelligence
    </span>
  </div>
);

export default LandingPageHeroBadge;
