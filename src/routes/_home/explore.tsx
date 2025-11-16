import { createFileRoute, Outlet } from "@tanstack/solid-router"
import { queryKeys } from "@/query/utils/query-keys"

export const Route = createFileRoute("/_home/explore")({
  loader: ({ context }) => {
    // Set background settings for vocab page
    context.queryClient.setQueryData(queryKeys.backgroundSettings(), {
      blur: 0,
      backgroundOpacityOffset: -1,
      showGradient: false,
    })
    context.queryClient.setQueryData(
      queryKeys.bottomNavClass(),
      "bg-background/90",
    )
  },
  onLeave: ({ context }) => {
    context.queryClient.setQueryData(queryKeys.backgroundSettings(), {
      blur: undefined,
      backgroundOpacityOffset: 0,
      showGradient: true,
    })
    context.queryClient.setQueryData(queryKeys.bottomNavClass(), "")
  },

  component: () => {
    return <Outlet />
  },
})
