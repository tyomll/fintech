import { getStockPrediction } from "@/features/dashboard/model/api/client-actions/get-stock-prediction";
import { DashboardQueryKeys } from "@/features/dashboard/model/api/query-keys";
import { useQuery } from "@tanstack/react-query";

const useStockPrediction = (symbol: string) => {
  return useQuery({
    queryKey: [DashboardQueryKeys.StockPrediction, symbol],
    queryFn: () => getStockPrediction(symbol),
  });
};

export default useStockPrediction;
