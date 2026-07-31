import DashboardCard from "@/components/dashboard/DashboardCard";

import { auth } from "@/lib/auth";

export default async function DashboardPage() {
  const session = await auth();

  return (
    <div className="space-y-8">
      {/* Welcome Banner */}
      <section className="rounded-3xl border border-slate-800 bg-gradient-to-r from-blue-600/20 via-slate-900 to-slate-900 p-8">
        <h1 className="text-4xl font-bold">
          👋 Welcome back, {session?.user?.name}
        </h1>

        <p className="mt-3 max-w-2xl text-slate-300">
          Welcome to <span className="font-semibold">JobReady</span>.
          Build professional resumes, improve ATS scores,
          prepare for interviews and track your job applications
          — all in one place.
        </p>
      </section>

      {/* Statistics */}
      <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        <DashboardCard
          title="Resumes"
          value={0}
          description="Professional resumes created"
          icon="📄"
        />

        <DashboardCard
          title="ATS Score"
          value="0%"
          description="Average ATS score"
          icon="📊"
        />

        <DashboardCard
          title="Jobs Applied"
          value={0}
          description="Applications tracked"
          icon="💼"
        />

        <DashboardCard
          title="AI Credits"
          value="∞"
          description="Available AI usage"
          icon="🤖"
        />
      </section>

      {/* Two Column Layout */}
      <section className="grid gap-6 lg:grid-cols-2">
        {/* Recent Activity */}
        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
          <h2 className="mb-5 text-2xl font-semibold">
            📈 Recent Activity
          </h2>

          <div className="space-y-4">
            <div className="rounded-xl bg-slate-800 p-4">
              🎉 Welcome to JobReady
            </div>

            <div className="rounded-xl bg-slate-800 p-4">
              📄 Create your first resume
            </div>

            <div className="rounded-xl bg-slate-800 p-4">
              📊 Check your ATS score
            </div>

            <div className="rounded-xl bg-slate-800 p-4">
              💼 Track your first job application
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
          <h2 className="mb-5 text-2xl font-semibold">
            ⚡ Quick Actions
          </h2>

          <div className="grid gap-4">
            <button className="rounded-xl bg-blue-600 px-5 py-4 text-left font-semibold transition hover:bg-blue-700">
              ➕ Create Resume
            </button>

            <button className="rounded-xl bg-slate-800 px-5 py-4 text-left transition hover:bg-slate-700">
              📊 Analyze ATS Score
            </button>

            <button className="rounded-xl bg-slate-800 px-5 py-4 text-left transition hover:bg-slate-700">
              💼 Add Job Application
            </button>

            <button className="rounded-xl bg-slate-800 px-5 py-4 text-left transition hover:bg-slate-700">
              🤖 Ask AI Assistant
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}