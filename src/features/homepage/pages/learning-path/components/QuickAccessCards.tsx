import { For, createSignal, onMount } from "solid-js"
import { useNavigate } from "@tanstack/solid-router"
import { cn } from "@/utils"
import { SmoothCard } from "@/features/learn-page/components/shared/SmoothCard"
import { SSRMediaQuery } from "~/components/SSRMediaQuery"
import { featuredTools } from "@/features/homepage/shared/featured-tools"
import type { Tool } from "@/features/homepage/types"

// Tool styling - defines complete Tailwind classes
const TOOL_STYLES: Record<
  string,
  { text: string; gradient: string; border: string; ring: string }
> = {
  "Vocab Decks": {
    text: "text-blue-400",
    gradient: "from-blue-400/30 to-blue-600/40",
    border: "stroke-blue-400/30 [stroke-width:2]",
    ring: "stroke-blue-400 [stroke-width:2.5]",
  },
  "Grammar Notes": {
    text: "text-green-400",
    gradient: "from-green-400/30 to-green-600/40",
    border: "stroke-green-400/30 [stroke-width:2]",
    ring: "stroke-green-400 [stroke-width:2.5]",
  },
  Learn: {
    text: "text-purple-400",
    gradient: "from-purple-400/30 to-purple-600/40",
    border: "stroke-purple-400/30 [stroke-width:2]",
    ring: "stroke-purple-400 [stroke-width:2.5]",
  },
  "Sentence Practice": {
    text: "text-orange-400",
    gradient: "from-orange-400/30 to-orange-600/40",
    border: "stroke-orange-400/30 [stroke-width:2]",
    ring: "stroke-orange-400 [stroke-width:2.5]",
  },
  Conjugation: {
    text: "text-red-400",
    gradient: "from-red-400/30 to-red-600/40",
    border: "stroke-red-400/30 [stroke-width:2]",
    ring: "stroke-red-400 [stroke-width:2.5]",
  },
}

export function QuickAccessCards() {
  const navigate = useNavigate()
  const [animated, setAnimated] = createSignal(false)

  onMount(() => {
    // Trigger animation on mount
    const timer = requestAnimationFrame(() => {
      setAnimated(true)
    })
    return () => cancelAnimationFrame(timer)
  })

  const handleCardClick = (tool: Tool) => {
    if (!tool.disabled) {
      navigate({ to: tool.href })
    }
  }

  const DesktopCard = (props: { tool: Tool; index: () => number }) => {
    const isDisabled = props.tool.disabled
    const styles = TOOL_STYLES[props.tool.title]
    const [isHovered, setIsHovered] = createSignal(false)

    return (
      <button
        onClick={() => handleCardClick(props.tool)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        class={cn(
          "group cursor-pointer transition-transform duration-150",
          isDisabled ? "cursor-not-allowed" : "hover:scale-[1.015]",
          "transition-all",
          animated()
            ? isDisabled
              ? "translate-y-0 opacity-50"
              : "translate-y-0 opacity-100"
            : "translate-y-4 opacity-0",
        )}
        style={{
          "transition-delay": `${props.index() * 50 + 100}ms`,
        }}
      >
        <SmoothCard
          width={210}
          height={290}
          cornerRadius={16}
          border={true}
          borderClass={styles.border}
          ring={isHovered() && !isDisabled}
          ringClass={styles.ring}
          class={cn(
            "bg-gradient-to-br shadow-lg shadow-black/30 backdrop-blur-md transition-colors duration-150",
            styles.gradient,
          )}
        >
          <div class="flex h-full flex-col items-center justify-center gap-4 px-5">
            <div class="text-[2.625rem] transition-transform duration-300 group-hover:scale-110">
              {props.tool.icon}
            </div>
            <h3 class={cn("text-center text-lg font-bold", styles.text)}>
              {props.tool.title}
            </h3>
            <p class="line-clamp-2 text-center text-sm opacity-70">
              {props.tool.description}
            </p>
          </div>
        </SmoothCard>
      </button>
    )
  }

  const MobileCard = (props: { tool: Tool; index: () => number }) => {
    const isDisabled = props.tool.disabled
    const styles = TOOL_STYLES[props.tool.title]
    const [isHovered, setIsHovered] = createSignal(false)

    return (
      <button
        onClick={() => handleCardClick(props.tool)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        class={cn(
          "group w-full cursor-pointer transition-transform duration-150",
          isDisabled ? "cursor-not-allowed" : "hover:scale-[1.01]",
          "transition-all",
          animated()
            ? isDisabled
              ? "translate-y-0 opacity-50"
              : "translate-y-0 opacity-100"
            : "translate-y-4 opacity-0",
        )}
        style={{
          "transition-delay": `${props.index() * 100 + 100}ms`,
        }}
      >
        <SmoothCard
          width={295}
          height={130}
          cornerRadius={12}
          border={true}
          borderClass={styles.border}
          ring={isHovered() && !isDisabled}
          ringClass={styles.ring}
          class={cn(
            "bg-gradient-to-br shadow-lg shadow-black/30 backdrop-blur-md transition-colors duration-150",
            styles.gradient,
          )}
        >
          <div class="flex h-full items-center gap-4 px-4">
            <div class="text-[2.063rem] transition-transform duration-300 group-hover:scale-110">
              {props.tool.icon}
            </div>
            <div class="flex-1 text-left">
              <h3 class={cn("mb-1 text-base font-bold", styles.text)}>
                {props.tool.title}
              </h3>
              <p class="line-clamp-1 text-sm opacity-70">
                {props.tool.description}
              </p>
            </div>
          </div>
        </SmoothCard>
      </button>
    )
  }

  return (
    <>
      {/* Desktop */}
      <SSRMediaQuery showFrom="md">
        <div class="mb-12">
          <div class="grid justify-items-center gap-6 md:grid-cols-3 lg:grid-cols-5">
            <For each={featuredTools}>
              {(tool, index) => <DesktopCard tool={tool} index={index} />}
            </For>
          </div>
        </div>
      </SSRMediaQuery>

      {/* Mobile */}
      <SSRMediaQuery hideFrom="md">
        <div class="mb-8 space-y-3 px-4">
          <For each={featuredTools}>
            {(tool, index) => <MobileCard tool={tool} index={index} />}
          </For>
        </div>
      </SSRMediaQuery>
    </>
  )
}
