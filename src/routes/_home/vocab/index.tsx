import { createFileRoute } from "@tanstack/solid-router"
import { VocabCardsContent } from "@/features/vocab-page/pages/main/VocabCardsContent"
import { useVocabPageContext } from "@/features/vocab-page/layout/VocabPageProvider"

export const Route = createFileRoute("/_home/vocab/")({
  component: RouteComponent,
})

function RouteComponent() {
  const state = useVocabPageContext()

  return <VocabCardsContent selectedUserDeck={state.selectedUserDeck()} />
}
