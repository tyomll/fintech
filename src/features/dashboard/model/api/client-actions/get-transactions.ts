import { TransactionList } from "@/features/dashboard/lib/types";
import { DashboardRoutes } from "@/features/dashboard/model/api/dashboard-routes";
import ClientService from "@/shared/services/client.service";

export const getTransactions = async (): Promise<TransactionList> => {
  const response = (await ClientService.get(DashboardRoutes.Transactions)) as {
    transactions: TransactionList;
  };

  return response.transactions;
};
