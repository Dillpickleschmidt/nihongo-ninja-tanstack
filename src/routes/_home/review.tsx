import { createFileRoute } from "@tanstack/solid-router"

export const Route = createFileRoute("/_home/review")({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_home/review"!</div>
}
