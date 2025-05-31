// features/dashboard/components/LessonsSection.tsx
import { For } from "solid-js"
import { ChevronRight } from "lucide-solid"
import { LessonCard } from "./LessonCard"
import type { StaticModule, DynamicModule } from "@/data/types"

interface LessonsSectionProps {
  lessons: (StaticModule | DynamicModule)[]
  progressPercentage: number
}

export function LessonsSection(props: LessonsSectionProps) {
  return (
    <div class="mb-4">
      <div class="mb-4 flex items-center justify-between pl-8">
        <h2 class="text-xl">Lessons</h2>
        <ChevronRight class="mr-5 h-5 w-5" />
      </div>

      {/* Progress Bar */}
      <div class="mb-6 pl-8">
        <div class="bg-muted h-[0.375rem] w-48 rounded-full">
          <div
            class="dark:bg-primary bg-primary/50 h-[0.375rem] rounded-full"
            style={`width: ${props.progressPercentage}%`}
          />
        </div>
      </div>

      {/* Lessons */}
      <div class="scrollbar-hide flex gap-3.5 overflow-x-auto pr-4 pb-2 pl-8">
        <For each={props.lessons}>
          {(lesson) => <LessonCard lesson={lesson} />}
        </For>
      </div>
    </div>
  )
}
