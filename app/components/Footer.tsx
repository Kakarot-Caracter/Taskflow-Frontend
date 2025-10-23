import AppIcon from "./AppIcon";

export default function Footer() {
  return (
    <footer className="flex flex-col justify-center items-center text-center w-[100%] gap-3 bg-slate-900 p-10">
      <div className="flex items-center gap-x-2">
        <AppIcon textColor="text-white" />
      </div>

      <p className="text-sm text-slate-400">
        Streamline your productivity with intelligent task management. ©
      </p>
      <p className="text-xs text-slate-600">
        2024 TaskFlow. All rights reserved.
      </p>
    </footer>
  );
}
