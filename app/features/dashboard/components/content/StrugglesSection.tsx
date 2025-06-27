// features/dashboard/components/content/StrugglesSection.tsx
import { For, createSignal } from "solid-js"
import { ArrowRight, ChevronDown } from "lucide-solid"
import { cn } from "@/utils"

interface StrugglesSectionProps {
  struggles: string[]
  variant: "mobile" | "desktop"
}

export function StrugglesSection(props: StrugglesSectionProps) {
  const [visibleCount, setVisibleCount] = createSignal(6)

  const visibleStruggles = () => props.struggles.slice(0, visibleCount())
  const hasMore = () => visibleCount() < props.struggles.length

  const showMore = () => {
    setVisibleCount((prev) => Math.min(prev + 6, props.struggles.length))
  }

  if (props.variant === "mobile") {
    return (
      <div class="mb-4">
        <div class="mb-4 flex items-center justify-between pl-8">
          <h2 class="text-muted-foreground text-sm">Your Struggles</h2>
          <ArrowRight class="text-muted-foreground mr-6 h-4 w-4" />
        </div>
        <div class="scrollbar-hide flex gap-3 overflow-x-auto pr-4 pb-2 pl-8">
          <For each={props.struggles}>
            {(struggle) => (
              <div
                class={cn(
                  "font-japanese relative rounded-2xl px-4 py-[0.66rem] text-[15px] whitespace-nowrap transition-transform hover:scale-[97%]",
                  "bg-purple-100/70 text-purple-500/90 dark:bg-transparent dark:text-purple-400",
                )}
              >
                <div class="via-card absolute inset-0 -z-1 hidden rounded-2xl bg-gradient-to-r from-purple-400/10 to-purple-500/5 dark:block" />
                {struggle}
              </div>
            )}
          </For>
        </div>
      </div>
    )
  }

  // Desktop variant with card grid
  return (
    <div class="flex flex-col">
      <h2 class="mb-4 text-center text-xl font-bold">Your Struggles</h2>

      <div class="flex justify-center">
        <div class="mb-4 grid grid-cols-4 gap-3">
          <For each={visibleStruggles()}>
            {(struggle) => (
              <div
                class={cn(
                  "relative flex flex-col items-center justify-center bg-purple-50/70 px-2 py-3 text-center transition-transform hover:scale-[98%] dark:bg-transparent",
                  "h-32 w-28 rounded-2xl",
                )}
              >
                <div class="via-card absolute inset-0 -z-1 hidden rounded-2xl bg-gradient-to-br from-purple-400/10 to-purple-500/5 dark:block" />
                <h3 class="font-japanese text-base text-purple-500/90 dark:text-purple-400/80">
                  {struggle}
                </h3>
              </div>
            )}
          </For>
        </div>
      </div>

      {hasMore() && (
        <div class="flex justify-center">
          <button
            onClick={showMore}
            class="bg-card hover:bg-card/80 text-muted-foreground rounded-full px-5 py-3 text-sm transition-colors"
          >
            Show more <ChevronDown class="inline h-4 w-4" />
          </button>
        </div>
      )}
    </div>
  )
}
