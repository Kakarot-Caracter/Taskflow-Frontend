import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import {
  CircleCheckBig,
  CalendarCheck,
  Filter,
  BarChart,
  FolderTree,
  RefreshCw,
} from "lucide-react";

export default function FeaturesCards() {
  const features = [
    {
      title: "Smart Task Management",
      description:
        "Create, organize, and track your tasks with intelligent categorization and priority levels.",
      icon: <CircleCheckBig size={25} className="text-blue-500" />,
    },
    {
      title: "Due Date Tracking",
      description:
        "Never miss a deadline with visual due date indicators and overdue task alerts.",
      icon: <CalendarCheck size={25} className="text-green-500" />,
    },
    {
      title: "Advanced Filtering",
      description:
        "Find exactly what you need with powerful search, filter, and sorting capabilities.",
      icon: <Filter size={25} className="text-purple-500" />,
    },
    {
      title: "Progress Analytics",
      description:
        "Track your productivity with completion rates and task distribution insights.",
      icon: <BarChart size={25} className="text-amber-500" />,
    },
    {
      title: "Category Organization",
      description:
        "Organize tasks by work, personal, health, and custom categories for better focus.",
      icon: <FolderTree size={25} className="text-red-500" />,
    },
    {
      title: "Instant Updates",
      description:
        "Real-time task updates with smooth animations and responsive interactions.",
      icon: <RefreshCw size={25} className="text-cyan-500" />,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {features.map((feature, index) => (
        <Card
          key={index}
          className="hover:shadow-lg transition-shadow duration-300 border-0 bg-white"
        >
          <CardHeader>
            {feature.icon}

            <div className="space-y-1">
              <CardTitle className="text-left">{feature.title}</CardTitle>
              <p className="text-left text-slate-600 text-sm">
                {feature.description}
              </p>
            </div>
          </CardHeader>
        </Card>
      ))}
    </div>
  );
}
