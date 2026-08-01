import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  title: string;
  description?: string;
  className?: string;
  descriptionClassName?: string;
}

export default function SectionHeader({
  title,
  description,
  className,
  descriptionClassName,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "mb-8 border-b border-slate-200 pb-5",
        className
      )}
    >
      <h2 className="text-2xl font-bold text-slate-900">
        {title}
      </h2>

      {description && (
        <p
          className={cn(
            "mt-2 max-w-2xl text-sm leading-6 text-slate-500",
            descriptionClassName
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}