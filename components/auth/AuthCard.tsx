import type { ReactNode } from "react";

interface AuthCardProps {
  title: string;
  description: string;
  children: ReactNode;
  footer?: ReactNode;
}

export default function AuthCard({
  title,
  description,
  children,
  footer,
}: AuthCardProps) {
  return (
    <div className="rounded-2xl border border-white/10 bg-slate-900/80 p-8 shadow-2xl backdrop-blur">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white">
          {title}
        </h1>

        <p className="mt-2 text-slate-400">
          {description}
        </p>
      </div>

      <div className="space-y-6">
        {children}
      </div>

      {footer && (
        <div className="mt-8 border-t border-white/10 pt-6 text-center text-sm text-slate-400">
          {footer}
        </div>
      )}
    </div>
  );
}