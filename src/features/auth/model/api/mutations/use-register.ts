"use client";
import { register } from "@/features/auth/model/api/client-actions/register";
import { AuthMutationKeys } from "@/features/auth/model/api/mutation-keys";
import { useMutation } from "@tanstack/react-query";

const useRegister = () => {
  return useMutation({
    mutationKey: [AuthMutationKeys.Register],
    mutationFn: register,
  });
};

export default useRegister;
