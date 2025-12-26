import { For } from "solid-js"
import { Link } from "@tanstack/solid-router"
import { CircleCheckBig } from "lucide-solid"
import { getModuleIcon } from "@/data/utils/module-helpers"
import type { ResolvedModule } from "@/data/utils/modules"
import { cn } from "@/utils"

interface ModuleListViewProps {
  modules: ResolvedModule[]
}

export function ModuleListView(props: ModuleListViewProps) {
  return (
    <div class="grid grid-cols-1 gap-6 lg:grid-cols-2 xl:grid-cols-3">
      <For each={props.modules}>
        {(module, index) => (
          <ModuleListItem
            module={module}
            index={index()}
            number={index() + 1}
            isCompleted={false} // TODO: integrate with completion tracking
          />
        )}
      </For>
    </div>
  )
}

interface ModuleListItemProps {
  module: ResolvedModule
  index: number
  number: number
  isCompleted: boolean
}

function ModuleListItem(props: ModuleListItemProps) {
  const { module, linkTo, iconClasses, disabled } = props.module
  const ModuleIcon = getModuleIcon(module.module_type)

  return (
    <div class="ease-instant-hover-75 hover:scale-[98.5%]">
      <Link
        to={linkTo}
        data-lessons-section
        class={cn(
          "group bg-card font-inter relative block h-12 w-full rounded-md text-sm whitespace-nowrap",
          "border-card-foreground/70 border backdrop-blur-sm",
          "bg-gradient-to-br dark:from-neutral-600/15 dark:to-gray-600/10",
          "ease-instant-hover-200",
          props.isCompleted &&
            "border-green-500/50 font-semibold text-green-500",
          disabled
            ? "cursor-not-allowed opacity-50"
            : "hover:bg-accent cursor-pointer",
        )}
      >
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
              {props.number}.
            </span>
            <span
              class={cn(
                "text-primary dark:text-muted-foreground",
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
      </Link>
    </div>
  )
}
