import { Link } from "@tanstack/solid-router"
import { ChevronRight } from "lucide-solid"
import {
  getModuleIcon,
  getModuleIconClasses,
} from "@/data/utils/module-helpers"
import { cn } from "@/utils"
import type { LearningPathModule } from "convex/model/learning_paths"
import type { JSX } from "solid-js"

interface ModuleTimelineItemProps {
  module: LearningPathModule
  /** Render as a button instead of a link (for dialog mode) */
  asButton?: boolean
  onSelect?: () => void
  /** Additional classes for the link/button wrapper */
  linkClass?: string
  /** Inline styles for the link/button wrapper */
  linkStyle?: JSX.CSSProperties
  /** Additional classes for the timeline dot */
  dotClass?: string
  /** Additional classes for the title */
  titleClass?: string
  /** Additional classes for the description */
  descriptionClass?: string
  /** Additional classes for the chevron */
  chevronClass?: string
  /** Hide the description text */
  hideDescription?: boolean
  /** Hide the timeline dot */
  hideDot?: boolean
}

export function ModuleTimelineItem(props: ModuleTimelineItemProps) {
  const ModuleIcon = getModuleIcon(props.module.module.module_type)

  const content = (
    <>
      {/* Timeline dot */}
      {!props.hideDot && (
        <div
          class={cn(
            "absolute left-[-7px] top-1/2 -translate-y-1/2 size-3 rounded-full border-2 bg-background transition-colors",
            "border-card-foreground/20 group-hover:border-white/50 group-hover:bg-white/50",
            props.dotClass,
          )}
        />
      )}

      {/* Module content */}
      <div class="min-w-0 flex-1">
        <h3
          class={cn(
            "flex items-center gap-1.5 text-sm font-medium leading-tight transition-colors",
            "group-hover:text-white",
            props.titleClass,
          )}
        >
          {props.module.module.title}
          <ModuleIcon
            size="16px"
            class={cn(
              "shrink-0",
              getModuleIconClasses(props.module.module.module_type),
            )}
          />
        </h3>
        {!props.hideDescription && (
          <p
            class={cn(
              "text-muted-foreground mt-0.5 text-xs line-clamp-2",
              props.descriptionClass,
            )}
          >
            {props.module.module.description || "Description coming soon"}
          </p>
        )}
      </div>

      <ChevronRight
        class={cn(
          "size-4 shrink-0 transition-all group-hover:translate-x-0.5",
          "text-muted-foreground/40 group-hover:text-white/70",
          props.chevronClass,
        )}
      />
    </>
  )

  const baseClasses = cn(
    "group flex items-center gap-3 rounded-lg py-2.5 pr-3 pl-6 transition-all duration-150",
    "hover:bg-white/5",
    "focus-visible:outline-none focus-visible:bg-white/10",
    props.module.disabled && "cursor-not-allowed opacity-50",
    props.linkClass,
  )

  return props.asButton ? (
    <button
      type="button"
      onClick={() => props.onSelect?.()}
      class={cn(baseClasses, "w-full text-left")}
      style={props.linkStyle}
    >
      {content}
    </button>
  ) : (
    <Link to={props.module.linkTo} class={baseClasses} style={props.linkStyle}>
      {content}
    </Link>
  )
}
