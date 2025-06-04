// features/dashboard/components/StrugglesSection.tsx
import { For, createSignal } from "solid-js"
import { ArrowRight, ChevronDown } from "lucide-solid"
import { SmoothCard } from "./SmoothCard"

interface StrugglesSectionProps {
  struggles: string[]
  variant?: "mobile" | "desktop"
}

function StruggleCard(props: { struggle: string }) {
  return (
    <SmoothCard
      width={120}
      height={140}
      scales={{ xl: 1.1 }}
      class="flex flex-col items-center justify-center px-2 py-3 text-center transition-transform hover:scale-[98%] xl:px-3 xl:py-4"
    >
      <h3 class="font-japanese text-muted-foreground text-base xl:text-lg">
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
    // Keep original mobile design
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
              <div class="bg-card font-japanese text-muted-foreground rounded-2xl px-4 py-[0.66rem] text-[15px] whitespace-nowrap transition-transform hover:scale-[97%] xl:px-5 xl:py-3 xl:text-base">
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
      <h2 class="mb-4 text-center text-xl font-bold xl:mb-5 xl:text-2xl">
        Your Struggles
      </h2>

      {/* 3x2 Grid */}
      <div class="flex justify-center">
        <div class="mb-4 grid grid-cols-3 gap-3 xl:mb-5 xl:gap-4">
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
            class="bg-card hover:bg-card/80 text-muted-foreground rounded-full px-4 py-2 text-sm transition-colors xl:px-5 xl:py-3 xl:text-base"
          >
            Show more <ChevronDown class="inline h-4 w-4 xl:h-5 xl:w-5" />
          </button>
        </div>
      )}
    </div>
  )
}
