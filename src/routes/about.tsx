import { createFileRoute } from "@tanstack/solid-router"
import { queryKeys } from "~/query/query-keys"

export const Route = createFileRoute("/about")({
  loader: ({ context, preload }) => {
    if (!preload) {
      context.queryClient.setQueryData(queryKeys.backgroundSettings(), {
        blur: 0,
        opacityOffset: -1,
        showGradient: false,
      })
    }
  },
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <main>
      <h1>About</h1>
    </main>
  )
}
