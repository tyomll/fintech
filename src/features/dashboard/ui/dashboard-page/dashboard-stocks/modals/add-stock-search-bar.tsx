import { Input } from "@/shared/ui/@core/input";
import { Label } from "@/shared/ui/@core/label";
import { Search } from "lucide-react";

interface Props {
  searchQuery: string;
  onSearchChange: (value: string) => void;
}

const AddStockSearchBar: React.FC<Props> = ({
  searchQuery,
  onSearchChange,
}) => (
  <div className="space-y-2">
    <Label className="text-slate-300 font-medium">Search Stocks</Label>
    <div className="relative">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
      <Input
        placeholder="Search by symbol or company name..."
        value={searchQuery}
        onChange={(e) => onSearchChange(e.target.value)}
        className="pl-10 bg-slate-800/50 border-slate-700/50 text-white placeholder-slate-400 focus:border-blue-500/50 focus:ring-blue-500/20 rounded-xl h-12"
        aria-label="Search Stocks"
      />
    </div>
  </div>
);

export default AddStockSearchBar;
