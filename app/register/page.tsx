import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import AppIcon from "../components/AppIcon";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import FormRegister from "./components/FormRegister";

export default function Register() {
  return (
    <>
      <main className="flex flex-col justify-center items-center gap-3 mt-5">
        <header className="flex justify-center">
          <div className="flex items-center gap-x-2">
            <ArrowLeft size={15} />
            <Link href={"/"} className="text-sm text-slate-600 ">
              Back to Home
            </Link>
          </div>
        </header>

        <AppIcon />
        <h2 className="text-md text-slate-600">Create your account</h2>

        <Card className="gap-3">
          <CardHeader>
            <CardTitle className="text-center">Get Started</CardTitle>
          </CardHeader>
          <CardContent>
            <FormRegister />
          </CardContent>
          <CardFooter>
            <p className="text-sm  text-slate-600 text-center">
              Already have an account?{" "}
              <Link href={"/login"} className="text-purple-600">
                Sign in
              </Link>
            </p>
          </CardFooter>
        </Card>
      </main>
    </>
  );
}
