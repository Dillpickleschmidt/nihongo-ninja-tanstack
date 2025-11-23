// features/vocab-page/pages/main/VocabCardsContent.tsx
import { For, Switch, Match, createResource } from "solid-js"
import { getVocabularyBySets } from "@/features/supabase/db/core-vocab"
import { dynamic_modules } from "@/data/dynamic_modules"
import { DefaultContent } from "./DefaultContent"
import { VocabularyCard } from "./components/VocabularyCard"
import { getVocabForDeckConverted } from "@/features/supabase/db/deck"

interface VocabCardsContentProps {
  selectedUserDeck: UserDeck | null
}

export function VocabCardsContent(props: VocabCardsContentProps) {
  return (
    <Switch fallback={<DefaultContent />}>
      <Match when={props.selectedUserDeck}>
        <VocabularyPreview selectedDeck={props.selectedUserDeck!} />
      </Match>
    </Switch>
  )
}

interface VocabularyPreviewProps {
  selectedDeck?: UserDeck
}

function VocabularyPreview(props: VocabularyPreviewProps) {
  const deckName = () => props.selectedDeck?.deck_name || ""

  // Get module ID for built-in learning path modules
  const getBuiltInDeckId = () => {
    if (props.selectedDeck?.original_deck_id) {
      return props.selectedDeck.original_deck_id
    }
    return null
  }

  // Load vocabulary with stable caching
  const [vocabularyItems] = createResource(
    () => {
      const builtInId = getBuiltInDeckId()
      if (builtInId) {
        // Use stable built-in ID for caching (survives import process)
        return `builtin:${builtInId}`
      } else if (props.selectedDeck) {
        // Use database ID for user-created decks
        return `deck:${props.selectedDeck.deck_id}`
      }
      return null
    },
    async (deckIdentifier) => {
      if (!deckIdentifier) return []

      const builtInId = getBuiltInDeckId()
      if (builtInId) {
        // Built-in decks: load from vocabulary data via dynamic_modules
        const module = dynamic_modules[builtInId]
        if (!module?.vocab_set_ids) {
          return []
        }
        return getVocabularyBySets(module.vocab_set_ids)
      } else if (props.selectedDeck) {
        // User decks: load from database
        return getVocabForDeckConverted(props.selectedDeck.deck_id)
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
