import { Button } from "@/shared/ui/@core/button";
import { ArrowLeft, Star, Plus } from "lucide-react";
import { useRouter } from "next/navigation";
import { FC } from "react";
import { DetaledStock } from "@/shared/lib/types";

interface Props {
  stock: DetaledStock;
  isInWatchlist: boolean;
  onToggleWatchlist: () => void;
}

const DashboardStockDetailedHeader: FC<Props> = ({
  stock,
  isInWatchlist,
  onToggleWatchlist,
}) => {
  const router = useRouter();

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => router.back()}
          className="text-slate-400 hover:text-white"
          aria-label="Go back to previous page"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back
        </Button>
        <div className="flex items-center space-x-4">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center">
            <span className="text-white font-bold text-lg">{stock.symbol}</span>
          </div>
          <div>
            <h1 className="text-3xl font-bold text-white">{stock.name}</h1>
            <p className="text-slate-400">{stock.symbol}</p>
          </div>
        </div>
      </div>
      <div className="flex items-center space-x-3">
        <Button
          variant="outline"
          size="sm"
          onClick={onToggleWatchlist}
          className={`border-slate-700/50 hover:bg-slate-800/50 ${
            isInWatchlist
              ? "text-yellow-400 border-yellow-500/30"
              : "text-slate-300"
          }`}
          aria-label={
            isInWatchlist ? "Remove from watchlist" : "Add to watchlist"
          }
        >
          <Star
            className={`h-4 w-4 mr-2 ${isInWatchlist ? "fill-current" : ""}`}
          />
          {isInWatchlist ? "In Watchlist" : "Add to Watchlist"}
        </Button>
        <Button
          className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
          aria-label="Buy stock"
        >
          <Plus className="h-4 w-4 mr-2" />
          Buy Stock
        </Button>
      </div>
    </div>
  );
};

export default DashboardStockDetailedHeader;
