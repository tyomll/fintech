import { AddStockBadge } from "@/features/dashboard/ui/dashboard-page/dashboard-stocks/modals";

interface Props {
  selectedStocks: string[];
  onRemove: (symbol: string) => void;
}

const AddStockSelectedList: React.FC<Props> = ({
  selectedStocks,
  onRemove,
}) => {
  if (selectedStocks.length === 0) return null;
  return (
    <div>
      <span className="text-slate-300 font-medium">
        Selected Stocks ({selectedStocks.length})
      </span>
      <div className="flex flex-wrap gap-2 mt-2">
        {selectedStocks.map((symbol) => (
          <AddStockBadge
            key={symbol}
            color="bg-blue-500/20 text-blue-400 border border-blue-500/30"
            label={`${symbol} ×`}
            onClick={() => onRemove(symbol)}
          />
        ))}
      </div>
    </div>
  );
};

export default AddStockSelectedList;
