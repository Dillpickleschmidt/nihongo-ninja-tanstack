import { For, Show } from "solid-js"

interface DistributionItem {
  moduleType: string
  progressUnits: number
  questionsAnswered: number
}

interface DistributionBarProps {
  data: DistributionItem[] | undefined
  rangeLabel?: string
}

const TYPE_COLORS: Record<string, string> = {
  "vocab-practice": "147, 197, 253",
  "sentence-practice": "196, 181, 253",
  "vocab-test": "253, 186, 116",
}

const TYPE_LABELS: Record<string, string> = {
  "vocab-practice": "Vocab",
  "sentence-practice": "Sentences",
  "vocab-test": "Test",
}

export function DistributionBar(props: DistributionBarProps) {
  const totalUnits = () =>
    props.data?.reduce((sum, d) => sum + d.progressUnits, 0) ?? 0

  return (
    <Show
      when={(props.data?.length ?? 0) > 0}
      fallback={<p class="text-sm text-muted-foreground dark:text-white/30">No activity this week</p>}
    >
      <div class="flex h-2.5 w-full overflow-hidden rounded-full bg-muted/70 dark:bg-white/[0.04]">
        <For each={props.data}>
          {(item) => {
            const pct = () =>
              totalUnits() > 0
                ? (item.progressUnits / totalUnits()) * 100
                : 0
            const color = TYPE_COLORS[item.moduleType] ?? "255, 255, 255"
            return (
              <div
                class="h-full transition-all duration-500 first:rounded-l-full last:rounded-r-full"
                style={{
                  width: `${pct()}%`,
                  background: `rgb(${color})`,
                  opacity: "0.6",
                }}
              />
            )
          }}
        </For>
      </div>

      <div class="mt-3 flex items-start justify-between gap-4">
        <div class="flex flex-wrap gap-x-5 gap-y-2">
          <For each={props.data}>
            {(item) => {
              const color = TYPE_COLORS[item.moduleType] ?? "255, 255, 255"
              const label = TYPE_LABELS[item.moduleType] ?? item.moduleType
              const pct = () =>
                totalUnits() > 0
                  ? Math.round((item.progressUnits / totalUnits()) * 100)
                  : 0
              return (
                <div class="flex items-center gap-2">
                  <div
                    class="h-3 w-3 rounded"
                    style={{ background: `rgb(${color})`, opacity: "0.6" }}
                  />
                  <span class="text-sm text-muted-foreground dark:text-white/50">
                    {label}{" "}
                    <span class="text-foreground/70 font-medium dark:text-white/70 tabular-nums">
                      {pct()}%
                    </span>
                  </span>
                </div>
              )
            }}
          </For>
        </div>

        <Show when={props.rangeLabel}>
          <span class="text-sm text-muted-foreground/70 tabular-nums whitespace-nowrap dark:text-white/20">
            {props.rangeLabel}
          </span>
        </Show>
      </div>
    </Show>
  )
}
