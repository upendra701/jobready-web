import SectionTitle from "./SectionTitle";

interface SummaryPreviewProps {
  summary?: string;
}

export default function SummaryPreview({
  summary,
}: SummaryPreviewProps) {
  if (!summary?.trim()) {
    return null;
  }

  return (
    <section className="space-y-3">
      <SectionTitle title="Professional Summary" />

      <p className="whitespace-pre-line text-[14px] leading-7 text-justify text-slate-700">
        {summary.trim()}
      </p>
    </section>
  );
}