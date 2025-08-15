// features/vocab-page/components/BrowseDecksControls.tsx
import { Show } from "solid-js"
import { Search, TrendingUp, Clock } from "lucide-solid"
import { Button } from "@/components/ui/button"
import { TextField, TextFieldInput } from "@/components/ui/text-field"
import type { SortOption } from "./useBrowseDecks"

interface BrowseDecksControlsProps {
  searchQuery: string
  onSearchChange: (query: string) => void
  sortBy: SortOption
  onSortChange: (sortBy: SortOption) => void
  error: string | null
  onRetry: () => void
}

export function BrowseDecksControls(props: BrowseDecksControlsProps) {
  return (
    <div class="mb-6 space-y-4">
      {/* Search Bar */}
      <div class="relative mx-auto max-w-md">
        <Search class="text-muted-foreground absolute top-1/2 left-3 z-10 h-4 w-4 -translate-y-1/2" />
        <TextField>
          <TextFieldInput
            type="text"
            placeholder="Search decks..."
            value={props.searchQuery}
            onInput={(e) => props.onSearchChange(e.currentTarget.value)}
            class="bg-background/40 border-card-foreground/70 pl-9 backdrop-blur-sm"
          />
        </TextField>
      </div>

      {/* Sort Buttons */}
      <div class="flex justify-center">
        <div class="bg-background/40 border-card-foreground/70 flex rounded-lg border p-1 backdrop-blur-sm">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => props.onSortChange("recent")}
            class={`flex items-center gap-2 rounded-md px-3 py-2 text-xs transition-all ${
              props.sortBy === "recent"
                ? "bg-background/70 text-foreground font-medium shadow backdrop-blur-sm"
                : "text-muted-foreground hover:text-foreground hover:bg-background/50"
            }`}
          >
            <Clock class="h-3.5 w-3.5" />
            Recent
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => props.onSortChange("popular")}
            class={`flex items-center gap-2 rounded-md px-3 py-2 text-xs transition-all ${
              props.sortBy === "popular"
                ? "bg-background/70 text-foreground font-medium shadow backdrop-blur-sm"
                : "text-muted-foreground hover:text-foreground hover:bg-background/50"
            }`}
          >
            <TrendingUp class="h-3.5 w-3.5" />
            Popular
          </Button>
        </div>
      </div>

      {/* Error Display */}
      <Show when={props.error}>
        <div class="mb-6 rounded-lg border border-red-200 bg-red-50 p-4 text-center">
          <p class="text-red-800">Error: {props.error}</p>
          <Button
            variant="outline"
            size="sm"
            onClick={props.onRetry}
            class="mt-2"
          >
            Retry
          </Button>
        </div>
      </Show>
    </div>
  )
}

