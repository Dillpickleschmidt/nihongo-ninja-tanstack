// features/dashboard/components/layout/RightSidebar.tsx
import { For, createSignal } from "solid-js"
import { Clock, Brain, BarChart3 } from "lucide-solid"
import { cn } from "@/utils"

const MAX_RECENT_ACTIVITIES = 4

interface RightSidebarProps {
  struggles: string[]
  historyItems: Array<{
    name: string
    icon: string
    amount: number
    color: string
  }>
  variant: "mobile" | "desktop"
}

export function RightSidebar(props: RightSidebarProps) {
  const [selectedTimeframe, setSelectedTimeframe] = createSignal("week")

  if (props.variant === "mobile") {
    return (
      <div class="mb-8 px-6">
        <div class="mb-4 flex items-center justify-between">
          <h2 class="text-xl font-bold">Your history</h2>
          <div class="text-muted-foreground mr-8 text-[0.8rem]">Today</div>
        </div>

        <div class="scrollbar-hide flex max-h-60 flex-col gap-3 overflow-y-auto">
          <For each={props.historyItems}>
            {(item) => (
              <div class="bg-card hover:bg-card/90 flex items-center justify-between rounded-2xl p-4 shadow-sm transition-colors">
                <div class="flex items-center gap-3">
                  <div
                    class={`h-10 w-10 ${item.color} flex items-center justify-center rounded-lg shadow-sm`}
                  >
                    <span class="text-lg text-white drop-shadow-sm">
                      {item.icon}
                    </span>
                  </div>
                  <span class="text-base font-semibold">{item.name}</span>
                </div>
                <div class="text-base font-semibold">
                  {item.amount < 0 ? "-" : "+"}{" "}
                  {Math.abs(item.amount).toFixed(2)}
                </div>
              </div>
            )}
          </For>
        </div>
      </div>
    )
  }

  // Desktop variant
  return (
    <div class="space-y-4 pb-3">
      {/* Recent Activity Section */}
      <div class="space-y-3">
        <div class="flex items-center gap-2">
          <Clock class="h-5 w-5 text-green-400" />
          <h3 class="text-lg font-semibold">Recent Activity</h3>
        </div>

        <div class="space-y-2">
          <For each={props.historyItems.slice(0, MAX_RECENT_ACTIVITIES)}>
            {(item) => <RecentActivityCard item={item} />}
          </For>
        </div>
      </div>

      {/* Struggle Areas */}
      <div class="rounded-2xl border border-white/10 bg-gradient-to-br from-red-600/10 to-orange-600/5 p-6 backdrop-blur-sm">
        <div class="mb-4 flex items-center justify-between">
          <div class="flex items-center gap-2">
            <Brain class="h-5 w-5 text-red-400" />
            <h3 class="text-lg font-semibold">Areas to Improve</h3>
          </div>
          <span class="text-muted-foreground text-xs">
            {Math.min(5, props.struggles.length)} items
          </span>
        </div>

        <div class="space-y-2">
          <For each={props.struggles.slice(0, 5)}>
            {(struggle, index) => (
              <div class="flex items-center justify-between rounded-lg bg-white/5 p-2">
                <span class="font-japanese text-sm">{struggle}</span>
                <div class="flex items-center gap-2">
                  <div
                    class={cn(
                      "h-2 w-8 rounded-full",
                      index() < 2 && "bg-red-400/60",
                      index() >= 2 && index() < 4 && "bg-yellow-400/60",
                      index() >= 4 && "bg-green-400/60",
                    )}
                  ></div>
                  <span class="text-muted-foreground text-xs">
                    {100 - index() * 20}%
                  </span>
                </div>
              </div>
            )}
          </For>
        </div>
      </div>

      {/* Study Time Chart */}
      <div class="rounded-2xl border border-white/10 bg-gradient-to-br from-blue-600/10 to-cyan-600/5 p-6 backdrop-blur-sm">
        <div class="mb-4 flex items-center justify-between">
          <div class="flex items-center gap-2">
            <BarChart3 class="h-5 w-5 text-blue-400" />
            <h3 class="text-lg font-semibold">Study Time</h3>
          </div>
          <select
            class="rounded border border-white/20 bg-white/10 px-2 py-1 text-xs"
            value={selectedTimeframe()}
            onChange={(e) => setSelectedTimeframe(e.currentTarget.value)}
          >
            <option value="week">This Week</option>
            <option value="month">This Month</option>
            <option value="year">This Year</option>
          </select>
        </div>

        <div class="space-y-2">
          <For each={["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]}>
            {(day, index) => {
              const hours = [2, 1.5, 3, 0.5, 2.5, 1, 0.5][index()]
              const maxHours = 3
              const percentage = (hours / maxHours) * 100

              return (
                <div class="flex items-center gap-3">
                  <span class="text-muted-foreground w-8 text-xs">{day}</span>
                  <div class="h-3 flex-1 overflow-hidden rounded-full bg-white/10">
                    <div
                      class="h-full rounded-full bg-gradient-to-r from-blue-400 to-cyan-400 transition-all duration-500"
                      style={`width: ${percentage}%`}
                    ></div>
                  </div>
                  <span class="text-muted-foreground w-8 text-xs">
                    {hours}h
                  </span>
                </div>
              )
            }}
          </For>
        </div>

        <div class="mt-4 text-center">
          <div class="text-lg font-bold text-blue-400">11.5 hours</div>
          <div class="text-muted-foreground text-xs">Total this week</div>
        </div>
      </div>
    </div>
  )
}

function RecentActivityCard(props: {
  item: {
    name: string
    icon: string
    amount: number
    color: string
  }
}) {
  return (
    <div
      class={cn(
        "rounded-lg border border-white/10 p-3 backdrop-blur-sm",
        "bg-gradient-to-br transition-all duration-200 hover:scale-[1.01] hover:shadow-lg",
        "from-gray-600/10 to-slate-600/5", // Default gradient
      )}
    >
      <div class="flex items-center gap-3">
        <div
          class={cn(
            "flex h-8 w-8 items-center justify-center rounded-lg",
            props.item.color,
          )}
        >
          <span class="text-sm text-white">{props.item.icon}</span>
        </div>
        <div class="min-w-0 flex-1">
          <div class="text-sm font-medium">{props.item.name}</div>
          <div class="text-muted-foreground text-xs">2 hours ago</div>
        </div>
        <div class="text-sm font-semibold">
          {props.item.amount < 0 ? "-" : "+"}
          {Math.abs(props.item.amount)}
        </div>
      </div>
    </div>
  )
}
