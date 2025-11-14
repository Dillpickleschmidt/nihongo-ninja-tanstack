import { queryKeys } from "@/query/utils/query-keys"
import { createFileRoute } from "@tanstack/solid-router"

export const Route = createFileRoute("/_home/extracurriculars")({
  loader: async ({ context }) => {
    context.queryClient.setQueryData(queryKeys.backgroundSettings(), {
      // blur: 6,
      backgroundOpacityOffset: -0.32,
      showGradient: false,
    })
  },
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_home/extracurriculars"!</div>
}
