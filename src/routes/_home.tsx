import {
  createFileRoute,
  Outlet,
  useRouteContext,
} from "@tanstack/solid-router"
import { Route as RootRoute } from "@/routes/__root"
import { useCustomQuery } from "@/hooks/useCustomQuery"
import {
  userDailyTimeQueryOptions,
  backgroundSettingsQueryOptions,
} from "@/query/query-options"
import { BottomNav } from "@/features/navbar/BottomNav"
import { TextbookChapterBackgrounds } from "@/features/homepage/shared/components/TextbookChapterBackgrounds"

export const Route = createFileRoute("/_home")({
  component: RouteComponent,
})

function RouteComponent() {
  return <Home />
}

function Home() {
  const context = useRouteContext({ from: RootRoute.id })
  const userId = context().user?.id

  const todayTimeQuery = useCustomQuery(() =>
    userDailyTimeQueryOptions(userId || null, new Date()),
  )

  const backgroundQuery = useCustomQuery(() => backgroundSettingsQueryOptions())

  const dailyProgressPercentage = () => {
    if (!userId) return 0
    const minutesToday = Math.round((todayTimeQuery.data ?? 0) / 60)
    return Math.min(100, Math.round((minutesToday / 30) * 100))
  }

  return (
    <>
      <TextbookChapterBackgrounds
        userId={userId}
        opacityOffset={backgroundQuery.data!.backgroundOpacityOffset}
        blur={backgroundQuery.data!.blur}
        showGradient={backgroundQuery.data!.showGradient}
      />
      <Outlet />
      <div class="fixed bottom-0">
        <BottomNav dailyProgressPercentage={dailyProgressPercentage()} />
      </div>
    </>
  )
}
