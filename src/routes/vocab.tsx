import { createFileRoute } from "@tanstack/solid-router"
import { VocabPage } from "@/features/vocab-page/VocabPage"

export const Route = createFileRoute("/vocab")({
  component: RouteComponent,
})

function RouteComponent() {
  return <VocabPage />
}
