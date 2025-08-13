// features/vocab-page/center-panel/VocabCardsContent.tsx
import { For, Show, createSignal, createEffect } from "solid-js"
import { getVocabularyForSet } from "@/data/utils/vocab"
import { dynamic_modules } from "@/data/dynamic_modules"
import type { VocabularyItem } from "@/data/types"
import { DefaultContent } from "./DefaultContent"
import { VocabularyCard } from "@/features/vocab-page/components/VocabularyCard"
import { getVocabForDeck } from "@/features/supabase/db/deck-operations"

interface VocabCardsContentProps {
  selectedUserDeck: UserDeck | null
}

export function VocabCardsContent(props: VocabCardsContentProps) {
  return (
    <Show when={props.selectedUserDeck} fallback={<DefaultContent />}>
      {(deck) => <VocabularyPreview selectedDeck={deck()} />}
    </Show>
  )
}

interface VocabularyPreviewProps {
  selectedDeck: UserDeck
}

function VocabularyPreview(props: VocabularyPreviewProps) {
  const [vocabularyItems, setVocabularyItems] = createSignal<VocabularyItem[]>(
    [],
  )
  const [isLoading, setIsLoading] = createSignal(false)

  // Load vocabulary when deck changes
  createEffect(async () => {
    const deck = props.selectedDeck

    // Only load vocabulary from dynamic modules for built-in decks
    if (deck.source !== "built-in") {
      if (deck.source === "user") {
        // directly use the db data (no dynamic modules)
        const vocab = await getVocabForDeck(deck.deck_id)
        setVocabularyItems(vocab)
        return
      }
      setVocabularyItems([])
      return
    }

    // Use the original built-in deck ID for vocabulary lookup
    const originalDeckId = deck.original_deck_id!
    const module = dynamic_modules[originalDeckId]

    if (!module || !module.vocab_set_ids) {
      setVocabularyItems([])
      return
    }

    setIsLoading(true)
    try {
      const vocab = await getVocabularyForSet(module.vocab_set_ids)
      setVocabularyItems(vocab)
    } catch (error) {
      console.error("Failed to load vocabulary:", error)
      setVocabularyItems([])
    } finally {
      setIsLoading(false)
    }
  })

  return (
    <div class="h-full w-full overflow-y-auto p-6">
      <div class="mb-6 text-center">
        <h2 class="mb-2 text-2xl font-bold">{props.selectedDeck.deck_name}</h2>
        <p class="text-muted-foreground">Vocabulary Preview</p>
      </div>

      <div class="w-full space-y-6">
        {isLoading() ? (
          <div class="flex items-center justify-center py-12">
            <div class="text-muted-foreground">Loading vocabulary...</div>
          </div>
        ) : vocabularyItems().length === 0 ? (
          <div class="flex items-center justify-center py-12">
            <div class="text-muted-foreground">
              {props.selectedDeck.source === "built-in"
                ? "No vocabulary items found for this deck."
                : `${props.selectedDeck.source} deck vocabulary loading not yet implemented.`}
            </div>
          </div>
        ) : (
          <For each={vocabularyItems()}>
            {(item, index) => <VocabularyCard item={item} index={index()} />}
          </For>
        )}
      </div>
    </div>
  )
}
