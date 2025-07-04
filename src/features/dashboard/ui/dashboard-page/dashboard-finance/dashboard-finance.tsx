import DashboardFinanceHeader from "./dashboard-finance-header";
import DashboardFinanceOverview from "./dashboard-finance-overview";
import DashboardFinanceCharts from "./dashboard-finance-charts";
import DashboardFinanceInvestmentPlans from "./dashboard-finance-investment-plans";
import DashboardFinanceRecentTransactions from "./dashboard-finance-recent-transactions";

const monthlyData = [
  { month: "Jan", income: 5000, expenses: 3200 },
  { month: "Feb", income: 5200, expenses: 3100 },
  { month: "Mar", income: 4800, expenses: 3400 },
  { month: "Apr", income: 5500, expenses: 3300 },
  { month: "May", income: 5300, expenses: 3150 },
  { month: "Jun", income: 5600, expenses: 3250 },
];

const DashboardFinancePage = () => {
  const totalIncome = monthlyData[monthlyData.length - 1].income;
  const totalExpenses = monthlyData[monthlyData.length - 1].expenses;
  const netIncome = totalIncome - totalExpenses;

  return (
    <div className="space-y-8">
      <DashboardFinanceHeader />
      <DashboardFinanceOverview
        monthlyIncome={totalIncome}
        monthlyExpenses={totalExpenses}
        netIncome={netIncome}
      />
      <DashboardFinanceCharts />
      <DashboardFinanceInvestmentPlans />
      <DashboardFinanceRecentTransactions />
    </div>
  );
};

export default DashboardFinancePage;
