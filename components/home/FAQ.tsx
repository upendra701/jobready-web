"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

import FadeIn from "@/components/animations/FadeIn";
import Container from "@/components/ui/Container";
import { Card } from "@/components/ui/card";

const faqs = [
  {
    question: "Is JobReady really free?",
    answer:
      "Yes. Our Forever Free plan includes an ATS Resume Builder, interview preparation resources, job tracking, and curated free learning materials to help you begin your career journey.",
  },
  {
    question: "Who is JobReady designed for?",
    answer:
      "JobReady is built for students, fresh graduates, job seekers, and professionals looking to improve their resumes, prepare for interviews, and manage their job applications effectively.",
  },
  {
    question: "What additional benefits do Pro and Premium provide?",
    answer:
      "Pro unlocks AI-powered resume reviews, career suggestions, skill-gap analysis, and interview preparation. Premium adds expert resume reviews, mock interviews, LinkedIn optimization, and personalized career guidance.",
  },
  {
    question: "Can I download my resume as a PDF?",
    answer:
      "Absolutely. Every user can download their resume as a professional PDF. Premium users will also have access to exclusive resume templates and advanced customization options.",
  },
  {
    question: "Will you recommend courses based on my profile?",
    answer:
      "Yes. JobReady analyzes your career goals and skills to recommend relevant free and premium courses that help you become more competitive in the job market.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="relative overflow-hidden bg-slate-950 py-28"
    >
      <Container>
        <FadeIn>
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <span className="rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-1 text-sm font-medium text-blue-400">
              FAQ
            </span>

            <h2 className="mt-6 text-4xl font-bold text-white md:text-5xl">
              Frequently Asked{" "}
              <span className="text-blue-500">Questions</span>
            </h2>

            <p className="mt-6 text-lg text-slate-400">
              Everything you need to know about JobReady before getting
              started.
            </p>
          </div>
        </FadeIn>

        <div className="mx-auto max-w-4xl space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <FadeIn key={faq.question} delay={index * 0.08}>
                <Card className="overflow-hidden border-slate-800 bg-slate-900/70">
                  <button
                    type="button"
                    onClick={() =>
                      setOpenIndex(isOpen ? null : index)
                    }
                    className="flex w-full items-center justify-between p-6 text-left"
                  >
                    <span className="text-lg font-semibold text-white">
                      {faq.question}
                    </span>

                    <ChevronDown
                      className={`h-5 w-5 text-slate-400 transition-transform ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="border-t border-slate-800 px-6 py-5 text-slate-300">
                      {faq.answer}
                    </div>
                  )}
                </Card>
              </FadeIn>
            );
          })}
        </div>
      </Container>
    </section>
  );
}