import Link from "next/link";
import { Check } from "lucide-react";

import FadeIn from "@/components/animations/FadeIn";
import Container from "@/components/ui/Container";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const plans = [
  {
    title: "🌱 Forever Free",
    price: "₹0",
    description: "Everything you need to begin your career journey.",
    buttonText: "Start Free",
    features: [
      "ATS Resume Builder",
      "Resume PDF Download",
      "Basic Cover Letter Builder",
      "Interview Question Library",
      "Job Application Tracker",
      "Free Career Resources",
      "Curated Free Courses",
      "Basic Resume Score",
    ],
  },
  {
    title: "🚀 Pro",
    price: "₹299/mo",
    description: "Personalized AI guidance to help you get interview-ready.",
    buttonText: "Upgrade to Pro",
    popular: true,
    features: [
      "Everything in Free",
      "AI Resume Review",
      "AI Career Suggestions",
      "Skill Gap Analysis",
      "Resume Optimization",
      "Unlimited Resume Versions",
      "Interview Practice",
      "Priority Support",
    ],
  },
  {
    title: "👑 Premium",
    price: "₹999/mo",
    description: "Complete career mentorship from resume to offer letter.",
    buttonText: "Go Premium",
    features: [
      "Everything in Pro",
      "Expert Resume Review",
      "LinkedIn Profile Optimization",
      "Mock Interviews",
      "Personal Career Roadmap",
      "Premium Resume Templates",
      "Salary Negotiation Guidance",
      "Course Recommendations",
      "Priority Career Support",
    ],
  },
];

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="relative overflow-hidden bg-slate-950 py-28"
    >
      <Container>
        <FadeIn>
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <span className="rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-1 text-sm font-medium text-blue-400">
              PRICING
            </span>

            <h2 className="mt-6 text-4xl font-bold text-white md:text-5xl">
              Choose Your{" "}
              <span className="text-blue-500">Journey</span>
            </h2>

            <p className="mt-6 text-lg text-slate-400">
              Whether you're just starting or preparing for your dream job,
              there's a plan designed to help you succeed.
            </p>
          </div>
        </FadeIn>

        <div className="grid gap-8 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <FadeIn key={plan.title} delay={index * 0.15}>
              <Card
                className={`relative flex h-full flex-col border p-8 ${
                  plan.popular
                    ? "border-blue-500 bg-slate-900 shadow-xl shadow-blue-500/10"
                    : "border-slate-800 bg-slate-900/70"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-blue-600 px-4 py-1 text-xs font-semibold text-white">
                    MOST POPULAR
                  </div>
                )}

                <h3 className="text-2xl font-bold text-white">
                  {plan.title}
                </h3>

                <div className="mt-4 text-4xl font-bold text-blue-400">
                  {plan.price}
                </div>

                <p className="mt-4 text-slate-400">
                  {plan.description}
                </p>

                <ul className="mt-8 flex-1 space-y-4">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-slate-300"
                    >
                      <Check className="mt-1 h-4 w-4 text-green-400" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link href="/register" className="mt-8">
                  <Button
                    className="w-full"
                    variant={plan.popular ? "default" : "outline"}
                  >
                    {plan.buttonText}
                  </Button>
                </Link>
              </Card>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.4}>
          <div className="mx-auto mt-20 max-w-3xl rounded-3xl border border-blue-500/20 bg-blue-500/5 p-8 text-center">
            <h3 className="text-2xl font-bold text-white">
              💙 Our Promise
            </h3>

            <p className="mt-6 text-lg leading-8 text-slate-300">
              We believe everyone deserves an opportunity to build a better
              career.
            </p>

            <p className="mt-4 leading-8 text-slate-400">
              That's why our <strong>Forever Free</strong> plan will always
              include enough tools to create a professional resume, prepare for
              interviews, and start applying with confidence.
            </p>

            <p className="mt-4 font-medium text-blue-400">
              No hidden paywalls. No tricks. Just honest career guidance.
            </p>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}