import { cn } from "@/lib/utils";
import React from "react";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {};
export const IconButton = (props: Props) => {
  const { type = "button", className, children, ...rest } = props;
  return (
    <button
      className={cn(
        "h-10 w-10 rounded-lg hover:bg-gray-100 flex items-center justify-center",
        className
      )}
      type={type}
      {...rest}
    >
      {children}
    </button>
  );
};
