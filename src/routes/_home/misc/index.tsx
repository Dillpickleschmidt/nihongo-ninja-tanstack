import { createFileRoute } from "@tanstack/solid-router"

export const Route = createFileRoute("/_home/misc/")({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_home/misc/"!</div>
}
