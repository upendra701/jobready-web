"use client";

import { ReactNode } from "react";
import { Plus } from "lucide-react";

import { Button } from "@/components/ui/button";

interface AddItemButtonProps {
  onClick: () => void;
  children: ReactNode;
}

export default function AddItemButton({
  onClick,
  children,
}: AddItemButtonProps) {
  return (
    <Button
      type="button"
      variant="outline"
      onClick={onClick}
      className="w-full"
    >
      <Plus className="mr-2 h-4 w-4" />
      {children}
    </Button>
  );
}