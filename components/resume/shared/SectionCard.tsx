import { ReactNode } from "react";

import { Card, CardContent } from "@/components/ui/card";

interface SectionCardProps {
  children: ReactNode;
}

export default function SectionCard({
  children,
}: SectionCardProps) {
  return (
    <Card>
      <CardContent className="space-y-6 p-6">
        {children}
      </CardContent>
    </Card>
  );
}