import {
  createFileRoute,
  Outlet,
  useLocation,
  useNavigate,
} from "@tanstack/solid-router"
import { createIsomorphicFn } from "@tanstack/solid-start"
import { createEffect, createMemo } from "solid-js"
import { useQueryClient } from "@tanstack/solid-query"
import type { QueryClient } from "@tanstack/solid-query"
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
import { getModuleIdFromUrl, getChapterForModule } from "@/lib/module-links"
import { updatePreferenceCookie } from "@/query/model/preferences"
import { queryKeys } from "@/query/query-keys"
import { usePreferences } from "@/lib/preferences"

const syncActiveChapter = createIsomorphicFn()
  .server(
    (
      queryClient: QueryClient,
      location: { pathname: string; search: Record<string, unknown> },
    ) => {
      const prefs = queryClient.getQueryData<any>(queryKeys.preferences())!
      const moduleId = getModuleIdFromUrl(location.pathname, location.search)
      if (moduleId) {
        const chapter = getChapterForModule(moduleId)
        if (
          chapter &&
          chapter.textbookId === prefs.activeLearningPath &&
          chapter.chapterSlug !== prefs.activeChapter
        ) {
          updatePreferenceCookie(queryClient, "activeChapter", chapter.chapterSlug)
        }
      }
    },
  )
  .client(() => {})

export const Route = createFileRoute("/_home")({
  loader: ({ context, location }) => {
    syncActiveChapter(context.queryClient, location)
  },
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
      <ActiveChapterSync />
      <Outlet />

      <SSRMediaQuery showFrom="md">
        <Sidebar animated={false} onSignOut={handleSignOut} />
      </SSRMediaQuery>

      <BottomNav dailyProgressPercentage={dailyProgressPercentage()} />
    </>
  )
}

function ActiveChapterSync() {
  const location = useLocation()
  const { preferences, setPreference } = usePreferences()

  createEffect(() => {
    const moduleId = getModuleIdFromUrl(location().pathname, location().search)
    if (!moduleId) return

    const chapter = getChapterForModule(moduleId)
    if (
      chapter &&
      chapter.textbookId === preferences().activeLearningPath &&
      chapter.chapterSlug !== preferences().activeChapter
    ) {
      setPreference("activeChapter", chapter.chapterSlug)
    }
  })

  return null
}
