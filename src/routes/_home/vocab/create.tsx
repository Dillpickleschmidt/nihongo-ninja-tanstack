// src/routes/_home/vocab/create.tsx
import { createFileRoute } from "@tanstack/solid-router"

export const Route = createFileRoute("/_home/vocab/create")({
  component: CreateDeck,
})

function CreateDeck() {
  return (
    <div class="flex flex-col items-center justify-center py-12">
      <h1 class="text-2xl font-bold text-neutral-300">Create Deck</h1>
      <p class="mt-2 text-neutral-500">Coming Soon</p>
    </div>
  )
}
