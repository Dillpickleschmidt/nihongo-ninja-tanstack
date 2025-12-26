// src/routes/_home/vocab/$.tsx
import { createFileRoute } from "@tanstack/solid-router"
import { createResource, Match, Switch, Suspense } from "solid-js"
import { convexQuery } from "@/lib/convex-query"
import { api } from "convex/_generated/api"
import { FolderView } from "@/features/vocab-page/pages/main/components/FolderView"
import { DeckView } from "@/features/vocab-page/pages/main/components/DeckView"
import { useVocab } from "@/features/vocab-page/context/VocabContext"
import {
  resolveFolderFromPath,
  resolveDeckFromPath,
} from "@/features/vocab-page/utils/navigation"
import type { UnifiedDeck } from "convex/model/decks"

type LoaderResult =
  | { type: "folder"; folderId: string }
  | { type: "deck"; deck: UnifiedDeck }
  | { type: "not-found"; pathSegments: string[] }

export const Route = createFileRoute("/_home/vocab/$")({
  loader: ({ context, params }) => {
    const splat = params._splat
    const pathSegments = splat ? splat.split("/").filter(Boolean) : []

    const foldersAndDecksPromise = context.queryClient.fetchQuery(
      convexQuery(api.api.folders.getAllFoldersAndDecks, {}),
    )

    // Resolve folder/deck + prefetch hierarchy if needed
    const resolvedPromise: Promise<LoaderResult> = foldersAndDecksPromise.then(
      (foldersAndDecks) => {
        const folder = resolveFolderFromPath(
          pathSegments,
          foldersAndDecks.folders,
        )

        if (folder) {
          return { type: "folder" as const, folderId: folder.id }
        }

        const deck = resolveDeckFromPath(pathSegments, foldersAndDecks.decks)

        if (deck) {
          // Prefetch hierarchy data for both built-in and user decks
          context.queryClient.prefetchQuery(
            convexQuery(api.api.hierarchy.getVocabHierarchyByDeck, {
              deckId: deck.id,
              deckSource: deck.source,
            }),
          )
          return { type: "deck" as const, deck }
        }

        return { type: "not-found" as const, pathSegments }
      },
    )

    return { resolvedPromise, pathSegments }
  },
  component: VocabCatchAll,
})

function VocabCatchAll() {
  const loaderData = Route.useLoaderData()
  const { folders, decks } = useVocab()

  // Create resource from the loader promise
  const [resolved] = createResource(() => loaderData().resolvedPromise)

  // Type-narrowing accessors with guest fallback
  const folderData = () => {
    const data = resolved()
    if (data?.type === "folder") return data

    // Guest fallback: check context data (includes sessionStorage guest data)
    if (data?.type === "not-found") {
      const folder = resolveFolderFromPath(data.pathSegments, folders())
      if (folder) return { type: "folder" as const, folderId: folder.id }
    }

    return null
  }

  const deckData = () => {
    const data = resolved()
    if (data?.type === "deck") return data

    // Guest fallback
    if (data?.type === "not-found") {
      const deck = resolveDeckFromPath(data.pathSegments, decks())
      if (deck) return { type: "deck" as const, deck }
    }

    return null
  }

  return (
    <Suspense
      fallback={
        <div class="flex flex-col items-center justify-center py-12">
          <p class="text-muted-foreground text-sm">Loading...</p>
        </div>
      }
    >
      <Switch
        fallback={
          <div class="flex flex-col items-center justify-center py-12">
            <p class="text-muted-foreground text-sm">Not found</p>
          </div>
        }
      >
        <Match when={folderData()}>
          {(f) => <FolderView folderId={f().folderId} />}
        </Match>
        <Match when={deckData()}>{(d) => <DeckView deck={d().deck} />}</Match>
      </Switch>
    </Suspense>
  )
}
