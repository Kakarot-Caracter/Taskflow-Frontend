import { create } from "zustand";
import { TaskI } from "../tasks/shared";

type TaskState = {
  tasks: TaskI[];
  editingTask: TaskI | null;
  setEditingTask: (task: TaskI | null) => void;
};

type ModalStore = {
  isOpen: boolean;
  open: () => void;
  toggle: () => void;
};

export const useTaskStore = create<TaskState>((set) => ({
  tasks: [],
  editingTask: null,

  setEditingTask: (task) => set({ editingTask: task }),
}));

export const useModalStore = create<ModalStore>((set) => ({
  isOpen: false,
  open: () => set(() => ({ isOpen: true })),
  toggle: () => set((state) => ({ isOpen: !state.isOpen })),
}));
