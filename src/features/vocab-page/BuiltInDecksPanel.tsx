import { For } from "solid-js"
import { TextbookSection } from "./TextbookSection"
import type { Textbook, DeckPart } from "./types"

interface BuiltInDecksPanelProps {
  textbooks: Textbook[]
  expandedTextbooks: Set<string>
  expandedChapters: Set<string>
  onToggleTextbook: (textbookId: string) => void
  onToggleChapter: (chapterId: string) => void
  onImportDeck: (deck: DeckPart) => void
  onPlayDeck: (deck: DeckPart) => void
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
        {(textbook) => (
          <TextbookSection
            textbook={textbook}
            isExpanded={props.expandedTextbooks.has(textbook.id)}
            onToggle={() => props.onToggleTextbook(textbook.id)}
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
