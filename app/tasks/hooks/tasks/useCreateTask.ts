import { useMutation, useQueryClient } from "@tanstack/react-query";
import { TaskI } from "../../shared";
import { API_URL } from "../../shared/constants/url-api";

export type NewTask = Omit<TaskI, "id">;

export const useCreateTask = () => {
  const qc = useQueryClient();

  return useMutation<TaskI, Error, NewTask>({
    mutationFn: async (newTask: NewTask) => {
      const res = await fetch(`${API_URL}/task`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(newTask),
      });
      if (!res.ok) throw new Error(`Error ${res.status}`);

      return res.json();
    },
    onSuccess: () => {
      // invalidamos la query usando un filtro en objeto
      qc.invalidateQueries({ queryKey: ["tasks"] });
    },
  });
};
