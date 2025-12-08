import { createFileRoute, Outlet } from "@tanstack/solid-router"
import { onMount } from "solid-js"
import ContentBox from "@/components/ContentBox"
import { getInitialAnimationStyles, animateElementIn } from "@/utils/animations"

export const Route = createFileRoute("/_home/lessons")({
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
