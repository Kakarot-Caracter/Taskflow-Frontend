"use client";

import { useModalStore } from "@/app/stores/tasks.store";
import TaskModal from "../modals/TaskModal";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/lib/queryClient";

export function TaskModalClient() {
  const { isOpen } = useModalStore();
  return isOpen ? (
    <QueryClientProvider client={queryClient}>
      <TaskModal />
    </QueryClientProvider>
  ) : null;
}
