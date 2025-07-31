import { For, createEffect } from "solid-js"
import { Clock } from "lucide-solid"
import { useLocation } from "@tanstack/solid-router"
import { cn } from "@/utils"
import { useLearnPageData } from "../../context/LearnPageDataContext"
import { usePageTransition } from "@/context/TransitionContext"
import {
  createSlideWithFadeInAnimation,
  prepareElementForEnter,
} from "@/utils/animations"

interface HistoryContentProps {
  variant?: "mobile" | "desktop"
  maxItems?: number
  showAnimation?: boolean
}

export function HistoryContent(props: HistoryContentProps) {
  const { historyItems } = useLearnPageData()
  const location = useLocation()
  const { shouldAnimate, animationTrigger } = usePageTransition()
  const variant = props.variant || "desktop"
  const maxItems = props.maxItems || (variant === "mobile" ? undefined : 4)

  // Animation effect for desktop variant
  createEffect(() => {
    animationTrigger()
    if (location().pathname.includes("/learn") && shouldAnimate() && variant === "desktop") {
      requestAnimationFrame(() => {
        const historyItems = document.querySelectorAll(
          "[data-history-content-item]",
        ) as NodeListOf<HTMLElement>

        historyItems.forEach((item, index) => {
          prepareElementForEnter(item, "left", true)
          setTimeout(() => {
            createSlideWithFadeInAnimation(item, "left", {
              withOpacity: true,
            })
          }, 100 + (index * 50))
        })
      })
    }
  })

  if (variant === "mobile") {
    return (
      <div class="mb-8 px-6">
        <div class="mb-4 flex items-center justify-between">
          <h2 class="text-xl font-bold">Your history</h2>
          <div class="text-muted-foreground mr-8 text-[0.8rem]">Today</div>
        </div>

        <div class="scrollbar-hide flex max-h-60 flex-col gap-3 overflow-y-auto">
          <For each={historyItems}>
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
    <div class="space-y-3">
      <div class="flex items-center gap-2">
        <Clock class="h-5 w-5 text-green-400" />
        <h3 class="text-lg font-semibold">Recent Activity</h3>
      </div>

      <div class="space-y-2">
        <For each={maxItems ? historyItems.slice(0, maxItems) : historyItems}>
          {(item) => <RecentActivityCard item={item} />}
        </For>
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
      data-history-content-item
      class={cn(
        "rounded-lg border border-white/10 p-3",
        "bg-gradient-to-br from-gray-600/10 to-slate-600/5 backdrop-blur-sm",
        "transition-all duration-200 hover:scale-[1.01] hover:shadow-lg",
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

