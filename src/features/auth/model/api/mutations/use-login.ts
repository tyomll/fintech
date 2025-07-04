import { login } from "@/features/auth/model/api/client-actions/login";
import { AuthMutationKeys } from "@/features/auth/model/api/mutation-keys";
import { useMutation } from "@tanstack/react-query";

const useLogin = () => {
  return useMutation({
    mutationKey: [AuthMutationKeys.Login],
    mutationFn: login,
  });
};

export default useLogin;
