"use client";

import { useAuthStore } from "@/app/stores/auth.store";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

export default function FormLogin() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const router = useRouter();

  const loginUser = useAuthStore((state) => state.login);

  const onSubmit = handleSubmit(async (data) => {
    const { email, password } = data;

    const succes = await loginUser(email, password);

    if (succes) router.push("/tasks");
  });

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-5 text-sm">
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

      <Button asChild variant={"gradient"}>
        <button type="submit">Sign In</button>
      </Button>
    </form>
  );
}
