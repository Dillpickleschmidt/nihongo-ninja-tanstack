import { Show } from "solid-js"
import { STATUS_CONFIG, type ItemStatus } from "./status"

export function StatusBadge(props: { status: ItemStatus }) {
  return (
    <Show when={props.status}>
      <span class="pointer-events-none absolute bottom-1 right-1 rounded px-1.5 py-0.5 text-[10px] bg-(--accent)/20 text-(--accent)">
        {STATUS_CONFIG[props.status!].label}
      </span>
    </Show>
  )
}
