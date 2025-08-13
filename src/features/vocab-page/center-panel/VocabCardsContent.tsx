// features/vocab-page/center-panel/VocabCardsContent.tsx
import { For, Show, Switch, Match, createSignal, createEffect } from "solid-js"
import { getVocabularyForSet } from "@/data/utils/vocab"
import { dynamic_modules } from "@/data/dynamic_modules"
import type { VocabularyItem } from "@/data/types"
import { DefaultContent } from "./DefaultContent"
import { VocabularyCard } from "@/features/vocab-page/components/VocabularyCard"
import { getVocabForDeck } from "@/features/supabase/db/deck-operations"
import type { VocabBuiltInDeck } from "../types"

interface VocabCardsContentProps {
  selectedUserDeck: UserDeck | null
  selectedBuiltInDeck?: VocabBuiltInDeck | null
}

export function VocabCardsContent(props: VocabCardsContentProps) {
  return (
    <Switch fallback={<DefaultContent />}>
      <Match when={props.selectedUserDeck}>
        <VocabularyPreview selectedDeck={props.selectedUserDeck!} />
      </Match>
      <Match when={props.selectedBuiltInDeck}>
        <VocabularyPreview selectedBuiltInDeck={props.selectedBuiltInDeck!} />
      </Match>
    </Switch>
  )
}

interface VocabularyPreviewProps {
  selectedDeck?: UserDeck
  selectedBuiltInDeck?: VocabBuiltInDeck
}

function VocabularyPreview(props: VocabularyPreviewProps) {
  const [vocabularyItems, setVocabularyItems] = createSignal<VocabularyItem[]>(
    [],
  )
  const [isLoading, setIsLoading] = createSignal(false)

  // Get deck name for display
  const deckName = () =>
    props.selectedDeck?.deck_name || props.selectedBuiltInDeck?.title || ""

  // Helper function to load vocabulary with common error handling
  const loadVocabulary = async (loadFn: () => Promise<VocabularyItem[]>) => {
    setIsLoading(true)
    try {
      const vocab = await loadFn()
      setVocabularyItems(vocab)
    } catch (error) {
      console.error("Failed to load vocabulary:", error)
      setVocabularyItems([])
    } finally {
      setIsLoading(false)
    }
  }

  // Load vocabulary when deck changes
  createEffect(async () => {
    if (props.selectedBuiltInDeck) {
      // Handle built-in deck preview
      const module = dynamic_modules[props.selectedBuiltInDeck.id]
      if (!module?.vocab_set_ids) {
        setVocabularyItems([])
        return
      }
      await loadVocabulary(() => getVocabularyForSet(module.vocab_set_ids))
    } else if (props.selectedDeck) {
      const deck = props.selectedDeck

      if (deck.source === "user") {
        await loadVocabulary(() => getVocabForDeck(deck.deck_id))
      } else if (deck.source === "built-in") {
        // Handle imported built-in deck
        const module = dynamic_modules[deck.original_deck_id!]
        if (!module?.vocab_set_ids) {
          setVocabularyItems([])
          return
        }
        await loadVocabulary(() => getVocabularyForSet(module.vocab_set_ids))
      } else {
        setVocabularyItems([])
      }
    }
  })

  return (
    <div class="h-full w-full overflow-y-auto p-6">
      <div class="mb-6 text-center">
        <h2 class="mb-2 text-2xl font-bold">{deckName()}</h2>
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
              No vocabulary items found for this deck.
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
