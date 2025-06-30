import React from "react";
import { cn } from "../../utils";
import { X, CheckCircle, XCircle, AlertCircle } from "lucide-react";
import { cva, type VariantProps } from "class-variance-authority";

const toastVariants = cva(
  "group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-4 pr-8 shadow-lg transition-all",
  {
    variants: {
      variant: {
        default: "border bg-white text-gray-900",
        success: "border-green-200 bg-green-50 text-green-800",
        error: "border-red-200 bg-red-50 text-red-800",
        warning: "border-yellow-200 bg-yellow-50 text-yellow-800",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

interface ToastProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof toastVariants> {
  title?: string;
  description?: string;
  onClose?: () => void;
  showIcon?: boolean;
}

const getIcon = (variant: ToastProps["variant"]) => {
  switch (variant) {
    case "success":
      return <CheckCircle className="h-5 w-5 text-green-600" />;
    case "error":
      return <XCircle className="h-5 w-5 text-red-600" />;
    case "warning":
      return <AlertCircle className="h-5 w-5 text-yellow-600" />;
    default:
      return null;
  }
};

export const Toast = React.forwardRef<HTMLDivElement, ToastProps>(
  ({ className, variant, title, description, onClose, showIcon = true, children, ...props }, ref) => {
    return (
      <div ref={ref} className={cn(toastVariants({ variant }), className)} {...props}>
        <div className="flex items-start space-x-3">
          {showIcon && getIcon(variant)}
          <div className="flex-1 space-y-1">
            {title && <div className="text-sm font-medium">{title}</div>}
            {description && <div className="text-sm opacity-90">{description}</div>}
            {children}
          </div>
        </div>
        {onClose && (
          <button
            onClick={onClose}
            className="absolute right-2 top-2 rounded-md p-1 text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-300"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>
    );
  }
);

Toast.displayName = "Toast";
