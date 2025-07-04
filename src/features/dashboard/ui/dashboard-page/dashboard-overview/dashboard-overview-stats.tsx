"use client";
import { DashboardOverviewStatCard } from "@/features/dashboard/ui/dashboard-page/dashboard-overview";
import { StockTrend } from "@/features/landing/lib/types";
import { DollarSign, TrendingUp, PieChart, BarChart3 } from "lucide-react";

const quickStats = [
  {
    title: "Total Portfolio",
    value: "$18,450",
    change: "+12.5%",
    trend: StockTrend.Up,
    icon: DollarSign,
  },
  {
    title: "Today's Gain",
    value: "+$245",
    change: "+1.4%",
    trend: StockTrend.Up,
    icon: TrendingUp,
  },
  {
    title: "Total Investments",
    value: "$15,200",
    change: "+8.2%",
    trend: StockTrend.Up,
    icon: PieChart,
  },
  {
    title: "Available Cash",
    value: "$3,250",
    change: "-2.1%",
    trend: StockTrend.Down,
    icon: BarChart3,
  },
];

const DashboardOverviewStats = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {quickStats.map((stat, index) => (
        <DashboardOverviewStatCard
          key={index}
          title={stat.title}
          value={stat.value}
          change={stat.change}
          trend={stat.trend}
          icon={stat.icon}
        />
      ))}
    </div>
  );
};

export default DashboardOverviewStats;
