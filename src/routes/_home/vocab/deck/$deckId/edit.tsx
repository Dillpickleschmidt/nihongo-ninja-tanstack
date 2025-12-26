import { createFileRoute } from "@tanstack/solid-router"
import { Show } from "solid-js"
import { convexQuery, useConvexQuery } from "@/lib/convex-query"
import { api } from "convex/_generated/api"
import type { Id } from "convex/_generated/dataModel"
import { authQueryOptions } from "@/query/query-options"
import { getUser } from "@/lib/auth"
import { DeckCreationContainer } from "@/features/vocab-page/pages/create/components/DeckCreationContainer"
import { DeckCreationStoreProvider } from "@/features/vocab-page/pages/create/context/DeckCreationStoreContext"
import { useVocab } from "@/features/vocab-page/context/VocabContext"
import type { DeckEditData } from "@/features/vocab-page/pages/create/stores/deck-creation-store"

export const Route = createFileRoute("/_home/vocab/deck/$deckId/edit")({
  loader: ({ context, params }) => {
    const auth = context.queryClient.getQueryData(authQueryOptions().queryKey)
    if (auth?.session?.user) {
      context.queryClient.prefetchQuery(
        convexQuery(api.api.decks.getDeckWithVocab, {
          deckId: params.deckId as Id<"userDecks">,
        }),
      )
    }
  },
  component: DeckEditComponent,
})

function DeckEditComponent() {
  const params = Route.useParams()
  const { folders, decks } = useVocab()
  const user = getUser()

  // For authenticated users: fetch from Convex
  const deckQuery = useConvexQuery(
    api.api.decks.getDeckWithVocab,
    () => ({ deckId: params().deckId as Id<"userDecks"> }),
    () => ({ enabled: !!user() }),
  )

  // TODO: Add guest user support (sessionStorage lookup)

  // Pass DB data directly - only add folderName for UI display
  const editData = (): DeckEditData | null => {
    const data = deckQuery.data()
    if (!data?.deck) return null

    const folder = data.deck.folderId
      ? folders().find((f) => f.id === data.deck!.folderId)
      : null

    return {
      deck: data.deck,
      vocabItems: data.vocabItems,
      folderName: folder?.folderName,
    }
  }

  return (
    <Show
      when={editData()}
      fallback={
        <Show
          when={deckQuery.isLoading()}
          fallback={
            <div class="flex flex-col items-center justify-center py-12">
              <p class="text-muted-foreground text-sm">Deck not found</p>
            </div>
          }
        >
          <div class="flex flex-col items-center justify-center py-12">
            <p class="text-muted-foreground text-sm">Loading deck...</p>
          </div>
        </Show>
      }
    >
      {(data) => (
        <DeckCreationStoreProvider initialData={data()}>
          <DeckCreationContainer folders={folders()} decks={decks()} />
        </DeckCreationStoreProvider>
      )}
    </Show>
  )
}
