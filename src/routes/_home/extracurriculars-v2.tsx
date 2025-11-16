import { createFileRoute, Outlet } from "@tanstack/solid-router"
import { queryKeys } from "@/query/utils/query-keys"

export const Route = createFileRoute("/_home/extracurriculars-v2")({
  loader: ({ context }) => {
    // Set background settings for vocab page
    context.queryClient.setQueryData(queryKeys.backgroundSettings(), {
      blur: 0,
      backgroundOpacityOffset: -1,
      showGradient: false,
    })
  },
  component: () => {
    return (
      <div class="bg-black">
        <Outlet />
      </div>
    )
  },
})
