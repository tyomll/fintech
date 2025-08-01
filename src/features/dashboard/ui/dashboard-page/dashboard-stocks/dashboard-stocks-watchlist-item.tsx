import { Button } from "@/shared/ui/@core/button";
import { Star } from "lucide-react";
import Link from "next/link";

interface Props {
  symbol: string;
  name: string;
  price: string;
  change: string;
}

const DashboardStocksWatchlistItem = ({
  symbol,
  name,
  price,
  change,
}: Props) => {
  return (
    <Link
      href={`/dashboard/stocks/${symbol}`}
      className="flex items-center justify-between p-4 bg-slate-800/30 rounded-xl hover:bg-slate-800/50 transition-colors"
    >
      <div className="flex items-center space-x-4">
        <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center">
          <span className="text-white font-bold text-sm">{symbol}</span>
        </div>
        <div>
          <p className="text-white font-medium">{symbol}</p>
          <p className="text-slate-400 text-sm">{name}</p>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <div className="text-right">
          <p className="text-white font-medium">{price}</p>
          <p className="text-green-400 text-sm">{change}</p>
        </div>
        <Button
          variant="ghost"
          size="sm"
          className="text-slate-400 hover:text-yellow-400"
        >
          <Star className="h-4 w-4" />
        </Button>
      </div>
    </Link>
  );
};

export default DashboardStocksWatchlistItem;
