import { createFileRoute } from "@tanstack/solid-router"
import { useQueryClient } from "@tanstack/solid-query"
import { queryKeys } from "~/query/query-keys"

export const Route = createFileRoute("/about")({
  component: RouteComponent,
})

function RouteComponent() {
  const queryClient = useQueryClient()
  queryClient.setQueryData(queryKeys.backgroundSettings(), {
    blur: 0,
    opacityOffset: -1,
    showGradient: false,
  })

  return (
    <main>
      <h1>About</h1>
    </main>
  )
}
