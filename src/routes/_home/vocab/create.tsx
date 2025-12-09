import { createFileRoute } from '@tanstack/solid-router'
import { convexQuery } from '@/lib/convex-query'
import { api } from 'convex/_generated/api'
import { authQueryOptions } from '@/query/query-options'
import { DeckCreationContainer } from '@/features/vocab-page/pages/create/components/DeckCreationContainer'
import { DeckCreationStoreProvider } from '@/features/vocab-page/pages/create/context/DeckCreationStoreContext'
import { useVocab } from '@/features/vocab-page/context/VocabContext'

export const Route = createFileRoute('/_home/vocab/create')({
  loader: ({ context }) => {
    const auth = context.queryClient.getQueryData(authQueryOptions().queryKey)
    if (auth?.session?.user) {
      // Prefetch folders and decks for authenticated users
      context.queryClient.prefetchQuery(
        convexQuery(api.api.folders.getAllFoldersAndDecks, {})
      )
    }
  },
  component: RouteComponent,
})

function RouteComponent() {
  const { folders, decks } = useVocab()

  return (
    <DeckCreationStoreProvider initialData={undefined}>
      <DeckCreationContainer folders={folders()} decks={decks()} />
    </DeckCreationStoreProvider>
  )
}
