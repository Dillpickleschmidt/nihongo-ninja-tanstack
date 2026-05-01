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
    <div class="flex items-center gap-4 py-4">
      <div
        class="h-9 w-1 rounded-full shrink-0"
        style={{ background: `rgb(${config().color})`, opacity: "0.4" }}
      />
      <div class="flex-1 min-w-0">
        <p class="text-[15px] text-white/80 truncate">
          {formatModuleName(props.modulePath)}
        </p>
        <div class="flex items-center gap-2.5 mt-1">
          <span
            class="text-xs font-medium uppercase tracking-wider"
            style={{ color: `rgba(${config().color}, 0.6)` }}
          >
            {config().label}
          </span>
          <span class="text-xs text-white/20">
            {formatTime(props.lastUpdatedAt)}
          </span>
        </div>
      </div>
      <div class="flex items-center gap-6 shrink-0">
        <div class="text-right">
          <span class="text-lg font-semibold tabular-nums text-white/75">
            {props.progressUnits}
          </span>
          <span class="text-xs text-white/25 ml-1">XP</span>
        </div>
        <div class="text-right">
          <span class="text-lg font-semibold tabular-nums text-white/75">
            {props.questionsAnswered}
          </span>
          <span class="text-xs text-white/25 ml-1">qs</span>
        </div>
      </div>
    </div>
  )
}
