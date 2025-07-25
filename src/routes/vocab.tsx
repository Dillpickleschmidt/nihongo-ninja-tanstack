import { createFileRoute } from "@tanstack/solid-router"

export const Route = createFileRoute("/vocab")({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/vocab"!</div>
}
