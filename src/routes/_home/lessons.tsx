// src/routes/lessons.tsx
import { createFileRoute, Outlet } from "@tanstack/solid-router"
import { onMount } from "solid-js"
import ContentBox from "@/components/ContentBox"
import { triggerComponentAnimations } from "@/utils/animations"
import { queryKeys } from "@/query/utils/query-keys"

export const Route = createFileRoute("/_home/lessons")({
  loader: async ({ context }) => {
    const { user } = context
    context.queryClient.setQueryData(queryKeys.backgroundSettings(), {
      // blur: 6,
      backgroundOpacityOffset: -0.22,
      showGradient: false,
    })
    return { user }
  },
  onLeave: ({ context }) => {
    // Reset background settings to defaults
    context.queryClient.setQueryData(queryKeys.backgroundSettings(), {
      blur: undefined,
      backgroundOpacityOffset: 0,
      showGradient: true,
    })
  },
  component: LessonsLayout,
})

function LessonsLayout() {
  const { user } = Route.useLoaderData()()

  onMount(() => {
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        triggerComponentAnimations(["[data-lessons-layout]"])
      })
    })
  })

  return (
    <>
      <div class="opacity-0" data-lessons-layout>
        <ContentBox user={user}>
          <Outlet />
        </ContentBox>
      </div>
    </>
  )
}
