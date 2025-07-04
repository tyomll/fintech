import { TrendingUp, TrendingDown } from "lucide-react";
import type { FC } from "react";
import { StockTrend } from "@/features/landing/lib/types";

type Stock = {
  symbol: string;
  name: string;
  price: string;
  change: string;
  changeValue: string;
  trend: StockTrend;
  confidence: number;
};

type Props = {
  stock: Stock;
};

const LandingPageTrendingStockCardHeader: FC<Props> = ({ stock }) => (
  <div className="flex items-center justify-between mb-4">
    <div className="flex items-center space-x-3">
      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center">
        <span className="text-white font-bold text-sm">{stock.symbol}</span>
      </div>
      <div>
        <h3 className="text-white font-semibold text-lg">{stock.symbol}</h3>
        <p className="text-slate-400 text-sm">{stock.name}</p>
      </div>
    </div>
    <div
      className={`flex items-center px-3 py-1 rounded-full text-sm font-medium ${
        stock.trend === StockTrend.Up
          ? "bg-green-500/20 text-green-400 border border-green-500/30"
          : "bg-red-500/20 text-red-400 border border-red-500/30"
      }`}
      tabIndex={0}
      aria-label={`Trend: ${stock.trend}, Change: ${stock.change}`}
    >
      {stock.trend === StockTrend.Up ? (
        <TrendingUp className="h-4 w-4 mr-1" aria-hidden="true" />
      ) : (
        <TrendingDown className="h-4 w-4 mr-1" aria-hidden="true" />
      )}
      {stock.change}
    </div>
  </div>
);

export default LandingPageTrendingStockCardHeader;
