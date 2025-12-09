// src/routes/_home/vocab/$.tsx
import { createFileRoute } from "@tanstack/solid-router"

export const Route = createFileRoute("/_home/vocab/$")({
  component: VocabCatchAll,
})

function VocabCatchAll() {
  const params = Route.useParams()

  return (
    <div class="flex flex-col items-center justify-center py-12">
      <h1 class="text-2xl font-bold text-neutral-300">Vocab Page</h1>
      <p class="mt-2 text-neutral-500">
        Path: <code class="rounded bg-neutral-800 px-2 py-1">{params["_splat"]}</code>
      </p>
      <p class="mt-4 text-sm text-neutral-600">This route will handle dynamic deck paths</p>
    </div>
  )
}
