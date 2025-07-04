// features/dashboard/components/StrugglesSection.tsx
import { For, createSignal } from "solid-js"
import { ArrowRight, ChevronDown } from "lucide-solid"
import { SmoothCard } from "./SmoothCard"
import { cn } from "@/utils/util"

interface StrugglesSectionProps {
  struggles: string[]
  variant?: "mobile" | "desktop"
}

function StruggleCard(props: { struggle: string }) {
  return (
    <SmoothCard
      width={110}
      height={130}
      scales={{ xl: 1.1 }}
      class={cn(
        "relative flex flex-col items-center justify-center bg-purple-50/70 px-2 py-3 text-center transition-transform hover:scale-[98%] xl:px-3 xl:py-4 dark:bg-transparent",
      )}
    >
      <div class="via-card absolute inset-0 -z-1 hidden bg-gradient-to-br from-purple-400/10 to-purple-500/5 dark:block" />
      <h3 class="font-japanese text-base text-purple-500/90 xl:text-[17px] dark:text-purple-400/80">
        {props.struggle}
      </h3>
    </SmoothCard>
  )
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
          <h2 class="text-muted-foreground text-sm xl:text-base">
            Your Struggles
          </h2>
          <ArrowRight class="text-muted-foreground mr-6 h-4 w-4 xl:h-5 xl:w-5" />
        </div>
        <div class="scrollbar-hide flex gap-3 overflow-x-auto pr-4 pb-2 pl-8 xl:gap-4">
          <For each={props.struggles}>
            {(struggle) => (
              <div
                class={cn(
                  "font-japanese relative rounded-2xl px-4 py-[0.66rem] text-[15px] whitespace-nowrap transition-transform hover:scale-[97%] xl:px-5 xl:py-3 xl:text-base",
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
      <h2 class="mb-4 text-center text-xl font-bold xl:mb-5 xl:text-[22px]">
        Your Struggles
      </h2>

      {/* 3x2 Grid */}
      <div class="flex justify-center">
        <div class="mb-4 grid grid-cols-4 gap-3 xl:mb-5 xl:gap-4">
          <For each={visibleStruggles()}>
            {(struggle) => <StruggleCard struggle={struggle} />}
          </For>
        </div>
      </div>

      {/* Show More Button */}
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
