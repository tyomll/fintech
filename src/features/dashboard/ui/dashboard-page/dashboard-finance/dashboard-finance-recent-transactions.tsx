"use client"; 
import { DashboardFinanceTransactionItem } from "@/features/dashboard/ui/dashboard-page/dashboard-finance";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/shared/ui/@core/card";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";
import { TransactionType } from "@/features/dashboard/lib/types";
import { useTransactions } from "@/features/dashboard/model/api/queries/use-transactions";

const getIcon = (type: TransactionType) =>
  type === TransactionType.Income ? ArrowUpRight : ArrowDownRight;

const DashboardFinanceRecentTransactions = () => {
  const { data: transactions, isLoading, isError } = useTransactions();

  return (
    <Card className="bg-slate-900/50 backdrop-blur-sm border border-slate-800/50">
      <CardHeader>
        <CardTitle className="text-white">Recent Transactions</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {isLoading && <div className="text-slate-400">Loading...</div>}
          {isError && (
            <div className="text-red-500">Failed to load transactions.</div>
          )}
          {transactions && transactions.length === 0 && (
            <div className="text-slate-400">No transactions found.</div>
          )}
          {transactions &&
            transactions.map((transaction) => (
              <DashboardFinanceTransactionItem
                key={transaction.id}
                type={
                  transaction.type === TransactionType.Income
                    ? TransactionType.Income
                    : TransactionType.Expense
                }
                description={transaction.description}
                amount={`${
                  transaction.type === TransactionType.Income ? "+" : "-"
                }$${Number(transaction.amount).toLocaleString()}`}
                date={new Date(transaction.date).toLocaleDateString()}
                icon={getIcon(
                  transaction.type === TransactionType.Income
                    ? TransactionType.Income
                    : TransactionType.Expense
                )}
              />
            ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default DashboardFinanceRecentTransactions;
