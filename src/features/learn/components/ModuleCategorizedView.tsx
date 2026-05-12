import { For, createMemo } from "solid-js"
import { Link } from "@tanstack/solid-router"
import {
  getModuleIcon,
  getModuleIconClasses,
} from "@/data/utils/module-helpers"
import { cn } from "@/utils"
import type { LearningPathModule } from "convex/model/learning_paths"

// Category configuration
type CategoryKey = "vocabulary" | "lessons" | "grammar" | "other"

interface CategoryConfig {
  title: string
  iconModuleType: string
  types: string[]
}

const CATEGORIES: Record<CategoryKey, CategoryConfig> = {
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

interface ModuleCategorizedViewProps {
  modules: LearningPathModule[]
  isCompleted: (moduleId: string) => boolean
  openInDialog?: boolean
  onModuleSelect?: (module: LearningPathModule) => void
}

export function ModuleCategorizedView(props: ModuleCategorizedViewProps) {
  // Group modules by category
  const groupedModules = createMemo(() => {
    const groups: Record<CategoryKey, LearningPathModule[]> = {
      vocabulary: [],
      lessons: [],
      grammar: [],
      other: [],
    }

    props.modules.forEach((enrichedModule) => {
      const moduleType = enrichedModule.module.module_type
      let found = false

      for (const [key, config] of Object.entries(CATEGORIES)) {
        if (config.types.includes(moduleType)) {
          groups[key as CategoryKey].push(enrichedModule)
          found = true
          break
        }
      }

      if (!found) {
        groups.other.push(enrichedModule)
      }
    })

    return groups
  })

  return (
    <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
      <For
        each={
          Object.entries(CATEGORIES) as Array<[CategoryKey, CategoryConfig]>
        }
      >
        {([categoryKey, categoryConfig]) => {
          const categoryModules = () => groupedModules()[categoryKey]
          const HeaderIcon = getModuleIcon(categoryConfig.iconModuleType)

          return (
            <div>
              {/* Category Header */}
              <div class="mb-4 flex items-center gap-2">
                <HeaderIcon
                  size="20px"
                  class={getModuleIconClasses(categoryConfig.iconModuleType)}
                />
                <h3 class="text-muted-foreground text-sm font-semibold">
                  {categoryConfig.title}
                </h3>
              </div>

              {/* Vertical List */}
              <div class="space-y-3">
                <For each={categoryModules()}>
                  {(enrichedModule) => {
                    const ModuleIcon = getModuleIcon(
                      enrichedModule.module.module_type,
                    )
                    const isCompleted = props.isCompleted(
                      enrichedModule.moduleId,
                    )
                    const originalIndex = props.modules.findIndex(
                      (m) => m.moduleId === enrichedModule.moduleId,
                    )

                    const content = (
                      <div
                        class={cn(
                          "text-sm",
                          isCompleted
                            ? "text-green-600 dark:text-green-500"
                            : "text-foreground hover:text-dynamic-accent dark:text-white dark:hover:text-neutral-300",
                        )}
                      >
                        <div class="flex items-center gap-2">
                          <ModuleIcon
                            size="16px"
                            class={getModuleIconClasses(
                              enrichedModule.module.module_type,
                            )}
                          />
                          <span>{enrichedModule.module.title}</span>
                        </div>
                        <p class="text-muted-foreground/60 mt-1 text-xs">
                          {originalIndex + 1}.{" "}
                          {enrichedModule.module.description ||
                            "Description coming soon"}
                        </p>
                      </div>
                    )

                    const baseClasses = cn(
                      "block transition-colors",
                      enrichedModule.disabled &&
                        "cursor-not-allowed opacity-50",
                    )

                    if (props.openInDialog) {
                      return (
                        <button
                          type="button"
                          onClick={() => props.onModuleSelect?.(enrichedModule)}
                          class={cn(baseClasses, "w-full text-left")}
                        >
                          {content}
                        </button>
                      )
                    }

                    return (
                      <Link to={enrichedModule.linkTo} class={baseClasses}>
                        {content}
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
  )
}
