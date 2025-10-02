import { Show, For } from "solid-js"
import { useCustomQuery } from "@/hooks/useCustomQuery"
import {
  userTextbookProgressQueryOptions,
  completedModulesQueryOptions,
} from "@/queries/learn-page-queries"
import { getUpcomingModules } from "@/features/learn-page/utils/learning-position-detector"
import { dynamic_modules } from "@/data/dynamic_modules"
import { static_modules } from "@/data/static_modules"
import type { TextbookIDEnum, LearningPathItem } from "@/data/types"
import { cn } from "@/utils"
import { getModuleCircleClasses } from "@/features/learn-page/utils/loader-helpers"

interface UpcomingLessonsContentProps {
  userId: string | null
  textbookId: TextbookIDEnum
  learningPathItems: LearningPathItem[]
}

type ModuleWithCurrent = LearningPathItem & { isCurrent?: boolean }

export function UpcomingLessonsContent(props: UpcomingLessonsContentProps) {
  const progressQuery = useCustomQuery(() =>
    userTextbookProgressQueryOptions(props.userId, props.textbookId),
  )
  const completionsQuery = useCustomQuery(() =>
    completedModulesQueryOptions(props.userId),
  )

  const isCompleted = (moduleId: string) =>
    completionsQuery.data?.some((c) => c.module_path === moduleId)

  const modulesWithCurrent = (): ModuleWithCurrent[] => {
    const currentPosition = progressQuery.data?.current_module_id
    if (!currentPosition) return props.learningPathItems.slice(0, 6)

    const currentModule = props.learningPathItems.find(
      (item) => item.id === currentPosition,
    )
    const upcoming = getUpcomingModules(
      currentPosition,
      props.learningPathItems,
      5,
    )
    return currentModule
      ? [{ ...currentModule, isCurrent: true }, ...upcoming]
      : upcoming
  }

  const hasCurrentItem = () => {
    const first = modulesWithCurrent()[0]
    return first?.isCurrent || isCompleted(first?.id)
  }

  const getModuleInfo = (
    moduleId: string,
    learningPathItem?: LearningPathItem,
  ) => {
    const dynamicModule = dynamic_modules[moduleId]
    if (dynamicModule) {
      return { title: dynamicModule.title, type: dynamicModule.session_type }
    }
    const staticModule = static_modules[moduleId]
    if (staticModule) {
      return { title: staticModule.title, type: staticModule.lesson_type }
    }
    if (learningPathItem?.type === "external_resource") {
      return { title: moduleId.replace(/-/g, " "), type: "video" }
    }
    return { title: moduleId, type: "misc" }
  }

  return (
    <div class="space-y-3">
      <h3 class="text-lg font-semibold">Upcoming Lessons</h3>

      <Show
        when={!progressQuery.isLoading && modulesWithCurrent().length > 0}
        fallback={
          <p class="text-muted-foreground text-sm">
            Complete a lesson to see upcoming modules
          </p>
        }
      >
        <div class="space-y-1">
          {(() => {
            const firstUpcomingIndex = hasCurrentItem() ? 1 : 0
            return (
              <For each={modulesWithCurrent()}>
                {(item, index) => {
                  const moduleInfo = getModuleInfo(item.id, item)
                  const circleClasses = getModuleCircleClasses(moduleInfo.type)
                  const completed = isCompleted(item.id)
                  const isFirstUpcoming =
                    index() === firstUpcomingIndex &&
                    !item.isCurrent &&
                    !completed
                  const isCurrentOrCompleted = item.isCurrent || completed

                  return (
                    <div
                      class={cn(
                        "ml-1 rounded px-2",
                        item.isCurrent && "opacity-50",
                      )}
                    >
                      <div class="flex items-center gap-2 py-2">
                        <div
                          class={cn(
                            "h-2 w-2 flex-shrink-0 rounded-full",
                            circleClasses,
                          )}
                        />
                        <span
                          class={cn(
                            "ease-instant-hover-100 ml-1 flex-1 text-xs",
                            isCurrentOrCompleted
                              ? "text-muted-foreground font-light"
                              : "hover:text-muted-foreground cursor-pointer",
                            isFirstUpcoming && "text-[15px]",
                          )}
                        >
                          <span class="whitespace-nowrap">
                            {moduleInfo.title}
                          </span>
                          {item.isCurrent && " (Completed)"}
                        </span>
                      </div>
                    </div>
                  )
                }}
              </For>
            )
          })()}
        </div>
      </Show>
    </div>
  )
}
