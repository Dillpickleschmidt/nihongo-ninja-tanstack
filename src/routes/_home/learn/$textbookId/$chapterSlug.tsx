// routes/_home/learn/$textbookId.$chapterSlug.tsx
import { createFileRoute } from "@tanstack/solid-router"
import { LeftSidebar } from "@/features/learn-page/components/layout/LeftSidebar"
import { RightSidebar } from "@/features/learn-page/components/layout/RightSidebar"
import { ChapterContentArea } from "@/features/learn-page/components/content/ChapterContentArea"
import { MobileContentRenderer } from "@/features/learn-page/components/layout/MobileContentRenderer"
import { Route as ParentRoute } from "@/routes/_home/learn/$textbookId"
import { useLearnPageContext } from "@/features/learn-page/context/LearnPageContext"

export const Route = createFileRoute("/_home/learn/$textbookId/$chapterSlug")({
  component: RouteComponent,
})

function RouteComponent() {
  const loaderData = ParentRoute.useLoaderData()
  const { mobileContentView } = useLearnPageContext()

  return (
    <>
      {/* Mobile: Single column with content renderer */}
      <div class="xl:hidden">
        <MobileContentRenderer activeView={mobileContentView} />
      </div>

      {/* Desktop: 3-column layout */}
      <div class="hidden xl:flex xl:w-full xl:pr-4 xl:pl-8">
        <div class="relative max-h-[calc(100vh-146px)] w-[20%] overflow-y-auto pt-6">
          <LeftSidebar variant="desktop" />
        </div>
        <div class="w-[60%]">
          <ChapterContentArea />
        </div>
        <div class="relative h-[calc(100vh-146px)] w-[20%] overflow-y-auto pt-6">
          <RightSidebar variant="desktop" userId={loaderData().user?.id} />
        </div>
      </div>
    </>
  )
}
