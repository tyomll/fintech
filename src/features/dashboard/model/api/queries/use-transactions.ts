import { useQuery } from "@tanstack/react-query";
import { getTransactions } from "../client-actions/get-transactions";
import { DashboardQueryKeys } from "../query-keys";

export const useTransactions = () => {
  return useQuery({
    queryKey: [DashboardQueryKeys.Transactions],
    queryFn: getTransactions,
  });
};
