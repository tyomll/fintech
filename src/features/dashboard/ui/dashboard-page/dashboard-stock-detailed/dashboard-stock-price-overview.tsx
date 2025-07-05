import { Card, CardContent } from "@/shared/ui/@core/card";
import { TrendingUp, TrendingDown } from "lucide-react";
import { FC } from "react";
import { DetaledStock } from "@/shared/lib/types";
import { StockTrend } from "@/features/landing/lib/types";

interface Props {
  stock: DetaledStock;
}

const DashboardStockPriceOverview: FC<Props> = ({ stock }) => {
  return (
    <Card className="lg:col-span-1 bg-slate-900/50 backdrop-blur-sm border border-slate-800/50">
      <CardContent className="p-6">
        <div className="space-y-4">
          <div>
            <p className="text-slate-400 text-sm">Current Price</p>
            <div className="flex-wrap flex items-baseline space-x-2">
              <span className="text-4xl font-bold text-white">
                {stock.price}
              </span>
              <div className="flex items-center">
                {stock.trend === StockTrend.Up ? (
                  <TrendingUp className="h-5 w-5 text-green-400 mr-1" />
                ) : (
                  <TrendingDown className="h-5 w-5 text-red-400 mr-1" />
                )}
                <span
                  className={`text-lg font-medium ${
                    stock.trend === StockTrend.Up
                      ? "text-green-400"
                      : "text-red-400"
                  }`}
                >
                  {stock.change}
                </span>
              </div>
            </div>
            <p
              className={`text-sm ${
                stock.trend === StockTrend.Up
                  ? "text-green-400"
                  : "text-red-400"
              }`}
            >
              {stock.changeValue} today
            </p>
          </div>

          <div className="space-y-3 pt-4 border-t border-slate-800/50">
            <div className="flex justify-between">
              <span className="text-slate-400 text-sm">Volume</span>
              <span className="text-white text-sm font-medium">
                {stock.volume}
              </span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default DashboardStockPriceOverview;
