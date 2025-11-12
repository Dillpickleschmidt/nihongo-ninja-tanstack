import { createFileRoute } from "@tanstack/solid-router"
import { VocabDashboard } from "@/features/vocab-page/pages/main/components/VocabDashboard"
import { useVocabPageContext } from "@/features/vocab-page/layout/VocabPageContext"

export const Route = createFileRoute("/_home/vocab/")({
  component: RouteComponent,
})

function RouteComponent() {
  const state = useVocabPageContext()

  return (
    <div class="w-full px-6 py-8">
      <VocabDashboard onSelectDeck={state.handleDeckSelect} />
    </div>
  )
}
