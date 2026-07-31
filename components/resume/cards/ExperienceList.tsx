"use client";

import ExperienceCard from "./ExperienceCard";

interface ExperienceListProps {
  fields: {
    id: string;
  }[];
  onRemove: (index: number) => void;
}

export default function ExperienceList({
  fields,
  onRemove,
}: ExperienceListProps) {
  if (fields.length === 0) {
    return null;
  }

  return (
    <div className="space-y-6">
      {fields.map((field, index) => (
        <ExperienceCard
          key={field.id}
          index={index}
          onRemove={() => onRemove(index)}
        />
      ))}
    </div>
  );
}