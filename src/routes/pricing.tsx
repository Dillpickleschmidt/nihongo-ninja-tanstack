import { createFileRoute } from "@tanstack/solid-router"

export const Route = createFileRoute("/pricing")({
  component: PricingPage,
})

function PricingPage() {
  return (
    <main class="min-h-screen bg-zinc-950 px-4 py-24 text-white">
      <div class="mx-auto max-w-3xl">
        <h1 class="text-3xl font-bold">Pricing</h1>
        <p class="mt-4 text-white/60">
          Pricing details for Nihongo Ninja Pro are coming soon.
        </p>
      </div>
    </main>
  )
}
