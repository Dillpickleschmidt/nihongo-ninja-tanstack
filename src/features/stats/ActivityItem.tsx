import { formatModuleName } from "./format-module-name"

interface ActivityItemProps {
  modulePath: string
  moduleType: string
  progressUnits: number
  questionsAnswered: number
  lastUpdatedAt: number
}

const TYPE_COLORS: Record<string, string> = {
  "vocab-practice": "147, 197, 253",
  "sentence-practice": "196, 181, 253",
  "vocab-test": "253, 186, 116",
}

function formatRelativeTime(ts: number) {
  const diff = Date.now() - ts
  const minutes = Math.floor(diff / 60000)
  if (minutes < 1) return "just now"
  if (minutes < 60) return `${minutes}m ago`
  const hours = Math.floor(minutes / 60)
  if (hours < 24) return `${hours}h ago`
  const days = Math.floor(hours / 24)
  return `${days}d ago`
}

export function ActivityItem(props: ActivityItemProps) {
  const color = () => TYPE_COLORS[props.moduleType] ?? "255, 255, 255"

  return (
    <div class="flex items-center gap-2.5 py-1.5">
      <div
        class="h-2 w-2 rounded-full shrink-0"
        style={{ background: `rgb(${color()})`, opacity: "0.5" }}
      />
      <span class="flex-1 truncate text-sm text-foreground/70 dark:text-white/60">
        {formatModuleName(props.modulePath)}
      </span>
      <span class="shrink-0 text-xs tabular-nums text-muted-foreground dark:text-white/40">
        {props.progressUnits} XP
      </span>
      <span class="text-xs text-muted-foreground/70 tabular-nums shrink-0 w-16 text-right dark:text-white/25">
        {formatRelativeTime(props.lastUpdatedAt)}
      </span>
    </div>
  )
}
