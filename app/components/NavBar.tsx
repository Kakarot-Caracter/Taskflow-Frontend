import { Button } from "@/components/ui/button";
import Link from "next/link";
import AppIcon from "./AppIcon";
import { getCurrentUser } from "@/lib/auth";

export default async function NavBar() {
  const user = await getCurrentUser();

  return (
    <nav className="fixed gap-x-2 top-0 left-0 w-full flex items-center justify-between bg-white/95 border-b border-gray-400/50 p-5 z-50">
      <AppIcon />

      <div className="flex items-center gap-x-2">
        {!user ? (
          <>
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
          </>
        ) : (
          <Button asChild variant="gradient">
            <Link href="/tasks" className="text-sm p-1 whitespace-nowrap">
              Task Manage
            </Link>
          </Button>
        )}
      </div>
    </nav>
  );
}
