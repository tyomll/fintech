import { DashboardFinanceTransactionItem } from "@/features/dashboard/ui/dashboard-page/dashboard-finance";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/shared/@core/ui/card";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";
import { TransactionType } from "@/features/dashboard/lib/types";

const recentTransactions = [
  {
    type: TransactionType.Income,
    description: "Salary Deposit",
    amount: "+$5,600",
    date: "Today",
    icon: ArrowUpRight,
  },
  {
    type: TransactionType.Expense,
    description: "Rent Payment",
    amount: "-$1,200",
    date: "Yesterday",
    icon: ArrowDownRight,
  },
  {
    type: TransactionType.Expense,
    description: "Grocery Shopping",
    amount: "-$156",
    date: "2 days ago",
    icon: ArrowDownRight,
  },
  {
    type: TransactionType.Income,
    description: "Freelance Project",
    amount: "+$800",
    date: "3 days ago",
    icon: ArrowUpRight,
  },
];

const DashboardFinanceRecentTransactions = () => {
  return (
    <Card className="bg-slate-900/50 backdrop-blur-sm border border-slate-800/50">
      <CardHeader>
        <CardTitle className="text-white">Recent Transactions</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {recentTransactions.map((transaction, index) => (
            <DashboardFinanceTransactionItem
              key={index}
              type={transaction.type}
              description={transaction.description}
              amount={transaction.amount}
              date={transaction.date}
              icon={transaction.icon}
            />
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default DashboardFinanceRecentTransactions;
