import * as React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";

const variants = cva("", {
  variants: {
    size: {
      default: "rounded-sm text-base h-12",
      sm: "rounded-2xs text-sm h-8",
    },
  },
  defaultVariants: {
    size: "default",
  },
});

interface BookDemoButtonProps extends VariantProps<typeof variants> {
  className?: string;
}

const BookDemoButton = React.forwardRef<HTMLButtonElement, BookDemoButtonProps>(
  ({ className, size = "default", ...props }, ref) => {
    return (
      <Button
        ref={ref}
        className={cn(variants({ size }), className)}
        {...props}
      >
        Book a Demo
      </Button>
    );
  }
);

BookDemoButton.displayName = "BookDemoButton";

export default BookDemoButton;
