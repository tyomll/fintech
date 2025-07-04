import { TransactionType } from "@/features/dashboard/ui/dashboard-page/dashboard-finance/modals/types";
import { Button } from "@/shared/ui/@core/button";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";

interface Props {
  activeTab: TransactionType;
  onTabChange: (tab: TransactionType) => void;
}

const AddTransactionTabs: React.FC<Props> = ({ activeTab, onTabChange }) => (
  <div className="grid w-full grid-cols-2 bg-slate-800/50 rounded-xl p-1 mb-6">
    <Button
      type="button"
      className={`flex items-center justify-center py-2 rounded-lg transition-all duration-300 text-base font-medium focus:outline-none focus:ring-2 focus:ring-blue-400 ${
        activeTab === TransactionType.Expense
          ? "bg-gradient-to-r from-red-600 to-pink-600 text-white"
          : "text-slate-300"
      }`}
      aria-label="Expense Tab"
      tabIndex={0}
      onClick={() => onTabChange(TransactionType.Expense)}
    >
      <ArrowDownRight className="mr-2 h-4 w-4" />
      Expense
    </Button>
    <Button
      type="button"
      className={`flex items-center justify-center py-2 rounded-lg transition-all duration-300 text-base font-medium focus:outline-none focus:ring-2 focus:ring-blue-400 ${
        activeTab === TransactionType.Income
          ? "bg-gradient-to-r from-green-600 to-emerald-600 text-white"
          : "text-slate-300"
      }`}
      aria-label="Income Tab"
      tabIndex={0}
      onClick={() => onTabChange(TransactionType.Income)}
    >
      <ArrowUpRight className="mr-2 h-4 w-4" />
      Income
    </Button>
  </div>
);

export default AddTransactionTabs;
