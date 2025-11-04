import { Grid3x3, List } from "lucide-solid"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { LearningPathGrid } from "./LearningPathGrid"
import { LearningPathCompact } from "./LearningPathCompact"

interface LearningPathSectionProps {
  lessonRefs?: (el: HTMLElement, index: number) => void
  blinkingLessonIndex?: number | null
}

export function LearningPathSection(props: LearningPathSectionProps) {
  return (
    <Tabs defaultValue="grid" class="w-full">
      <div class="flex flex-col">
        {/* Grid/Compact Content */}
        <div>
          <TabsContent value="grid" class="mt-0">
            <LearningPathGrid
              lessonRefs={props.lessonRefs}
              blinkingLessonIndex={props.blinkingLessonIndex}
            />
          </TabsContent>
          <TabsContent value="compact" class="mt-0">
            <LearningPathCompact
              lessonRefs={props.lessonRefs}
              blinkingLessonIndex={props.blinkingLessonIndex}
            />
          </TabsContent>
        </div>

        {/* Tab Triggers Below Grid */}
        <div class="px-4 pb-4 md:px-6 md:pb-6">
          <TabsList class="h-8 bg-transparent">
            <TabsTrigger
              value="grid"
              class="data-[selected]:dark:bg-card-foreground/70 h-6 px-2"
            >
              <Grid3x3 class="h-4 w-4" />
            </TabsTrigger>
            <TabsTrigger
              value="compact"
              class="data-[selected]:dark:bg-card-foreground/70 h-6 px-2"
            >
              <List class="h-4 w-4" />
            </TabsTrigger>
          </TabsList>
        </div>
      </div>
    </Tabs>
  )
}
