import React from "react";
import { cn } from "../../utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "outlined" | "elevated";
  padding?: "none" | "sm" | "md" | "lg";
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = "default", padding = "md", ...props }, ref) => {
    return (
      <div
        className={cn(
          "rounded-lg transition-colors",
          {
            "bg-white": variant === "default",
            "bg-white border border-gray-200": variant === "outlined",
            "bg-white shadow-md": variant === "elevated",
          },
          {
            "p-0": padding === "none",
            "p-3": padding === "sm",
            "p-6": padding === "md",
            "p-8": padding === "lg",
          },
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

Card.displayName = "Card";
