// src/hooks/useDeleteTask.ts
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useDeleteTask = () => {
  const qc = useQueryClient();

  return useMutation<void, Error, number>({
    mutationFn: async (id) => {
      const res = await fetch(`http://localhost:3001/task/${id}`, {
        method: "DELETE",
        credentials: "include",
      });
      if (!res.ok) throw new Error(`Error ${res.status}`);
    },
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["tasks"] });
    },
  });
};
