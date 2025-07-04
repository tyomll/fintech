import { BarChart3 } from "lucide-react";

const LandingPageTrendingStocksHeader = () => (
  <div className="text-center mb-20">
    <div
      className="inline-flex items-center px-4 py-2 rounded-full bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 mb-6"
      tabIndex={0}
      aria-label="Live Market Intelligence Badge"
    >
      <BarChart3 className="h-4 w-4 text-green-400 mr-2" aria-hidden="true" />
      <span className="text-slate-300 text-sm font-medium">
        Live Market Intelligence
      </span>
    </div>
    <h2
      className="text-4xl sm:text-5xl font-bold mb-6"
      tabIndex={0}
      aria-label="AI-Powered Market Insights"
    >
      <span className="bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
        AI-Powered Market Insights
      </span>
    </h2>
    <p
      className="text-xl text-slate-400 max-w-3xl mx-auto"
      tabIndex={0}
      aria-label="Market Insights Subtitle"
    >
      Our advanced algorithms analyze thousands of data points to provide you
      with real-time predictions and market intelligence.
    </p>
  </div>
);

export default LandingPageTrendingStocksHeader;
