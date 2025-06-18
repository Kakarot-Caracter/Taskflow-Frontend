"use client";

import { useAuthStore } from "@/app/stores/auth.store";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useState } from "react";

import { useForm } from "react-hook-form";

export default function FormRegister() {
  const [isError, setIsError] = useState(false);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "Giovanni Martinez",
      email: "itachimartinez0@gmail.com",
      password: "12345678",
      confirmPassword: "12345678",
    },
  });

  const router = useRouter();

  const registerUser = useAuthStore((state) => state.register);

  const onSubmit = handleSubmit(async (data) => {
    const { name, email, password } = data;
    const succes = await registerUser(name, email, password);

    if (!succes) {
      setIsError(true);
      return;
    }

    setIsError(false);

    router.push("/tasks");
  });

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-5 text-sm">
      <div className="flex flex-col">
        <label>Full Name</label>
        <input
          type="text"
          className={`border rounded-sm focus:outline-black p-2 ${
            errors.name ? "text-red-600 placeholder-red-600" : ""
          }`}
          placeholder={errors.name ? "Name required" : "Enter your full name"}
          {...register("name", { required: true })}
        />
      </div>
      <div className="flex flex-col">
        <label>Email</label>
        <input
          type="email"
          className={`border rounded-sm focus:outline-black p-2 ${
            errors.email ? "text-red-600 placeholder-red-600" : ""
          }`}
          placeholder={errors.email ? "Email required" : "Enter your email"}
          {...register("email", { required: true })}
        />
      </div>
      <div className="flex flex-col">
        <label>Password</label>
        <input
          type="password"
          className={`border rounded-sm focus:outline-black p-2 ${
            errors.password ? "text-red-600 placeholder-red-600" : ""
          }`}
          placeholder={
            errors.password ? "Password required" : "Create a password"
          }
          {...register("password", { required: true })}
        />
      </div>
      <div className="flex flex-col">
        <label>Confirm Password</label>
        <input
          type="password"
          className={`border rounded-sm focus:outline-black p-2 ${
            errors.confirmPassword ? "text-red-600 placeholder-red-600" : ""
          }`}
          placeholder={
            errors.confirmPassword
              ? "Confirmation required"
              : "Repeat your password"
          }
          {...register("confirmPassword", { required: true })}
        />
      </div>
      <div className="flex gap-2">
        <input
          type="checkbox"
          name="terminos"
          required
          className="accent-black text-white w-4 h-4 rounded-md"
        />
        <label className="text-sm">Acepto los términos y condiciones</label>
      </div>

      {isError ? (
        <span className="text-red-600">Usuario ya esta registrado.</span>
      ) : null}

      <Button asChild variant={"gradient"}>
        <button type="submit">Create Account</button>
      </Button>
    </form>
  );
}
