import { For } from "solid-js"
import { Link } from "@tanstack/solid-router"
import { CircleCheckBig } from "lucide-solid"
import {
  getModuleIcon,
  getModuleIconClasses,
} from "@/data/utils/module-helpers"
import { cn } from "@/utils"
import type { LearningPathModule } from "convex/model/learning_paths"

interface ModuleListViewProps {
  modules: LearningPathModule[]
  isCompleted: (moduleId: string) => boolean
  openInDialog?: boolean
  onModuleSelect?: (module: LearningPathModule) => void
}

export function ModuleListView(props: ModuleListViewProps) {
  return (
    <div class="grid grid-cols-1 gap-6 lg:grid-cols-2 xl:grid-cols-3">
      <For each={props.modules}>
        {(module, index) => (
          <ModuleListItem
            module={module}
            index={index()}
            isCompleted={props.isCompleted(module.moduleId)}
            openInDialog={props.openInDialog}
            onModuleSelect={props.onModuleSelect}
          />
        )}
      </For>
    </div>
  )
}

interface ModuleListItemProps {
  module: LearningPathModule
  index: number
  isCompleted: boolean
  openInDialog?: boolean
  onModuleSelect?: (module: LearningPathModule) => void
}

function ModuleListItem(props: ModuleListItemProps) {
  const { module, linkTo, disabled } = props.module
  const ModuleIcon = getModuleIcon(module.module_type)
  const iconClasses = getModuleIconClasses(module.module_type)

  const content = (
    <div
      class={cn(
        "scrollbar-none absolute inset-0 flex items-center justify-between overflow-x-scroll overflow-y-hidden px-5",
        props.isCompleted && "bg-green-500/10",
      )}
    >
      <div class="flex items-center gap-3">
        <span
          class={cn(
            "text-primary",
            props.isCompleted && "font-bold text-green-500",
          )}
        >
          {props.index + 1}.
        </span>
        <span
          class={cn(
            "text-foreground dark:text-muted-foreground",
            props.isCompleted && "font-bold text-green-500",
          )}
        >
          {props.isCompleted && (
            <CircleCheckBig class="mr-2 inline-flex h-4 w-4 origin-center dark:text-green-500" />
          )}
          {module.title}
        </span>
      </div>

      <div class="sticky right-0 flex shrink-0">
        <ModuleIcon size="20px" class={iconClasses} />
      </div>
    </div>
  )

  const baseClasses = cn(
    "group bg-card font-outfit relative block h-12 w-full rounded-md text-sm whitespace-nowrap shadow-sm",
    "border-border/70 border backdrop-blur-sm dark:border-card-foreground/70",
    "bg-gradient-to-br from-white/80 to-muted/40 dark:from-neutral-600/15 dark:to-gray-600/10",
    "ease-instant-hover-200",
    props.isCompleted && "border-green-500/50 font-semibold text-green-500",
    disabled
      ? "cursor-not-allowed opacity-50"
      : "hover:bg-accent cursor-pointer",
  )

  return (
    <div class="ease-instant-hover-75 hover:scale-[98.5%]">
      {props.openInDialog ? (
        <button
          type="button"
          data-lessons-section
          onClick={() => props.onModuleSelect?.(props.module)}
          class={cn(baseClasses, "text-left")}
        >
          {content}
        </button>
      ) : (
        <Link to={linkTo} data-lessons-section class={baseClasses}>
          {content}
        </Link>
      )}
    </div>
  )
}
