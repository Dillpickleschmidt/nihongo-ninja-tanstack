// routes/_home/learn/$textbookId.tsx
import {
  createFileRoute,
  Outlet,
  redirect,
  useLocation,
} from "@tanstack/solid-router"
import { getDeckBySlug } from "@/data/utils/core"
import { SSRMediaQuery } from "@/components/SSRMediaQuery"
import { LearnPageHeader } from "@/features/learn-page/components/layout/LearnPageHeader"
import { LearnPageProvider } from "@/features/learn-page/context/LearnPageContext"
import { TextbookChapterBackgrounds } from "@/features/learn-page/components/shared/TextbookChapterBackgrounds"
import {
  dueCardsCountQueryOptions,
  completedModulesQueryOptions,
  upcomingModulesQueryOptions,
  userSessionsQueryOptions,
  userWeekTimeDataQueryOptions,
  seenCardsStatsQueryOptions,
  userDailyTimeQueryOptions,
} from "@/features/learn-page/query/query-options"
import { userSettingsQueryOptions } from "@/features/main-cookies/query/query-options"
import { useLearnPageContext } from "@/features/learn-page/context/LearnPageContext"
import type { TextbookIDEnum } from "@/data/types"

export const Route = createFileRoute("/_home/learn/$textbookId")({
  loader: async ({ context, params, location }) => {
    const { user, queryClient } = context
    const { textbookId } = params

    // Extract route segment from pathname (e.g., /learn/genki_1/chapter-3 -> chapter-3)
    const pathParts = location.pathname.split("/").filter(Boolean)
    const routeSegment = pathParts[2] // Index: 0=learn, 1=textbookId, 2=route

    // If no route segment in URL, redirect to active deck
    if (!routeSegment) {
      const userSettings = await queryClient.ensureQueryData(
        userSettingsQueryOptions(user?.id || null),
      )
      const activeChapterSlug = userSettings["active-deck"]

      throw redirect({
        to: "/learn/$textbookId/$chapterSlug",
        params: { textbookId, chapterSlug: activeChapterSlug },
      })
    }

    // Get user settings (ensure loaded for child routes and prefetching)
    const userSettings = await queryClient.ensureQueryData(
      userSettingsQueryOptions(user?.id || null),
    )

    // Prefetch textbook-wide queries
    queryClient.prefetchQuery(completedModulesQueryOptions(user?.id || null))
    queryClient.prefetchQuery(
      dueCardsCountQueryOptions(
        user?.id || null,
        userSettings["service-preferences"],
      ),
    )
    queryClient.ensureQueryData(
      upcomingModulesQueryOptions(
        user?.id || null,
        textbookId as TextbookIDEnum,
        userSettings["textbook-positions"]?.[textbookId as TextbookIDEnum] ||
          null,
      ),
    )

    // Prefetch progress-page queries
    queryClient.prefetchQuery(userSessionsQueryOptions(user?.id || null))
    queryClient.prefetchQuery(userWeekTimeDataQueryOptions(user?.id || null))
    queryClient.prefetchQuery(
      seenCardsStatsQueryOptions(
        user?.id || null,
        userSettings["service-preferences"],
      ),
    )
    queryClient.prefetchQuery(
      userDailyTimeQueryOptions(user?.id || null, new Date()),
    )

    // TODO: Replace with real data from backend
    const mockStruggles = ["食べる", "飲む", "見る", "聞く", "話す"]
    const mockHistoryItems = [
      {
        name: "Vocabulary Practice",
        icon: "📚",
        amount: 50,
        color: "bg-blue-500",
      },
      { name: "Grammar Lesson", icon: "✏️", amount: 30, color: "bg-green-500" },
      { name: "Kanji Review", icon: "🔠", amount: -20, color: "bg-red-500" },
      {
        name: "Reading Practice",
        icon: "📖",
        amount: 40,
        color: "bg-purple-500",
      },
    ]

    return {
      user,
      textbookId: textbookId as TextbookIDEnum,
      userSettings,
      struggles: mockStruggles,
      historyItems: mockHistoryItems,
    }
  },
  component: RouteComponent,
})

function RouteComponent() {
  const loaderData = Route.useLoaderData()

  return (
    <LearnPageProvider
      userId={loaderData().user?.id || null}
      textbookId={loaderData().textbookId}
    >
      <LayoutContent />
    </LearnPageProvider>
  )
}

function LayoutContent() {
  const loaderData = Route.useLoaderData()
  const location = useLocation()
  const { mobileContentView, setMobileContentView, settingsQuery } =
    useLearnPageContext()

  const activeDeck = () => {
    const activeChapterSlug = settingsQuery.data!["active-deck"]
    return getDeckBySlug(loaderData().textbookId, activeChapterSlug)
  }

  const blurAmount = () =>
    location().pathname.endsWith("/progress") ? "4px" : "0px"

  return (
    <div class="font-poppins xl:h-screen xl:overflow-y-hidden xl:overscroll-y-contain">
      <style>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
      <TextbookChapterBackgrounds
        textbook={loaderData().textbookId}
        chapter={activeDeck()?.slug || ""}
        showGradient={true}
        blur={blurAmount}
      />
      {/* Mobile Layout */}
      <SSRMediaQuery hideFrom="xl">
        <LearnPageHeader
          variant="mobile"
          mobileContentView={mobileContentView()}
          setMobileContentView={setMobileContentView}
        />
        <div class="h-[calc(100vh-141px)] overflow-y-auto">
          <Outlet />
        </div>
      </SSRMediaQuery>
      {/* Desktop Layout */}
      <SSRMediaQuery showFrom="xl">
        <div class="min-h-screen">
          <Outlet />
          <div class="pb-8" />
        </div>
      </SSRMediaQuery>
    </div>
  )
}
