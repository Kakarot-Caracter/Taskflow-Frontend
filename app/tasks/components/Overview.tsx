"use client";

import { useTasks } from "../hooks/tasks/useTask";

export const Overview = () => {
  const { data: tasks = [], isLoading, error } = useTasks();

  const total = tasks.length;
  const completed = tasks.filter((t) => t.completed).length;
  const percent = total > 0 ? Math.round((completed / total) * 100) : 0;

  return (
    <div className="p-6 bg-white rounded-md shadow mb-4 w-[90%]  mx-auto">
      <h2 className="text-xl font-bold mb-4">Resumen de Tareas</h2>

      {isLoading ? (
        <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
          <div className="h-4 bg-gradient-to-r from-purple-600 to-indigo-600 w-1/3 animate-pulse" />
        </div>
      ) : error ? (
        <p className="text-red-600">No se pudo cargar el resumen</p>
      ) : (
        <>
          <div className="w-full bg-gray-200 rounded-full h-4 mb-2 overflow-hidden">
            <div
              className="h-4 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full"
              style={{ width: `${percent}%` }}
            />
          </div>
          <p className="text-sm">
            {completed} de {total} tareas completadas ({percent}%)
          </p>
        </>
      )}
    </div>
  );
};
