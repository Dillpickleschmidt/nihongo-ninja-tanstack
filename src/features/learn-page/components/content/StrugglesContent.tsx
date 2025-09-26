import { For } from "solid-js"
import { Brain } from "lucide-solid"
import { cn } from "@/utils"
import { useLearnPageData } from "../../context/LearnPageDataContext"
import { useAnimationManager } from "@/hooks/useAnimations"

interface StrugglesContentProps {
  variant?: "mobile" | "desktop"
  maxItems?: number
}

export function StrugglesContent(props: StrugglesContentProps) {
  const { struggles } = useLearnPageData()
  const variant = props.variant || "desktop"
  const maxItems = props.maxItems || 4
  const { animateOnDataChange } = useAnimationManager()

  // Centralized animation management - trigger when struggles data changes (desktop only)
  if (variant === "desktop") {
    animateOnDataChange(['[data-animate="struggles"]'], () => struggles)
  }

  if (variant === "mobile") {
    return (
      <div class="px-6">
        <div class="mb-4 flex items-center justify-between">
          <h2 class="text-xl font-bold">Your Struggles</h2>
          <span class="text-muted-foreground text-sm">
            {Math.min(maxItems, struggles.length)} items
          </span>
        </div>

        <div class="space-y-3">
          <For each={struggles.slice(0, maxItems)}>
            {(struggle, index) => (
              <div class="bg-card hover:bg-card/90 flex items-center justify-between rounded-2xl p-4 shadow-sm transition-colors">
                <span class="font-japanese text-base font-semibold">
                  {struggle}
                </span>
                <div class="flex items-center gap-3">
                  <div
                    class={cn(
                      "h-3 w-12 rounded-full",
                      index() < 2 && "bg-red-400/60",
                      index() >= 2 && index() < 4 && "bg-yellow-400/60",
                      index() >= 4 && "bg-green-400/60",
                    )}
                  ></div>
                  <span class="text-muted-foreground min-w-[3rem] text-right text-sm font-medium">
                    {100 - index() * 20}%
                  </span>
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
    <div data-animate="struggles" class="p-4">
      <div class="mb-4 flex items-center justify-between">
        <div class="flex items-center gap-2">
          <Brain class="text-muted-foreground h-5 w-5" />
          <h3 class="font-semibold">Areas to Improve</h3>
        </div>
        <span class="text-muted-foreground text-xs">
          {Math.min(maxItems, struggles.length)} items
        </span>
      </div>

      <div class="space-y-2">
        <For each={struggles.slice(0, maxItems)}>
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
  )
}
