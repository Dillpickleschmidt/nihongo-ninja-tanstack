import { onMount } from "solid-js"
import { createFileRoute, useRouteContext } from "@tanstack/solid-router"
import PracticeContainer from "@/features/sentence-practice/ui/practice/PracticeContainer"
import { useCustomQuery } from "@/hooks/useCustomQuery"
import { queryKeys } from "@/query/utils/query-keys"
import { userSettingsQueryOptions } from "@/query/query-options"
import { useTour } from "@/features/guided-tour/TourContext"
import { Route as RootRoute } from "@/routes/__root"

export const Route = createFileRoute("/_home/sentence-practice/$id")({
  loader: ({ context }) => {
    // Set background settings for sentence practice page
    context.queryClient.setQueryData(queryKeys.backgroundSettings(), {
      // blur: 4,
      backgroundOpacityOffset: -0.22,
      showGradient: true,
    })
  },
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
    <PracticeContainer
      path={params().id}
      moduleId={`sentence-practice-${params().id}`}
    />
  )
}
