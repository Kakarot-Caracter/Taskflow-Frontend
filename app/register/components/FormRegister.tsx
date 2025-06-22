"use client";

import { useAuthStore } from "@/app/stores/auth.store";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";

type FormData = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  terms: boolean;
};

export default function FormRegister() {
  const [registrationError, setRegistrationError] = useState(false);
  const router = useRouter();
  const registerUser = useAuthStore((state) => state.register);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();

  const password = watch("password");

  const onSubmit = handleSubmit(async (data) => {
    setRegistrationError(false);
    const success = await registerUser(data.name, data.email, data.password);
    if (!success) {
      setRegistrationError(true);
      return;
    }
    router.push("/tasks");
  });

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-5 text-sm">
      {/* Name */}
      <div className="flex flex-col">
        <label>Full Name</label>
        <input
          type="text"
          className={`border rounded-sm focus:outline-black p-2 ${
            errors.name ? "text-red-600 placeholder-red-600" : ""
          }`}
          placeholder={
            errors.name ? errors.name.message : "Enter your full name"
          }
          {...register("name", { required: "Name is required" })}
        />
      </div>

      {/* Email */}
      <div className="flex flex-col">
        <label>Email</label>
        <input
          type="email"
          className={`border rounded-sm focus:outline-black p-2 ${
            errors.email ? "text-red-600 placeholder-red-600" : ""
          }`}
          placeholder={errors.email ? errors.email.message : "Enter your email"}
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Invalid email address",
            },
          })}
        />
      </div>

      {/* Password */}
      <div className="flex flex-col">
        <label>Password</label>
        <input
          type="password"
          className={`border rounded-sm focus:outline-black p-2 ${
            errors.password ? "text-red-600 placeholder-red-600" : ""
          }`}
          placeholder={
            errors.password ? errors.password.message : "Create a password"
          }
          {...register("password", {
            required: "Password is required",
            minLength: { value: 6, message: "Minimum 6 characters" },
          })}
        />
      </div>

      {/* Confirm Password */}
      <div className="flex flex-col">
        <label>Confirm Password</label>
        <input
          type="password"
          className={`border rounded-sm focus:outline-black p-2 ${
            errors.confirmPassword ? "text-red-600 placeholder-red-600" : ""
          }`}
          placeholder={
            errors.confirmPassword
              ? errors.confirmPassword.message
              : "Repeat your password"
          }
          {...register("confirmPassword", {
            required: "Please confirm your password",
            validate: (value) => value === password || "Passwords do not match",
          })}
        />
      </div>

      <div className="flex gap-2 items-center">
        <input
          type="checkbox"
          className="accent-black text-white w-4 h-4 rounded-md"
          {...register("terms", { required: "You must accept the terms" })}
        />
        <label className="text-sm">I accept the terms and conditions</label>
        {errors.terms && (
          <span className="text-red-600 text-xs">{errors.terms.message}</span>
        )}
      </div>

      {/* Registration Error */}
      {registrationError && (
        <span className="text-red-600">Ya estas registrado.</span>
      )}

      {/* Submit Button */}
      <Button asChild variant="gradient" disabled={isSubmitting}>
        <button type="submit">
          {isSubmitting ? "Creating Account..." : "Create Account"}
        </button>
      </Button>
    </form>
  );
}
