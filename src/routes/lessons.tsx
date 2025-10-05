// src/routes/lessons.tsx
import { createFileRoute, Outlet } from "@tanstack/solid-router"
import { createSignal, onMount } from "solid-js"
import ContentBox from "@/components/ContentBox"
import { useAnimationManager } from "@/hooks/useAnimations"
import { useCustomQuery } from "@/hooks/useCustomQuery"
import { userSettingsQueryOptions } from "@/features/main-cookies/query/query-options"
import { TextbookChapterBackgrounds } from "@/features/learn-page/components/shared/TextbookChapterBackgrounds"

export const Route = createFileRoute("/lessons")({
  loader: async ({ context }) => {
    const { user } = context
    return { user }
  },
  component: LessonsLayout,
})

function LessonsLayout() {
  const { user } = Route.useLoaderData()()
  const { animateOnDataChange } = useAnimationManager()
  const settingsQuery = useCustomQuery(() =>
    userSettingsQueryOptions(user?.id || null),
  )
  const [shouldAnimate, setShouldAnimate] = createSignal(false)

  onMount(() => {
    // Check if we should animate (set by button press)
    const shouldAnimateFlag = sessionStorage.getItem("animate-lessons")
    const isNavigation = !!shouldAnimateFlag

    // Clear the flag immediately
    sessionStorage.removeItem("animate-lessons")

    setShouldAnimate(isNavigation)
  })

  // Trigger slide up animation when user data loads (only when shouldAnimate is true)
  animateOnDataChange(["[data-lessons-layout]"], () =>
    shouldAnimate() ? user : null,
  )

  return (
    <>
      <div class="fixed inset-0 -z-1">
        <TextbookChapterBackgrounds
          textbook={settingsQuery.data["active-textbook"]}
          chapter={settingsQuery.data["active-deck"]}
          showGradient={false}
          blur="16px"
          class="opacity-50"
        />
      </div>
      <div
        // class="bg-background/60 mx-auto min-h-screen max-w-4xl"
        data-lessons-layout
      >
        <ContentBox user={user}>
          <Outlet />
        </ContentBox>
      </div>
    </>
  )
}
