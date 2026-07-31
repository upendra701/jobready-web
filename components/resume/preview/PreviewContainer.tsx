import type { ReactNode } from "react";

interface PreviewContainerProps {
  children: ReactNode;
}

export default function PreviewContainer({
  children,
}: PreviewContainerProps) {
  return (
    <div className="sticky top-6">
      <div className="mx-auto w-full max-w-[794px] rounded-xl border bg-white shadow-lg">
        <div
          className="min-h-[1123px] p-10"
          style={{
            aspectRatio: "210 / 297",
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
}