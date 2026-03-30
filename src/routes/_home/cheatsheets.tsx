import { createFileRoute } from "@tanstack/solid-router"

export const Route = createFileRoute("/_home/cheatsheets")({
  component: CheatsheetsComponent,
})

function CheatsheetsComponent() {
  return (
    <div class="relative min-h-screen text-white">
      <main class="pt-20 pb-32 px-4 md:px-6">
        <div class="mx-auto max-w-4xl">
          <h1 class="text-3xl font-bold">Cheatsheets</h1>
          <p class="mt-2 text-white/50">Coming soon</p>
        </div>
      </main>
    </div>
  )
}
