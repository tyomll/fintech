import { useQuery } from "@tanstack/react-query";
import { DashboardQueryKeys } from "@/features/dashboard/model/api/query-keys";
import { getMe } from "@/features/dashboard/model/api/client-actions/get-me";

const useMe = () => {
  return useQuery({
    queryKey: [DashboardQueryKeys.Me],
    queryFn: getMe,
  });
};

export default useMe;
