// src/hooks/useTasks.ts

import { useQuery } from "@tanstack/react-query";
import { TaskI } from "../../shared";
import { API_URL } from "../../shared/constants/url-api";

export const useTasks = () =>
  useQuery<TaskI[], Error>({
    queryKey: ["tasks"],
    queryFn: async () => {
      const res = await fetch(`${API_URL}/task`, {
        credentials: "include",
      });
      if (!res.ok) {
        throw new Error(`Error ${res.status} al cargar tareas`);
      }
      return res.json();
    },
  });
