interface SectionTitleProps {
  title: string;
}

export default function SectionTitle({
  title,
}: SectionTitleProps) {
  return (
    <div className="mb-4">
      <div className="flex items-center gap-3">
        <h2 className="shrink-0 text-[15px] font-bold uppercase tracking-[0.12em] text-slate-900">
          {title}
        </h2>

        <div className="h-px flex-1 bg-slate-300" />
      </div>
    </div>
  );
}