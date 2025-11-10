import { createFileRoute } from "@tanstack/solid-router"
import { createSignal, Show } from "solid-js"
import { DeckCreationContainer } from "@/features/vocab-page/pages/create/components/DeckCreationContainer"
import { DeckCreationStoreProvider } from "@/features/vocab-page/pages/create/context/DeckCreationStoreContext"
import { useVocabPageContext } from "@/features/vocab-page/layout/VocabPageProvider"
import type { DeckCreationInitialData } from "@/features/vocab-page/pages/create/stores/deck-creation-store"

export const Route = createFileRoute("/_home/vocab/create")({
  component: RouteComponent,
})

function RouteComponent() {
  const state = useVocabPageContext()

  // Check for edit data in sessionStorage
  const [deckEditData, setDeckEditData] =
    createSignal<DeckCreationInitialData | null>(null)

  // Try to load deck edit data from sessionStorage on mount
  const savedData = sessionStorage.getItem("vocabPageDeckEdit")
  if (savedData && !deckEditData()) {
    try {
      const parsed = JSON.parse(savedData)
      setDeckEditData(parsed)
      sessionStorage.removeItem("vocabPageDeckEdit")
    } catch (error) {
      console.error("Failed to parse deck edit data:", error)
    }
  }

  return (
    <Show
      when={deckEditData()}
      keyed
      fallback={
        <DeckCreationStoreProvider initialData={undefined}>
          <DeckCreationContainer
            folders={state.folders()}
            decks={state.userDecks()}
            onRefetch={async () => {
              state.refetchFoldersAndDecks()
            }}
            onNavigateToDeck={state.handleDeckSelect}
          />
        </DeckCreationStoreProvider>
      }
    >
      {(editData) => (
        <DeckCreationStoreProvider initialData={editData}>
          <DeckCreationContainer
            folders={state.folders()}
            decks={state.userDecks()}
            onRefetch={async () => {
              state.refetchFoldersAndDecks()
            }}
            onNavigateToDeck={state.handleDeckSelect}
          />
        </DeckCreationStoreProvider>
      )}
    </Show>
  )
}
