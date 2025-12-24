import { Show } from "solid-js"
import { STATUS_CONFIG, type ItemStatus } from "./status"

export function StatusBadge(props: { status: ItemStatus; class?: string }) {
  return (
    <Show when={props.status}>
      <span
        class={`absolute rounded px-1.5 py-0.5 text-[10px] bg-(--accent)/20 text-(--accent) ${props.class ?? "bottom-1 right-1"}`}
        title="currently stored status"
      >
        {STATUS_CONFIG[props.status!].label}
      </span>
    </Show>
  )
}
