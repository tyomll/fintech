import { getStock } from "@/features/dashboard/model/api/client-actions/get-stock";
import { DashboardQueryKeys } from "@/features/dashboard/model/api/query-keys";
import { useQuery } from "@tanstack/react-query";

const useStock = (symbol: string, interval: string, range: string) => {
  return useQuery({
    queryKey: [DashboardQueryKeys.Stock, symbol, interval, range],
    queryFn: () => getStock(symbol, interval, range),
  });
};

export default useStock;
