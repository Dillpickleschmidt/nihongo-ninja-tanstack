import { For } from "solid-js"
import { SSRMediaQuery } from "~/components/SSRMediaQuery"
import { DesktopCard, MobileCard } from "./ToolCard"
import { featuredTools } from "../data/featured-tools"

interface FeaturedToolsSectionProps {
  animated: () => boolean
  animationComplete: () => boolean
}

export function FeaturedToolsSection(props: FeaturedToolsSectionProps) {
  return (
    <div class="mx-auto">
      <SSRMediaQuery showFrom="md">
        <div class="container py-16">
          <h1
            class={`text-foreground mb-16 text-center text-4xl font-bold transition-all duration-700 ease-out ${
              props.animated()
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
          >
            Learning Tools
          </h1>

          <div class="grid justify-items-center gap-6 md:grid-cols-3 lg:grid-cols-5">
            <For each={featuredTools}>
              {(tool, index) => (
                <DesktopCard
                  tool={tool}
                  index={index}
                  animated={props.animated}
                  animationComplete={props.animationComplete}
                />
              )}
            </For>
          </div>
        </div>
      </SSRMediaQuery>

      <SSRMediaQuery hideFrom="md">
        <div class="py-4">
          <h1
            class={`text-foreground mt-4 mb-8 text-center text-3xl font-bold transition-all duration-700 ease-out ${
              props.animated()
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
          >
            Learning Tools
          </h1>

          <div class="space-y-4 px-4">
            <For each={featuredTools}>
              {(tool, index) => (
                <MobileCard
                  tool={tool}
                  index={index}
                  animated={props.animated}
                  animationComplete={props.animationComplete}
                />
              )}
            </For>
          </div>
        </div>
      </SSRMediaQuery>
    </div>
  )
}
