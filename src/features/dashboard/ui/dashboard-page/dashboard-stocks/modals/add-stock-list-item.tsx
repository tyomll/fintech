import { Stock, StockTrend } from "./types";
import { Button } from "@/shared/ui/@core/button";
import { Plus, TrendingUp, TrendingDown } from "lucide-react";

interface Props {
  stock: Stock;
  selected: boolean;
  onAdd: (symbol: string) => void;
  onRemove: (symbol: string) => void;
}

const AddStockListItem: React.FC<Props> = ({
  stock,
  selected,
  onAdd,
  onRemove,
}) => (
  <div className="flex items-center justify-between p-4 bg-slate-800/30 rounded-xl hover:bg-slate-800/50 transition-colors">
    <div className="flex items-center space-x-4">
      <div className="min-w-10 h-10 px-2 py-2 rounded-lg bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center">
        <span className="text-white font-bold text-sm">{stock.symbol}</span>
      </div>
      <div>
        <p className="text-white font-medium">{stock.symbol}</p>
        <p className="text-slate-400 text-sm">{stock.name}</p>
      </div>
    </div>
    <div className="flex items-center space-x-4">
      <div className="text-right">
        <p className="text-white font-medium">{stock.price}</p>
        <div className="flex items-center">
          {stock.trend === StockTrend.Up ? (
            <TrendingUp className="h-3 w-3 text-green-400 mr-1" />
          ) : (
            <TrendingDown className="h-3 w-3 text-red-400 mr-1" />
          )}
          <span
            className={`text-sm ${
              stock.trend === StockTrend.Up ? "text-green-400" : "text-red-400"
            }`}
          >
            {stock.change}
          </span>
        </div>
      </div>
      <Button
        size="sm"
        variant={selected ? "secondary" : "outline"}
        onClick={() =>
          selected ? onRemove(stock.symbol) : onAdd(stock.symbol)
        }
        className={`rounded-lg ${
          selected
            ? "bg-blue-500/20 text-blue-400 border-blue-500/30"
            : "border-slate-700/50 text-slate-300 hover:bg-slate-800/50"
        }`}
        aria-label={selected ? `Remove ${stock.symbol}` : `Add ${stock.symbol}`}
      >
        {selected ? "Added" : <Plus className="h-4 w-4" />}
      </Button>
    </div>
  </div>
);

export default AddStockListItem;
