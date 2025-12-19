import { cn } from "@/utils"
import type { Tool } from "./tools-data"

interface ToolCardProps {
  tool: Tool
  index: number
}

export function ToolCard(props: ToolCardProps) {
  return (
    <a
      href={props.tool.href}
      class={cn(
        "group relative overflow-hidden rounded-xl border border-white/5 p-5",
        "animate-fade-up opacity-0",
        props.tool.bgColor,
        props.tool.borderColor
      )}
      style={{ "animation-delay": `${props.index * 75}ms` }}
    >
      <div class="flex items-start gap-4">
        <div
          class={cn(
            "flex h-12 w-12 items-center justify-center rounded-xl text-2xl font-japanese transition-transform duration-300 group-hover:scale-110",
            props.tool.color,
            props.tool.bgColor.replace("hover:", "")
          )}
        >
          {props.tool.icon}
        </div>
        <div class="flex-1 min-w-0">
          <h3 class="font-semibold text-white transition-colors group-hover:text-(--accent)">
            {props.tool.title}
          </h3>
          <p class="text-xs text-white/40 mt-0.5 line-clamp-2">
            {props.tool.description}
          </p>
        </div>
      </div>

      <svg
        class={cn(
          "absolute right-4 top-1/2 -translate-y-1/2 size-4 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0.5",
          props.tool.color
        )}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
      >
        <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
      </svg>
    </a>
  )
}
