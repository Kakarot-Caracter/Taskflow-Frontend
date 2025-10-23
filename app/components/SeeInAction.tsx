import { TaskMockup } from "./TaskMockup";

export default function SeeInAction() {
  return (
    <section className="flex flex-col justify-center items-center text-center w-[100%] ">
      <h2 className="heading-primary mt-10 ">See TaskFlow in Action</h2>

      <p className="w-[90%] text-lg text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed">
        Experience the clean, intuitive interface that makes task management a
        breeze.
      </p>

      <TaskMockup />
    </section>
  );
}
