"use client";

import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/lib/queryClient";
import { Overview } from "../Overview";
export function OverviewClient() {
  return (
    <QueryClientProvider client={queryClient}>
      <Overview />
    </QueryClientProvider>
  );
}
