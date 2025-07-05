import ClientService from "@/shared/services/client.service";
import { DashboardRoutes } from "@/features/dashboard/model/api/dashboard-routes";
import { Stock } from "@/shared/lib/types";

export const getTrendingStocks = async () => {
  const response = (await ClientService.get(
    DashboardRoutes.TrendingStocks
  )) as {
    results: Stock[];
  };

  return response;
};
