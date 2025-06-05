// app/routes/_learn/dashboard.tsx
import { createFileRoute, redirect, useNavigate } from "@tanstack/solid-router"
import { getRequestHeader } from "@tanstack/solid-start/server"
import { isServer } from "solid-js/web"
import { createEffect, onMount } from "solid-js"
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
import { DashboardHeader } from "@/features/dashboard/components/DashboardHeader"
import { ContentSection } from "@/features/dashboard/components/ContentSection"
import { LessonsSection } from "@/features/dashboard/components/LessonsSection"
import { StrugglesSection } from "@/features/dashboard/components/StrugglesSection"
import { HistorySection } from "@/features/dashboard/components/HistorySection"
import { AllContentList } from "@/features/dashboard/components/AllContentList"
import { SSRMediaQuery } from "@/components/SSRMediaQuery"
import { usePageTransition } from "@/context/TransitionContext"

const dashboardSearchSchema = z.object({
  chapter: z.string().optional(),
})

export const Route = createFileRoute("/_learn/dashboard")({
  validateSearch: zodValidator(dashboardSearchSchema),
  beforeLoad: ({ search }) => {
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
    }
  },
  loader: async ({ context }) => {
    const { currentTextbook, currentChapterID } = context

    const currentTextbookChapters = getChaptersForTextbook(currentTextbook)
    const externalResources = getExternalResources(
      currentTextbook,
      currentChapterID,
    )
    const lessons = getLessons(currentTextbook, currentChapterID)

    const thumbnailPromises = externalResources.map((resource) =>
      fetchThumbnailUrl(resource.external_url, resource.creator_id).then(
        (thumbnailUrl) => ({
          resourceId: resource.id,
          thumbnailUrl,
        }),
      ),
    )

    return {
      currentChapterID,
      currentTextbookChapters,
      externalResources,
      lessons,
      deferredThumbnails: thumbnailPromises,
    }
  },
  component: RouteComponent,
})

function RouteComponent() {
  const loaderData = Route.useLoaderData()
  const search = Route.useSearch()
  const navigate = useNavigate()
  const { startDashboardToLearn, setDashboardRef } = usePageTransition()

  let dashboardElementRef: HTMLDivElement

  onMount(() => {
    if (dashboardElementRef) {
      setDashboardRef(dashboardElementRef)
    }
  })

  createEffect(() => {
    const currentSearch = search()
    if (currentSearch.chapter) {
      const currentTextbook = getActiveTextbook()
      setTextbookChapter(currentTextbook, currentSearch.chapter)
    }
  })

  const handleVocabularyClick = (e: Event) => {
    e.preventDefault()
    startDashboardToLearn()
    setTimeout(() => {
      navigate({ to: "/learn/vocabulary" })
    }, 20)
  }

  const handleDashboardRef = (el: HTMLDivElement) => {
    dashboardElementRef = el
    setDashboardRef(el)
  }

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
    <div ref={handleDashboardRef} class="font-poppins">
      <style>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>

      <button
        onClick={handleVocabularyClick}
        class="block text-left transition-opacity hover:opacity-80"
      >
        <h3 class="mb-2 text-xl font-semibold">Go to vocabulary</h3>
      </button>

      <DashboardHeader
        currentChapterID={loaderData().currentChapterID}
        currentTextbookChapters={loaderData().currentTextbookChapters}
        dailyProgress={20}
      />

      <div data-section="content">
        <ContentSection
          resources={loaderData().externalResources}
          thumbnailPromises={loaderData().deferredThumbnails}
        />
      </div>

      <div data-section="lessons">
        <LessonsSection
          lessons={loaderData().lessons}
          progressPercentage={75}
        />
      </div>

      <SSRMediaQuery hideFrom="xl">
        <StrugglesSection struggles={struggles} variant="mobile" />
        <HistorySection items={historyItems} />
      </SSRMediaQuery>

      <SSRMediaQuery showFrom="xl">
        <div class="my-6 grid grid-cols-3 gap-6 px-4 xl:px-6">
          <AllContentList />
          <StrugglesSection struggles={struggles} variant="desktop" />
          <HistorySection items={historyItems} />
        </div>
      </SSRMediaQuery>
    </div>
  )
}
