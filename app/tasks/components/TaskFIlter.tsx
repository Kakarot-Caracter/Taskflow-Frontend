"use client";
import { useFilterStore, StatusFilter } from "@/app/stores/filter.task.store";

import { ChangeEvent } from "react";
import { CATEGORIES } from "../shared";

export const TaskFilter = () => {
  const {
    search,
    setSearch,
    status,
    setStatus,
    category,
    setCategory,
    sort,
    setSort,
  } = useFilterStore();

  return (
    <div className="flex w-[90%] self-center flex-wrap gap-2 p-4 bg-white rounded-md shadow mb-4 items-center justify-center">
      {/* Búsqueda */}
      <input
        type="text"
        placeholder="Buscar..."
        value={search}
        onChange={(e) => setSearch(e.currentTarget.value)}
        className="border border-gray-300 rounded p-2 flex-1 min-w-[150px]"
      />

      {/* Filtros de estado */}
      <div className="flex gap-1">
        {(["all", "completed", "active"] as StatusFilter[]).map((f) => (
          <button
            key={f}
            onClick={() => setStatus(f)}
            className={`px-3 py-1 rounded ${
              status === f ? "bg-indigo-600 text-white" : "bg-gray-200"
            } text-sm`}
          >
            {f === "all" ? "All" : f === "completed" ? "Completed" : "Active"}
          </button>
        ))}
      </div>

      {/* Filtro por categoría */}
      <select
        value={category}
        onChange={(e: ChangeEvent<HTMLSelectElement>) =>
          setCategory(e.currentTarget.value)
        }
        className="border border-gray-300 rounded p-2 text-sm"
      >
        <option value="">Todas las categorías</option>
        {CATEGORIES.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>

      {/* Ordenación */}
      <select
        value={sort}
        onChange={(e: ChangeEvent<HTMLSelectElement>) =>
          setSort(e.currentTarget.value as "priority" | "date")
        }
        className="border border-gray-300 rounded p-2 text-sm"
      >
        <option value="date">Por fecha</option>
        <option value="priority">Por prioridad</option>
      </select>
    </div>
  );
};
