import { getTrendingStocks } from "@/features/dashboard/model/api/client-actions/get-trending-stocks";
import { DashboardQueryKeys } from "@/features/dashboard/model/api/query-keys";
import { useQuery } from "@tanstack/react-query";

const useTrendingStocks = () => {
  return useQuery({
    queryKey: [DashboardQueryKeys.TrendingStocks],
    queryFn: getTrendingStocks,
  });
};

export default useTrendingStocks;
