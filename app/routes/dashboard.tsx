// app/routes/_learn/dashboard.tsx
import { createFileRoute, redirect, defer, Await } from "@tanstack/solid-router"
import { getRequestHeader } from "@tanstack/solid-start/server"
import { isServer } from "solid-js/web"
import { createEffect } from "solid-js"
import { z } from "zod"
import { zodValidator } from "@tanstack/zod-adapter"
import {
  getActiveDeckInfo,
  getExternalResources,
  getLessons,
  getDeckBySlug,
  setActiveDeck,
} from "@/data/utils/core"
import { textbooks } from "@/data/textbooks"
import { fetchThumbnailUrl } from "@/data/utils/thumbnails"
import { DashboardHeader } from "@/features/dashboard/components/layout/DashboardHeader"
import { LeftSidebar } from "@/features/dashboard/components/layout/LeftSidebar"
import { RightSidebar } from "@/features/dashboard/components/layout/RightSidebar"
import { ContentShowcase } from "@/features/dashboard/components/content/ContentShowcase"
import { CourseDashboard } from "@/features/dashboard/components/content/CourseDashboard"
import { MoreResourcesSection } from "@/features/dashboard/components/content/MoreResourcesSection"
import { StrugglesSection } from "@/features/dashboard/components/content/StrugglesSection"
import { SSRMediaQuery } from "@/components/SSRMediaQuery"
import { getDueFSRSCards } from "@/features/supabase/db/utils"
import { getRichWKHierarchyWithProgress } from "@/data/wanikani/utils"
import { getModuleVocabulary } from "@/data/utils/vocab"
import type {
  Deck,
  DeckSource,
  DynamicModule,
  ExternalResource,
  StaticModule,
  TextbookIDEnum,
} from "@/data/types"
import { TextbookChapterBackgrounds } from "@/features/dashboard/components/shared/TextbookChapterBackgrounds"

const dashboardSearchSchema = z
  .object({
    textbook: z.string(),
    deck: z.string(),
    user: z.undefined().optional(),
  })
  .or(
    z.object({
      user: z.string(),
      deck: z.string(),
      textbook: z.undefined().optional(),
    }),
  )

export const Route = createFileRoute("/dashboard")({
  validateSearch: zodValidator(dashboardSearchSchema),
  beforeLoad: ({ search, context }) => {
    if (search.textbook && search.deck) {
      return {
        user: context.user,
        sourceType: "textbook",
        sourceId: search.textbook as TextbookIDEnum,
        deckSlug: search.deck,
      }
    }
    if (search.user && search.deck) {
      return {
        user: context.user,
        sourceType: "user",
        sourceId: search.user,
        deckSlug: search.deck,
      }
    }

    const cookieHeader = isServer
      ? getRequestHeader("Cookie") || undefined
      : undefined
    const activeDeckInfo = getActiveDeckInfo(cookieHeader)

    if (activeDeckInfo) {
      const { sourceType, sourceId, deckSlug } = activeDeckInfo
      const searchParams =
        sourceType === "textbook"
          ? { textbook: sourceId, deck: deckSlug }
          : { user: sourceId, deck: deckSlug }

      throw redirect({
        to: "/dashboard",
        search: searchParams,
      })
    }

    const defaultTextbookId = "genki_1"
    const defaultDeckSlug = textbooks[defaultTextbookId].chapters[0].slug
    throw redirect({
      to: "/dashboard",
      search: { textbook: defaultTextbookId, deck: defaultDeckSlug },
    })
  },
  loader: async ({ context }) => {
    const { user, sourceType, sourceId, deckSlug } = context

    let deck: Deck | undefined

    if (sourceType === "textbook") {
      deck = getDeckBySlug(sourceId as TextbookIDEnum, deckSlug)
    } else if (sourceType === "user") {
      // Future implementation
    }

    if (!deck) {
      throw redirect({
        to: "/dashboard",
        search: { textbook: "genki_1", deck: "chapter-0" },
      })
    }

    let lessons: (StaticModule | DynamicModule)[] = []
    let externalResources: ExternalResource[] = []
    let vocabForHierarchy: string[] = []

    switch (deck.deckType) {
      case "textbook_chapter":
        lessons = getLessons(deck)
        externalResources = getExternalResources(deck)

        const vocabModuleId = deck.learning_path_items.find((item) =>
          item.id.endsWith("_vocab-list"),
        )?.id

        if (vocabModuleId) {
          const vocabItems = getModuleVocabulary(vocabModuleId)
          vocabForHierarchy = vocabItems.map((item) => item.word)
        }
        break
      case "user_deck":
        break
    }

    const deckSources: DeckSource[] = Object.values(textbooks).map((tb) => ({
      id: tb.id,
      name: tb.short_name || tb.name,
      type: "textbook",
      decks: tb.chapters,
    }))

    const wordHierarchyData = await getRichWKHierarchyWithProgress({
      data: vocabForHierarchy,
    })

    const dueFSRSCardsPromise = user
      ? getDueFSRSCards(user.id)
      : Promise.resolve(null)

    const deferredIndividualThumbnails = externalResources.map((resource) => {
      const promise = fetchThumbnailUrl(
        resource.external_url,
        resource.creator_id,
      ).then((thumbnailUrl) => ({
        resourceId: resource.id,
        thumbnailUrl,
      }))
      return defer(promise)
    })

    return {
      sourceId,
      deck,
      lessons,
      deckSources,
      externalResources,
      wordHierarchyData,
      deferredThumbnails: deferredIndividualThumbnails,
      dueFSRSCards: defer(dueFSRSCardsPromise),
    }
  },
  component: RouteComponent,
})

function RouteComponent() {
  const loaderData = Route.useLoaderData()
  const search = Route.useSearch()

  createEffect(() => {
    const currentSearch = search()
    if (currentSearch.textbook && currentSearch.deck) {
      setActiveDeck("textbook", currentSearch.textbook, currentSearch.deck)
    } else if (currentSearch.user && currentSearch.deck) {
      setActiveDeck("user", currentSearch.user, currentSearch.deck)
    }
  })

  const struggles = [
    "～て",
    "留学生",
    "Intransat...",
    "～てしま",
    "助詞",
    "敬語",
    "カタカナ",
    "ひらがな",
    "条件形",
  ]

  const historyItems = [
    { name: "Gym", icon: "⚡", amount: -40.99, color: "bg-orange-500" },
    { name: "Coffee", icon: "☕", amount: -5.5, color: "bg-amber-600" },
    { name: "Study Books", icon: "📚", amount: -29.99, color: "bg-blue-500" },
  ]

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
        textbook={loaderData().sourceId}
        chapter={loaderData().deck.slug}
      />

      {/* Mobile Layout */}
      <SSRMediaQuery hideFrom="xl">
        <DashboardHeader
          currentDeck={loaderData().deck}
          deckSources={loaderData().deckSources}
          dueFSRSCardsPromise={loaderData().dueFSRSCards}
          variant="mobile"
        />
        <div class="flex flex-col">
          <ContentShowcase
            resources={loaderData().externalResources}
            thumbnailPromises={loaderData().deferredThumbnails}
            variant="mobile"
          />
          <CourseDashboard
            lessons={loaderData().lessons}
            progressPercentage={75}
            variant="mobile"
          />
          <div class="flex flex-col">
            <StrugglesSection struggles={struggles} variant="mobile" />
            <LeftSidebar
              data={loaderData().wordHierarchyData}
              currentDeck={loaderData().deck}
              deckSources={loaderData().deckSources}
              variant="mobile"
            />
            <RightSidebar
              struggles={struggles}
              historyItems={historyItems}
              lessons={loaderData().lessons}
              variant="mobile"
            />
          </div>
        </div>
      </SSRMediaQuery>

      {/* Desktop Layout */}
      <SSRMediaQuery showFrom="xl">
        <div class="min-h-screen">
          <DashboardHeader
            dueFSRSCardsPromise={loaderData().dueFSRSCards}
            currentDeck={loaderData().deck}
            deckSources={loaderData().deckSources}
            variant="desktop"
          />

          <div class="flex w-full pr-4 pl-8">
            {/* Left Sidebar - 26% */}
            <div class="w-[24%] pt-6">
              <LeftSidebar
                data={loaderData().wordHierarchyData}
                currentDeck={loaderData().deck}
                deckSources={loaderData().deckSources}
                variant="desktop"
              />
            </div>

            {/* Main Content Area - 48% */}
            <div class="w-[52%]">
              {/* Fixed Featured Content Section */}
              <div class="pb-3">
                <ContentShowcase
                  resources={loaderData().externalResources}
                  thumbnailPromises={loaderData().deferredThumbnails}
                  variant="desktop"
                />
              </div>

              {/* Scrollable Bottom Section */}
              <div class="scrollbar-hide relative h-[calc(100vh-376px)] overflow-x-hidden overflow-y-auto overscroll-x-none px-8 pb-12">
                {/* More Resources */}
                <MoreResourcesSection />

                {/* Sticky Header + Course Content */}
                <div class="relative pt-3">
                  {/* Sticky Header */}
                  <div class="sticky top-0 z-10 pt-2 backdrop-blur-sm">
                    <div class="flex items-center justify-between">
                      <div>
                        <h2 class="text-2xl font-bold">Current Progress</h2>
                        <p class="text-muted-foreground">
                          Continue your learning journey
                        </p>
                      </div>
                      <div class="text-right">
                        <div class="text-primary text-2xl font-bold">75%</div>
                        <div class="text-muted-foreground text-sm">
                          Complete
                        </div>
                      </div>
                    </div>

                    <div class="relative mt-4">
                      <div class="bg-muted/30 h-2 w-full overflow-hidden rounded-full">
                        <div
                          class="from-primary to-primary/80 h-full rounded-full bg-gradient-to-r transition-all duration-700 ease-out"
                          style="width: 75%"
                        />
                      </div>
                      <div class="bg-primary absolute -top-0.5 right-0 h-3 w-3 rounded-full shadow-lg"></div>
                    </div>
                  </div>

                  {/* Course Content */}
                  <div class="pt-6">
                    <CourseDashboard
                      lessons={loaderData().lessons}
                      progressPercentage={75}
                      variant="desktop"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Right Sidebar - 26% */}
            <div class="relative h-[calc(100vh-80px)] w-[24%] overflow-y-auto pt-12 pr-4 pb-12">
              <RightSidebar
                struggles={struggles}
                historyItems={historyItems}
                lessons={loaderData().lessons}
                variant="desktop"
              />
            </div>
          </div>

          <div class="pb-8" />
        </div>
      </SSRMediaQuery>
    </div>
  )
}
