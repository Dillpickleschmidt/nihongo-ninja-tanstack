// features/learn-page/components/content/ChapterContentArea.tsx
import { FeaturedContent } from "./FeaturedContent"
import { LearningPathSection } from "./LearningPathSection"
import { SSRMediaQuery } from "@/components/SSRMediaQuery"

export function ChapterContentArea() {
  return (
    <>
      {/* Mobile Layout - Empty Placeholder */}
      <SSRMediaQuery hideFrom="xl">
        <div />
      </SSRMediaQuery>

      {/* Desktop Layout */}
      <SSRMediaQuery showFrom="xl">
        <DesktopChapterContent />
      </SSRMediaQuery>
    </>
  )
}

// ============================================================================
// Desktop Implementation
// ============================================================================

function DesktopChapterContent() {
  return (
    <div class="flex h-[calc(100vh-146px)] w-full flex-col">
      {/* Featured Content Section */}
      <div class="flex-shrink-0">
        <FeaturedContent />
      </div>

      {/* Learning Path Section */}
      <div class="flex-1 overflow-y-auto pt-6 pr-8 pl-6">
        <LearningPathSection />
      </div>
    </div>
  )
}
