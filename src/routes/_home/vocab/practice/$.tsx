import { createFileRoute } from '@tanstack/solid-router'
import { createResource, createEffect, Show } from 'solid-js'
import { convexQuery, useConvexQuery } from '@/lib/convex-query'
import { api } from 'convex/_generated/api'
import { useVocab } from '@/features/vocab-page/context/VocabContext'
import { resolveDeckFromPath } from '@/features/vocab-page/utils/navigation'
import type { UnifiedDeck } from 'convex/model/decks'

type LoaderResult =
  | { type: 'deck'; deck: UnifiedDeck }
  | { type: 'not-found'; pathSegments: string[] }

export const Route = createFileRoute('/_home/vocab/practice/$')({
  loader: ({ context, params }) => {
    const splat = params._splat
    const pathSegments = splat ? splat.split('/').filter(Boolean) : []

    const foldersAndDecksPromise = context.queryClient.fetchQuery(
      convexQuery(api.api.folders.getAllFoldersAndDecks, {})
    )

    const resolvedPromise: Promise<LoaderResult> = foldersAndDecksPromise.then(
      (foldersAndDecks) => {
        const deck = resolveDeckFromPath(pathSegments, foldersAndDecks.decks)

        if (deck) {
          context.queryClient.prefetchQuery(
            convexQuery(api.api.hierarchy.getVocabHierarchyByDeck, {
              deckId: deck.id,
              deckSource: deck.source,
            })
          )
          return { type: 'deck' as const, deck }
        }

        return { type: 'not-found' as const, pathSegments }
      }
    )

    return { resolvedPromise, pathSegments }
  },
  component: PracticeCatchAll,
})

function PracticeCatchAll() {
  const loaderData = Route.useLoaderData()
  const { decks } = useVocab()

  const [resolved] = createResource(() => loaderData().resolvedPromise)

  const deck = () => {
    const data = resolved()
    if (data?.type === 'deck') return data.deck

    // Guest fallback: check context data (includes sessionStorage guest data)
    if (data?.type === 'not-found') {
      return resolveDeckFromPath(data.pathSegments, decks())
    }

    return null
  }

  const hierarchyQuery = useConvexQuery(
    api.api.hierarchy.getVocabHierarchyByDeck,
    () => ({ deckId: deck()?.id ?? '', deckSource: deck()?.source ?? 'user' }),
    () => ({ enabled: !!deck() })
  )

  // Log data when available
  createEffect(() => {
    const d = deck()
    const h = hierarchyQuery.data()
    if (d && h) {
      console.log('Practice deck:', d)
      console.log('Hierarchy data:', h)
    }
  })

  return (
    <Show
      when={deck()}
      fallback={
        <div class="flex flex-col items-center justify-center py-12">
          <p class="text-muted-foreground text-sm">
            {resolved() ? 'Deck not found' : 'Loading...'}
          </p>
        </div>
      }
    >
      {(d) => (
        <div class="p-6">
          <h1 class="text-xl font-bold">Practice: {d().deckName}</h1>
          <p class="text-muted-foreground">Check console for data</p>
        </div>
      )}
    </Show>
  )
}
