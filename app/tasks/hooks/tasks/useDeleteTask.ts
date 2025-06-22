// src/hooks/useDeleteTask.ts
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { API_URL } from "../../shared/constants/url-api";

export const useDeleteTask = () => {
  const qc = useQueryClient();

  return useMutation<void, Error, number>({
    mutationFn: async (id) => {
      const res = await fetch(`${API_URL}/task/${id}`, {
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
