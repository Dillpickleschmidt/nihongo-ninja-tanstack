// features/dashboard/components/content/textbook/TextbookContentArea.tsx
import { Show } from "solid-js"
import { ContentShowcase } from "./ContentShowcase"
import { CourseDashboard } from "./CourseDashboard"
import { MoreResourcesSection } from "./MoreResourcesSection"
import { StrugglesSection } from "./StrugglesSection"
import { SSRMediaQuery } from "@/components/SSRMediaQuery"
import type {
  StaticModule,
  DynamicModule,
  ExternalResource,
} from "@/data/types"

interface TextbookContentAreaProps {
  lessons: (StaticModule | DynamicModule)[]
  externalResources: ExternalResource[]
  deferredThumbnails: Promise<{
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
          lessons={props.lessons}
          progressPercentage={props.progressPercentage}
          variant="mobile"
        />
        <StrugglesSection struggles={struggles} variant="mobile" />
      </SSRMediaQuery>

      {/* Desktop Layout */}
      <SSRMediaQuery showFrom="xl">
        <div class="flex h-[calc(100vh-146px)] flex-col">
          {/* Fixed Featured Content Section */}
          <ContentShowcase
            resources={props.externalResources}
            thumbnailPromises={props.deferredThumbnails}
            variant="desktop"
          />

          {/* Main Content Area */}
          <div class="flex min-h-0 flex-1 flex-col px-4">
            {/* More Resources */}
            <div class="px-4">
              <MoreResourcesSection />
            </div>

            {/* Core Lessons Section */}
            <div class="flex min-h-0 flex-1 flex-col pt-4">
              {/* Section Header with Progress Bar */}
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
                  {props.lessons.length}{" "}
                  {props.lessons.length === 1 ? "lesson" : "lessons"}
                </span>
              </div>

              {/* Scrollable Lessons Container */}
              <div class="min-h-0 flex-1 overflow-x-hidden overflow-y-auto px-4 pb-4">
                <CourseDashboard
                  lessons={props.lessons}
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
