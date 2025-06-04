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
    <div class="mb-8 px-6 xl:mb-10 xl:px-7">
      <div class="mb-4 flex items-center justify-between xl:mb-5">
        <h2 class="text-xl font-bold xl:text-[22px]">Your history</h2>
        <div class="text-muted-foreground mr-8 text-[0.8rem] xl:mr-10 xl:text-sm">
          Today
        </div>
      </div>

      <div class="scrollbar-hide flex max-h-60 flex-col gap-3 overflow-y-auto xl:max-h-72 xl:gap-4">
        <For each={props.items}>
          {(item) => (
            <div class="bg-card hover:bg-card/90 flex items-center justify-between rounded-2xl p-4 shadow-sm transition-colors xl:rounded-3xl xl:p-5">
              <div class="flex items-center gap-3 xl:gap-4">
                <div
                  class={`h-10 w-10 xl:h-12 xl:w-12 ${item.color} flex items-center justify-center rounded-lg shadow-sm xl:rounded-xl`}
                >
                  <span class="text-lg text-white drop-shadow-sm xl:text-xl">
                    {item.icon}
                  </span>
                </div>
                <span class="text-base font-semibold xl:text-lg">
                  {item.name}
                </span>
              </div>
              <div class="text-base font-semibold xl:text-lg">
                {item.amount < 0 ? "-" : "+"} {Math.abs(item.amount).toFixed(2)}
              </div>
            </div>
          )}
        </For>
      </div>
    </div>
  )
}
