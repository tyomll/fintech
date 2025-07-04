import {
  TransactionType,
  AddTransactionFormData,
} from "@/features/dashboard/ui/dashboard-page/dashboard-finance/modals/types";

interface Props {
  formData: AddTransactionFormData;
  activeTab: TransactionType;
}

const AddTransactionSummary: React.FC<Props> = ({ formData, activeTab }) => (
  <div className="bg-slate-800/30 rounded-xl p-4 border border-slate-700/30 mt-4">
    <h4 className="text-white font-medium mb-3">Transaction Summary</h4>
    <div className="space-y-2">
      <div className="flex justify-between">
        <span className="text-slate-400">Type:</span>
        <span
          className={`font-medium ${
            activeTab === TransactionType.Income
              ? "text-green-400"
              : "text-red-400"
          }`}
        >
          {activeTab === TransactionType.Income ? "Income" : "Expense"}
        </span>
      </div>
      <div className="flex justify-between">
        <span className="text-slate-400">Amount:</span>
        <span className="text-white font-medium">
          {formData.amount
            ? `$${Number.parseFloat(formData.amount).toFixed(2)}`
            : "$0.00"}
        </span>
      </div>
      <div className="flex justify-between">
        <span className="text-slate-400">Category:</span>
        <span className="text-white">
          {formData.category || "Not selected"}
        </span>
      </div>
    </div>
  </div>
);

export default AddTransactionSummary;
