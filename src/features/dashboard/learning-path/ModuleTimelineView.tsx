import { For } from "solid-js"
import { Link } from "@tanstack/solid-router"
import { ChevronRight } from "lucide-solid"
import { getModuleIcon, getModuleIconClasses } from "@/data/utils/module-helpers"
import { cn } from "@/utils"
import type { LearningPathModule } from "./types"

interface ModuleTimelineViewProps {
  modules: LearningPathModule[]
  isCompleted: (moduleId: string) => boolean
}

export function ModuleTimelineView(props: ModuleTimelineViewProps) {
  return (
    <ul class="relative ml-[7px] border-l-2 border-card-foreground/10">
      <For each={props.modules}>
        {(enrichedModule, index) => {
          const ModuleIcon = getModuleIcon(enrichedModule.module.module_type)
          const isCompleted = props.isCompleted(enrichedModule.moduleId)

          return (
            <li
              class={cn(
                "relative",
                index() !== props.modules.length - 1 && "pb-1",
              )}
            >
              <Link
                to={enrichedModule.linkTo}
                class={cn(
                  "group flex items-center gap-3 rounded-lg py-2.5 pr-3 pl-6 transition-all duration-150",
                  "hover:bg-white/5",
                  "focus-visible:outline-none focus-visible:bg-white/10",
                  enrichedModule.disabled && "cursor-not-allowed opacity-50",
                )}
              >
                {/* Timeline dot - vertically centered */}
                <div
                  class={cn(
                    "absolute left-[-7px] top-1/2 -translate-y-1/2 size-3 rounded-full border-2 bg-background transition-colors",
                    isCompleted
                      ? "border-green-500 bg-green-500"
                      : "border-card-foreground/20 group-hover:border-white/50 group-hover:bg-white/50",
                  )}
                />

                {/* Module content */}
                <div class="min-w-0 flex-1">
                  <h3
                    class={cn(
                      "flex items-center gap-1.5 text-sm font-medium leading-tight transition-colors",
                      isCompleted ? "text-green-500" : "group-hover:text-white",
                    )}
                  >
                    {enrichedModule.module.title}
                    <ModuleIcon
                      size="16px"
                      class={cn(
                        "shrink-0",
                        getModuleIconClasses(enrichedModule.module.module_type),
                      )}
                    />
                  </h3>
                  <p class="text-muted-foreground mt-0.5 text-xs line-clamp-2">
                    {enrichedModule.module.description ||
                      "Description coming soon"}
                  </p>
                </div>

                <ChevronRight class="size-4 shrink-0 text-muted-foreground/40 transition-all group-hover:translate-x-0.5 group-hover:text-white/70" />
              </Link>
            </li>
          )
        }}
      </For>
    </ul>
  )
}
