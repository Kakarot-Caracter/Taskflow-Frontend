"use client";

import { LogOut, User } from "lucide-react";
import { useUser } from "../../hooks/users/useUser";
import { useRouter } from "next/navigation";
import { API_URL } from "../../shared/constants/url-api";

export const UserCard = () => {
  const router = useRouter();

  const { data: user } = useUser();

  const handleLogout = async () => {
    try {
<<<<<<< HEAD
      await fetch(`${API_URL}/auth/logout`, {
=======
     await fetch(`${API_URL}/auth/logout`, {
>>>>>>> 5c99001f817fb68ed61bcd96268d201c773dc729
        method: "POST",
        credentials: "include",
      });

      router.push("/login");
    } catch (error) {
      console.error("Error al hacer logout", error);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-4 space-y-3 w-[90%] self-center">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full flex items-center justify-center">
          <User className="text-white" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="text-sm font-medium text-slate-900 truncate">
            {user?.name}
          </div>
          <div className="text-xs text-slate-500 truncate">{user?.email}</div>
        </div>
        <button
          onClick={handleLogout}
          className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-accent h-10 w-10 text-slate-400 hover:text-slate-600"
          title="Logout"
        >
          <LogOut />
        </button>
      </div>
    </div>
  );
};
