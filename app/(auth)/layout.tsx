import type { ReactNode } from "react";

export default function AuthLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <main className="min-h-screen bg-slate-950">
      <div className="grid min-h-screen lg:grid-cols-2">
        {/* Left Side */}
        <section className="hidden lg:flex flex-col justify-center p-16 border-r border-white/10">
          <div className="max-w-md">
            <span className="rounded-full bg-blue-500/10 px-4 py-2 text-sm font-semibold text-blue-400">
              Welcome to JobReady
            </span>

            <h1 className="mt-8 text-5xl font-bold text-white leading-tight">
              Build Your Career With Confidence.
            </h1>

            <p className="mt-8 text-lg leading-8 text-slate-400">
              Resume Builder.
              Interview Preparation.
              Job Tracking.
              AI Career Guidance.

              Everything in one place.
            </p>
          </div>
        </section>

        {/* Right Side */}
        <section className="flex items-center justify-center p-8">
          <div className="w-full max-w-md">
            {children}
          </div>
        </section>
      </div>
    </main>
  );
}