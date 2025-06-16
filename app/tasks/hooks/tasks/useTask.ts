// src/hooks/useTasks.ts

import { useQuery } from "@tanstack/react-query";
import { TaskI } from "../../shared";

export const useTasks = () =>
  useQuery<TaskI[], Error>({
    queryKey: ["tasks"],
    queryFn: async () => {
      const res = await fetch("http://localhost:3001/task", {
        credentials: "include",
      });
      if (!res.ok) {
        throw new Error(`Error ${res.status} al cargar tareas`);
      }
      return res.json();
    },
  });
