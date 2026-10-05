import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

export function Container({
  className,
  ...props
}: ComponentPropsWithoutRef<"div">) {
  return (
    <div
      className={cn("mx-auto w-full max-w-[1360px] px-5 sm:px-8 lg:px-16", className)}
      {...props}
    />
  );
}
