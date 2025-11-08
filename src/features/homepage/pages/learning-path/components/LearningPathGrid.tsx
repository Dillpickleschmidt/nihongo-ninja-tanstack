import { For, Show } from "solid-js"
import { Link } from "@tanstack/solid-router"
import { ModuleCard } from "./ModuleCard"
import { useLearningPath } from "../LearningPathContext"
import { SSRMediaQuery } from "@/components/SSRMediaQuery"
import ViewingIsEnough from "@/features/homepage/shared/assets/viewing-is-enough.svg"

interface LearningPathGridProps {
  lessonRefs?: (el: HTMLElement, index: number) => void
  blinkingLessonIndex?: number | null
}

export function LearningPathGrid(props: LearningPathGridProps) {
  const context = useLearningPath()

  return (
    <div class="px-4 pt-2 pb-4 md:px-6 md:pb-6">
      <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
        <For each={context.modules.data}>
          {(lesson, index) => (
            <>
              <div ref={(el) => props.lessonRefs?.(el, index())}>
                <Link to={lesson.linkTo}>
                  <ModuleCard
                    module={lesson}
                    isCompleted={context.isLessonCompleted(lesson.linkTo)}
                    shouldBlink={props.blinkingLessonIndex === index()}
                  />
                </Link>
              </div>
              <Show
                when={
                  index() === 0 &&
                  context.settingsQuery.data!["active-learning-path"] ===
                    "getting_started"
                }
              >
                <SSRMediaQuery hideFrom="md">
                  <ViewingIsEnough class="pointer-events-none -mt-1 -mb-5 h-auto w-68 justify-self-end text-neutral-400" />
                </SSRMediaQuery>
              </Show>
            </>
          )}
        </For>
      </div>
    </div>
  )
}
