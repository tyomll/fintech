import useSearchStocks from "@/features/dashboard/model/api/queries/use-search-stocks";
import { Card, CardContent } from "@/shared/ui/@core/card";
import { Input } from "@/shared/ui/@core/input";
import { Search } from "lucide-react";
import DashboardStocksSearchResults from "./dashboard-stocks-search-results";

interface Props {
  searchQuery: string;
  onSearchChange: (value: string) => void;
  placeholder?: string;
}

const DashboardStocksSearch = ({
  searchQuery,
  onSearchChange,
  placeholder = "Search stocks by symbol or company name...",
}: Props) => {
  const { data } = useSearchStocks(searchQuery);
  const stocks = data?.data?.quotes;

  return (
    <Card className="bg-slate-900/50 backdrop-blur-sm border border-slate-800/50">
      <CardContent className="p-6">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
          <Input
            placeholder={placeholder}
            value={searchQuery}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              onSearchChange(e.target.value);
            }}
            className="pl-12 bg-slate-800/50 border-slate-700/50 text-white placeholder-slate-400 focus:border-blue-500/50 focus:ring-blue-500/20 rounded-xl h-12"
          />
        </div>
      </CardContent>
      {searchQuery && (
        <DashboardStocksSearchResults
          searchResults={stocks ?? []}
          clearSearch={() => onSearchChange("")}
        />
      )}
    </Card>
  );
};

export default DashboardStocksSearch;
