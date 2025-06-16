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

import FormLogin from "./components/FormLogin";

export default function Login() {
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
        <h2 className="text-md text-slate-600">Sign in to your account</h2>

        <Card className="gap-3">
          <CardHeader>
            <CardTitle className="text-center">Welcome back</CardTitle>
          </CardHeader>
          <CardContent>
            <FormLogin />
          </CardContent>
          <CardFooter className="flex justify-center">
            <p className="text-sm ">
              <Link href={"/forgot-password"} className="text-purple-600">
                Forgot your password?
              </Link>
            </p>
          </CardFooter>
        </Card>
      </main>
    </>
  );
}
