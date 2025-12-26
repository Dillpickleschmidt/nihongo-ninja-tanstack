import type { JSX } from "solid-js"
import { Button } from "@/components/ui/button"
import { cn } from "@/utils"
import { STATUS_CONFIG, type ItemStatus } from "./status"

const STATUS_ICONS: Record<
  Exclude<ItemStatus, null>,
  (props: JSX.SvgSVGAttributes<SVGSVGElement>) => JSX.Element
> = {
  learning: (props) => (
    <svg
      {...props}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      stroke-width="2"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
      />
    </svg>
  ),
  decent: (props) => (
    <svg
      {...props}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      stroke-width="2"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  ),
  mastered: (props) => (
    <svg
      {...props}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      stroke-width="2"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
      />
    </svg>
  ),
}

const COLOR_CLASSES = {
  amber: {
    base: "border-amber-500/30 bg-amber-500/10 text-amber-400",
    hover: "hover:bg-amber-500/20 hover:text-amber-300",
  },
  sky: {
    base: "border-sky-500/30 bg-sky-500/10 text-sky-400",
    hover: "hover:bg-sky-500/20 hover:text-sky-300",
  },
  emerald: {
    base: "border-emerald-500/30 bg-emerald-500/10 text-emerald-400",
    hover: "hover:bg-emerald-500/20 hover:text-emerald-300",
  },
} as const

interface StatusButtonProps {
  status: Exclude<ItemStatus, null>
  onClick: () => void
  class?: string
}

export function StatusButton(props: StatusButtonProps) {
  const config = () => STATUS_CONFIG[props.status]
  const Icon = STATUS_ICONS[props.status]
  const colorClass = () => COLOR_CLASSES[config().color]

  return (
    <Button
      variant="ghost"
      class={cn(
        "h-9 gap-1.5 px-3 border",
        colorClass().base,
        colorClass().hover,
        props.class,
      )}
      onClick={props.onClick}
      title={config().tooltip}
    >
      <Icon class="size-4 shrink-0" />
      <span class="truncate">{config().label}</span>
    </Button>
  )
}

/** Clear status button for manual mode */
export function ClearStatusButton(props: {
  onClick: () => void
  class?: string
}) {
  return (
    <Button
      variant="ghost"
      class={cn(
        "h-9 gap-1.5 px-3 border border-white/10 text-white/60 hover:bg-white/10 hover:text-white",
        props.class,
      )}
      onClick={props.onClick}
      title="Clear status override"
    >
      <svg
        class="size-4 shrink-0"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
      <span class="truncate">Clear</span>
    </Button>
  )
}
