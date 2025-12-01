import { For, onMount } from "solid-js"
import { Import } from "lucide-solid"
import { cn } from "@/utils"
import { SmoothCardLink } from "@/components/SmoothCard"
import { SSRMediaQuery } from "~/components/SSRMediaQuery"
import { triggerComponentAnimations } from "@/utils/animations"
import type { Tool } from "@/features/homepage/types"

const featuredTools: Tool[] = [
  {
    title: "Real Content",
    description: "Discover media and generate learning paths",
    icon: "🎬",
    href: "/explore",
    styles: {
      text: "text-blue-400",
      gradient: "from-blue-400/30 to-blue-600/40",
      border: "stroke-blue-400/30 [stroke-width:2]",
      ring: "stroke-blue-400 [stroke-width:2.5]",
    },
  },
  {
    title: "Sentence Practice",
    description: "Build sentences and improve comprehension",
    icon: "💬",
    href: "/sentence-practice",
    styles: {
      text: "text-green-400",
      gradient: "from-green-400/30 to-green-600/40",
      border: "stroke-green-400/30 [stroke-width:2]",
      ring: "stroke-green-400 [stroke-width:2.5]",
    },
  },
  {
    title: "Vocabulary",
    description: "Practice vocabulary short-term and long-term",
    icon: (
      <span
        style={{
          "-webkit-text-stroke": "3px black",
          "paint-order": "stroke fill",
          "font-weight": "semibold",
        }}
      >
        あ
      </span>
    ),
    href: "/vocab",
    styles: {
      text: "text-purple-400",
      gradient: "from-purple-400/30 to-purple-600/40",
      border: "stroke-purple-400/30 [stroke-width:2]",
      ring: "stroke-purple-400 [stroke-width:2.5]",
    },
  },
  {
    title: "Conjugation",
    description: "Master verb and adjective conjugations",
    icon: "⚡",
    href: "/practice/conjugation",
    styles: {
      text: "text-orange-400",
      gradient: "from-orange-400/30 to-orange-600/40",
      border: "stroke-orange-400/30 [stroke-width:2]",
      ring: "stroke-orange-400 [stroke-width:2.5]",
    },
  },
  {
    title: "Import",
    description: "Import progress or continue with Anki",
    icon: "📦",
    href: "/import",
    styles: {
      text: "text-red-400",
      gradient: "from-red-400/30 to-red-600/40",
      border: "stroke-red-400/30 [stroke-width:2]",
      ring: "stroke-red-400 [stroke-width:2.5]",
    },
  },
]

export function QuickAccessCards() {
  onMount(() => {
    triggerComponentAnimations([
      "[data-quick-access-desktop]",
      "[data-quick-access-mobile]",
    ])
  })

  const Card = (props: { tool: Tool; isDesktop: boolean }) => {
    const isDisabled = props.tool.disabled
    const styles = props.tool.styles

    const cardProps = {
      desktop: { width: 210, height: 290, radius: 16, scale: "1.015" },
      mobile: { width: 350, height: 80, radius: 12, scale: "1.01" },
    }
    const config = props.isDesktop ? cardProps.desktop : cardProps.mobile

    return (
      <div
        {...(props.isDesktop
          ? { "data-quick-access-desktop": true }
          : { "data-quick-access-mobile": true })}
        class={cn(
          "group transition-transform duration-300 ease-in-out",
          isDisabled
            ? "cursor-not-allowed opacity-50"
            : `hover:scale-[${config.scale}]`,
        )}
      >
        <SmoothCardLink
          to={props.tool.href}
          disabled={isDisabled}
          width={config.width}
          height={config.height}
          cornerRadius={config.radius}
          border={true}
          borderClass={styles.border}
          focusRing={true}
          focusRingClass={styles.ring}
          class={cn(
            "bg-gradient-to-br shadow-lg shadow-black/30 backdrop-blur-md transition-colors duration-150",
            styles.gradient,
          )}
        >
          {props.isDesktop ? (
            <div class="flex h-full flex-col items-center justify-center gap-4 px-5">
              <div class="text-[2.625rem] transition-transform duration-300 ease-in-out group-hover:scale-105">
                {props.tool.icon}
              </div>
              <h3 class={cn("text-center text-lg font-bold", styles.text)}>
                {props.tool.title}
              </h3>
              <p class="line-clamp-2 text-center text-sm opacity-70">
                {props.tool.description}
              </p>
            </div>
          ) : (
            <div class="flex h-full items-center gap-3 px-4 md:gap-4">
              <div class="text-2xl transition-transform duration-300 ease-in-out group-hover:scale-105 md:text-[2.063rem]">
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
          )}
        </SmoothCardLink>
      </div>
    )
  }

  return (
    <>
      {/* Desktop */}
      <SSRMediaQuery showFrom="md">
        <div class="mb-8">
          <div class="grid justify-items-center gap-6 md:grid-cols-3 lg:grid-cols-5">
            <For each={featuredTools}>
              {(tool) => <Card tool={tool} isDesktop={true} />}
            </For>
          </div>
        </div>
      </SSRMediaQuery>

      {/* Mobile */}
      <SSRMediaQuery hideFrom="md">
        <div class="mb-4 flex flex-col items-center space-y-3 px-4">
          <For each={featuredTools}>
            {(tool) => <Card tool={tool} isDesktop={false} />}
          </For>
        </div>
      </SSRMediaQuery>
    </>
  )
}
