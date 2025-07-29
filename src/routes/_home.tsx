import { createFileRoute, Outlet } from "@tanstack/solid-router"

export const Route = createFileRoute("/_home")({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
      {/* <h1 class="text-3xl font-bold text-white">Home Page</h1> */}
      <Outlet />
    </>
  )
}
