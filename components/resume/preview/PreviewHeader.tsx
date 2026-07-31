import type { ResumeFormValues } from "@/lib/validations/resume.schema";

interface PreviewHeaderProps {
  values?: Partial<ResumeFormValues>;
}

export default function PreviewHeader({
  values,
}: PreviewHeaderProps) {
  const contactInfo = [
    values?.email,
    values?.phone,
    values?.location,
  ].filter(Boolean);

  return (
    <header className="border-b border-slate-300 pb-6">
      <div className="text-center space-y-2">
        <h1 className="break-words text-3xl font-bold uppercase tracking-wide text-slate-900">
          {values?.fullName || "Your Name"}
        </h1>

        <p className="text-base font-medium text-slate-600">
          {values?.jobTitle || "Professional Title"}
        </p>

        {contactInfo.length > 0 && (
          <div className="mt-3 flex flex-wrap justify-center gap-x-4 gap-y-1 text-xs text-slate-600">
            {contactInfo.map((item, index) => (
              <span key={index}>{item}</span>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}