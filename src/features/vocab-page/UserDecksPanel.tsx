import { For, Show } from "solid-js"
import { BookMarked } from "lucide-solid"
import { DeckCard } from "./DeckCard"
import type { UserDeck } from "./types"

interface UserDecksPanelProps {
  userDecks: UserDeck[]
  onPlayDeck: (deck: UserDeck) => void
  newlyImportedDecks: Set<string>
}

export function UserDecksPanel(props: UserDecksPanelProps) {
  return (
    <>
      <div class="space-y-4">
        <div class="mb-4">
          <p class="text-muted-foreground text-sm">
            Your imported vocabulary decks. Click "Practice" to start studying
            with spaced repetition.
          </p>
        </div>

        <Show
          when={props.userDecks.length > 0}
          fallback={
            <div class="py-12 text-center">
              <BookMarked class="text-muted-foreground mx-auto mb-4 h-12 w-12" />
              <h3 class="mb-2 text-lg font-medium">No decks imported yet</h3>
              <p class="text-muted-foreground text-sm">
                Import decks from the built-in collection to get started
              </p>
            </div>
          }
        >
          <div class="space-y-3 pb-16">
            <For each={props.userDecks}>
              {(deck) => (
                <DeckCard
                  deck={deck}
                  onPlay={props.onPlayDeck}
                  isNewlyImported={props.newlyImportedDecks.has(deck.id)}
                />
              )}
            </For>
          </div>
        </Show>
      </div>

      <div class="border-border fixed right-0 bottom-0 z-20 w-96 p-4">
        <p class="text-muted-foreground text-center text-xs italic">
          Look at the word list before practicing!
        </p>
      </div>
    </>
  )
}
