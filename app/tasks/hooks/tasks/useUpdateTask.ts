import { useMutation, useQueryClient } from "@tanstack/react-query";
import { TaskI } from "../../shared";
import { API_URL } from "../../shared/constants/url-api";

type UpdatableFields = Pick<
  TaskI,
  "title" | "description" | "priority" | "dueDate" | "completed" | "category"
>;

export type UpdateTask = Partial<UpdatableFields> & { id: number };

export const useUpdateTask = () => {
  const qc = useQueryClient();

  return useMutation<TaskI, Error, UpdateTask>({
    mutationFn: async ({ id, ...task }) => {
      const res = await fetch(`${API_URL}/task/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(task),
        credentials: "include",
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message || `Error ${res.status}`);
      }

      return res.json();
    },
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["tasks"] });
    },
  });
};
