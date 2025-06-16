import { AddButton } from "./components/buttons/AddButton";
import { UserCard } from "./components/cards/UserCard";

import { TaskFilter } from "./components/TaskFIlter";
import { OverviewClient } from "./components/wrappers/OverviewClient";

import { TaskModalClient } from "./components/wrappers/TaskModalClient";
import { TasksClient } from "./components/wrappers/TasksClient";
import { UserCardClient } from "./components/wrappers/UserCardClient";

export default function TasksPage() {
  return (
    <main className="flex flex-col gap-y-3 h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <h1 className="mt-5 ml-5 text-2xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
        TaskFlow
      </h1>

      <UserCardClient />

      <AddButton />

      <OverviewClient />

      <TaskFilter />

      <TaskModalClient />

      <TasksClient />
    </main>
  );
}
