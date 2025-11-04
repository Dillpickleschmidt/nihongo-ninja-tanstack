import { For } from "solid-js"
import { Link } from "@tanstack/solid-router"
import { ModuleCard } from "./ModuleCard"
import { useLearningPath } from "../LearningPathContext"

interface LearningPathGridProps {
  lessonRefs?: (el: HTMLElement, index: number) => void
  blinkingLessonIndex?: number | null
}

export function LearningPathGrid(props: LearningPathGridProps) {
  const context = useLearningPath()

  return (
    <div class="px-4 pt-2 pb-4 md:px-6 md:pb-6">
      <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
        <For each={context.lessons()}>
          {(lesson, index) => (
            <div ref={(el) => props.lessonRefs?.(el, index())}>
              <Link to={lesson.href}>
                <ModuleCard
                  title={lesson.title}
                  description={lesson.description}
                  moduleType={lesson.moduleType}
                  iconClasses={lesson.iconClasses}
                  href={lesson.href}
                  isCompleted={context.isLessonCompleted(lesson.href)}
                  shouldBlink={props.blinkingLessonIndex === index()}
                />
              </Link>
            </div>
          )}
        </For>
      </div>
    </div>
  )
}
