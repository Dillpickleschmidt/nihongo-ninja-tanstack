import { createFileRoute } from "@tanstack/solid-router"

export const Route = createFileRoute("/_home/practice/sentence-practice")({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Not yet implemented.</div>
}
