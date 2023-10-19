import { cn } from "@/lib/utils";
import React from "react";
import { StarFill } from "./icons";

type Props = {
  number?: number;
  active?: number;
  className?: string;
  size?: "sm" | "base";
};
export const RatingCard = ({
  active = 0,
  number = 5,
  size = "base",
  className,
}: Props) => {
  const sizeClass = size === "base" ? "h-6 w-6" : "h-5 w-5";
  return (
    <div className={cn("flex items-center ", className)}>
      {Array(active)
        .fill(1)
        .map((_, i) => (
          <StarFill key={i} className={cn("text-orange", sizeClass)} />
        ))}
      {Array(number - active)
        .fill(1)
        .map((_, i) => (
          <StarFill key={i} className={cn("text-gray-500", sizeClass)} />
        ))}
    </div>
  );
};
