import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

type ComponentStageSize = "compact" | "default" | "wide" | "tall"

interface ComponentStageProps {
  children: ReactNode
  size?: ComponentStageSize
  label?: string
}

const sizeClasses: Record<ComponentStageSize, string> = {
  compact: "min-h-36",
  default: "min-h-56",
  wide: "min-h-64",
  tall: "min-h-80",
}

export function ComponentStage({
  children,
  size = "default",
  label = "Live component preview",
}: ComponentStageProps) {
  return (
    <div
      className={cn(
        "relative isolate flex w-full items-center justify-center overflow-hidden rounded-2xl",
        "border border-white/10 bg-[#101923] px-5 py-8 sm:px-8",
        sizeClasses[size],
      )}
      aria-label={label}
    >
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-60"
        aria-hidden="true"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.035) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
          maskImage: "linear-gradient(to bottom, black, transparent 85%)",
        }}
      />
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 size-56 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/10 blur-3xl"
        aria-hidden="true"
      />
      <div className="relative flex w-full items-center justify-center">{children}</div>
    </div>
  )
}
