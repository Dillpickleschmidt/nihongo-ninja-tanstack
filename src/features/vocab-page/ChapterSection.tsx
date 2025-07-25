import { For, Show } from "solid-js"
import { ChevronDown, ChevronRight } from "lucide-solid"
import { Button } from "@/components/ui/button"
import { DeckCard } from "./DeckCard"
import type { Chapter, DeckPart } from "./types"

interface ChapterSectionProps {
  chapter: Chapter
  isExpanded: boolean
  onToggle: () => void
  onImportDeck: (deck: DeckPart) => void
  onPlayDeck: (deck: DeckPart) => void
}

export function ChapterSection(props: ChapterSectionProps) {
  return (
    <div class="mb-3">
      <Button
        variant="ghost"
        class="h-auto w-full justify-start p-2 text-sm font-normal"
        onClick={props.onToggle}
      >
        <div class="flex items-center gap-2">
          {props.isExpanded ? (
            <ChevronDown class="h-3 w-3" />
          ) : (
            <ChevronRight class="h-3 w-3" />
          )}
          <span class="truncate">
            Ch.{props.chapter.number} - {props.chapter.title}
          </span>
        </div>
      </Button>

      <Show when={props.isExpanded}>
        <div class="mt-2 ml-5 space-y-2">
          <For each={props.chapter.parts}>
            {(part) => (
              <DeckCard
                deck={part}
                onImport={props.onImportDeck}
                onPlay={props.onPlayDeck}
                class="text-xs"
              />
            )}
          </For>
        </div>
      </Show>
    </div>
  )
}

