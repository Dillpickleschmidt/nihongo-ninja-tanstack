import { createFileRoute } from "@tanstack/solid-router"

export const Route = createFileRoute("/_home/conjugation")({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_home/conjugation"!</div>
}
