import { Show, For } from "solid-js"
import { Link } from "@tanstack/solid-router"
import { static_modules } from "@/data/static_modules"
import { dynamic_modules } from "@/data/dynamic_modules"
import { external_resources } from "@/data/external_resources"
import { cn } from "@/utils"
import {
  getModuleCircleClasses,
  getLinkTo,
} from "@/features/learn-page/utils/loader-helpers"
import { useLearnPageContext } from "@/features/learn-page/context/LearnPageContext"

const modules = { ...static_modules, ...dynamic_modules, ...external_resources }

export function UpcomingLessonsContent() {
  const { upcomingModulesQuery, completionsQuery } = useLearnPageContext()

  const isCompleted = (moduleId: string) =>
    completionsQuery.data?.some((c) => c.module_path === moduleId)

  const filteredItems = () => {
    const data = upcomingModulesQuery.data || []
    // Keep current item always, filter out other completed items
    return data.filter((item) => item.isCurrent || !isCompleted(item.id))
  }

  const firstIncompleteIndex = () => {
    const items = filteredItems()
    return items.findIndex((item) => !isCompleted(item.id))
  }

  const getModuleInfo = (moduleId: string) => {
    const module = modules[moduleId]
    if (module) {
      const type =
        "session_type" in module ? module.session_type : module.lesson_type
      const linkTo = getLinkTo(module, moduleId)
      return { title: module.title, type, linkTo }
    }
    return { title: moduleId, type: "misc", linkTo: "#" }
  }

  return (
    <div class="space-y-3">
      <h3 class="text-lg font-semibold">Upcoming Lessons</h3>

      <Show
        when={!upcomingModulesQuery.isLoading && filteredItems().length}
        fallback={
          <p class="text-muted-foreground text-sm">
            Complete a lesson to see upcoming modules
          </p>
        }
      >
        <div class="space-y-1">
          <For each={filteredItems()}>
            {(item, index) => {
              const moduleInfo = getModuleInfo(item.id)
              const circleClasses = getModuleCircleClasses(moduleInfo.type)
              const completed = isCompleted(item.id)
              const isFirstIncomplete = index() === firstIncompleteIndex()

              return (
                <div
                  class={cn(
                    "ml-1 rounded px-2",
                    item.isCurrent && completed && "opacity-50",
                  )}
                >
                  <Link to={moduleInfo.linkTo}>
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
                          completed
                            ? "text-muted-foreground font-light"
                            : "hover:text-muted-foreground cursor-pointer",
                          isFirstIncomplete && "text-[16px]",
                        )}
                      >
                        <span class="whitespace-nowrap">
                          {moduleInfo.title}
                        </span>
                        <Show when={completed}>
                          <span class="ml-2 text-sm font-bold text-green-500">
                            ✓
                          </span>
                        </Show>
                      </span>
                    </div>
                  </Link>
                </div>
              )
            }}
          </For>
        </div>
      </Show>
    </div>
  )
}
