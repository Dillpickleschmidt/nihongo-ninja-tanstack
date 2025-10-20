import Nav from "@/features/homepage/shared/components/Nav"
import { createFileRoute } from "@tanstack/solid-router"

export const Route = createFileRoute("/pricing")({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
      <Nav />
      <div>Not yet implemented.</div>
    </>
  )
}
