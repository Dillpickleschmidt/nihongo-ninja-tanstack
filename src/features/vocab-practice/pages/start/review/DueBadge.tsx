import { Show } from "solid-js"

type DueBadgeProps = {
  isDue: boolean
  dueDate?: string | Date
  isLoading?: boolean
  variant?: "indigo" | "purple" | "amber"
}

export function DueBadge(props: DueBadgeProps) {
  const variant = () => props.variant || "indigo"

  const colors = () => {
    switch (variant()) {
      case "purple":
        return "bg-purple-500/20 text-purple-300"
      case "amber":
        return "bg-amber-500/20 text-amber-500"
      default:
        return "bg-indigo-500/20 text-indigo-300"
    }
  }

  const loadingColor = () => {
    switch (variant()) {
      case "purple":
        return "bg-purple-500/20"
      case "amber":
        return "bg-amber-500/20"
      default:
        return "bg-indigo-500/20"
    }
  }

  return (
    <Show
      when={!props.isLoading}
      fallback={
        <span class={`inline-flex h-[20px] w-[40px] rounded-full ${loadingColor()}`} />
      }
    >
      <Show when={props.isDue}>
        <div class="ml-2 flex flex-col items-end gap-1">
          <span class={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-semibold uppercase ${colors()}`}>
            Due
          </span>
          <Show when={props.dueDate}>
            <div class="text-muted-foreground text-[11px]">
              {new Date(props.dueDate!).toLocaleDateString(undefined, {
                weekday: "short",
                month: "short",
                day: "numeric",
              })}
            </div>
          </Show>
        </div>
      </Show>
    </Show>
  )
}
