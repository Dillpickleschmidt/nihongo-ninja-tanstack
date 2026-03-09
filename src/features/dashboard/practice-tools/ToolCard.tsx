import { Link } from "@tanstack/solid-router"
import { cn } from "@/utils"
import { Button } from "@/components/ui/button"
import type { Tool } from "./tools-data"

interface ToolCardProps {
  tool: Tool
  index: number
}

export function ToolCard(props: ToolCardProps) {
  const bgOpacity = () => props.tool.opacity
  const hoverOpacity = () => props.tool.opacity + 0.08

  return (
    <Button
      as={Link}
      to={props.tool.href}
      class={cn(
        "group relative overflow-hidden h-auto justify-start rounded-xl border border-white/5 px-3 py-3.5 md:p-5 text-base whitespace-normal transition-colors",
        "animate-fade-up opacity-0",
        "hover:border-(--accent)/30",
      )}
      style={{
        "animation-delay": `${props.index * 75}ms`,
        "background-color": `color-mix(in srgb, var(--accent) ${bgOpacity() * 100}%, transparent)`,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = `color-mix(in srgb, var(--accent) ${hoverOpacity() * 100}%, transparent)`
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = `color-mix(in srgb, var(--accent) ${bgOpacity() * 100}%, transparent)`
      }}
    >
      {/* Noise texture overlay */}
      <div
        class="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          "background-image": `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      <div class="flex items-center gap-4">
        <div
          class="flex h-9 w-9 md:h-12 md:w-12 items-center justify-center rounded-lg md:rounded-xl text-xl md:text-2xl font-japanese text-(--accent) transition-transform duration-300 group-hover:scale-110"
          style={{
            "background-color": `color-mix(in srgb, var(--accent) ${bgOpacity() * 100}%, transparent)`,
          }}
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
        class="absolute right-4 top-1/2 -translate-y-1/2 size-4 text-(--accent) opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0.5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
      >
        <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
      </svg>
    </Button>
  )
}
