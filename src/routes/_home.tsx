import { BottomNav } from "@/features/navbar/BottomNav"
import { createFileRoute, Outlet } from "@tanstack/solid-router"

export const Route = createFileRoute("/_home")({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
      {/* <h1 class="text-3xl font-bold text-white">Home Page</h1> */}
      <Outlet />
      <div class="fixed bottom-0">
        <BottomNav dailyProgressPercentage={25} />
      </div>
    </>
  )
}
