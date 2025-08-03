import Nav from "@/features/homepage/Nav"
import { createFileRoute } from "@tanstack/solid-router"

export const Route = createFileRoute("/pricing")({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
      <Nav />
      <div>Hello "/pricing"!</div>
    </>
  )
}
