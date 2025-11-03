import { onMount } from "solid-js"
import { createFileRoute, useRouteContext } from "@tanstack/solid-router"
import PracticeContainer from "@/features/sentence-practice/ui/practice/PracticeContainer"
import { TextbookChapterBackgrounds } from "@/features/learn-page/components/shared/TextbookChapterBackgrounds"
import { useCustomQuery } from "@/hooks/useCustomQuery"
import { userSettingsQueryOptions } from "@/features/main-cookies/query/query-options"
import { useTour } from "@/features/guided-tour/TourContext"
import { Route as RootRoute } from "@/routes/__root"

export const Route = createFileRoute("/_home/sentence-practice/$id")({
  component: RouteComponent,
})

function RouteComponent() {
  const params = Route.useParams()
  const context = useRouteContext({ from: RootRoute.id })
  const { startTour, resumeTour } = useTour()
  const settingsQuery = useCustomQuery(() =>
    userSettingsQueryOptions(context().user?.id || null),
  )

  onMount(() => {
    const settings = settingsQuery.data
    const tourId = "sentence-practice-intro"
    const isFirstRoute = params().id !== "tutorial"
    const tourStep = settings?.tours[tourId]

    if (!isFirstRoute) return // Don't show tour on tutorial page itself

    if (tourStep === undefined) {
      // Not started - start from beginning
      startTour(tourId)
    } else if (tourStep >= 0) {
      // In progress - resume from saved step
      resumeTour(tourId, tourStep)
    }
  })

  return (
    <>
      <div class="fixed inset-0 -z-1">
        <TextbookChapterBackgrounds
          textbook={settingsQuery.data!["active-learning-path"]}
          chapter={settingsQuery.data!["active-chapter"]}
          showGradient={false}
          blur="4px"
          class="opacity-40"
        />
      </div>
      <PracticeContainer
        path={params().id}
        moduleId={`sentence-practice-${params().id}`}
      />
    </>
  )
}
