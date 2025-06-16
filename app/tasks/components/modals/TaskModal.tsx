"use client";

import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { useModalStore, useTaskStore } from "@/app/stores/tasks.store";
import { CATEGORIES, PRIORITIES } from "../../shared/constants/tasks";
import { useCreateTask } from "../../hooks/tasks/useCreateTask";
import { useUpdateTask } from "../../hooks/tasks/useUpdateTask";
import { Priority, TaskI } from "../../shared";

export default function TaskModal() {
  //Formate de la data

  //Extraccion de las funciones de la Store
  const { editingTask } = useTaskStore();
  const { toggle } = useModalStore();

  //Tan Stack Query
  const createTask = useCreateTask();
  const updateTask = useUpdateTask();

  //Extraccion de las fununcione para react form
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TaskI>({
    defaultValues: {
      title: "",
      description: "",
      dueDate: new Date().toISOString().split("T")[0], // formato "YYYY-MM-DD"
      category: CATEGORIES[0] || "",
      priority: "medium",
      completed: false,
    },
  });

  //Escucha el formulario
  const submitHandler = (data: TaskI) => {
    const formatData: TaskI = {
      ...data,
      priority: data.priority.toUpperCase() as Priority,
    };

    if (editingTask) {
      console.log(editingTask.dueDate);
      const { id, title, description, priority, dueDate, completed, category } =
        formatData;

      updateTask.mutate({
        id,
        title,
        description,
        priority,
        dueDate: new Date(dueDate),
        completed,
        category,
      });
    } else {
      createTask.mutate(formatData);
    }

    toggle();
  };

  //Verifica si se esta editando o no una tarea
  useEffect(() => {
    if (editingTask) {
      console.log(editingTask.priority);
      reset({
        ...editingTask,
        priority: editingTask.priority.toLowerCase() as Priority,
        dueDate: new Date(editingTask.dueDate).toISOString().split("T")[0],
      });
    }
  }, [editingTask, reset]);

  return (
    <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white w-[90%] max-w-md p-6 rounded-md shadow-lg z-50 border border-blue-200">
      <form
        className="flex flex-col gap-3"
        onSubmit={handleSubmit(submitHandler)}
      >
        <input
          type="text"
          {...register("title", { required: "Introduce un título" })}
          placeholder={errors.title?.message || "Task Title"}
          className={`border rounded-md p-2 ${
            errors.title ? "border-red-600 text-red-600" : "border-gray-300"
          }`}
        />

        <input
          type="text"
          {...register("description")}
          placeholder="Description (Optional)"
          className="border border-gray-300 rounded-md p-2"
        />

        <select
          {...register("priority")}
          className="border border-gray-300 rounded-md p-2"
        >
          {PRIORITIES.map((priority) => (
            <option key={priority} value={priority}>
              {priority.charAt(0).toUpperCase() +
                priority.slice(1).toLowerCase()}
            </option>
          ))}
        </select>

        <select
          {...register("category")}
          className="border border-gray-300 rounded-md p-2"
        >
          {CATEGORIES.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>

        <input
          type="date"
          {...register("dueDate")}
          className="border border-gray-300 rounded-md px-3 py-2"
        />

        <div className="flex justify-between">
          <button
            type="button"
            onClick={() => {
              toggle();
              reset();
            }}
            className="border border-gray-300 rounded-md px-4 py-2 text-sm"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="rounded-md text-sm font-medium h-10 px-4 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white transition-colors"
          >
            {editingTask ? "Update Task" : "Add Task"}
          </button>
        </div>
      </form>
    </div>
  );
}
