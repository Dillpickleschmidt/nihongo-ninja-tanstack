import { createFileRoute } from "@tanstack/solid-router"

export const Route = createFileRoute("/_home/progress")({
  component: RouteComponent,
})

function RouteComponent() {
  return <h2 class="mt-12 text-center text-2xl">Coming soon!</h2>
}
