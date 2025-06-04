// features/dashboard/components/StrugglesSection.tsx
import { For } from "solid-js"
import { ArrowRight } from "lucide-solid"

interface StrugglesSectionProps {
  struggles: string[]
}

export function StrugglesSection(props: StrugglesSectionProps) {
  return (
    <div class="mb-4">
      <div class="mb-4 flex items-center justify-between pl-8">
        <h2 class="text-muted-foreground text-sm">Your Struggles</h2>
        <ArrowRight class="text-muted-foreground mr-6 h-4 w-4" />
      </div>

      <div class="scrollbar-hide flex gap-3 overflow-x-auto pr-4 pb-2 pl-8">
        <For each={props.struggles}>
          {(struggle) => (
            <div class="bg-card font-japanese text-muted-foreground rounded-2xl px-4 py-[0.66rem] text-[15px] whitespace-nowrap transition-transform hover:scale-[97%]">
              {struggle}
            </div>
          )}
        </For>
      </div>
    </div>
  )
}
