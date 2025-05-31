// features/dashboard/components/StrugglesSection.tsx
import { For } from "solid-js"
import { ChevronRight } from "lucide-solid"

interface StrugglesSectionProps {
  struggles: string[]
}

export function StrugglesSection(props: StrugglesSectionProps) {
  return (
    <div class="mb-4">
      <div class="mb-4 flex items-center justify-between pl-8">
        <h2 class="text-muted-foreground text-sm">Your Struggles</h2>
        <ChevronRight class="text-muted-foreground mr-5 h-5 w-5" />
      </div>

      <div class="scrollbar-hide flex gap-3 overflow-x-auto pr-4 pb-2 pl-8">
        <For each={props.struggles}>
          {(struggle) => (
            <div class="bg-card font-japanese text-muted-foreground flex-shrink-0 rounded-2xl px-4 py-[0.66rem] text-[15px] whitespace-nowrap">
              {struggle}
            </div>
          )}
        </For>
      </div>
    </div>
  )
}
