import { Button } from "@/components/ui/button";
import Metrics from "./components/Metrics";

import FeaturesCards from "./components/FeaturesCards";
import { TaskMockup } from "./components/TaskMockup";

import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import AppIcon from "./components/AppIcon";

export default function Home() {
  return (
    <>
      <header>
        <nav className="fixed gap-x-2 top-0 left-0 w-full flex items-center justify-between bg-white/95 border-b border-gray-400/50 p-5 z-50">
          <AppIcon />

          <div className="flex items-center gap-x-2">
            <Link
              href="/login"
              className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors whitespace-nowrap"
            >
              Sign In
            </Link>

            <Button asChild variant="gradient">
              <Link href="/register" className="text-sm p-1 whitespace-nowrap">
                Get Started
              </Link>
            </Button>
          </div>
        </nav>
      </header>
      <main className="flex flex-col items-center justify-center pt-20 ">
        <section
          className="flex flex-col text-center justify-center items-center mt-[15%] lg:mt-[5%]"
          aria-label="Introducción a TaskFlow"
        >
          <Badge className="bg-gray-50 text-black border-slate-300 p-2 rounded-2xl  font-bold mb-5 w-65">
            The Future of Task Management
          </Badge>
          <h1 className="heading-primary gradient-primary">
            Boost Your <br />
            <span className="gradient-secondary">Productivity</span>
          </h1>

          <p className="w-[90%] text-lg text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            TaskFlow helps you organize, prioritize, and complete your tasks
            with intelligent features that adapt to your workflow. Experience
            the perfect balance of simplicity and power.
          </p>

          <div className="flex justify-items-center items-center flex-col md:flex-row gap-4 w-[100%]">
            <Button asChild variant={"gradient"} className="w-[90%] md:w-[50%]">
              <Link href={"/register"}> Start Managing Tasks</Link>
            </Button>
            <Button
              asChild
              variant={"outline"}
              className="font-bold w-[80%] md:w-[50%]"
            >
              <Link href={"/taskflow-demo"}> Watch Demo</Link>
            </Button>
          </div>
        </section>

        {
          //Metrics Separado para integracion de logica si asi se desea
        }
        <Metrics />

        <section
          className="flex flex-col text-center justify-center items-center bg-white
        w-[100%] pb-10 lg:pb-15"
        >
          <h2 className="heading-primary mt-[15%] lg:mt-[2%] ">
            Everything
            <br /> You Need to Stay <br />
            Organized
          </h2>

          <p className="w-[90%] text-lg text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Powerful features designed to help you manage tasks efficiently and
            boost your productivity.
          </p>

          <div className="flex flex-col w-[95%] ">
            <FeaturesCards />
          </div>
        </section>

        <section className="flex flex-col justify-center items-center text-center w-[100%] ">
          <h2 className="heading-primary mt-10 ">See TaskFlow in Action</h2>

          <p className="w-[90%] text-lg text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Experience the clean, intuitive interface that makes task management
            a breeze.
          </p>

          <TaskMockup />
        </section>

        <section className="flex flex-col mt-20 p-[5%] text-center justify-center items-center bg-gradient-primary w-[100%]">
          <h2 className="heading-primary text-3xl text-white  w-[95%]">
            Ready to Transform Your Productivity?
          </h2>

          <p className="w-[90%] text-lg text-white mb-8 max-w-2xl mx-auto leading-relaxed">
            Join thousands of users who have already streamlined their workflow
            with TaskFlow.
          </p>

          <Button
            asChild
            variant={"outline"}
            className=" rounded-sm text-purple-600 font-semibold p-4"
          >
            <Link href={"/register"}>Get Started Now</Link>
          </Button>
        </section>
      </main>

      <footer className="">
        <div className="flex flex-col justify-center items-center text-center w-[100%] gap-3 bg-slate-900 p-10">
          <div className="flex items-center gap-x-2">
            <AppIcon textColor="text-white" />
          </div>

          <p className="text-sm text-slate-400">
            Streamline your productivity with intelligent task management. ©
          </p>
          <p className="text-xs text-slate-600">
            2024 TaskFlow. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
