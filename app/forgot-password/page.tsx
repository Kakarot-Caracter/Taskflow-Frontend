"use client";
import { useState } from "react";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch("http://localhost:3001/auth/forgot-password", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });

    if (!res.ok) {
      setIsError(true);
      return;
    }

    setIsError(false);
    setSent(true);
  };

  return (
    <main className="p-4 max-w-md mx-auto">
      {sent ? (
        <p className="text-green-600">Revisa tu email para continuar.</p>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-2">
          <h1 className="text-xl font-bold">Olvidé mi contraseña</h1>
          <input
            type="email"
            required
            placeholder="Tu correo"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border p-2 rounded"
          />

          {isError && (
            <span className="text-red-600">Usuario no registrado.</span>
          )}

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white px-4 py-2 rounded"
          >
            Enviar enlace
          </button>
        </form>
      )}
    </main>
  );
}
