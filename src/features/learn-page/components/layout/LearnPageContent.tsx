// features/learn-page/components/layout/LearnPageContent.tsx
import { createSignal } from "solid-js"
import { SSRMediaQuery } from "@/components/SSRMediaQuery"
import { LearnPageHeader } from "./LearnPageHeader"
import { LeftSidebar } from "./LeftSidebar"
import { RightSidebar } from "./RightSidebar"
import { TextbookChapterBackgrounds } from "../shared/TextbookChapterBackgrounds"
import { ChapterContentArea } from "../content/ChapterContentArea"
import { MobileContentRenderer } from "./MobileContentRenderer"
import { Route } from "@/routes/_home/learn/$textbookId.$chapterSlug"
import { getDeckBySlug } from "@/data/utils/core"

export type MobileContentView =
  | "learning-path"
  | "featured-content"
  | "your-progress"
  | "your-struggles"
  | "your-history"

export function LearnPageContent() {
  const [mobileContentView, setMobileContentView] =
    createSignal<MobileContentView>("learning-path")
  const loaderData = Route.useLoaderData()

  const activeDeck = () =>
    getDeckBySlug(loaderData().textbookId, loaderData().chapterSlug)

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
        blur="0px"
      />
      {/* Mobile Layout */}
      <SSRMediaQuery hideFrom="xl">
        <LearnPageHeader
          variant="mobile"
          mobileContentView={mobileContentView()}
          setMobileContentView={setMobileContentView}
        />
        <div class="h-[calc(100vh-141px)] overflow-y-auto">
          <MobileContentRenderer activeView={mobileContentView} />
        </div>
      </SSRMediaQuery>
      {/* Desktop Layout */}
      <SSRMediaQuery showFrom="xl">
        <div class="min-h-screen">
          <LearnPageHeader variant="desktop" />
          <div class="flex w-full pr-4 pl-8">
            <div class="relative max-h-[calc(100vh-146px)] w-[20%] overflow-y-auto pt-6">
              <LeftSidebar variant="desktop" />
            </div>
            <div class="w-[60%]">
              <ChapterContentArea />
            </div>
            <div class="relative h-[calc(100vh-146px)] w-[20%] overflow-y-auto pt-6 pr-4">
              <RightSidebar variant="desktop" />
            </div>
          </div>
          <div class="pb-8" />
        </div>
      </SSRMediaQuery>
    </div>
  )
}
