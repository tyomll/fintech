import { IToken, RegisterRequest } from "@/features/auth/lib/types";
import { AuthRoutes } from "@/features/auth/model/api/auth-routes";
import ClientService from "@/shared/services/client.service";

export const register = async (data: RegisterRequest) => {
  const response = await ClientService.post<IToken>(AuthRoutes.Register, data);

  return response;
};
