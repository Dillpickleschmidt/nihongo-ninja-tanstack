// src/features/import-page/components/StatusBadge.tsx
import { Show } from "solid-js"
import { Dynamic } from "solid-js/web"
import { getStatusConfig } from "../constants/status-config"
import type { ItemStatus } from "../types"

interface StatusBadgeProps {
  status: ItemStatus
}

export function StatusBadge(props: StatusBadgeProps) {
  const config = () => getStatusConfig(props.status)

  return (
    <Show when={config()}>
      {(cfg) => (
        <div
          class={`flex items-center gap-1.5 rounded border px-2 py-0.5 text-xs font-medium ${cfg().borderColor} ${cfg().bgColor} ${cfg().textColor}`}
        >
          <Dynamic component={cfg().icon} class="size-3.5" />
          <span class="hidden sm:inline">{cfg().label}</span>
        </div>
      )}
    </Show>
  )
}
