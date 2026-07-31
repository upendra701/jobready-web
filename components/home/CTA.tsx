import Link from "next/link";

import FadeIn from "@/components/animations/FadeIn";
import Container from "@/components/ui/Container";
import { Button } from "@/components/ui/button";

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-28">
      <Container>
        <FadeIn>
          <div className="relative overflow-hidden rounded-[40px] border border-blue-500/20 bg-gradient-to-r from-blue-600/10 via-slate-900 to-cyan-600/10 p-12 text-center">

            {/* Background Glow */}
            <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-[120px]" />

            <div className="relative">
              <span className="rounded-full bg-blue-500/10 px-4 py-2 text-sm font-semibold text-blue-400">
                START TODAY
              </span>

              <h2 className="mt-8 text-4xl font-bold text-white md:text-6xl">
                Ready To Land
                <br />
                <span className="text-blue-500">
                  Your Dream Job?
                </span>
              </h2>

              <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-slate-300">
                Join thousands of students and professionals preparing
                smarter, applying confidently, and getting hired faster
                with JobReady.
              </p>

              <div className="mt-10">
                <Link href="/register">
                  <Button size="lg">
                    Start Free Today
                  </Button>
                </Link>
              </div>

              <p className="mt-6 text-sm text-slate-400">
                No credit card required • Forever Free Plan Available
              </p>
            </div>

          </div>
        </FadeIn>
      </Container>
    </section>
  );
}