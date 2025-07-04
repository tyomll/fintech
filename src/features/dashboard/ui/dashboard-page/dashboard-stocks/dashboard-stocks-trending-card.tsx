"use client";
import { Card, CardContent, CardHeader } from "@/shared/ui/@core/card";
import { TrendingUp, TrendingDown } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from "recharts";
import { StockTrend } from "@/features/landing/lib/types";

interface StockData {
  time: string;
  value: number;
}

interface Props {
  symbol: string;
  name: string;
  price: string;
  change: string;
  changeValue: string;
  trend: StockTrend;
  data: StockData[];
}

const DashboardStocksTrendingCard = ({
  symbol,
  name,
  price,
  change,
  changeValue,
  trend,
  data,
}: Props) => {
  return (
    <Card className="bg-slate-900/50 backdrop-blur-sm border border-slate-800/50 hover:border-slate-700/50 transition-all duration-300 hover:scale-105">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center">
              <span className="text-white font-bold text-sm">{symbol}</span>
            </div>
            <div>
              <h3 className="text-white font-semibold text-lg">{symbol}</h3>
              <p className="text-slate-400 text-sm">{name}</p>
            </div>
          </div>
          <div
            className={`flex items-center px-3 py-1 rounded-full text-sm font-medium ${
              trend === StockTrend.Up
                ? "bg-green-500/20 text-green-400 border border-green-500/30"
                : "bg-red-500/20 text-red-400 border border-red-500/30"
            }`}
          >
            {trend === StockTrend.Up ? (
              <TrendingUp className="h-4 w-4 mr-1" />
            ) : (
              <TrendingDown className="h-4 w-4 mr-1" />
            )}
            {change}
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex items-baseline space-x-2">
            <span className="text-3xl font-bold text-white">{price}</span>
            <span
              className={`text-sm font-medium ${
                trend === StockTrend.Up ? "text-green-400" : "text-red-400"
              }`}
            >
              {changeValue}
            </span>
          </div>
        </div>
      </CardHeader>

      <CardContent className="pt-0">
        <div className="h-24 -mx-6 -mb-6">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <XAxis dataKey="time" hide />
              <YAxis hide />
              <Line
                type="monotone"
                dataKey="value"
                stroke={trend === StockTrend.Up ? "#10b981" : "#ef4444"}
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default DashboardStocksTrendingCard;
