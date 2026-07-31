import FadeIn from "@/components/animations/FadeIn";
import Container from "@/components/ui/Container";
import { Card } from "@/components/ui/card";

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "Software Engineer",
    company: "Infosys",
    quote:
      "JobReady helped me create an ATS-friendly resume that finally started getting interview calls.",
  },
  {
    name: "Priya Reddy",
    role: "Graduate Trainee",
    company: "TCS",
    quote:
      "The interview preparation resources boosted my confidence and helped me crack my first job.",
  },
  {
    name: "Arjun Kumar",
    role: "Frontend Developer",
    company: "Accenture",
    quote:
      "Tracking my applications in one place made my job search much more organized and less stressful.",
  },
];

export default function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-28">
      <Container>
        <FadeIn>
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <span className="rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-1 text-sm font-medium text-blue-400">
              TESTIMONIALS
            </span>

            <h2 className="mt-6 text-4xl font-bold text-white md:text-5xl">
              Loved by{" "}
              <span className="text-blue-500">Job Seekers</span>
            </h2>

            <p className="mt-6 text-lg text-slate-400">
              Hear from people who improved their resumes, prepared better,
              and landed their dream jobs with JobReady.
            </p>
          </div>
        </FadeIn>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <FadeIn
              key={testimonial.name}
              delay={index * 0.15}
            >
              <Card className="h-full border-slate-800 bg-slate-900/70 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/40 hover:shadow-xl hover:shadow-blue-500/10">
                <div className="mb-6 text-5xl text-blue-500">“</div>

                <p className="leading-8 text-slate-300">
                  {testimonial.quote}
                </p>

                <div className="mt-8 border-t border-slate-800 pt-6">
                  <h4 className="font-bold text-white">
                    {testimonial.name}
                  </h4>

                  <p className="text-sm text-slate-400">
                    {testimonial.role} • {testimonial.company}
                  </p>
                </div>
              </Card>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}