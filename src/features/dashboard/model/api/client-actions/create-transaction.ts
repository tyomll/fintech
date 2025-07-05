import {
  CreateTransactionInput,
  Transaction,
} from "@/features/dashboard/lib/types";
import ClientService from "@/shared/services/client.service";
import { DashboardRoutes } from "@/features/dashboard/model/api/dashboard-routes";

export const createTransaction = async (
  data: CreateTransactionInput
): Promise<Transaction> => {
  const response = (await ClientService.post(
    DashboardRoutes.Transactions,
    data
  )) as {
    transaction: Transaction;
  };

  return response.transaction;
};
