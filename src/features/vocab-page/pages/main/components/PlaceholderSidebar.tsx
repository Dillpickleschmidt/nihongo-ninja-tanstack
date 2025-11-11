import { createSignal, For } from "solid-js"
import { Button } from "@/components/ui/button"
import { cn } from "@/utils"

interface PlaceholderSidebarProps {
  class?: string
}

/**
 * Placeholder right sidebar for vocab dashboard
 * Shows struggles/vocabulary to review (placeholder implementation)
 * Will be replaced with real struggles logic later
 */
export function PlaceholderSidebar(props: PlaceholderSidebarProps) {
  const [filterMode, setFilterMode] = createSignal<"global" | "deck">("global")

  // Mock vocabulary items for placeholder
  const mockVocab = [
    { word: "難しい", reading: "むずかしい", meaning: "difficult" },
    { word: "美しい", reading: "うつくしい", meaning: "beautiful" },
    { word: "勇敢", reading: "ゆうかん", meaning: "courageous" },
    { word: "単語", reading: "たんご", meaning: "word" },
  ]

  return (
    <div
      class={cn(
        "border-border/50 bg-card/30 flex h-full flex-col border-l p-4",
        props.class,
      )}
    >
      {/* Header */}
      <div class="mb-4 space-y-3">
        <h3 class="text-foreground text-sm font-semibold">Struggles</h3>

        {/* Filter Toggle */}
        <div class="flex gap-1">
          <Button
            onClick={() => setFilterMode("global")}
            variant={filterMode() === "global" ? "outline" : "ghost"}
            size="sm"
            class="flex-1 text-xs"
          >
            Global
          </Button>
          <Button
            onClick={() => setFilterMode("deck")}
            variant={filterMode() === "deck" ? "outline" : "ghost"}
            size="sm"
            class="flex-1 text-xs"
          >
            Deck
          </Button>
        </div>
      </div>

      {/* Get Extra Practice Button */}
      <Button disabled size="sm" class="mb-4 w-full text-xs" variant="outline">
        Get extra practice
      </Button>

      {/* Placeholder Vocabulary List */}
      <div class="space-y-2">
        <For each={mockVocab}>
          {(item) => (
            <div class="border-border/30 bg-background/50 rounded-md border p-2.5">
              <div class="flex items-start justify-between">
                <div class="flex-1">
                  <p class="text-foreground text-sm font-medium">{item.word}</p>
                  <p class="text-muted-foreground text-xs">{item.reading}</p>
                </div>
              </div>
              <p class="text-muted-foreground mt-1 text-xs">{item.meaning}</p>
            </div>
          )}
        </For>
      </div>

      {/* Placeholder Text */}
      <div class="mt-auto pt-4">
        <p class="text-muted-foreground text-center text-xs">
          Actual struggles coming soon
        </p>
      </div>
    </div>
  )
}
