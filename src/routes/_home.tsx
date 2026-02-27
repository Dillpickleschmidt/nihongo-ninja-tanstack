import { createFileRoute, Outlet, useNavigate } from "@tanstack/solid-router"
import { createMemo } from "solid-js"
import { useQueryClient } from "@tanstack/solid-query"
import { authClient } from "@/lib/auth-client"
import { BottomNav } from "@/features/navbar/Nav"
import { Sidebar } from "@/features/sidebar/Sidebar"
import { SSRMediaQuery } from "@/components/SSRMediaQuery"
import { useConvexQuery } from "@/lib/convex-query"
import { api } from "convex/_generated/api"
import {
  DAILY_PROGRESS_TARGET_UNITS,
  getLocalDateKey,
} from "@/lib/progress/weights"

export const Route = createFileRoute("/_home")({
  component: HomeLayout,
})

function HomeLayout() {
  const navigate = useNavigate()
  const queryClient = useQueryClient()

  const handleSignOut = async () => {
    await authClient.signOut()
    queryClient.invalidateQueries({ queryKey: ["auth"] })
    navigate({ to: "/" })
  }

  const todayDateKey = () => getLocalDateKey()
  const dailyProgressQuery = useConvexQuery(
    api.api.progress.getDailyProgress,
    () => ({ dateKey: todayDateKey() }),
  )

  const dailyProgressPercentage = createMemo(() => {
    const units = dailyProgressQuery.data()?.progressUnits ?? 0
    return Math.min(100, Math.round((units / DAILY_PROGRESS_TARGET_UNITS) * 100))
  })

  return (
    <>
      <Outlet />

      <SSRMediaQuery showFrom="md">
        <Sidebar animated={false} onSignOut={handleSignOut} />
      </SSRMediaQuery>

      <BottomNav dailyProgressPercentage={dailyProgressPercentage()} />
    </>
  )
}
