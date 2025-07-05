import { Button } from "@/shared/ui/@core/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/shared/ui/@core/card";
import { FC } from "react";
import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { DetaledStock } from "@/shared/lib/types";
import { StockTrend } from "@/features/landing/lib/types";

import { useDashboardStore } from "@/features/dashboard/model/store/use-dashboard-store";

interface Props {
  stock: DetaledStock;
}

const DashboardStockChart: FC<Props> = ({ stock }) => {
  const { stockChartRange, setStockChartRange, setStockChartInterval } =
    useDashboardStore();
  const timeframes = ["1d", "1w", "1m", "3m", "1y"];

  const onStockChartRangeChange = (range: string) => {
    setStockChartRange(range);
    switch (range) {
      case "1d":
        setStockChartInterval("5m");
        break;
      case "1w":
        setStockChartInterval("1h");
        break;
      case "1m":
        setStockChartInterval("5d");
        break;
      case "3m":
        setStockChartInterval("1wk");
        break;
      case "1y":
        setStockChartInterval("1mo");
        break;
      default:
        setStockChartInterval("5m");
        break;
    }
  };
  return (
    <Card className="lg:col-span-3 bg-slate-900/50 backdrop-blur-sm border border-slate-800/50">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-white">Price Chart</CardTitle>
          <div className="flex space-x-1 bg-slate-800/50 rounded-lg p-1">
            {timeframes.map((tf) => (
              <Button
                key={tf}
                variant="ghost"
                size="sm"
                onClick={() => onStockChartRangeChange(tf)}
                className={`px-3 py-1 text-xs rounded-md transition-all ${
                  stockChartRange === tf
                    ? "bg-blue-600 text-white"
                    : "text-slate-400 hover:text-white hover:bg-slate-700/50"
                }`}
                aria-label={`View ${tf} chart`}
              >
                {tf}
              </Button>
            ))}
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={stock.data}>
              <defs>
                <linearGradient id="priceGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop
                    offset="5%"
                    stopColor={
                      stock.trend === StockTrend.Up ? "#10b981" : "#ef4444"
                    }
                    stopOpacity={0.3}
                  />
                  <stop
                    offset="95%"
                    stopColor={
                      stock.trend === StockTrend.Up ? "#10b981" : "#ef4444"
                    }
                    stopOpacity={0}
                  />
                </linearGradient>
              </defs>
              <XAxis
                dataKey="time"
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#94a3b8", fontSize: 12 }}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#94a3b8", fontSize: 12 }}
                domain={["dataMin - 2", "dataMax + 2"]}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#1e293b",
                  border: "1px solid #334155",
                  borderRadius: "8px",
                  color: "#fff",
                }}
                formatter={(value: number) => [`$${value.toFixed(2)}`, "Price"]}
              />
              <Area
                type="monotone"
                dataKey="value"
                stroke={stock.trend === StockTrend.Up ? "#10b981" : "#ef4444"}
                strokeWidth={3}
                fill="url(#priceGradient)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default DashboardStockChart;
