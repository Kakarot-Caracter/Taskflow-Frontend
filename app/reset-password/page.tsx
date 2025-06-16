"use client";
import { useSearchParams, useRouter } from "next/navigation";
import { useState } from "react";

export default function ResetPasswordPage() {
  const params = useSearchParams();
  const token = params.get("token") ?? "";
  const router = useRouter();

  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await fetch("http://localhost:3001/auth/reset-password", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token, newPassword: password }),
    });
    setSuccess(true);
    setTimeout(() => router.push("/login"), 2000);
  };

  return (
    <main className="p-4 max-w-md mx-auto">
      {success ? (
        <p className="text-indigo-600">Contraseña cambiada. Redirigiendo…</p>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <h1 className="text-xl font-bold">Restablecer contraseña</h1>
          <input
            type="password"
            required
            minLength={8}
            placeholder="Nueva contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border p-2 rounded"
          />
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white px-4 py-2 rounded"
          >
            Cambiar contraseña
          </button>
        </form>
      )}
    </main>
  );
}
