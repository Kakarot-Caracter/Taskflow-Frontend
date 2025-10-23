import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function CallToActionSection() {
  return (
    <section className="flex flex-col mt-20 p-[5%] text-center justify-center items-center bg-gradient-primary w-[100%]">
      <h2 className="heading-primary text-3xl text-white w-[95%]">
        Ready to Transform Your Productivity?
      </h2>

      <p className="w-[90%] text-lg text-white mb-8 max-w-2xl mx-auto leading-relaxed">
        Join thousands of users who have already streamlined their workflow with
        TaskFlow.
      </p>

      <Button
        asChild
        variant="outline"
        className="rounded-sm text-purple-600 font-semibold p-4"
      >
        <Link href="/register">Get Started Now</Link>
      </Button>
    </section>
  );
}
