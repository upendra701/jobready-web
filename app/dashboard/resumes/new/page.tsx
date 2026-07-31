import ResumeEditor from "@/components/resume/editor/ResumeEditor";

export default function NewResumePage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-8">
      <ResumeEditor mode="create" />
    </div>
  );
}