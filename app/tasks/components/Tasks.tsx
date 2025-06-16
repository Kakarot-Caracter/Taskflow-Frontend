"use client";

import { useModalStore, useTaskStore } from "@/app/stores/tasks.store";

import { TaskI } from "../shared";
import { TaskCard } from "./cards/TaskCard";
import { useDeleteTask } from "../hooks/tasks/useDeleteTask";
import { useUpdateTask } from "../hooks/tasks/useUpdateTask";
import { useFilterStore } from "@/app/stores/filter.task.store";
import { useTasks } from "../hooks/tasks/useTask";

export const Tasks = () => {
  //Tan stack Query
  const { data: tasks } = useTasks();
  const updateTask = useUpdateTask();
  const deleteTask = useDeleteTask();

  //Task Modal
  const { setEditingTask } = useTaskStore();
  const { open } = useModalStore();

  //Filtro
  const { search, status, category, sort } = useFilterStore();

  const filtered = (() => {
    let tasksFiltered = [...(tasks ?? [])];

    if (search) {
      const q = search.toLowerCase();
      tasksFiltered = tasksFiltered.filter((t) =>
        t.title.toLowerCase().includes(q)
      );
    }

    if (status !== "all") {
      tasksFiltered = tasksFiltered.filter((t) =>
        status === "completed" ? t.completed : !t.completed
      );
    }

    if (category) {
      tasksFiltered = tasksFiltered.filter((t) => t.category === category);
    }

    if (sort === "priority") {
      const order: Record<string, number> = { HIGH: 1, MEDIUM: 2, LOW: 3 };
      tasksFiltered.sort((a, b) => order[a.priority] - order[b.priority]);
    } else {
      tasksFiltered.sort(
        (a, b) => new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime()
      );
    }

    return tasksFiltered;
  })();

  //Funciones Generales

  const onEdit = (task: TaskI) => {
    setEditingTask(task);
    open();
  };

  const onDelete = (id: number) => {
    deleteTask.mutate(id);
  };

  const onToggle = (task: TaskI) => {
    const { id, title, description, priority, dueDate, completed, category } =
      task;

    updateTask.mutate({
      id,
      title,
      description,
      priority,
      dueDate,
      completed: !completed,
      category,
    });
  };

  //Imprime no hay tareas en el caso de que no haya

  if (!tasks || tasks.length === 0) {
    return <p className="self-center text-sm">No hay tareas</p>;
  }

  return (
    <div
      className="  self-center
    w-[90%]
    grid
    grid-cols-1       /* 1 columna en móvil */
    sm:grid-cols-2    /* 2 cols desde 640px */
    lg:grid-cols-3    /* 3 cols desde 1024px */
    gap-4
    items-stretch     /* ¡ESTO! */ "
    >
      {filtered.map((task) => (
        <TaskCard
          key={task.id}
          task={task}
          onEdit={() => onEdit(task)}
          onDelete={() => onDelete(task.id)}
          onToggle={() => onToggle(task)}
        />
      ))}
    </div>
  );
};
