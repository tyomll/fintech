import { DashboardFinanceInvestmentPlan } from "@/features/dashboard/ui/dashboard-page/dashboard-finance";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/shared/@core/ui/card";
import { Button } from "@/shared/@core/ui/button";
import { Target } from "lucide-react";

const investmentPlans = [
  {
    name: "Emergency Fund",
    target: 10000,
    current: 7500,
    progress: 75,
    color: "blue",
  },
  {
    name: "Retirement 401k",
    target: 50000,
    current: 32000,
    progress: 64,
    color: "purple",
  },
  {
    name: "House Down Payment",
    target: 25000,
    current: 15000,
    progress: 60,
    color: "green",
  },
];

const DashboardFinanceInvestmentPlans = () => {
  return (
    <Card className="bg-slate-900/50 backdrop-blur-sm border border-slate-800/50">
      <CardHeader>
        <CardTitle className="text-white flex items-center justify-between">
          <span>Investment Plans</span>
          <Button
            size="sm"
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
          >
            <Target className="h-4 w-4 mr-2" />
            New Goal
          </Button>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {investmentPlans.map((plan, index) => (
            <DashboardFinanceInvestmentPlan
              key={index}
              name={plan.name}
              target={plan.target}
              current={plan.current}
              progress={plan.progress}
            />
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default DashboardFinanceInvestmentPlans;
