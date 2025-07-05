import {
  InvestmentType,
  RiskLevel,
  NewInvestmentFormData,
} from "@/features/dashboard/lib/types";
import { Input } from "@/shared/ui/@core/input";
import { Label } from "@/shared/ui/@core/label";
import { Textarea } from "@/shared/ui/@core/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/shared/ui/@core/select";
import { DollarSign, Target, Calendar } from "lucide-react";

interface Props {
  formData: NewInvestmentFormData;
  onInputChange: (field: keyof NewInvestmentFormData, value: string) => void;
  investmentTypes: {
    value: InvestmentType;
    label: string;
    icon: React.ElementType;
  }[];
  riskLevels: { value: RiskLevel; label: string; color: string }[];
  onSubmit: (e: React.FormEvent) => void;
}

const NewInvestmentForm: React.FC<Props> = ({
  formData,
  onInputChange,
  investmentTypes,
  riskLevels,
  onSubmit,
}) => (
  <form onSubmit={onSubmit} className="space-y-6 mt-6">
    {/* Investment Name */}
    <div className="space-y-2">
      <Label htmlFor="name" className="text-slate-300 font-medium">
        Investment Name
      </Label>
      <Input
        id="name"
        placeholder="e.g., Tech Growth Portfolio"
        value={formData.name}
        onChange={(e) => onInputChange("name", e.target.value)}
        className="bg-slate-800/50 border-slate-700/50 text-white placeholder-slate-400 focus:border-blue-500/50 focus:ring-blue-500/20 rounded-xl h-12"
        required
      />
    </div>
    {/* Investment Type and Risk Level */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="space-y-2">
        <Label className="text-slate-300 font-medium">Investment Type</Label>
        <Select
          value={formData.type}
          onValueChange={(value) => onInputChange("type", value)}
        >
          <SelectTrigger className="w-full bg-slate-800/50 border-slate-700/50 text-white focus:border-blue-500/50 rounded-xl h-12">
            <SelectValue placeholder="Select investment type" />
          </SelectTrigger>
          <SelectContent className="bg-slate-900/95 backdrop-blur-xl border-slate-800/50">
            {investmentTypes.map((type) => (
              <SelectItem
                key={type.value}
                value={type.value}
                className="text-white hover:bg-slate-800/50"
              >
                <div className="flex items-center">
                  <type.icon className="mr-2 h-4 w-4 text-blue-400" />
                  {type.label}
                </div>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="space-y-2">
        <Label className="text-slate-300 font-medium">Risk Level</Label>
        <Select
          value={formData.riskLevel}
          onValueChange={(value) => onInputChange("riskLevel", value)}
        >
          <SelectTrigger className="w-full bg-slate-800/50 border-slate-700/50 text-white focus:border-blue-500/50 rounded-xl h-12">
            <SelectValue placeholder="Select risk level" />
          </SelectTrigger>
          <SelectContent className="bg-slate-900/95 backdrop-blur-xl border-slate-800/50">
            {riskLevels.map((risk) => (
              <SelectItem
                key={risk.value}
                value={risk.value}
                className="text-white hover:bg-slate-800/50"
              >
                <span className={risk.color}>{risk.label}</span>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
    {/* Amount and Target */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="space-y-2">
        <Label htmlFor="amount" className="text-slate-300 font-medium">
          Initial Investment
        </Label>
        <div className="relative">
          <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
          <Input
            id="amount"
            placeholder="5000"
            value={formData.amount}
            onChange={(e) => onInputChange("amount", e.target.value)}
            className="pl-10 bg-slate-800/50 border-slate-700/50 text-white placeholder-slate-400 focus:border-blue-500/50 focus:ring-blue-500/20 rounded-xl h-12"
            required
          />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="targetAmount" className="text-slate-300 font-medium">
          Target Amount
        </Label>
        <div className="relative">
          <Target className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
          <Input
            id="targetAmount"
            placeholder="25000"
            value={formData.targetAmount}
            onChange={(e) => onInputChange("targetAmount", e.target.value)}
            className="pl-10 bg-slate-800/50 border-slate-700/50 text-white placeholder-slate-400 focus:border-blue-500/50 focus:ring-blue-500/20 rounded-xl h-12"
            required
          />
        </div>
      </div>
    </div>
    {/* Timeframe */}
    <div className="space-y-2">
      <Label htmlFor="timeframe" className="text-slate-300 font-medium">
        Investment Timeframe
      </Label>
      <div className="relative">
        <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
        <Input
          id="timeframe"
          placeholder="e.g., 5 years, 24 months"
          value={formData.timeframe}
          onChange={(e) => onInputChange("timeframe", e.target.value)}
          className="pl-10 bg-slate-800/50 border-slate-700/50 text-white placeholder-slate-400 focus:border-blue-500/50 focus:ring-blue-500/20 rounded-xl h-12"
          required
        />
      </div>
    </div>
    {/* Description */}
    <div className="space-y-2">
      <Label htmlFor="description" className="text-slate-300 font-medium">
        Investment Strategy (Optional)
      </Label>
      <Textarea
        id="description"
        placeholder="Describe your investment goals and strategy..."
        value={formData.description}
        onChange={(e) => onInputChange("description", e.target.value)}
        rows={3}
        className="bg-slate-800/50 border-slate-700/50 text-white placeholder-slate-400 focus:border-blue-500/50 focus:ring-blue-500/20 rounded-xl resize-none"
      />
    </div>
  </form>
);

export default NewInvestmentForm;
