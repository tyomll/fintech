import { Card, CardHeader, CardContent } from "@/shared/@core/ui/card";
import LandingPageTrendingStockCardHeader from "@/features/landing/ui/landing-page/landing-page-trending-stocks/landing-page-trending-stock-card-header";
import LandingPageTrendingStockCardChart from "@/features/landing/ui/landing-page/landing-page-trending-stocks/landing-page-trending-stock-card-chart";
import type { FC } from "react";
import { Stock, StockTrend } from "@/features/landing/lib/types";

type Props = {
  stock: Stock;
  animationDelay?: string;
};

const LandingPageTrendingStockCard: FC<Props> = ({ stock, animationDelay }) => (
  <Card
    className="group bg-slate-900/50 backdrop-blur-sm border border-slate-800/50 hover:border-slate-700/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/10 overflow-hidden"
    style={animationDelay ? { animationDelay } : {}}
    tabIndex={0}
    aria-label={`Stock card for ${stock.name}`}
  >
    <CardHeader className="pb-4">
      <LandingPageTrendingStockCardHeader stock={stock} />
      <div className="space-y-2">
        <div className="flex items-baseline space-x-2">
          <span className="text-3xl font-bold text-white">{stock.price}</span>
          <span
            className={`text-sm font-medium ${
              stock.trend === StockTrend.Up ? "text-green-400" : "text-red-400"
            }`}
          >
            {stock.changeValue}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-slate-400 text-sm">AI Confidence</span>
          <div className="flex items-center space-x-2">
            <div className="w-20 h-2 bg-slate-800 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-1000"
                style={{ width: `${stock.confidence}%` }}
              ></div>
            </div>
            <span className="text-slate-300 text-sm font-medium">
              {stock.confidence}%
            </span>
          </div>
        </div>
      </div>
    </CardHeader>
    <CardContent className="pt-0">
      <LandingPageTrendingStockCardChart
        data={stock.data}
        trend={stock.trend}
        symbol={stock.symbol}
      />
    </CardContent>
  </Card>
);

export default LandingPageTrendingStockCard;
