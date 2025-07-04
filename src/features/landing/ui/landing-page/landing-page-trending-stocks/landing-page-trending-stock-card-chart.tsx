"use client";
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis } from "recharts";
import type { FC } from "react";
import { DataPoint, StockTrend } from "@/features/landing/lib/types";

type Props = {
  data: DataPoint[];
  trend: StockTrend;
  symbol: string;
};

const LandingPageTrendingStockCardChart: FC<Props> = ({
  data,
  trend,
  symbol,
}) => (
  <div className="h-32 -mx-6 -mb-6">
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart data={data}>
        <defs>
          <linearGradient id={`gradient-${symbol}`} x1="0" y1="0" x2="0" y2="1">
            <stop
              offset="5%"
              stopColor={trend === StockTrend.Up ? "#10b981" : "#ef4444"}
              stopOpacity={0.3}
            />
            <stop
              offset="95%"
              stopColor={trend === StockTrend.Up ? "#10b981" : "#ef4444"}
              stopOpacity={0}
            />
          </linearGradient>
        </defs>
        <XAxis dataKey="time" hide />
        <YAxis hide />
        <Area
          type="monotone"
          dataKey="value"
          stroke={trend === StockTrend.Up ? "#10b981" : "#ef4444"}
          strokeWidth={2}
          fill={`url(#gradient-${symbol})`}
        />
      </AreaChart>
    </ResponsiveContainer>
  </div>
);

export default LandingPageTrendingStockCardChart;
