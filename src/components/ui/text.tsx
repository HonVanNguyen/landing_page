import { cn } from "@/lib/utils";
import React from "react";

const sizes = {
  xs: "md:text-xs",
  sm: "md:text-sm text-xs",
  md: "md:text-base text-sm",
  lg: "md:text-lg text-base",
  xl: "md:text-xl text-lg",
  "2xl": "md:text-2xl text-xl",
  "3xl": "md:text-3xl text-2xl",
  "4xl": "md:text-4xl text-3xl",
  "5xl": "md:text-5xl text-4xl",
  "6xl": "md:text-6xl text-5xl",
  "7xl": "md:text-7xl text-6xl",
};

export type TextProps = Partial<{
  className?: string;
  as?: React.ElementType;
  size?: keyof typeof sizes;
}> &
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
  >;

const Text = ({ className, as, size = "md", ...props }: TextProps) => {
  const Comp = as || "p";

  return (
    <Comp
      className={cn("font-medium tracking-tight", className, sizes[size])}
      {...props}
    />
  );
};

export { Text };
