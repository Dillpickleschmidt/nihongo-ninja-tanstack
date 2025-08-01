// features/vocab-page/user-panel/UserDecksPanel.tsx
import { For, Show, onMount } from "solid-js"
import { BookMarked } from "lucide-solid"
import { UserDeckCard } from "./UserDeckCard"
import type { UserDeck } from "../types"
import { cn } from "@/utils"

interface UserDecksPanelProps {
  userDecks: UserDeck[]
  onPlayDeck: (deck: UserDeck) => void
  newlyImportedDecks: Set<string>
  selectedUserDeck: UserDeck | null
  onSelectDeck: (deck: UserDeck) => void
  onDeselectDeck: () => void
  panelRef?: HTMLDivElement
}

export function UserDecksPanel(props: UserDecksPanelProps) {
  onMount(() => {
    if (props.panelRef) {
      const handleClick = (e: MouseEvent) => {
        const target = e.target as HTMLElement
        const deckCard = target.closest(".deck-card")

        if (!deckCard && props.selectedUserDeck) {
          props.onDeselectDeck()
        }
      }

      props.panelRef.addEventListener("click", handleClick)

      return () => {
        props.panelRef?.removeEventListener("click", handleClick)
      }
    }
  })

  return (
    <>
      <div class="space-y-4">
        <div class="mb-4">
          <p class="text-muted-foreground text-sm">
            Your imported vocabulary decks. Click "Practice" to start studying.
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
                <UserDeckCard
                  deck={deck}
                  onPlay={props.onPlayDeck}
                  isNewlyImported={props.newlyImportedDecks.has(deck.id)}
                  isSelected={props.selectedUserDeck?.id === deck.id}
                  onSelect={props.onSelectDeck}
                  class="deck-card"
                />
              )}
            </For>
          </div>
        </Show>
      </div>
      <div
        class={cn(
          "border-border absolute right-0 bottom-0 z-10 w-96 border-t px-4 py-2.5",
          "bg-card/95 backdrop-blur-sm",
        )}
      >
        <p class="text-muted-foreground text-center text-xs italic">
          Click on a deck to view it. Start practicing when you're ready.
        </p>
      </div>
    </>
  )
}
