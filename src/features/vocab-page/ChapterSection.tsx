import { For } from "solid-js"
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@/components/ui/custom/collapsible"
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
      <Collapsible
        open={props.isExpanded}
        onOpenChange={() => props.onToggle()}
      >
        <CollapsibleTrigger class="h-auto w-full justify-start p-2 text-sm font-normal">
          <span class="truncate">
            Ch.{props.chapter.number} - {props.chapter.title}
          </span>
        </CollapsibleTrigger>

        <CollapsibleContent class="mt-2 ml-5 space-y-2">
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
        </CollapsibleContent>
      </Collapsible>
    </div>
  )
}
