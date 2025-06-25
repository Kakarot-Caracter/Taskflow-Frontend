import { useQuery } from "@tanstack/react-query";
import { UserI } from "../../shared/index";
import { API_URL } from "../../shared/constants/url-api";

export const useUsers = () =>
  useQuery<UserI[], Error>({
    queryKey: ["user"],
    queryFn: async () => {
     const res = await fetch(`${API_URL}/auth/user`, {
        credentials: "include",
      });
      if (!res.ok) {
        throw new Error(`Error ${res.status} al cargar usuario`);
      }
      return res.json();
    },
  });
