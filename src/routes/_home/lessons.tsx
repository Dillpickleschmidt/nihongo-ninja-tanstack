import { createFileRoute, Outlet } from "@tanstack/solid-router"
import { queryKeys } from "~/query/query-keys"
import { onMount } from "solid-js"
import ContentBox from "@/components/ContentBox"
import { getInitialAnimationStyles, animateElementIn } from "@/utils/animations"

export const Route = createFileRoute("/_home/lessons")({
  loader: ({ context, preload }) => {
    if (!preload) {
      context.queryClient.setQueryData(queryKeys.backgroundSettings(), {
        blur: 4,
        opacityOffset: -0.28,
        showGradient: false,
      })
    }
  },
  component: LessonsLayout,
})

function LessonsLayout() {
  let containerRef: HTMLDivElement | undefined

  onMount(() => {
    if (containerRef) {
      animateElementIn(containerRef, "down")
    }
  })

  return (
    <div ref={containerRef} style={getInitialAnimationStyles("down")}>
      <ContentBox>
        <Outlet />
      </ContentBox>
    </div>
  )
}
