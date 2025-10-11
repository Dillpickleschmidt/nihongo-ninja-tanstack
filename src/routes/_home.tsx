import { BottomNav } from "@/features/navbar/BottomNav"
import { createFileRoute, Outlet, useRouteContext } from "@tanstack/solid-router"
import { userDailyTimeQueryOptions } from "@/features/learn-page/query/query-options"
import { useCustomQuery } from "@/hooks/useCustomQuery"
import { Route as RootRoute } from "@/routes/__root"

export const Route = createFileRoute("/_home")({
  component: RouteComponent,
})

function RouteComponent() {
  const context = useRouteContext({ from: RootRoute.id })
  const userId = context().user?.id

  const todayTimeQuery = useCustomQuery(() =>
    userDailyTimeQueryOptions(userId || null, new Date()),
  )

  const dailyProgressPercentage = () => {
    if (!userId) return 0
    const minutesToday = Math.round((todayTimeQuery.data ?? 0) / 60)
    return Math.min(100, Math.round((minutesToday / 30) * 100))
  }

  return (
    <>
      <Outlet />
      <div class="fixed bottom-0">
        <BottomNav dailyProgressPercentage={dailyProgressPercentage()} />
      </div>
    </>
  )
}
