import { useQuery } from "@tanstack/react-query";
import { UserI } from "../../shared/index";
import { API_URL } from "../../shared/constants/url-api";

export const useUser = () =>
  useQuery<UserI, Error>({
    queryKey: ["user"],
    queryFn: async () => {
      const res = await fetch(`${API_URL}/user`, {
        credentials: "include",
      });
      if (!res.ok) {
        throw new Error(`Error ${res.status} al cargar usuario`);
      }

      const user = await res.json();

      return user;
    },
  });
