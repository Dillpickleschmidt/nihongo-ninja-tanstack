import { createFileRoute } from "@tanstack/solid-router"
import { UnsortedView } from "@/features/vocab-page/pages/main/components/UnsortedView"

export const Route = createFileRoute("/_home/vocab/unsorted")({
  component: UnsortedView,
})
