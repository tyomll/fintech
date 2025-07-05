import { searchStocks } from "@/features/dashboard/model/api/client-actions/search-stocks";
import { DashboardQueryKeys } from "@/features/dashboard/model/api/query-keys";
import { useQuery } from "@tanstack/react-query";

const useSearchStocks = (query: string) => {
  return useQuery({
    queryKey: [DashboardQueryKeys.SearchStocks, query],
    queryFn: () => searchStocks(query),
  });
};

export default useSearchStocks;
