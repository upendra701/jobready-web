import FadeIn from "@/components/animations/FadeIn";
import Container from "@/components/ui/Container";
import { Card } from "@/components/ui/card";
import { features } from "@/data/features";
import { iconMap } from "@/lib/iconMap";

export default function Features() {
  return (
    <section
      id="features"
      className="relative overflow-hidden bg-slate-950 py-24"
    >
      {/* Background Glow */}
      <div className="absolute left-1/2 top-20 h-96 w-96 -translate-x-1/2 rounded-full bg-blue-600/10 blur-[120px]" />

      <Container>
        <FadeIn>
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <span className="rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-1 text-sm font-medium text-blue-400">
              FEATURES
            </span>

            <h2 className="mt-6 text-4xl font-bold tracking-tight text-white md:text-5xl">
              Everything You Need{" "}
              <span className="text-blue-500">To Get Hired</span>
            </h2>

            <p className="mt-6 text-lg text-slate-400">
              JobReady gives you all the tools required to prepare,
              apply, and succeed in today's competitive job market.
            </p>
          </div>
        </FadeIn>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon =
              iconMap[feature.icon as keyof typeof iconMap];

            return (
              <FadeIn
                key={feature.title}
                delay={index * 0.1}
              >
                <Card className="h-full border-slate-800 bg-slate-900/70 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/40 hover:shadow-xl hover:shadow-blue-500/10">
                  <div className="mb-6 inline-flex rounded-xl bg-blue-500/10 p-4">
                    <Icon className="h-8 w-8 text-blue-500" />
                  </div>

                  <h3 className="mb-3 text-xl font-semibold text-white">
                    {feature.title}
                  </h3>

                  <p className="leading-7 text-slate-400">
                    {feature.description}
                  </p>
                </Card>
              </FadeIn>
            );
          })}
        </div>
      </Container>
    </section>
  );
}