"use client";
import useTrendingStocks from "@/features/dashboard/model/api/queries/use-trending-stocks";
import { DashboardStocksTrendingCard } from "@/features/dashboard/ui/dashboard-page/dashboard-stocks";
import { Skeleton } from "@/shared/ui/@core/skeleton";

const StockCardSkeleton = () => {
  return Array.from({ length: 3 }).map((_, index) => (
    <Skeleton key={index} className="w-[350px] h-[300px]" />
  ));
};

const DashboardStocksTrending = () => {
  const { data, isLoading } = useTrendingStocks();
  const stocks = data?.results;

  return (
    <div>
      <h2 className="text-2xl font-bold text-white mb-6">Trending Stocks</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {isLoading ? (
          <StockCardSkeleton />
        ) : (
          stocks?.map((stock) => (
            <DashboardStocksTrendingCard
              key={stock.symbol}
              symbol={stock.symbol}
              name={stock.name}
              price={stock.price}
              change={stock.change}
              changeValue={stock.changeValue}
              trend={stock.trend}
              data={stock.data}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default DashboardStocksTrending;
