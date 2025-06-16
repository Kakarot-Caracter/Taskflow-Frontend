import { CircleCheckBig } from "lucide-react";

export default function AppIcon({ textColor = "gradient-secondary" }) {
  return (
    <div className="flex items-center gap-x-2">
      <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-sm p-1 flex items-center justify-center">
        <CircleCheckBig className="text-white" size={15} />
      </div>
      <h3 className={`${textColor} font-bold text-lg`}>TaskFlow</h3>
    </div>
  );
}
