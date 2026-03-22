import { createFileRoute, Outlet } from "@tanstack/solid-router"
import { queryKeys } from "~/query/query-keys"
import { onMount } from "solid-js"
import { getInitialAnimationStyles, animateElementIn } from "@/utils/animations"

export const Route = createFileRoute("/_home/external-resources")({
  loader: ({ context, preload }) => {
    if (!preload) {
      context.queryClient.setQueryData(queryKeys.backgroundSettings(), {
        blur: 4,
        opacityOffset: -0.28,
        showGradient: false,
      })
    }
  },
  component: ExternalResourcesLayout,
})

function ExternalResourcesLayout() {
  let containerRef: HTMLDivElement | undefined

  onMount(() => {
    if (containerRef) {
      animateElementIn(containerRef, "down")
    }
  })

  return (
    <div ref={containerRef} style={getInitialAnimationStyles("down")}>
      <div class="mx-auto max-w-5xl">
        <Outlet />
      </div>
    </div>
  )
}
