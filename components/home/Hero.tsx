import Link from "next/link";
import FadeIn from "@/components/animations/FadeIn";
import { Button } from "@/components/ui/button";

const toolkitItems = [
  "ATS Resume Templates",
  "Interview Guides",
  "Job Tracker",
  "Recruiter Templates",
  "Cover Letter Builder",
  "Salary Comparison",
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-950 pt-28">
      {/* Background Effects */}
      <div className="absolute left-1/2 top-20 h-[650px] w-[650px] -translate-x-1/2 rounded-full bg-blue-600/20 blur-[140px]" />
      <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-cyan-500/10 blur-[120px]" />
      <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-indigo-600/10 blur-[120px]" />

      <div className="relative mx-auto grid min-h-[calc(100vh-80px)] max-w-7xl grid-cols-1 items-center gap-16 px-6 py-16 lg:grid-cols-2">
        {/* Left Content */}
        <FadeIn>
          <div>
            <div className="inline-flex items-center rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-300">
              🚀 Launch Your Career with Confidence
            </div>

            <h1 className="mt-8 text-5xl font-extrabold leading-tight text-white md:text-6xl lg:text-7xl">
              Prepare Better.
              <br />
              <span className="text-blue-500">Apply Smarter.</span>
              <br />
              Grow Further.
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-slate-300">
              Everything you need to build an impressive resume, prepare for
              interviews, track applications, and land your dream job — all in
              one place.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/register">
                <Button size="lg">Get Started</Button>
              </Link>

              <Link href="#features">
                <Button variant="secondary" size="lg">
                  View Toolkit
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="mt-12 flex flex-wrap gap-10">
              <div>
                <h3 className="text-3xl font-bold text-white">10+</h3>
                <p className="text-sm text-slate-400">Career Resources</p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-white">100%</h3>
                <p className="text-sm text-slate-400">ATS Friendly</p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-white">24/7</h3>
                <p className="text-sm text-slate-400">Learn Anytime</p>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Right Card */}
        <FadeIn delay={0.2}>
          <div className="flex justify-center">
            <div className="w-full max-w-md rounded-3xl border border-white/10 bg-slate-900/70 p-8 shadow-[0_0_80px_rgba(37,99,235,0.25)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(37,99,235,0.35)]">
              <div className="mb-6 flex items-center justify-between">
                <h2 className="text-2xl font-bold text-white">
                  📦 JobReady Starter
                </h2>

                <span className="rounded-full bg-green-500/20 px-3 py-1 text-xs font-semibold text-green-400">
                  Coming Soon
                </span>
              </div>

              <div className="space-y-3">
                {toolkitItems.map((item) => (
                  <div
                    key={item}
                    className="rounded-xl border border-white/5 bg-slate-800/70 p-4 transition-all duration-300 hover:translate-x-2 hover:border-blue-500/30 hover:bg-slate-800"
                  >
                    ✅ {item}
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-2xl bg-blue-600/10 p-4 text-center text-sm text-blue-300">
                More premium resources will be added soon.
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}