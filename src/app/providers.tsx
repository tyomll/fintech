import { Toaster } from "@/shared/@core/ui/sonner";
import QueryClientProvider from "@/shared/providers/query-client-provider";
import React from "react";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <QueryClientProvider>
      {children}
      <Toaster />
    </QueryClientProvider>
  );
};

export default Providers;
