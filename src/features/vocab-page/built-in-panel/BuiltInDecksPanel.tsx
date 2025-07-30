// features/vocab-page/built-in-panel/BuiltInDecksPanel.tsx
import { For } from "solid-js"
import { TextbookSection } from "./TextbookSection"
import type { VocabBuiltInDeck, VocabTextbook } from "../types"
import type { TextbookIDEnum } from "@/data/types"

interface BuiltInDecksPanelProps {
  textbooks: [TextbookIDEnum, VocabTextbook][]
  expandedTextbooks: Set<string>
  expandedChapters: Set<string>
  onToggleTextbook: (textbookId: string) => void
  onToggleChapter: (chapterId: string) => void
  onImportDeck: (deck: VocabBuiltInDeck) => void
  onPlayDeck: (deck: VocabBuiltInDeck) => void
}

export function BuiltInDecksPanel(props: BuiltInDecksPanelProps) {
  return (
    <div class="space-y-2">
      <div class="mb-4">
        <p class="text-muted-foreground text-sm">
          Browse decks by textbook and chapter. Import to your collection to
          start practicing.
        </p>
      </div>

      <For each={props.textbooks}>
        {([textbookId, textbook]) => (
          <TextbookSection
            textbook={textbook}
            isExpanded={props.expandedTextbooks.has(textbookId)}
            onToggle={() => props.onToggleTextbook(textbookId)}
            expandedChapters={props.expandedChapters}
            onToggleChapter={props.onToggleChapter}
            onImportDeck={props.onImportDeck}
            onPlayDeck={props.onPlayDeck}
          />
        )}
      </For>
    </div>
  )
}
