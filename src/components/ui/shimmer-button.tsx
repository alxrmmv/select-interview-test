import React from "react";

import { cn } from "@/lib/utils";

export interface ShimmerButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children?: React.ReactNode;
}

const ShimmerButton = React.forwardRef<HTMLButtonElement, ShimmerButtonProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <button
        className={cn(
          "group relative z-0 flex cursor-pointer items-center justify-center overflow-hidden whitespace-nowrap px-4 py-1 bg-transparent rounded-full text-sm h-8",
          // "transform-gpu transition-transform duration-200 ease-in-out active:translate-y-px",
          className
        )}
        ref={ref}
        {...props}
      >
        {/* spark container */}
        <div
          className={cn(
            "-z-30 blur-[2px]",
            "absolute inset-0 overflow-visible [container-type:size]"
          )}
        >
          {/* spark */}
          <div className="absolute inset-0 h-[100cqh] animate-shimmer-slide [aspect-ratio:1]">
            {/* spark before */}
            <div className="absolute -inset-full w-auto rotate-0 animate-spin-around [background:conic-gradient(from_calc(270deg-45deg),transparent_0,hsl(var(--primary))_90deg,transparent_90deg)]" />
          </div>
        </div>
        {children}
        {/* Highlight */}
        <div
          className={cn(
            "absolute inset-[2px]",
            "rounded-2xl px-4 py-1.5 text-sm font-medium",
            // transition
            "transform-gpu transition-all duration-200 ease-in-out",
            // on hover
            "group-hover:shadow-[inset_0_2px_4px_#ffffff3f]",
            // on click
            "group-active:shadow-[inset_0_4px_8px_#ffffff3f]"
          )}
        />

        {/* backdrop */}
        <div
          className={cn(
            "absolute -z-20 inset-[2px] rounded-full",
            "bg-[radial-gradient(88.41%_100%_at_49.87%_0%,#3B3F5A_0%,#18182B_57.5%)]",
            "shadow-[inset_0px_1px_0px_rgba(255,255,255,0.1)]",
            "backdrop-blur-[7.5px]"
          )}
        />
      </button>
    );
  }
);

ShimmerButton.displayName = "ShimmerButton";

export default ShimmerButton;
