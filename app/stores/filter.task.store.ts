// src/stores/filter.store.ts
import { create } from "zustand";

export type StatusFilter = "all" | "completed" | "pending";
export type SortType = "priority" | "date";

interface FilterState {
  search: string;
  status: StatusFilter;
  category: string;
  sort: SortType;

  setSearch: (v: string) => void;
  setStatus: (v: StatusFilter) => void;
  setCategory: (v: string) => void;
  setSort: (v: SortType) => void;
  resetFilters: () => void;
}

export const useFilterStore = create<FilterState>((set) => ({
  search: "",
  status: "all",
  category: "",
  sort: "date",

  setSearch: (v) => set({ search: v }),
  setStatus: (v) => set({ status: v }),
  setCategory: (v) => set({ category: v }),
  setSort: (v) => set({ sort: v }),
  resetFilters: () =>
    set({ search: "", status: "all", category: "", sort: "date" }),
}));
