// src/hooks/useUpdateTask.ts
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { TaskI } from "../../shared";

// 1. Definir los campos permitidos para actualización
type UpdatableFields = Pick<
  TaskI,
  "title" | "description" | "priority" | "dueDate" | "completed" | "category"
>;

// 2. Crear el tipo de actualización que solo incluye campos permitidos
export type UpdateTask = Partial<UpdatableFields> & { id: number };

export const useUpdateTask = () => {
  const qc = useQueryClient();

  return useMutation<TaskI, Error, UpdateTask>({
    mutationFn: async ({ id, ...task }) => {
      console.log(task);
      // 3. Ya no necesitamos filtrar porque el tipo solo permite campos válidos
      const res = await fetch(`http://localhost:3001/task/${id}`, {
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
