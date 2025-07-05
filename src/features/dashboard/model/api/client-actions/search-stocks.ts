import ClientService from "@/shared/services/client.service";
import { DashboardRoutes } from "@/features/dashboard/model/api/dashboard-routes";
import { SearchStock, Stock } from "@/shared/lib/types";

export const searchStocks = async (query: string) => {
  const response = (await ClientService.get(
    `${DashboardRoutes.SearchStocks}?query=${query}`
  )) as {
    data: { quotes: SearchStock[] };
  };

  return response;
};
