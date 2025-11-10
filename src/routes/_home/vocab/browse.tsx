import { createFileRoute } from "@tanstack/solid-router"
import { BrowseDecksContent } from "@/features/vocab-page/pages/browse/BrowseDecksContent"
import { useVocabPageContext } from "@/features/vocab-page/layout/VocabPageProvider"
import { Route as VocabParentRoute } from "@/routes/_home/vocab"

export const Route = createFileRoute("/_home/vocab/browse")({
  component: RouteComponent,
})

function RouteComponent() {
  const state = useVocabPageContext()
  const parentData = VocabParentRoute.useLoaderData()()

  return (
    <BrowseDecksContent
      user={parentData.user}
      onRefetch={async () => {
        state.refetchFoldersAndDecks()
      }}
      decks={state.userDecks()}
      onDeckPreview={state.handleDeckSelect}
    />
  )
}
