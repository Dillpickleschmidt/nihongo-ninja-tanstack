// src/routes/_home/vocab/browse.tsx
import { createFileRoute } from "@tanstack/solid-router"

export const Route = createFileRoute("/_home/vocab/browse")({
  component: BrowseDecks,
})

function BrowseDecks() {
  return (
    <div class="flex flex-col items-center justify-center py-12">
      <h1 class="text-2xl font-bold text-neutral-300">Browse Decks</h1>
      <p class="mt-2 text-neutral-500">Coming Soon</p>
    </div>
  )
}
