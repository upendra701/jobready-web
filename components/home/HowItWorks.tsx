import FadeIn from "@/components/animations/FadeIn";

import {
  FileText,
  Mic,
  BarChart3,
  PartyPopper,
} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Create Your Resume",
    description:
      "Choose a professional ATS-friendly template and build your resume in minutes.",
    icon: FileText,
  },
  {
    number: "02",
    title: "Prepare for Interviews",
    description:
      "Practice HR and technical questions with curated interview resources.",
    icon: Mic,
  },
  {
    number: "03",
    title: "Track Applications",
    description:
      "Manage all your job applications, interviews, and offers from one dashboard.",
    icon: BarChart3,
  },
  {
    number: "04",
    title: "Get Hired",
    description:
      "Apply confidently and land your dream job with better preparation.",
    icon: PartyPopper,
  },
];

export default function HowItWorks() {
  return (
    <section
      id="method"
      className="relative overflow-hidden bg-slate-950 px-6 py-28"
    >
      {/* Background Glow */}
      <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/10 blur-[160px]" />

      <div className="relative mx-auto max-w-7xl">

        {/* Heading */}
        <FadeIn>
          <div className="mx-auto mb-20 max-w-3xl text-center">
            <span className="rounded-full bg-blue-500/10 px-4 py-2 text-sm font-semibold text-blue-400">
              HOW IT WORKS
            </span>

            <h2 className="mt-6 text-4xl font-bold text-white md:text-5xl">
              Your Journey To
              <span className="text-blue-500"> Success</span>
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-400">
              A simple four-step process designed to help students prepare,
              apply, and get hired faster.
            </p>
          </div>
        </FadeIn>

        {/* Steps */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <FadeIn
                key={step.number}
                delay={index * 0.15}
              >
                <div className="group relative h-full rounded-3xl border border-white/10 bg-slate-900/70 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/40 hover:shadow-[0_20px_50px_rgba(37,99,235,0.15)]">

                  {/* Step Number */}
                  <div className="absolute -top-5 left-8 flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 font-bold text-white shadow-lg shadow-blue-600/30">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className="mb-6 mt-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-500/10 transition-all duration-300 group-hover:scale-110 group-hover:bg-blue-500/20">
                    <Icon className="h-8 w-8 text-blue-400" />
                  </div>

                  <h3 className="mb-4 text-2xl font-bold text-white">
                    {step.title}
                  </h3>

                  <p className="leading-7 text-slate-400">
                    {step.description}
                  </p>

                </div>
              </FadeIn>
            );
          })}
        </div>

      </div>
    </section>
  );
}