import ClientService from "@/shared/services/client.service";
import { DashboardRoutes } from "@/features/dashboard/model/api/dashboard-routes";
import { DetaledStock } from "@/shared/lib/types";

export const getStock = async (
  symbol: string,
  interval: string,
  range: string
) => {
  const response = (await ClientService.get(
    `${DashboardRoutes.Stock}/${symbol}?interval=${interval}&range=${range}`
  )) as {
    data: DetaledStock;
  };

  return response;
};
