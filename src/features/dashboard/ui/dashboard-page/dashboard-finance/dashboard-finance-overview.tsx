"use client";

import { DollarSign, CreditCard, PiggyBank } from "lucide-react";
import { StockTrend } from "@/features/landing/lib/types";
import { DashboardFinanceOverviewCard } from "@/features/dashboard/ui/dashboard-page/dashboard-finance";

interface Props {
  monthlyIncome: number;
  monthlyExpenses: number;
  netIncome: number;
}

const DashboardFinanceOverview = ({
  monthlyIncome,
  monthlyExpenses,
  netIncome,
}: Props) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <DashboardFinanceOverviewCard
        title="Monthly Income"
        value={`$${monthlyIncome.toLocaleString()}`}
        change="+5.7%"
        trend={StockTrend.Up}
        icon={DollarSign}
        iconBgColor="bg-gradient-to-r from-green-600/20 to-emerald-600/20"
        iconColor="text-green-400"
        changeColor="text-green-400"
      />

      <DashboardFinanceOverviewCard
        title="Monthly Expenses"
        value={`$${monthlyExpenses.toLocaleString()}`}
        change="+2.1%"
        trend={StockTrend.Down}
        icon={CreditCard}
        iconBgColor="bg-gradient-to-r from-red-600/20 to-pink-600/20"
        iconColor="text-red-400"
        changeColor="text-red-400"
      />

      <DashboardFinanceOverviewCard
        title="Net Income"
        value={`$${netIncome.toLocaleString()}`}
        change="+12.3%"
        trend={StockTrend.Up}
        icon={PiggyBank}
        iconBgColor="bg-gradient-to-r from-blue-600/20 to-purple-600/20"
        iconColor="text-blue-400"
        changeColor="text-blue-400"
      />
    </div>
  );
};

export default DashboardFinanceOverview;
