"use client";

import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/lib/queryClient";

import { UserCard } from "../cards/UserCard";

export function UserCardClient() {
  return (
    <QueryClientProvider client={queryClient}>
      <UserCard />
    </QueryClientProvider>
  );
}
