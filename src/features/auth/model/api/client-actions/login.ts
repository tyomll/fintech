import { IToken, LoginRequest } from "@/features/auth/lib/types";
import { AuthRoutes } from "@/features/auth/model/api/auth-routes";
import ClientService from "@/shared/services/client.service";

export const login = async (data: LoginRequest) => {
  const response = await ClientService.post<IToken>(AuthRoutes.Login, data);

  return response;
};
