import {
  TransactionType,
  AddTransactionFormData,
} from "@/features/dashboard/ui/dashboard-page/dashboard-finance/modals/types";
import { Input } from "@/shared/ui/@core/input";
import { Label } from "@/shared/ui/@core/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/shared/ui/@core/select";
import { Textarea } from "@/shared/ui/@core/textarea";
import { Calendar, DollarSign, Tag, FileText } from "lucide-react";

interface Props {
  formData: AddTransactionFormData;
  onInputChange: (field: keyof AddTransactionFormData, value: string) => void;
  categories: string[];
  activeTab: TransactionType;
  onSubmit: (e: React.FormEvent) => void;
}

const AddTransactionForm: React.FC<Props> = ({
  formData,
  onInputChange,
  categories,
  activeTab,
  onSubmit,
}) => (
  <form onSubmit={onSubmit} className="space-y-6">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="space-y-2">
        <Label htmlFor="amount" className="text-slate-300 font-medium">
          Amount
        </Label>
        <div className="relative">
          <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
          <Input
            id="amount"
            placeholder="0.00"
            value={formData.amount}
            onChange={(e) => onInputChange("amount", e.target.value)}
            className="pl-10 bg-slate-800/50 border-slate-700/50 text-white placeholder-slate-400 focus:border-blue-500/50 focus:ring-blue-500/20 rounded-xl h-12 !w-full"
            required
            aria-label="Amount"
          />
        </div>
      </div>
      <div className="space-y-2">
        <Label className="text-slate-300 font-medium">Category</Label>
        <div className="relative">
          <Tag className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400 z-10" />
          <Select
            value={formData.category}
            onValueChange={(value) => onInputChange("category", value)}
          >
            <SelectTrigger className="!h-12 w-full pl-10 bg-slate-800/50 border-slate-700/50 text-white focus:border-blue-500/50 rounded-xl">
              <SelectValue placeholder="Select category" />
            </SelectTrigger>
            <SelectContent className="bg-slate-900/95 backdrop-blur-xl border-slate-800/50">
              {categories.map((category) => (
                <SelectItem
                  key={category}
                  value={category}
                  className="text-white hover:bg-slate-800/50"
                >
                  {category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
    {/* Description and Date */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="space-y-2">
        <Label htmlFor="description" className="text-slate-300 font-medium">
          Description
        </Label>
        <Input
          id="description"
          placeholder={
            activeTab === TransactionType.Income
              ? "e.g., Monthly salary"
              : "e.g., Grocery shopping"
          }
          value={formData.description}
          onChange={(e) => onInputChange("description", e.target.value)}
          className="bg-slate-800/50 border-slate-700/50 text-white placeholder-slate-400 focus:border-blue-500/50 focus:ring-blue-500/20 rounded-xl h-12"
          required
          aria-label="Description"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="date" className="text-slate-300 font-medium">
          Date
        </Label>
        <div className="relative">
          <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
          <Input
            id="date"
            type="date"
            value={formData.date}
            onChange={(e) => onInputChange("date", e.target.value)}
            className="pl-10 bg-slate-800/50 border-slate-700/50 text-white focus:border-blue-500/50 focus:ring-blue-500/20 rounded-xl h-12"
            required
            aria-label="Date"
          />
        </div>
      </div>
    </div>
    {/* Notes */}
    <div className="space-y-2">
      <Label htmlFor="notes" className="text-slate-300 font-medium">
        Notes (Optional)
      </Label>
      <div className="relative">
        <FileText className="absolute left-3 top-3 h-5 w-5 text-slate-400" />
        <Textarea
          id="notes"
          placeholder="Add any additional notes..."
          value={formData.notes}
          onChange={(e) => onInputChange("notes", e.target.value)}
          rows={3}
          className="pl-10 bg-slate-800/50 border-slate-700/50 text-white placeholder-slate-400 focus:border-blue-500/50 focus:ring-blue-500/20 rounded-xl resize-none"
          aria-label="Notes"
        />
      </div>
    </div>
  </form>
);

export default AddTransactionForm;
