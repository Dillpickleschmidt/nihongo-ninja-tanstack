import { createFileRoute } from '@tanstack/solid-router'
import { createSignal, onMount, Show } from 'solid-js'
import { DeckCreationContainer } from '@/features/vocab-page/pages/create/components/DeckCreationContainer'
import { DeckCreationStoreProvider } from '@/features/vocab-page/pages/create/context/DeckCreationStoreContext'
import { useVocab } from '@/features/vocab-page/context/VocabContext'
import type { DeckCreationInitialData } from '@/features/vocab-page/pages/create/stores/deck-creation-store'

export const Route = createFileRoute('/_home/vocab/create')({
  component: RouteComponent,
})

function RouteComponent() {
  const { folders, decks } = useVocab()

  const [deckEditData, setDeckEditData] =
    createSignal<DeckCreationInitialData | null>(null)

  // Only access sessionStorage on the client side
  onMount(() => {
    const savedData = sessionStorage.getItem('vocabPageDeckEdit')
    if (savedData) {
      try {
        const parsed = JSON.parse(savedData)
        setDeckEditData(parsed)
        sessionStorage.removeItem('vocabPageDeckEdit')
      } catch (error) {
        console.error('Failed to parse deck edit data:', error)
      }
    }
  })

  return (
    <Show
      when={deckEditData()}
      keyed
      fallback={
        <DeckCreationStoreProvider initialData={undefined}>
          <DeckCreationContainer folders={folders()} decks={decks()} />
        </DeckCreationStoreProvider>
      }
    >
      {(editData) => (
        <DeckCreationStoreProvider initialData={editData}>
          <DeckCreationContainer folders={folders()} decks={decks()} />
        </DeckCreationStoreProvider>
      )}
    </Show>
  )
}
