import Container from "@/components/ui/Container";
import {
  Briefcase,
  Mail,
  Link,
  Globe,
} from "lucide-react";

const productLinks = [
  "Features",
  "Pricing",
  "Resume Builder",
  "Interview Prep",
];

const resourceLinks = [
  "Career Guides",
  "Free Courses",
  "Blog",
  "FAQ",
];

const companyLinks = [
  "About",
  "Privacy Policy",
  "Terms of Service",
  "Contact",
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950">
      <Container>
        <div className="grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-blue-600 p-3">
                <Briefcase className="h-6 w-6 text-white" />
              </div>

              <h2 className="text-2xl font-bold text-white">
                JobReady
              </h2>
            </div>

            <p className="mt-6 max-w-md leading-8 text-slate-400">
              Helping students, graduates, and professionals build better
              careers with resumes, interview preparation, learning
              resources, and personalized guidance.
            </p>

            <div className="mt-8 flex gap-4">
              <a
                href="#"
                className="rounded-xl border border-white/10 p-3 text-slate-400 hover:text-blue-400"
              >
                <Globe className="h-5 w-5" />
              </a>

              <a
                href="#"
                className="rounded-xl border border-white/10 p-3 text-slate-400 hover:text-blue-400"
              >
                <Link className="h-5 w-5" />
              </a>

              <a
                href="mailto:support@jobready.com"
                className="rounded-xl border border-white/10 p-3 text-slate-400 hover:text-blue-400"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="mb-5 text-lg font-semibold text-white">
              Product
            </h3>

            <ul className="space-y-3">
              {productLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="text-slate-400 hover:text-blue-400">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-5 text-lg font-semibold text-white">
              Resources
            </h3>

            <ul className="space-y-3">
              {resourceLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="text-slate-400 hover:text-blue-400">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-5 text-lg font-semibold text-white">
              Company
            </h3>

            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="text-slate-400 hover:text-blue-400">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 py-8 text-sm text-slate-500 md:flex-row">
          <p>© 2026 JobReady. All rights reserved.</p>

          <p>Built with ❤️ to help people build better careers.</p>
        </div>
      </Container>
    </footer>
  );
}