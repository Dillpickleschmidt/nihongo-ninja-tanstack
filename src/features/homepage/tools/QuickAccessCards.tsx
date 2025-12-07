import { For, Show } from "solid-js"
import { cn } from "@/utils"
import { SmoothCardLink } from "@/components/SmoothCard"
import { useBreakpoints } from "@/hooks/useBreakpoints"
import { quickAccessTools, type Tool } from "@/data/quick-access-tools"

// Fixed color styles by position (matches original QuickAccessCards)
const CARD_STYLES = [
  {
    // Position 1: Blue
    text: "text-blue-400",
    gradient: "from-blue-400/30 to-blue-600/40",
    border: "stroke-blue-400/30 [stroke-width:2]",
    ring: "stroke-blue-400 [stroke-width:2.5]",
  },
  {
    // Position 2: Green
    text: "text-green-400",
    gradient: "from-green-400/30 to-green-600/40",
    border: "stroke-green-400/30 [stroke-width:2]",
    ring: "stroke-green-400 [stroke-width:2.5]",
  },
  {
    // Position 3: Purple
    text: "text-purple-400",
    gradient: "from-purple-400/30 to-purple-600/40",
    border: "stroke-purple-400/30 [stroke-width:2]",
    ring: "stroke-purple-400 [stroke-width:2.5]",
  },
  {
    // Position 4: Orange
    text: "text-orange-400",
    gradient: "from-orange-400/30 to-orange-600/40",
    border: "stroke-orange-400/30 [stroke-width:2]",
    ring: "stroke-orange-400 [stroke-width:2.5]",
  },
  {
    // Position 5: Red
    text: "text-red-400",
    gradient: "from-red-400/30 to-red-600/40",
    border: "stroke-red-400/30 [stroke-width:2]",
    ring: "stroke-red-400 [stroke-width:2.5]",
  },
]

type Variant = "mobile" | "tablet" | "desktop"

const CARD_CONFIG: Record<Variant, { width: number; height: number; radius: number }> = {
  mobile: { width: 350, height: 80, radius: 12 },
  tablet: { width: 158, height: 218, radius: 12 },
  desktop: { width: 210, height: 290, radius: 16 },
}

interface QuickAccessCardsProps {
  selectedLevel: string
}

export function QuickAccessCards(props: QuickAccessCardsProps) {
  const bp = useBreakpoints()
  const tools = () => quickAccessTools[props.selectedLevel] || []

  const variant = (): Variant => {
    if (bp["2xl"]()) return "desktop"
    if (bp.md()) return "tablet"
    return "mobile"
  }

  const Card = (cardProps: { tool: Tool; index: number }) => {
    const isDisabled = cardProps.tool.disabled
    const styles = CARD_STYLES[cardProps.index] || CARD_STYLES[0]
    const config = () => CARD_CONFIG[variant()]
    const isVertical = () => variant() !== "mobile"

    return (
      <div
        class={cn(
          "group transition-transform duration-300 ease-in-out",
          isDisabled
            ? "cursor-not-allowed opacity-50"
            : isVertical()
              ? "hover:scale-[1.015]"
              : "hover:scale-[1.01]",
        )}
      >
        <SmoothCardLink
          to={cardProps.tool.href}
          disabled={isDisabled}
          width={config().width}
          height={config().height}
          cornerRadius={config().radius}
          border={true}
          borderClass={styles.border}
          focusRing={true}
          focusRingClass={styles.ring}
          class={cn(
            "bg-gradient-to-br shadow-lg shadow-black/30 transition-colors duration-150 backdrop-blur-sm",
            styles.gradient,
          )}
        >
          <Show
            when={isVertical()}
            fallback={
              <div class="flex h-full items-center gap-3 px-4">
                <div class="text-2xl transition-transform duration-300 ease-in-out group-hover:scale-105">
                  {cardProps.tool.icon}
                </div>
                <div class="flex-1 text-left">
                  <h3 class={cn("mb-1 text-base font-bold", styles.text)}>
                    {cardProps.tool.title}
                  </h3>
                  <p class="line-clamp-1 text-sm opacity-70">
                    {cardProps.tool.description}
                  </p>
                </div>
              </div>
            }
          >
            <div class={cn(
              "flex h-full flex-col items-center justify-center",
              variant() === "tablet" ? "gap-2 px-2" : "gap-4 px-5",
            )}>
              <div class={cn(
                "transition-transform duration-300 ease-in-out group-hover:scale-105",
                variant() === "tablet" ? "text-xl" : "text-[2.625rem]",
              )}>
                {cardProps.tool.icon}
              </div>
              <h3 class={cn(
                "text-center font-bold",
                variant() === "tablet" ? "text-xs" : "text-lg",
                styles.text,
              )}>
                {cardProps.tool.title}
              </h3>
              <p class={cn(
                "line-clamp-2 text-center opacity-70",
                variant() === "tablet" ? "text-[0.625rem]" : "text-sm",
              )}>
                {cardProps.tool.description}
              </p>
            </div>
          </Show>
        </SmoothCardLink>
      </div>
    )
  }

  return (
    <Show
      when={variant() !== "mobile"}
      fallback={
        <div class="mb-4 flex flex-col items-center space-y-3 px-4">
          <For each={tools()}>
            {(tool, index) => <Card tool={tool} index={index()} />}
          </For>
        </div>
      }
    >
      <div class="mb-8">
        <div class="grid justify-items-center gap-6 md:grid-cols-3 lg:grid-cols-5">
          <For each={tools()}>
            {(tool, index) => <Card tool={tool} index={index()} />}
          </For>
        </div>
      </div>
    </Show>
  )
}
