import { TransactionType } from "@/features/dashboard/ui/dashboard-page/dashboard-finance/modals/types";
import { Button } from "@/shared/ui/@core/button";

interface Props {
  onCancel: () => void;
  activeTab: TransactionType;
  disabled: boolean;
}

const AddTransactionActions: React.FC<Props> = ({
  onCancel,
  activeTab,
  disabled,
}) => (
  <div className="flex gap-4 pt-4">
    <Button
      type="button"
      variant="outline"
      onClick={onCancel}
      className="flex-1 border-slate-700/50 text-slate-300 hover:bg-slate-800/50 hover:border-slate-600/50 rounded-xl py-3"
      aria-label="Cancel"
    >
      Cancel
    </Button>
    <Button
      type="submit"
      disabled={disabled}
      className={`flex-1 text-white rounded-xl py-3 font-semibold ${
        activeTab === TransactionType.Income
          ? "bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700"
          : "bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700"
      }`}
      aria-label={`Add ${
        activeTab === TransactionType.Income ? "Income" : "Expense"
      }`}
    >
      Add {activeTab === TransactionType.Income ? "Income" : "Expense"}
    </Button>
  </div>
);

export default AddTransactionActions;
