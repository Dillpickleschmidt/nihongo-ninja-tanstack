import { For, Show, createMemo } from "solid-js"
import { Link } from "@tanstack/solid-router"
import { useLearningPath } from "../LearningPathContext"
import {
  getModuleIcon,
  getModuleIconClasses,
  type EnrichedLearningPathModule,
} from "@/features/learn-page/utils/loader-helpers"

interface LearningPathCategorizedProps {
  lessonRefs?: (el: HTMLElement, index: number) => void
  blinkingLessonIndex?: number | null
}

type CategoryKey = "vocabulary" | "lessons" | "grammar" | "other"

interface CategoryConfig {
  title: string
  iconModuleType: string
  types: string[]
}

/**
 * Column-based tree view of learning path grouped by lesson type
 */
export function LearningPathCategorized(props: LearningPathCategorizedProps) {
  const context = useLearningPath()

  const categories: Record<CategoryKey, CategoryConfig> = {
    vocabulary: {
      title: "VOCABULARY",
      iconModuleType: "vocab-practice",
      types: ["vocab-list", "vocab-practice", "vocab-test"],
    },
    lessons: {
      title: "LESSONS",
      iconModuleType: "lesson",
      types: ["grammar-notes", "lesson"],
    },
    grammar: {
      title: "GRAMMAR",
      iconModuleType: "sentence-practice",
      types: ["sentence-practice", "conjugation-practice", "counter-practice"],
    },
    other: {
      title: "OTHER",
      iconModuleType: "audio",
      types: [],
    },
  }

  // Group lessons by type
  const groupedLessons = createMemo(() => {
    const groups: Record<CategoryKey, EnrichedLearningPathModule[]> = {
      vocabulary: [],
      lessons: [],
      grammar: [],
      other: [],
    }

    const lessons = context.modules.data
    if (!lessons) return groups

    lessons.forEach((lesson) => {
      const lessonType = lesson.source_type
      let found = false

      for (const [key, config] of Object.entries(categories)) {
        if (config.types.includes(lessonType)) {
          groups[key as CategoryKey].push(lesson)
          found = true
          break
        }
      }

      if (!found) {
        groups.other.push(lesson)
      }
    })

    return groups
  })

  // Create flattened list with indices for refs
  const flatLessons = createMemo(() => {
    const flat: Array<{
      lesson: EnrichedLearningPathModule
      originalIndex: number
    }> = []
    let index = 0
    const lessons = context.modules.data
    if (!lessons) return flat

    lessons.forEach((lesson) => {
      flat.push({ lesson, originalIndex: index })
      index++
    })
    return flat
  })

  return (
    <Show when={context.modules.data && !context.modules.isPending}>
      <div class="px-4 pt-2 pb-4 md:px-6 md:pb-6">
        <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <For
            each={
              Object.entries(categories) as Array<[CategoryKey, CategoryConfig]>
            }
          >
            {([categoryKey, categoryConfig]) => {
              const lessons = () => groupedLessons()[categoryKey]

              return (
                <div>
                  {/* Category Header */}
                  <div class="mb-4 flex items-center gap-2">
                    {(() => {
                      const HeaderIcon = getModuleIcon(
                        categoryConfig.iconModuleType,
                      )
                      return (
                        <HeaderIcon
                          size="20px"
                          class={getModuleIconClasses(
                            categoryConfig.iconModuleType,
                          )}
                        />
                      )
                    })()}
                    <h3 class="text-muted-foreground text-sm font-semibold">
                      {categoryConfig.title}
                    </h3>
                  </div>

                  {/* Vertical List */}
                  <div class="space-y-3">
                    <For each={lessons()}>
                      {(lesson) => {
                        const flatItem = flatLessons().find(
                          (f) => f.lesson.linkTo === lesson.linkTo,
                        )
                        const originalIndex = flatItem?.originalIndex ?? 0
                        const ModuleIcon = getModuleIcon(lesson.source_type)

                        return (
                          <Link
                            to={lesson.linkTo}
                            ref={(el) => props.lessonRefs?.(el, originalIndex)}
                            class={`block transition-colors ${
                              props.blinkingLessonIndex === originalIndex
                                ? "animate-pulse"
                                : ""
                            }`}
                          >
                            <div
                              class={`text-sm ${
                                context.isLessonCompleted(lesson.linkTo)
                                  ? "text-green-500"
                                  : "ease-instant-hover-200 text-white hover:text-neutral-300"
                              }`}
                            >
                              <div class="flex items-center gap-2">
                                <ModuleIcon
                                  size="16px"
                                  class={lesson.iconClasses}
                                />
                                <span>{lesson.title}</span>
                              </div>
                              <p class="text-muted-foreground/60 mt-1 text-xs">
                                {originalIndex + 1}. Description coming soon
                              </p>
                            </div>
                          </Link>
                        )
                      }}
                    </For>
                  </div>
                </div>
              )
            }}
          </For>
        </div>
      </div>
    </Show>
  )
}
