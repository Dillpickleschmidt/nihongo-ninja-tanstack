// app/routes/_learn/dashboard.tsx
import { createFileRoute, redirect, defer, Await } from "@tanstack/solid-router"
import { getRequestHeader } from "@tanstack/solid-start/server"
import { isServer } from "solid-js/web"
import { createEffect } from "solid-js"
import { z } from "zod"
import { zodValidator } from "@tanstack/zod-adapter"
import {
  getActiveTextbook,
  getExternalResources,
  getLessons,
  getChaptersForTextbook,
  getTextbookChapter,
  setTextbookChapter,
} from "@/data/utils/core"
import { textbooks } from "@/data/textbooks"
import { fetchThumbnailUrl } from "@/data/utils/thumbnails"
import { BackgroundImage } from "@/components/BackgroundImage"
import { Background } from "@/features/dashboard/components/Background"
import { DashboardHeader } from "@/features/dashboard/components/DashboardHeader"
import { ContentSection } from "@/features/dashboard/components/ContentSection"
import { LessonsSection } from "@/features/dashboard/components/LessonsSection"
import { StrugglesSection } from "@/features/dashboard/components/StrugglesSection"
import { HistorySection } from "@/features/dashboard/components/HistorySection"
import { WordHierarchy } from "@/features/dashboard/components/WordHierarchy"
import { SSRMediaQuery } from "@/components/SSRMediaQuery"
import { getDueFSRSCards } from "@/features/supabase/db/utils"
import { getWKVocabularyHierarchy } from "@/data/wanikani/utils"

const dashboardSearchSchema = z.object({
  chapter: z.string().optional(),
})

export const Route = createFileRoute("/dashboard")({
  validateSearch: zodValidator(dashboardSearchSchema),
  beforeLoad: ({ search, context }) => {
    const cookieHeader = isServer
      ? getRequestHeader("Cookie") || undefined
      : undefined

    const currentTextbook = getActiveTextbook(cookieHeader)

    if (!search.chapter) {
      let chapterFromCookie = getTextbookChapter(currentTextbook, cookieHeader)

      if (!chapterFromCookie) {
        const textbookData = textbooks[currentTextbook]
        chapterFromCookie = textbookData?.chapters[0]?.id || "genki_1_ch0"
      }

      throw redirect({
        to: "/dashboard",
        search: { chapter: chapterFromCookie },
      })
    }

    return {
      currentTextbook,
      currentChapterID: search.chapter,
      user: context.user,
    }
  },
  loader: async ({ context }) => {
    const { currentTextbook, currentChapterID, user } = context

    const wordHierarchyData = await getWKVocabularyHierarchy({
      data: ["勉強する", "時間", "映画"],
    })
    const lessons = getLessons(currentTextbook, currentChapterID)
    const currentTextbookChapters = getChaptersForTextbook(currentTextbook)
    const externalResources = getExternalResources(
      currentTextbook,
      currentChapterID,
    )
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
      lessons,
      currentChapterID,
      currentTextbookChapters,
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
    if (currentSearch.chapter) {
      const currentTextbook = getActiveTextbook()
      setTextbookChapter(currentTextbook, currentSearch.chapter)
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
    <div class="font-poppins">
      <style>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>

      <BackgroundImage
        class="z-[-1] !-mt-[4.1rem] min-h-screen"
        backgroundImage="/img/dust-splatter-1.png"
        backgroundImageSize="1215px"
        backgroundImageOpacity={3}
      />
      <Background position="absolute" opacity={0.18} />

      <DashboardHeader
        currentChapterID={loaderData().currentChapterID}
        currentTextbookChapters={loaderData().currentTextbookChapters}
        dueFSRSCardsPromise={loaderData().dueFSRSCards}
      />

      {/* Mobile Layout: Simple vertical stack */}
      <SSRMediaQuery hideFrom="xl">
        <div class="flex flex-col">
          <ContentSection
            resources={loaderData().externalResources}
            thumbnailPromises={loaderData().deferredThumbnails}
          />
          <LessonsSection
            lessons={loaderData().lessons}
            progressPercentage={75}
          />
          <div class="flex flex-col">
            <StrugglesSection struggles={struggles} variant="mobile" />
            <WordHierarchy
              data={loaderData().wordHierarchyData}
              variant="mobile"
            />
            <HistorySection items={historyItems} />
          </div>
        </div>
      </SSRMediaQuery>

      {/* Desktop Layout: Asymmetrical 2/3 and 1/3 grid */}
      <SSRMediaQuery showFrom="xl">
        <div class="my-6 grid grid-cols-[2fr_1fr] gap-8 px-8">
          {/* Main Content Pane */}
          <div class="flex flex-col gap-8">
            <ContentSection
              resources={loaderData().externalResources}
              thumbnailPromises={loaderData().deferredThumbnails}
            />
            <LessonsSection
              lessons={loaderData().lessons}
              progressPercentage={75}
            />
          </div>

          {/* Sidebar / Status Pane */}
          <div class="flex flex-col gap-8">
            <WordHierarchy
              data={loaderData().wordHierarchyData}
              variant="desktop"
            />
            <StrugglesSection struggles={struggles} variant="desktop" />
            <HistorySection items={historyItems} />
          </div>
        </div>
      </SSRMediaQuery>
    </div>
  )
}
