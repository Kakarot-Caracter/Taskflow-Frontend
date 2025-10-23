import { useQuery } from "@tanstack/react-query";
import { UserI } from "../../shared/index";
import { API_URL } from "../../shared/constants/url-api";

export const useUser = () =>
  useQuery<UserI, Error>({
    queryKey: ["user"],
    queryFn: async () => {
<<<<<<< HEAD
      const res = await fetch(`${API_URL}/user`, {
=======
     const res = await fetch(`${API_URL}/user`, {
>>>>>>> 5c99001f817fb68ed61bcd96268d201c773dc729
        credentials: "include",
      });
      if (!res.ok) {
        throw new Error(`Error ${res.status} al cargar usuario`);
      }

      const user = await res.json();

      return user;
    },
  });
