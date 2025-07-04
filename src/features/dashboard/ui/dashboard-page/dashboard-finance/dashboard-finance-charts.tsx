import {
  DashboardFinanceExpenseChart,
  DashboardFinanceIncomeChart,
} from "@/features/dashboard/ui/dashboard-page/dashboard-finance";

const DashboardFinanceCharts = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <DashboardFinanceExpenseChart />
      <DashboardFinanceIncomeChart />
    </div>
  );
};

export default DashboardFinanceCharts;
