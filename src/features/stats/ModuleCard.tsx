import { formatModuleName } from "./format-module-name"

interface ModuleCardProps {
  modulePath: string
  moduleType: string
  progressUnits: number
  questionsAnswered: number
  lastUpdatedAt: number
}

const TYPE_CONFIG: Record<string, { label: string; color: string }> = {
  "vocab-practice": { label: "Vocab", color: "147, 197, 253" },
  "sentence-practice": { label: "Sentences", color: "196, 181, 253" },
  "vocab-test": { label: "Test", color: "253, 186, 116" },
}

function getTypeConfig(type: string) {
  return TYPE_CONFIG[type] ?? { label: type, color: "255, 255, 255" }
}

function formatTime(ts: number) {
  return new Date(ts).toLocaleTimeString([], {
    hour: "numeric",
    minute: "2-digit",
  })
}

export function ModuleCard(props: ModuleCardProps) {
  const config = () => getTypeConfig(props.moduleType)

  return (
    <div class="flex items-center gap-3 py-2.5">
      <div
        class="h-7 w-1 rounded-full shrink-0"
        style={{ background: `rgb(${config().color})`, opacity: "0.4" }}
      />
      <div class="flex-1 min-w-0">
        <p class="text-sm text-foreground/80 truncate dark:text-white/80">
          {formatModuleName(props.modulePath)}
        </p>
        <div class="mt-0.5 flex items-center gap-2.5">
          <span
            class="text-xs font-medium uppercase tracking-wider"
            style={{ color: `rgba(${config().color}, 0.6)` }}
          >
            {config().label}
          </span>
          <span class="text-xs text-muted-foreground/70 dark:text-white/20">
            {formatTime(props.lastUpdatedAt)}
          </span>
        </div>
      </div>
      <div class="flex shrink-0 items-center gap-4">
        <div class="text-right">
          <span class="text-base font-semibold tabular-nums text-foreground/75 dark:text-white/75">
            {props.progressUnits}
          </span>
          <span class="text-xs text-muted-foreground ml-1 dark:text-white/25">XP</span>
        </div>
        <div class="text-right">
          <span class="text-base font-semibold tabular-nums text-foreground/75 dark:text-white/75">
            {props.questionsAnswered}
          </span>
          <span class="text-xs text-muted-foreground ml-1 dark:text-white/25">qs</span>
        </div>
      </div>
    </div>
  )
}
