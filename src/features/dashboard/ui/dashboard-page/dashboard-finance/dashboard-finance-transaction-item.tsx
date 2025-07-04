import { TransactionType } from "@/features/dashboard/lib/types";
import type { LucideIcon } from "lucide-react";

interface Props {
  type: TransactionType;
  description: string;
  amount: string;
  date: string;
  icon: LucideIcon;
}

const DashboardFinanceTransactionItem = ({
  type,
  description,
  amount,
  date,
  icon: Icon,
}: Props) => {
  return (
    <div className="flex items-center justify-between p-4 bg-slate-800/30 rounded-xl">
      <div className="flex items-center space-x-4">
        <div
          className={`p-2 rounded-lg ${
            type === TransactionType.Income
              ? "bg-green-500/20"
              : "bg-red-500/20"
          }`}
        >
          <Icon
            className={`h-4 w-4 ${
              type === TransactionType.Income
                ? "text-green-400"
                : "text-red-400"
            }`}
          />
        </div>
        <div>
          <p className="text-white font-medium">{description}</p>
          <p className="text-slate-400 text-sm">{date}</p>
        </div>
      </div>
      <span
        className={`font-medium ${
          type === TransactionType.Income ? "text-green-400" : "text-red-400"
        }`}
      >
        {amount}
      </span>
    </div>
  );
};

export default DashboardFinanceTransactionItem;
