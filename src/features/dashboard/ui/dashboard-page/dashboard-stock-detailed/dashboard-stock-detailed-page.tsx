"use client";
import { FC, useState } from "react";
import useStock from "@/features/dashboard/model/api/queries/use-stock";
import DashboardStockDetailedHeader from "./dashboard-stock-detailed-header";
import DashboardStockPriceOverview from "./dashboard-stock-price-overview";
import DashboardStockChart from "./dashboard-stock-chart";
import DashboardStockAIPrediction from "./dashboard-stock-ai-prediction";
import { useDashboardStore } from "@/features/dashboard/model/store/use-dashboard-store";
import { Skeleton } from "@/shared/ui/@core/skeleton";

interface Props {
  symbol: string;
}

const DashboardStockDetailedPage: FC<Props> = ({ symbol }) => {
  const { stockChartInterval, stockChartRange } = useDashboardStore();
  const { data, isLoading } = useStock(
    symbol,
    stockChartInterval,
    stockChartRange
  );
  const stock = data?.data;
  const [isInWatchlist, setIsInWatchlist] = useState(false);

  const handleToggleWatchlist = () => {
    setIsInWatchlist(!isInWatchlist);
  };

  if (isLoading) {
    return <DashboardStockDetailedPageSkeleton />;
  }

  if (!stock) {
    return <div>Stock not found</div>;
  }

  return (
    <div className="space-y-8">
      <DashboardStockDetailedHeader
        stock={stock}
        isInWatchlist={isInWatchlist}
        onToggleWatchlist={handleToggleWatchlist}
      />
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <DashboardStockPriceOverview stock={stock} />
        <DashboardStockChart stock={stock} />
      </div>

      <DashboardStockAIPrediction symbol={symbol} />
    </div>
  );
};

const DashboardStockDetailedPageSkeleton = () => {
  return (
    <div className="space-y-8">
      <Skeleton className="h-16 w-full" />
      <Skeleton className="h-[440px] w-full" />
    </div>
  );
};

export default DashboardStockDetailedPage;
