// features/dashboard/components/LessonsSection.tsx
import { For } from "solid-js"
import { ArrowRight } from "lucide-solid"
import { LessonCard } from "./LessonCard"
import type { StaticModule, DynamicModule } from "@/data/types"

interface LessonsSectionProps {
  lessons: (StaticModule | DynamicModule)[]
  progressPercentage: number
}

export function LessonsSection(props: LessonsSectionProps) {
  return (
    <div class="mb-3 xl:mb-4">
      <div class="flex items-center justify-between">
        <div>
          <div class="mb-4 flex items-center justify-between pl-8 xl:mb-5 xl:pl-10">
            <h2 class="text-xl xl:text-2xl">Lessons</h2>
          </div>

          {/* Progress Bar */}
          <div class="mb-6 pl-8 xl:mb-7 xl:pl-10">
            <div class="bg-card-foreground h-[0.33rem] w-48 rounded-full xl:h-[0.4rem] xl:w-52">
              <div
                class="dark:bg-primary bg-primary/50 h-[0.33rem] rounded-full xl:h-[0.4rem]"
                style={`width: ${props.progressPercentage}%`}
              />
            </div>
          </div>
        </div>
        <ArrowRight class="mr-5 h-5 w-5 -translate-y-2 xl:mr-6 xl:h-6 xl:w-6" />
      </div>

      {/* Lessons */}
      <div class="scrollbar-hide flex gap-3.5 overflow-x-auto pr-4 pb-2 pl-8 xl:gap-4 xl:pr-5 xl:pl-10">
        <For each={props.lessons}>
          {(lesson) => <LessonCard lesson={lesson} />}
        </For>
      </div>
    </div>
  )
}
