import { For } from "solid-js"
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@/components/ui/custom/collapsible"
import { DeckCard } from "./DeckCard"
import type { Chapter, BuiltInDeck } from "./types"

interface ChapterSectionProps {
  chapter: Chapter
  isExpanded: boolean
  onToggle: () => void
  onImportDeck: (deck: BuiltInDeck) => void
  onPlayDeck: (deck: BuiltInDeck) => void
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
            {props.chapter.title}
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
