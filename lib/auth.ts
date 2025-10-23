import { API_URL } from "@/app/tasks/shared/constants/url-api";
import { cookies } from "next/headers";

export async function getCurrentUser() {
  const cookieStore = await cookies();
  const token = cookieStore.get("auth_token")?.value; // o tu cookie real

  if (!token) return null;

  const res = await fetch(`${API_URL}/user`, {
    headers: {
      Cookie: `auth_token=${token}`,
    },
    credentials: "include",
  });

  if (!res.ok) return null;

  return await res.json();
}
