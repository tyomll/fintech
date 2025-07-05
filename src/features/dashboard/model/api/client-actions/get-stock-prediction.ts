import ClientService from "@/shared/services/client.service";
import { DashboardRoutes } from "@/features/dashboard/model/api/dashboard-routes";
import { AIStockPrediction, DetaledStock } from "@/shared/lib/types";

export const getStockPrediction = async (symbol: string) => {
  const response = (await ClientService.get(
    `${DashboardRoutes.StockPrediction}/${symbol}`
  )) as {
    prediction: AIStockPrediction;
  };

  return response;
};
