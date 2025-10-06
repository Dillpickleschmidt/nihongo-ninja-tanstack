// routes/_home/learn/$textbookId.tsx
import {
  createFileRoute,
  Outlet,
  redirect,
  useLocation,
} from "@tanstack/solid-router"
import {
  getDeckBySlug,
  getModules,
  getTextbookLearningPath,
} from "@/data/utils/core"
import { SSRMediaQuery } from "@/components/SSRMediaQuery"
import { LearnPageHeader } from "@/features/learn-page/components/layout/LearnPageHeader"
import { LearnPageProvider } from "@/features/learn-page/context/LearnPageContext"
import { TextbookChapterBackgrounds } from "@/features/learn-page/components/shared/TextbookChapterBackgrounds"
import {
  dueFSRSCardsCountQueryOptions,
  vocabHierarchyQueryOptions,
  completedModulesQueryOptions,
  resourceThumbnailQueryOptions,
  upcomingModulesQueryOptions,
  moduleProgressQueryOptions,
  type ModuleWithCurrent,
} from "@/features/learn-page/query/query-options"
import { enrichExternalResources } from "@/features/learn-page/utils/loader-helpers"
import {
  userSettingsQueryOptions,
  dbUserSettingsQueryOptions,
  applyUserSettingsUpdate,
} from "@/features/main-cookies/query/query-options"
import { useLearnPageContext } from "@/features/learn-page/context/LearnPageContext"
import type { TextbookIDEnum, ExternalResource } from "@/data/types"
import type { UserSettings } from "@/features/main-cookies/schemas/user-settings"

export const Route = createFileRoute("/_home/learn/$textbookId")({
  loader: async ({ context, params, location }) => {
    const { user, queryClient } = context
    const { textbookId } = params

    // Extract route segment from pathname (e.g., /learn/genki_1/chapter-3 -> chapter-3)
    const pathParts = location.pathname.split("/").filter(Boolean)
    const routeSegment = pathParts[2] // Index: 0=learn, 1=textbookId, 2=route

    // If no route segment in URL, redirect to active deck or default
    if (!routeSegment) {
      const userSettings = await queryClient.ensureQueryData(
        userSettingsQueryOptions(user?.id || null),
      )
      const activeChapterSlug = userSettings["active-deck"] || "chapter-0"

      throw redirect({
        to: "/learn/$textbookId/$chapterSlug",
        params: { textbookId, chapterSlug: activeChapterSlug },
      })
    }

    // Get user settings (check cache first to avoid waterfall)
    const userSettingsOptions = userSettingsQueryOptions(user?.id || null)
    let userSettings = queryClient.getQueryData(userSettingsOptions.queryKey)

    if (!userSettings) {
      userSettings = await queryClient.ensureQueryData(userSettingsOptions)
    }

    // Get deck based on route type
    let deck: ReturnType<typeof getDeckBySlug>
    let chapterSlug: string

    if (routeSegment === "progress") {
      // Progress route: get deck from active settings
      chapterSlug = userSettings["active-deck"] || "chapter-0"
      deck = getDeckBySlug(textbookId as TextbookIDEnum, chapterSlug)
    } else {
      // Chapter route: get deck from URL
      chapterSlug = routeSegment
      deck = getDeckBySlug(textbookId as TextbookIDEnum, chapterSlug)

      // If invalid chapter slug, redirect to chapter-0
      if (!deck) {
        throw redirect({
          to: "/learn/$textbookId/$chapterSlug",
          params: { textbookId: "genki_1", chapterSlug: "chapter-0" },
        })
      }
    }

    // Ensure we always have a valid deck (fallback to chapter-0)
    if (!deck) {
      deck = getDeckBySlug(textbookId as TextbookIDEnum, "chapter-0")!
      chapterSlug = "chapter-0"
    }

    // Check DB query status to determine if we should update active-deck
    const dbQueryState = user?.id
      ? queryClient.getQueryState(dbUserSettingsQueryOptions(user.id).queryKey)
      : null

    const isDbComplete = dbQueryState?.status === "success"

    // If DB is complete, check if it has a different active-deck than current route
    if (isDbComplete && user?.id) {
      const dbData = queryClient.getQueryData<UserSettings>(
        dbUserSettingsQueryOptions(user.id).queryKey,
      )

      if (dbData) {
        const dbActiveDeck = dbData["active-deck"]
        const dbActiveTextbook = dbData["active-textbook"]
        const cookieTimestamp = userSettings.timestamp || 0
        const dbTimestamp = dbData.timestamp || 0

        // Only redirect if DB is fresher than cookie AND differs from URL
        // (corrects stale /learn redirect, but allows intentional navigation)
        if (
          dbTimestamp > cookieTimestamp &&
          ((dbActiveDeck && dbActiveDeck !== deck.slug) ||
            (dbActiveTextbook &&
              dbActiveTextbook !== (textbookId as TextbookIDEnum)))
        ) {
          throw redirect({
            to: "/learn/$textbookId/$chapterSlug",
            params: {
              textbookId: dbActiveTextbook || (textbookId as TextbookIDEnum),
              chapterSlug: dbActiveDeck || deck.slug,
            },
          })
        }
      }
    }

    // Update active-deck if URL differs (timestamp check prevents race conditions)
    const needsUpdate =
      userSettings["active-deck"] !== deck.slug ||
      userSettings["active-textbook"] !== (textbookId as TextbookIDEnum)

    if (needsUpdate) {
      userSettings = await applyUserSettingsUpdate(
        user?.id || null,
        queryClient,
        {
          "active-deck": deck.slug,
          "active-textbook": textbookId as TextbookIDEnum,
        },
        { awaitDb: false }, // Loader doesn't await DB (non-blocking)
      )
    }

    // Prefetch textbook-wide queries
    queryClient.prefetchQuery(completedModulesQueryOptions(user?.id || null))
    queryClient.prefetchQuery(dueFSRSCardsCountQueryOptions(user?.id || null))
    queryClient
      .ensureQueryData(
        upcomingModulesQueryOptions(
          user?.id || null,
          textbookId as TextbookIDEnum,
          userSettings["textbook-positions"]?.[textbookId as TextbookIDEnum] ||
            null,
        ),
      )
      .then((upcomingModules) => {
        queryClient.prefetchQuery(
          moduleProgressQueryOptions(user?.id || null, upcomingModules),
        )
      })

    // Prefetch vocab hierarchy for active chapter
    queryClient.prefetchQuery(
      vocabHierarchyQueryOptions(
        textbookId,
        deck,
        userSettings["override-settings"],
      ),
    )

    // Pre-fetch all resource thumbnails in parallel
    const currentChapterModules = getModules(deck)
    const rawResources = Object.fromEntries(
      currentChapterModules
        .filter(({ module }) => "external_url" in module)
        .map(({ key, module }) => [key, module as ExternalResource]),
    )
    const externalResources = enrichExternalResources(rawResources)
    const resourcesArray = Object.values(externalResources)
    resourcesArray.forEach((resource) =>
      queryClient.prefetchQuery(
        resourceThumbnailQueryOptions(
          resource.id,
          resource.external_url,
          resource.creator_id,
        ),
      ),
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
      chapterSlug,
      deck,
      struggles: mockStruggles,
      historyItems: mockHistoryItems,
      externalResources,
      userSettings,
    }
  },
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <LearnPageProvider>
      <LayoutContent />
    </LearnPageProvider>
  )
}

function LayoutContent() {
  const loaderData = Route.useLoaderData()
  const location = useLocation()
  const { mobileContentView, setMobileContentView } = useLearnPageContext()

  const activeDeck = () =>
    getDeckBySlug(loaderData().textbookId, loaderData().chapterSlug)

  const blurAmount = () =>
    location().pathname.endsWith("/progress") ? "32px" : "0px"

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
          <LearnPageHeader variant="desktop" />
          <Outlet />
          <div class="pb-8" />
        </div>
      </SSRMediaQuery>
    </div>
  )
}
