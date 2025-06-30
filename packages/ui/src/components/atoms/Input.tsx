import React from "react";
import { cn } from "../../utils";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  variant?: "default" | "error";
  size?: "sm" | "md" | "lg";
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, variant = "default", size = "md", type = "text", ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex w-full rounded-md border px-3 py-2 text-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          {
            "border-gray-300 bg-white focus-visible:ring-blue-500": variant === "default",
            "border-red-500 bg-red-50 focus-visible:ring-red-500": variant === "error",
          },
          {
            "h-8 text-xs": size === "sm",
            "h-10": size === "md",
            "h-12 text-base": size === "lg",
          },
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";
