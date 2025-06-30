"use client";

import React, { createContext, useContext, useState } from "react";
import { cn } from "../../utils";
import { X } from "lucide-react";
import { createPortal } from "react-dom";

interface DrawerContextType {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const DrawerContext = createContext<DrawerContextType | undefined>(undefined);

const useDrawer = () => {
  const context = useContext(DrawerContext);
  if (!context) {
    throw new Error("Drawer components must be used within a Drawer");
  }
  return context;
};

interface DrawerProps {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  children: React.ReactNode;
}

export const Drawer = ({ open: controlledOpen, onOpenChange, children }: DrawerProps) => {
  const [internalOpen, setInternalOpen] = useState(false);

  const open = controlledOpen !== undefined ? controlledOpen : internalOpen;
  const setOpen = onOpenChange || setInternalOpen;

  return <DrawerContext.Provider value={{ open, setOpen }}>{children}</DrawerContext.Provider>;
};

interface DrawerTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const DrawerTrigger = React.forwardRef<HTMLButtonElement, DrawerTriggerProps>(
  ({ className, onClick, ...props }, ref) => {
    const { setOpen } = useDrawer();

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      setOpen(true);
      onClick?.(e);
    };

    return (
      <button
        ref={ref}
        className={cn("inline-flex items-center justify-center", className)}
        onClick={handleClick}
        {...props}
      />
    );
  }
);

DrawerTrigger.displayName = "DrawerTrigger";

interface DrawerContentProps extends React.HTMLAttributes<HTMLDivElement> {
  showCloseButton?: boolean;
}

export const DrawerContent = React.forwardRef<HTMLDivElement, DrawerContentProps>(
  ({ className, children, showCloseButton = true, ...props }, ref) => {
    const { open, setOpen } = useDrawer();

    if (!open || typeof window === "undefined") return null;

    return createPortal(
      <div className="fixed inset-0 z-50 flex items-end justify-center sm:items-center">
        {/* Overlay */}
        <div className="fixed inset-0 bg-black/50 transition-opacity" onClick={() => setOpen(false)} />

        {/* Content */}
        <div
          ref={ref}
          className={cn(
            "relative w-full max-w-lg rounded-t-lg bg-white shadow-lg transition-transform sm:rounded-lg",
            "animate-in slide-in-from-bottom-2 sm:slide-in-from-bottom-0 sm:zoom-in-95",
            className
          )}
          {...props}
        >
          {showCloseButton && (
            <button
              onClick={() => setOpen(false)}
              className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-white transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
            >
              <X className="h-4 w-4" />
              <span className="sr-only">Close</span>
            </button>
          )}
          {children}
        </div>
      </div>,
      document.body
    );
  }
);

DrawerContent.displayName = "DrawerContent";

interface DrawerHeaderProps extends React.HTMLAttributes<HTMLDivElement> {}

export const DrawerHeader = React.forwardRef<HTMLDivElement, DrawerHeaderProps>(({ className, ...props }, ref) => {
  return (
    <div ref={ref} className={cn("flex flex-col space-y-1.5 text-center sm:text-left p-6", className)} {...props} />
  );
});

DrawerHeader.displayName = "DrawerHeader";

interface DrawerTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {}

export const DrawerTitle = React.forwardRef<HTMLHeadingElement, DrawerTitleProps>(({ className, ...props }, ref) => {
  return <h3 ref={ref} className={cn("text-lg font-semibold leading-none tracking-tight", className)} {...props} />;
});

DrawerTitle.displayName = "DrawerTitle";

interface DrawerDescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> {}

export const DrawerDescription = React.forwardRef<HTMLParagraphElement, DrawerDescriptionProps>(
  ({ className, ...props }, ref) => {
    return <p ref={ref} className={cn("text-sm text-gray-500", className)} {...props} />;
  }
);

DrawerDescription.displayName = "DrawerDescription";

interface DrawerFooterProps extends React.HTMLAttributes<HTMLDivElement> {}

export const DrawerFooter = React.forwardRef<HTMLDivElement, DrawerFooterProps>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2 p-6 pt-0", className)}
      {...props}
    />
  );
});

DrawerFooter.displayName = "DrawerFooter";

interface DrawerCloseProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const DrawerClose = React.forwardRef<HTMLButtonElement, DrawerCloseProps>(
  ({ className, onClick, ...props }, ref) => {
    const { setOpen } = useDrawer();

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      setOpen(false);
      onClick?.(e);
    };

    return (
      <button
        ref={ref}
        className={cn("inline-flex items-center justify-center", className)}
        onClick={handleClick}
        {...props}
      />
    );
  }
);

DrawerClose.displayName = "DrawerClose";
