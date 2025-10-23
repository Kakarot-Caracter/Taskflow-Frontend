import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

export default function Hero() {
  return (
    <section
      className="flex flex-col justify-center items-center text-center py-28 "
      aria-label="Introducción a TaskFlow"
      aria-describedby="hero-desc"
    >
      <Badge className="bg-gray-50 text-black border-slate-300 p-2 rounded-2xl font-bold mb-5 px-4">
        The Future of Task Management
      </Badge>

      <h1 className="heading-primary gradient-primary text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
        Boost Your <br />
        <span className="gradient-secondary">Productivity</span>
      </h1>

      <p
        id="hero-desc"
        className="max-w-2xl w-[90%] text-lg text-slate-600 mb-8 mx-auto leading-relaxed"
      >
        TaskFlow helps you organize, prioritize, and complete your tasks with
        intelligent features that adapt to your workflow. Experience the perfect
        balance of simplicity and power.
      </p>

      <div className="flex flex-col md:flex-row gap-4 w-full max-w-2xl px-4">
        <Button asChild variant="gradient" className="w-full md:w-1/2">
          <Link
            href="/register"
            className="block w-full text-center py-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
          >
            Start Managing Tasks
          </Link>
        </Button>

        <Button asChild variant="outline" className="w-full md:w-1/2 font-bold">
          <Link
            href="/taskflow-demo"
            className="block w-full text-center py-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
          >
            Watch Demo
          </Link>
        </Button>
      </div>
    </section>
  );
}
