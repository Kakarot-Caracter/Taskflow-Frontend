"use client";

import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/lib/queryClient";
import { Tasks } from "../Tasks";

export function TasksClient() {
  return (
    <QueryClientProvider client={queryClient}>
      <Tasks />
    </QueryClientProvider>
  );
}
