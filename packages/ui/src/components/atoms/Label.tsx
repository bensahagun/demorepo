import React from "react";
import { cn } from "../../utils";

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  size?: "sm" | "md" | "lg";
  required?: boolean;
}

export const Label = React.forwardRef<HTMLLabelElement, LabelProps>(
  ({ className, size = "md", required = false, children, ...props }, ref) => {
    return (
      <label
        className={cn(
          "font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
          {
            "text-xs": size === "sm",
            "text-sm": size === "md",
            "text-base": size === "lg",
          },
          className
        )}
        ref={ref}
        {...props}
      >
        {children}
        {required && <span className="ml-1 text-red-500">*</span>}
      </label>
    );
  }
);

Label.displayName = "Label";
