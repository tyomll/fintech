"use client";

import {
  QueryClientProvider as ReactQueryClientProvider,
  QueryClient,
} from "@tanstack/react-query";
import { useState } from "react";

const QueryClientProvider = ({ children }: { children: React.ReactNode }) => {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <ReactQueryClientProvider client={queryClient}>
      {children}
    </ReactQueryClientProvider>
  );
};

export default QueryClientProvider;
