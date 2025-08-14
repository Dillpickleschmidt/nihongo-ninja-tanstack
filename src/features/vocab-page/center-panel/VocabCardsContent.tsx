// features/vocab-page/center-panel/VocabCardsContent.tsx
import { For, Show, Switch, Match, createResource } from "solid-js"
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
  const deckName = () =>
    props.selectedDeck?.deck_name || props.selectedBuiltInDeck?.title || ""

  // Helper to get built-in deck ID for vocabulary loading
  const getBuiltInDeckId = () => {
    if (props.selectedBuiltInDeck) {
      return props.selectedBuiltInDeck.id
    }
    if (
      props.selectedDeck?.source === "built-in" &&
      props.selectedDeck.original_deck_id
    ) {
      return props.selectedDeck.original_deck_id
    }
    return null
  }

  // Load vocabulary data with stable caching - built-in decks use static data, user decks use database
  const [vocabularyItems] = createResource(
    () => {
      const builtInId = getBuiltInDeckId()
      if (builtInId) {
        // Use stable built-in ID for caching (survives import process)
        return `builtin:${builtInId}`
      } else if (props.selectedDeck && props.selectedDeck.deck_id > 0) {
        // Use database ID for user-created decks
        return `deck:${props.selectedDeck.deck_id}`
      }
      return null
    },
    async (deckIdentifier) => {
      if (!deckIdentifier) return []

      // Determine data source based on deck type
      const builtInId = getBuiltInDeckId()
      if (builtInId) {
        // Built-in decks: load from static vocabulary data
        const module = dynamic_modules[builtInId]
        if (!module?.vocab_set_ids) {
          return []
        }
        return getVocabularyForSet(module.vocab_set_ids)
      } else if (props.selectedDeck && props.selectedDeck.deck_id > 0) {
        // User decks: load from database
        return getVocabForDeck(props.selectedDeck.deck_id)
      }
      return []
    },
  )

  return (
    <div class="h-full w-full overflow-y-auto p-6">
      <div class="mb-6 text-center">
        <h2 class="mb-2 text-2xl font-bold">{deckName()}</h2>
        <p class="text-muted-foreground">Vocabulary Preview</p>
      </div>

      <div class="w-full space-y-6">
        {vocabularyItems.loading ? (
          <div class="flex items-center justify-center py-12">
            <div class="text-muted-foreground">Loading vocabulary...</div>
          </div>
        ) : vocabularyItems.error ? (
          <div class="flex items-center justify-center py-12">
            <div class="text-muted-foreground">
              Failed to load vocabulary. Please try again.
            </div>
          </div>
        ) : !vocabularyItems() || vocabularyItems()!.length === 0 ? (
          <div class="flex items-center justify-center py-12">
            <div class="text-muted-foreground">
              No vocabulary items found for this deck.
            </div>
          </div>
        ) : (
          <For each={vocabularyItems()!}>
            {(item, index) => <VocabularyCard item={item} index={index()} />}
          </For>
        )}
      </div>
    </div>
  )
}
