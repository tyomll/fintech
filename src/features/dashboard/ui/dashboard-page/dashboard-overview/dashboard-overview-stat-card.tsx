"use client";

import { StockTrend } from "@/features/landing/lib/types";
import { Card, CardContent } from "@/shared/ui/@core/card";
import { TrendingUp, TrendingDown } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Props {
  title: string;
  value: string;
  change: string;
  trend: StockTrend;
  icon: LucideIcon;
}

const DashboardOverviewStatCard = ({
  title,
  value,
  change,
  trend,
  icon: Icon,
}: Props) => {
  return (
    <Card className="bg-slate-900/50 backdrop-blur-sm border border-slate-800/50 hover:border-slate-700/50 transition-all duration-300">
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-slate-400 text-sm font-medium">{title}</p>
            <p className="text-2xl font-bold text-white mt-1">{value}</p>
            <div className="flex items-center mt-2">
              {trend === StockTrend.Up ? (
                <TrendingUp className="h-4 w-4 text-green-400 mr-1" />
              ) : (
                <TrendingDown className="h-4 w-4 text-red-400 mr-1" />
              )}
              <span
                className={`text-sm font-medium ${
                  trend === StockTrend.Up ? "text-green-400" : "text-red-400"
                }`}
              >
                {change}
              </span>
            </div>
          </div>
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 p-3 rounded-xl">
            <Icon className="h-6 w-6 text-blue-400" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default DashboardOverviewStatCard;
