import { ReactNode } from "react";

interface DashboardCardProps {
  title: string;
  value: string | number;
  description: string;
  icon: ReactNode;
}

export default function DashboardCard({
  title,
  value,
  description,
  icon,
}: DashboardCardProps) {
  return (
    <div className="group rounded-2xl border border-slate-800 bg-slate-900 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/40 hover:shadow-xl hover:shadow-blue-500/10">
      <div className="mb-5 flex items-center justify-between">
        <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-blue-600/15 text-3xl">
          {icon}
        </div>

        <span className="rounded-full bg-green-500/10 px-3 py-1 text-xs font-medium text-green-400">
          Live
        </span>
      </div>

      <h3 className="text-sm font-medium uppercase tracking-wide text-slate-400">
        {title}
      </h3>

      <p className="mt-3 text-4xl font-bold text-white">
        {value}
      </p>

      <p className="mt-2 text-sm text-slate-500">
        {description}
      </p>
    </div>
  );
}