import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createTransaction } from "../client-actions/create-transaction";
import { DashboardQueryKeys } from "../query-keys";

export const useCreateTransaction = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createTransaction,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [DashboardQueryKeys.Transactions],
      });
    },
  });
};
