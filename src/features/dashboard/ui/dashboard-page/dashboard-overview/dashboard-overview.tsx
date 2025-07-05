"use client";

import {
  DashboardOverviewPortfolioChart,
  DashboardOverviewRecentActivity,
  DashboardOverviewStats,
  DashboardOverviewWelcome,
} from "@/features/dashboard/ui/dashboard-page/dashboard-overview";

const DashboardOverview = () => {
  return (
    <div className="space-y-8">
      <DashboardOverviewWelcome userName="Artyom Hovsepyan" />
      <DashboardOverviewStats />
      <DashboardOverviewPortfolioChart />
      <DashboardOverviewRecentActivity />
    </div>
  );
};

export default DashboardOverview;
