import { Show, For } from "solid-js"
import { static_modules } from "@/data/static_modules"
import { dynamic_modules } from "@/data/dynamic_modules"
import { external_resources } from "@/data/external_resources"
import { cn } from "@/utils"
import { getModuleCircleClasses } from "@/features/learn-page/utils/loader-helpers"
import { useLearnPageContext } from "@/features/learn-page/context/LearnPageContext"

const modules = { ...static_modules, ...dynamic_modules, ...external_resources }

export function UpcomingLessonsContent() {
  const { upcomingModulesQuery, completionsQuery } = useLearnPageContext()

  const isCompleted = (moduleId: string) =>
    completionsQuery.data?.some((c) => c.module_path === moduleId)

  const hasCurrentItem = () => {
    const first = upcomingModulesQuery.data?.[0]
    return first?.isCurrent || (first && isCompleted(first.id))
  }

  const getModuleInfo = (moduleId: string) => {
    const module = modules[moduleId]
    if (module) {
      const type =
        "session_type" in module ? module.session_type : module.lesson_type
      return { title: module.title, type }
    }
    return { title: moduleId, type: "misc" }
  }

  return (
    <div class="space-y-3">
      <h3 class="text-lg font-semibold">Upcoming Lessons</h3>

      <Show
        when={
          !upcomingModulesQuery.isLoading && upcomingModulesQuery.data?.length
        }
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
              <For each={upcomingModulesQuery.data || []}>
                {(item, index) => {
                  const moduleInfo = getModuleInfo(item.id)
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
