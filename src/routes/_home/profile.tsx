import { createFileRoute } from "@tanstack/solid-router"
import { TourResetDropdown } from "@/features/guided-tour/TourResetDropdown"

export const Route = createFileRoute("/_home/profile")({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div class="container mx-auto p-6">
      <h1 class="mb-6 text-2xl font-bold">Profile</h1>

      <div class="space-y-6">
        <section>
          <h2 class="mb-3 text-lg font-semibold">Tour Management</h2>
          <p class="text-muted-foreground mb-3 text-sm">
            Reset tour progress to start tours over again.
          </p>
          <TourResetDropdown />
        </section>
      </div>
    </div>
  )
}
