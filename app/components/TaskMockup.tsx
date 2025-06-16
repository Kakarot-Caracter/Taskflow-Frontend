import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CircleCheck } from "lucide-react";

export function TaskMockup() {
  const tasks = [
    {
      title: "Schedule dentist appointment",
      description: "Call Dr. Smith for checkup",
      category: <Badge className="bg-sky-100 text-sky-800">Health</Badge>,
    },
    {
      title: "Finish project report",
      description: "Complete and submit final slides",
      category: <Badge className="bg-purple-100 text-purple-800">Work</Badge>,
    },
    {
      title: "Buy groceries",
      description: "Milk, bread, and vegetables",
      category: (
        <Badge className="bg-emerald-100 text-emerald-800">Personal</Badge>
      ),
    },
  ];

  return (
    <div className=" w-[95%] lg:w-[80%]">
      <Card className="shadow-md">
        <CardHeader className="flex items-center">
          <div className="flex gap-1">
            <div className="bg-red-600 h-3 w-3 rounded-full"></div>
            <div className="bg-yellow-300 h-3 w-3 rounded-full"></div>
            <div className="bg-green-600 h-3 w-3 rounded-full"></div>
          </div>
          <h3 className="text-slate-600">TaskFlow App</h3>
        </CardHeader>
        <CardContent className="flex flex-col gap-5 text-sm">
          {tasks.map((task) => (
            <div
              key={task.title}
              className="flex bg-slate-50 items-center p-2 lg:p-5 rounded-lg justify-around"
            >
              <CircleCheck size={25} className="text-green-600" />
              <div className="flex flex-col">
                <p className="font-semibold">{task.title}</p>
                <p className="text-sm text-gray-500">{task.description}</p>
              </div>
              {task.category}
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
