import { Grid3x3, List, Rows3 } from "lucide-solid"
import { Show } from "solid-js"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { LearningPathGrid } from "./LearningPathGrid"
import { LearningPathList } from "./LearningPathList"
import { LearningPathCategorized } from "./LearningPathCategorized"
import { useLearningPath } from "../LearningPathContext"

interface LearningPathSectionProps {
  lessonRefs?: (el: HTMLElement, index: number) => void
  blinkingLessonIndex?: number | null
}

export function LearningPathSection(props: LearningPathSectionProps) {
  const context = useLearningPath()

  return (
    <Tabs defaultValue="grid" class="w-full">
      <Show
        when={context.activeLearningPath() !== "getting_started"}
        fallback={<div class="h-6" />}
      >
        <div class="-mt-2 flex justify-end px-2 md:px-3">
          <TabsList class="h-8 bg-transparent">
            <TabsTrigger
              value="grid"
              class="data-[selected]:dark:bg-card-foreground/70 h-6 px-2"
            >
              <Grid3x3 class="h-4 w-4" />
            </TabsTrigger>
            <TabsTrigger
              value="list"
              class="data-[selected]:dark:bg-card-foreground/70 h-6 px-2"
            >
              <Rows3 class="h-4 w-4" />
            </TabsTrigger>
            <TabsTrigger
              value="compact"
              class="data-[selected]:dark:bg-card-foreground/70 h-6 px-2"
            >
              <List class="h-4 w-4" />
            </TabsTrigger>
          </TabsList>
        </div>
      </Show>
      <div class="flex flex-col">
        {/* Grid/Compact Content */}
        <div>
          <TabsContent value="grid" class="mt-0">
            <LearningPathGrid
              lessonRefs={props.lessonRefs}
              blinkingLessonIndex={props.blinkingLessonIndex}
            />
          </TabsContent>
          <TabsContent value="list" class="mt-0">
            <LearningPathList
              lessonRefs={props.lessonRefs}
              blinkingLessonIndex={props.blinkingLessonIndex}
            />
          </TabsContent>
          <TabsContent value="compact" class="mt-0">
            <LearningPathCategorized
              lessonRefs={props.lessonRefs}
              blinkingLessonIndex={props.blinkingLessonIndex}
            />
          </TabsContent>
        </div>

        {/* Tab Triggers Below Grid */}
      </div>
    </Tabs>
  )
}
