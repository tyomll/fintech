import ClientService from "@/shared/services/client.service";
import { DashboardRoutes } from "@/features/dashboard/model/api/dashboard-routes";
import { User } from "@/shared/lib/types";

export const getMe = async () => {
  const response = (await ClientService.get(DashboardRoutes.Me)) as User; 

  return response;
};
