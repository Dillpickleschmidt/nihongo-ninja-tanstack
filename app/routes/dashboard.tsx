// app/routes/dashboard.tsx
import { createFileRoute, redirect } from "@tanstack/solid-router"
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
import { DashboardHeader } from "@/features/dashboard/components/DashboardHeader"
import { ContentSection } from "@/features/dashboard/components/ContentSection"
import { LessonsSection } from "@/features/dashboard/components/LessonsSection"
import { StrugglesSection } from "@/features/dashboard/components/StrugglesSection"
import { HistorySection } from "@/features/dashboard/components/HistorySection"
import { AllContentList } from "@/features/dashboard/components/AllContentList"
import { SSRMediaQuery } from "@/components/SSRMediaQuery"

// Search params schema
const dashboardSearchSchema = z.object({
  chapter: z.string().optional(),
})

export const Route = createFileRoute("/dashboard")({
  validateSearch: zodValidator(dashboardSearchSchema),
  beforeLoad: ({ search }) => {
    // Get cookies from request header (server-side) or undefined (client-side)
    const cookieHeader = isServer
      ? getRequestHeader("Cookie") || undefined
      : undefined

    const currentTextbook = getActiveTextbook(cookieHeader)

    if (!search.chapter) {
      // No URL params - check cookies and redirect
      let chapterFromCookie = getTextbookChapter(currentTextbook, cookieHeader)

      // If no valid chapter from cookie, use first chapter as default
      if (!chapterFromCookie) {
        const textbookData = textbooks[currentTextbook]
        chapterFromCookie = textbookData?.chapters[0]?.id || "genki_1_ch0"
      }

      // Redirect to URL with search params
      throw redirect({
        to: "/dashboard",
        search: { chapter: chapterFromCookie },
      })
    }

    // URL params exist - just return the context (no cookie setting here)
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

    // Defer thumbnail loading - don't await these
    const thumbnailPromises = externalResources.map((resource) =>
      fetchThumbnailUrl(resource.external_url, resource.creator_id).then(
        (thumbnailUrl) => ({
          resourceId: resource.id,
          thumbnailUrl,
        }),
      ),
    )

    return {
      // Fast data
      currentChapterID,
      currentTextbookChapters,
      externalResources,
      lessons,
      // Deferred data - individual promises for progressive loading
      deferredThumbnails: thumbnailPromises,
    }
  },
  component: RouteComponent,
})

function RouteComponent() {
  const loaderData = Route.useLoaderData()
  const search = Route.useSearch()

  // Sync URL params to cookies on client-side
  createEffect(() => {
    const currentSearch = search()
    if (currentSearch.chapter) {
      const currentTextbook = getActiveTextbook() // Client-side only
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
      <style>
        {`
        .custom-gradient-mask {
          mask-image: linear-gradient(to bottom, 
            transparent 0%,
            rgba(0, 0, 0, 1) 0%,
            rgba(0, 0, 0, 0) 100%
          );
          -webkit-mask-image: linear-gradient(to bottom, 
            transparent 0%,
            rgba(0, 0, 0, 1) 0%,
            rgba(0, 0, 0, 0) 100%
          );
        }
        
        .centered-bg-image {
          position: absolute;
          top: -64px;
          left: 50%;
          transform: translateX(-50%);
          width: auto;
          height: 100vh;
          min-height: 100vh;
          object-fit: cover;
          object-position: center;
          z-index: -2;
          pointer-events: none;
          opacity: 0.18;
        }
        
        @media (max-width: 768px) {
          .centered-bg-image {
            min-width: calc(100vw + 30px);
            width: calc(100vw + 30px);
            left: calc(50% + 15px);
          }
        }
        `}
      </style>

      <img
        src="/img/japanese-gate.png"
        class="custom-gradient-mask centered-bg-image"
        alt="Decorative Japanese Gate"
      />

      <DashboardHeader
        currentChapterID={loaderData().currentChapterID}
        currentTextbookChapters={loaderData().currentTextbookChapters}
        dailyProgress={20}
      />
      <ContentSection
        resources={loaderData().externalResources}
        thumbnailPromises={loaderData().deferredThumbnails}
      />
      <LessonsSection lessons={loaderData().lessons} progressPercentage={75} />

      {/* Mobile Layout - hide from md breakpoint */}
      <SSRMediaQuery hideFrom="xl">
        <StrugglesSection struggles={struggles} variant="mobile" />
        <HistorySection items={historyItems} />
      </SSRMediaQuery>

      {/* Desktop Layout - show from md breakpoint */}
      <SSRMediaQuery showFrom="xl">
        <div class="my-6 grid grid-cols-3 gap-6 px-4">
          <AllContentList />
          <StrugglesSection struggles={struggles} variant="desktop" />
          <HistorySection items={historyItems} />
        </div>
      </SSRMediaQuery>
    </div>
  )
}
