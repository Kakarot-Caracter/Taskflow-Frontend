export interface TaskI {
  createdAt: string;
  id: number;
  title: string;
  description?: string;
  dueDate: string | Date;
  category: string;
  priority: Priority;
  completed?: boolean;
}

export type Priority = "low" | "medium" | "high";
