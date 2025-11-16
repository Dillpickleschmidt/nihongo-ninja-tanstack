import { splitProps } from "solid-js"
import { cn } from "@/utils"

type StatusVariant =
  | "CURRENT"
  | "PLANNING"
  | "COMPLETED"
  | "PAUSED"
  | "REPEATING"
  | "DROPPED"

interface StatusDotProps {
  variant?: StatusVariant
  class?: string
}

const variantClasses: Record<StatusVariant, string> = {
  CURRENT: "bg-[rgb(61,180,242)]",
  PLANNING: "bg-[rgb(247,154,99)]",
  COMPLETED: "bg-[rgb(123,213,85)]",
  PAUSED: "bg-[rgb(250,122,122)]",
  REPEATING: "bg-[#3baeea]",
  DROPPED: "bg-[rgb(232,93,117)]",
}

export function StatusDot(props: StatusDotProps) {
  const [local, rest] = splitProps(props, ["variant", "class"])

  return (
    <span
      class={cn(
        "me-1 inline-flex h-[0.55rem] w-[0.55rem] rounded-full",
        variantClasses[local.variant ?? "CURRENT"],
        local.class,
      )}
      {...rest}
    />
  )
}
