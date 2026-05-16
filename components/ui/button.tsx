import * as React from "react";
import { cn } from "../../lib/utils";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: "default" | "outline" };
export function Button({ className, variant = "default", ...props }: ButtonProps) {
  return <button className={cn("inline-flex items-center justify-center font-medium transition disabled:pointer-events-none disabled:opacity-50", variant === "outline" && "border", className)} {...props} />;
}
