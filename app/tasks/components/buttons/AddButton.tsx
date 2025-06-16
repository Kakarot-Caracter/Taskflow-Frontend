"use client";

import { useModalStore, useTaskStore } from "@/app/stores/tasks.store";
import { PlusCircle } from "lucide-react";

export const AddButton = () => {
  const { open } = useModalStore();
  const { setEditingTask } = useTaskStore();

  const handleClick = () => {
    setEditingTask(null);
    open();
  };

  return (
    <button
      onClick={handleClick}
      className="self-center inline-flex w-[90%] items-center justify-center gap-3 rounded-md text-sm font-medium h-10 px-4 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white transition-colors"
    >
      <PlusCircle />
      Add New Task
    </button>
  );
};
