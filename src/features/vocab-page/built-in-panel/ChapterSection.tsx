// features/vocab-page/built-in-panel/ChapterSection.tsx
import { For } from "solid-js"
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@/components/ui/custom/collapsible"
import { BuiltInDeckCard } from "./BuiltInDeckCard"
import type { Chapter, VocabBuiltInDeck } from "../types"

interface ChapterSectionProps {
  chapter: Chapter
  isExpanded: boolean
  onToggle: () => void
  onImportDeck: (deck: VocabBuiltInDeck) => void
}

export function ChapterSection(props: ChapterSectionProps) {
  return (
    <div class="mb-3">
      <Collapsible
        open={props.isExpanded}
        onOpenChange={() => props.onToggle()}
      >
        <CollapsibleTrigger class="h-auto w-full justify-start p-2 text-sm font-normal">
          <span class="truncate">{props.chapter.title}</span>
        </CollapsibleTrigger>

        <CollapsibleContent class="mt-2 ml-5 space-y-2">
          <For each={props.chapter.decks}>
            {(deck) => (
              <BuiltInDeckCard
                deck={deck}
                onImport={props.onImportDeck}
                class="text-xs"
              />
            )}
          </For>
        </CollapsibleContent>
      </Collapsible>
    </div>
  )
}
