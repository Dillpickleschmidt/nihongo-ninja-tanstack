// features/dashboard/components/content/textbook/TextbookContentArea.tsx
import { ContentShowcase } from "./ContentShowcase"
import { CourseDashboard } from "./CourseDashboard"
import { MoreResourcesSection } from "./MoreResourcesSection"
import { StrugglesSection } from "./StrugglesSection"
import { SSRMediaQuery } from "@/components/SSRMediaQuery"
import type {
  EnrichedExternalResource,
  EnrichedLearningPathModule,
} from "@/features/dashboard/utils/loader-helpers"
import type { DeferredPromise } from "@tanstack/solid-router"

interface TextbookContentAreaProps {
  initialLessons: EnrichedLearningPathModule[]
  remainingLessons: DeferredPromise<EnrichedLearningPathModule[]>
  totalLessonCount: number
  externalResources: EnrichedExternalResource[]
  deferredThumbnails: DeferredPromise<{
    resourceId: string
    thumbnailUrl: string | null
  }>[]
  progressPercentage: number
}

export function TextbookContentArea(props: TextbookContentAreaProps) {
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

  return (
    <>
      {/* Mobile Layout */}
      <SSRMediaQuery hideFrom="xl">
        <ContentShowcase
          resources={props.externalResources}
          thumbnailPromises={props.deferredThumbnails}
          variant="mobile"
        />
        <CourseDashboard
          initialLessons={props.initialLessons}
          remainingLessons={props.remainingLessons}
          progressPercentage={props.progressPercentage}
          variant="mobile"
        />
        <StrugglesSection struggles={struggles} variant="mobile" />
      </SSRMediaQuery>

      {/* Desktop Layout */}
      <SSRMediaQuery showFrom="xl">
        <div class="flex h-[calc(100vh-146px)] flex-col">
          <ContentShowcase
            resources={props.externalResources}
            thumbnailPromises={props.deferredThumbnails}
            variant="desktop"
          />
          <div class="flex min-h-0 flex-1 flex-col px-4">
            <div class="px-4">
              <MoreResourcesSection />
            </div>
            <div class="flex min-h-0 flex-1 flex-col pt-4">
              {/* Core Lessons Section */}
              <div class="flex items-center gap-3 px-4 pb-4">
                <h3 class="text-xl font-semibold">Core Lessons</h3>
                {/* Progress Bar */}
                <div class="relative flex-1">
                  <div class="bg-muted/30 h-1.5 w-full overflow-hidden rounded-full">
                    <div
                      class="from-primary to-primary/80 h-full rounded-full bg-gradient-to-r transition-all duration-700 ease-out"
                      style={`width: ${props.progressPercentage}%`}
                    />
                  </div>
                  <div class="bg-primary absolute -top-0.5 right-0 h-2.5 w-2.5 rounded-full shadow-lg"></div>
                </div>
                <span class="text-muted-foreground text-sm">
                  {props.totalLessonCount}{" "}
                  {props.totalLessonCount === 1 ? "lesson" : "lessons"}
                </span>
              </div>
              <div class="min-h-0 flex-1 overflow-x-hidden overflow-y-auto px-4 pb-4">
                <CourseDashboard
                  initialLessons={props.initialLessons}
                  remainingLessons={props.remainingLessons}
                  progressPercentage={props.progressPercentage}
                  variant="desktop"
                />
              </div>
            </div>
          </div>
        </div>
      </SSRMediaQuery>
    </>
  )
}
