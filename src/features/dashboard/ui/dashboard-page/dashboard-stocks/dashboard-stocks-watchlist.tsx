"use client";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/shared/ui/@core/card";
import { Button } from "@/shared/ui/@core/button";
import { Plus } from "lucide-react";
import { DashboardStocksWatchlistItem } from "@/features/dashboard/ui/dashboard-page/dashboard-stocks";
import { AddStockModal } from "@/features/dashboard/ui/dashboard-page/dashboard-stocks/modals";
import { useState } from "react";

const watchlist = [
  { symbol: "AAPL", name: "Apple Inc.", price: "$175.43", change: "+2.34%" },
  { symbol: "TSLA", name: "Tesla Inc.", price: "$248.92", change: "+5.67%" },
  {
    symbol: "MSFT",
    name: "Microsoft Corp.",
    price: "$378.85",
    change: "+1.23%",
  },
];

const DashboardStocksWatchlist = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <AddStockModal open={open} onOpenChange={setOpen} />
      <Card className="bg-slate-900/50 backdrop-blur-sm border border-slate-800/50">
        <CardHeader>
          <CardTitle className="text-white flex items-center justify-between">
            <span>My Watchlist</span>
            <Button
              size="sm"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              onClick={() => setOpen(true)}
            >
              <Plus className="h-4 w-4 mr-2" />
              Add Stock
            </Button>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {watchlist.map((stock, index) => (
              <DashboardStocksWatchlistItem
                key={index}
                symbol={stock.symbol}
                name={stock.name}
                price={stock.price}
                change={stock.change}
              />
            ))}
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default DashboardStocksWatchlist;
