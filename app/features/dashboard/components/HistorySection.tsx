// features/dashboard/components/HistorySection.tsx
import { For } from "solid-js"

interface HistoryItem {
  name: string
  icon: string
  amount: number
  color: string
}

interface HistorySectionProps {
  items: HistoryItem[]
}

export function HistorySection(props: HistorySectionProps) {
  return (
    <div class="mb-8 px-6">
      <div class="mb-4 flex items-center justify-between">
        <h2 class="text-xl font-bold">Your history</h2>
        <div class="text-muted-foreground mr-8 text-[0.8rem]">Today</div>
      </div>

      <div class="scrollbar-hide flex max-h-60 flex-col gap-3 overflow-y-auto">
        <For each={props.items}>
          {(item) => (
            <div class="bg-card flex items-center justify-between rounded-2xl p-4">
              <div class="flex items-center gap-3">
                <div
                  class={`h-10 w-10 ${item.color} flex items-center justify-center rounded-lg`}
                >
                  <span class="text-lg text-white">{item.icon}</span>
                </div>
                <span class="font-semibold">{item.name}</span>
              </div>
              <div class="font-semibold">
                {item.amount < 0 ? "-" : "+"} {Math.abs(item.amount).toFixed(2)}
              </div>
            </div>
          )}
        </For>
      </div>
    </div>
  )
}
