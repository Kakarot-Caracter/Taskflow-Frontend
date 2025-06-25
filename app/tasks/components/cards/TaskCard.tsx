import {
  AlertCircle,
  Calendar,
  Circle,
  CircleCheck,
  Clock,
  Pencil,
  Star,
  Trash2,
} from "lucide-react";

import { JSX } from "react";
import { Priority, TaskI } from "../../shared";

interface TaskCardProps {
  task: TaskI;
  onEdit: () => void;
  onDelete: () => void;
  onToggle: () => void;
}

const capitalizeFirstLetter = (str: string) =>
  str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();

const PRIORITY_CONFIG: Record<
  Priority,
  { icon: JSX.Element; className: string }
> = {
  low: {
    icon: <Star height={20} className="text-green-600" />,
    className: "text-green-700 bg-green-200",
  },
  medium: {
    icon: <Star height={20} className="text-yellow-600" />,
    className: "text-yellow-700 bg-yellow-200",
  },
  high: {
    icon: <AlertCircle height={20} className="text-red-600" />,
    className: "text-red-700 bg-red-200",
  },
};

export const TaskCard = ({
  task,
  onEdit,
  onDelete,
  onToggle,
}: TaskCardProps) => {
  const isOverdue = task.dueDate < new Date().toISOString().split("T")[0];

  const priorityConfig =
    PRIORITY_CONFIG[task.priority.toLowerCase() as Priority];

  return (
    <div className="flex flex-col gap-3  h-50 bg-white border border-gray-200 rounded-md p-4 shadow-sm">
      <div className="flex justify-between items-center ">
        <div className="flex items-center gap-2">
          {task.completed ? (
            <CircleCheck
              height={20}
              className="text-green-600 cursor-pointer"
              onClick={onToggle}
            />
          ) : (
            <Circle
              height={20}
              className="text-gray-300 cursor-pointer"
              onClick={onToggle}
            />
          )}
        </div>

        <h3 className="font-bold text-center flex-1 truncate ">{task.title}</h3>

        <div className="flex gap-2">
          <Pencil
            height={20}
            onClick={onEdit}
            className="cursor-pointer hover:text-indigo-600 transition-colors"
          />
          <Trash2
            height={20}
            onClick={onDelete}
            className="cursor-pointer hover:text-red-600 transition-colors"
          />
        </div>
      </div>

      <div className="flex justify-between text-xs">
        <span className="font-bold border border-gray-200 rounded-2xl p-1 px-2">
          {task.category}
        </span>
        <span
          className={`flex items-center gap-1 rounded-2xl px-2 py-1 border ${priorityConfig.className}`}
        >
          {priorityConfig.icon}
          <span className="font-bold">{task.priority.toLowerCase()}</span>
        </span>
      </div>

      {task.description && (
        <p className="  w-full text-gray-600 text-xs whitespace-normal break-all overflow-hidden ">
          {task.description}
        </p>
      )}

      <div
        className={`flex items-center gap-1 text-xs ml-[5%] ${
          isOverdue ? "text-red-600" : "text-gray-600"
        }`}
      >
        <Calendar height={15} />
        <span>
          {(typeof task.dueDate === "string"
            ? task.dueDate
            : task.dueDate.toISOString()
          ).slice(0, 10)}

          {isOverdue && " (Overdue)"}
        </span>
      </div>

      <div className="flex items-center gap-1 text-gray-600 text-xs ml-[5%]">
        <Clock height={15} />
        <span>
          Created{" "}
          {capitalizeFirstLetter(
            new Date(task.createdAt).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
            })
          )}
        </span>
      </div>
    </div>
  );
};
