import {
  createFileRoute,
  Outlet,
  useLocation,
  useNavigate,
} from "@tanstack/solid-router"
import { createIsomorphicFn } from "@tanstack/solid-start"
import { createEffect, createMemo, createSignal, Show } from "solid-js"
import { useQueryClient } from "@tanstack/solid-query"
import type { QueryClient } from "@tanstack/solid-query"
import { authClient } from "@/lib/auth-client"
import { getUser } from "@/lib/auth"
import { BottomNav } from "@/features/navbar/Nav"
import { MobileNavSheet } from "@/features/navbar/MobileNavSheet"
import { TrialWelcomeDialog } from "@/features/billing/TrialWelcomeDialog"
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
import { autumnCustomerQueryOptions } from "@/query/query-options"
import { usePreferences } from "@/lib/preferences"
import { z } from "zod"

const homeSearchSchema = z.object({
  welcome: z.literal("trial").optional(),
})

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
          updatePreferenceCookie(
            queryClient,
            "activeChapter",
            chapter.chapterSlug,
          )
        }
      }
    },
  )
  .client(() => {})

export const Route = createFileRoute("/_home")({
  validateSearch: (search) => homeSearchSchema.parse(search),
  loader: ({ context, location }) => {
    syncActiveChapter(context.queryClient, location)

    if (context.auth.userId) {
      context.queryClient.prefetchQuery(autumnCustomerQueryOptions())
    }
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

  const user = getUser()
  const todayDateKey = () => getLocalDateKey()
  const dailyProgressQuery = useConvexQuery(
    api.api.progress.getDailyProgress,
    () => ({ dateKey: todayDateKey() }),
    () => ({ enabled: !!user() }),
  )

  const dailyProgressPercentage = createMemo(() => {
    const units = dailyProgressQuery.data()?.progressUnits ?? 0
    return Math.min(
      100,
      Math.round((units / DAILY_PROGRESS_TARGET_UNITS) * 100),
    )
  })

  const location = useLocation()
  const [moreSheetOpen, setMoreSheetOpen] = createSignal(false)

  return (
    <div class="[--sidebar-width:0px] xl:[--sidebar-width:20rem] min-[1700px]:[--sidebar-width:24rem]">
      <ActiveChapterSync />

      <SSRMediaQuery showFrom="xl">
        <div class="fixed left-0 top-0 z-50 h-dvh w-(--sidebar-width)">
          <Sidebar animated={false} onSignOut={handleSignOut} />
        </div>
      </SSRMediaQuery>

      <div class="pl-(--sidebar-width) 2xl:pr-[calc(var(--sidebar-width)-4rem)]">
        <Outlet />
      </div>

      <Show when={location().search.welcome === "trial"}>
        <TrialWelcomeDialog />
      </Show>

      <SSRMediaQuery hideFrom="xl">
        <BottomNav
          dailyProgressPercentage={dailyProgressPercentage()}
          onMoreClick={() => setMoreSheetOpen(true)}
        />
        <MobileNavSheet
          open={moreSheetOpen()}
          onOpenChange={setMoreSheetOpen}
          onSignOut={handleSignOut}
        />
      </SSRMediaQuery>
    </div>
  )
}

function ActiveChapterSync() {
  const location = useLocation()
  const { preferences, setPreference } = usePreferences()

  createEffect(() => {
    const loc = location()

    // Handle /vocab?chapter=X
    const chapterParam =
      "chapter" in loc.search ? (loc.search.chapter as string) : undefined
    if (loc.pathname === "/vocab" && chapterParam) {
      if (chapterParam !== preferences().activeChapter) {
        setPreference("activeChapter", chapterParam)
      }
      return
    }

    const moduleId = getModuleIdFromUrl(loc.pathname, loc.search)
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
