import AddStockListItem from "@/features/dashboard/ui/dashboard-page/dashboard-stocks/modals/add-stock-list-item";
import { Stock } from "@/features/dashboard/lib/types";

interface Props {
  stocks: Stock[];
  selectedStocks: string[];
  onAdd: (symbol: string) => void;
  onRemove: (symbol: string) => void;
}

const AddStockList: React.FC<Props> = ({
  stocks,
  selectedStocks,
  onAdd,
  onRemove,
}) => (
  <div className="space-y-2">
    <span className="text-slate-300 font-medium">Popular Stocks</span>
    <div className="max-h-64 overflow-y-auto space-y-2 pr-2">
      {stocks.map((stock) => (
        <AddStockListItem
          key={stock.symbol}
          stock={stock}
          selected={selectedStocks.includes(stock.symbol)}
          onAdd={onAdd}
          onRemove={onRemove}
        />
      ))}
    </div>
  </div>
);

export default AddStockList;
