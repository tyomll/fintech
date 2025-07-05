import AuthPage from "@/features/auth/ui/auth-page";
import { Suspense } from "react";

const page = () => {
  return (
    <Suspense>
      <AuthPage />
    </Suspense>
  );
};

export default page;
