import type { Tool } from "../types"

interface DesktopCardProps {
  tool: Tool
  index: () => number
  animated: () => boolean
  animationComplete: () => boolean
}

export function DesktopCard(props: DesktopCardProps) {
  return (
    <a
      href={props.tool.href}
      class={`group relative h-80 w-full overflow-hidden rounded-xl bg-gradient-to-br ${props.tool.gradient} flex flex-col justify-between p-6 text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl ${
        props.animated()
          ? "translate-y-0 opacity-100"
          : "translate-y-8 opacity-0"
      }`}
      style={
        props.animationComplete()
          ? {}
          : {
              "transition-delay": props.animated()
                ? `${props.index() * 100 + 300}ms`
                : "0ms",
            }
      }
    >
      <div class="flex flex-1 flex-col items-center text-center">
        <div class="mt-4 mb-6 text-4xl transition-transform duration-300 group-hover:scale-110">
          {props.tool.icon}
        </div>
        <h2 class="mb-4 text-lg font-bold">{props.tool.title}</h2>
        <p class="line-clamp-3 text-sm leading-relaxed opacity-90">
          {props.tool.description}
        </p>
      </div>

      <div class="mt-auto">
        <div class="h-px w-full bg-white/20" />
        <div class="mt-3 text-center text-sm font-medium opacity-80">
          Start Learning →
        </div>
      </div>
    </a>
  )
}

interface MobileCardProps {
  tool: Tool
  index: () => number
  animated: () => boolean
  animationComplete: () => boolean
}

export function MobileCard(props: MobileCardProps) {
  return (
    <a
      href={props.tool.href}
      class={`group block bg-gradient-to-r ${props.tool.gradient} flex h-26 flex-col justify-center rounded-xl px-6 text-white shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-xl ${
        props.animated()
          ? "translate-y-0 opacity-100"
          : "translate-y-4 opacity-0"
      }`}
      style={
        props.animationComplete()
          ? {}
          : {
              "transition-delay": props.animated()
                ? `${props.index() * 150 + 200}ms`
                : "0ms",
            }
      }
    >
      <div class="flex items-center space-x-4">
        <div class="text-3xl transition-transform duration-300 group-hover:scale-110">
          {props.tool.icon}
        </div>
        <div class="flex-1">
          <h2 class="mb-1 text-lg font-bold">{props.tool.title}</h2>
          <p class="text-sm opacity-90">{props.tool.description}</p>
        </div>
        <div class="text-xl text-white/60 transition-colors duration-300 group-hover:text-white">
          →
        </div>
      </div>
    </a>
  )
}
