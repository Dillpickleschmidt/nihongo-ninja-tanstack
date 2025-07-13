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
        {/* Fixed Featured Content Section */}
        <div class="pb-3">
          <ContentShowcase
            resources={props.externalResources}
            thumbnailPromises={props.deferredThumbnails}
            variant="desktop"
          />
        </div>

        {/* Scrollable Bottom Section */}
        <div class="scrollbar-hide relative h-[calc(100vh-441px)] overflow-x-hidden overflow-y-auto overscroll-x-none px-8 pb-12">
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
                  <div class="text-primary text-2xl font-bold">
                    {props.progressPercentage}%
                  </div>
                  <div class="text-muted-foreground text-sm">Complete</div>
                </div>
              </div>

              <div class="relative mt-4">
                <div class="bg-muted/30 h-2 w-full overflow-hidden rounded-full">
                  <div
                    class="from-primary to-primary/80 h-full rounded-full bg-gradient-to-r transition-all duration-700 ease-out"
                    style={`width: ${props.progressPercentage}%`}
                  />
                </div>
                <div class="bg-primary absolute -top-0.5 right-0 h-3 w-3 rounded-full shadow-lg"></div>
              </div>
            </div>

            {/* Course Content */}
            <div class="pt-6">
              <CourseDashboard
                lessons={props.lessons}
                progressPercentage={props.progressPercentage}
                variant="desktop"
              />
            </div>
          </div>
        </div>
      </SSRMediaQuery>
    </>
  )
}
