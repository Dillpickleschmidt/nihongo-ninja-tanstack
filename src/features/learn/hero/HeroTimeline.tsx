import { For, Show } from "solid-js"
import { cn } from "@/utils"
import type { LearningPathModule } from "convex/model/learning_paths"
import { ModuleTimelineItem } from "../learning-path/ModuleTimelineItem"

interface HeroTimelineProps {
  modules: LearningPathModule[]
}

export function HeroTimeline(props: HeroTimelineProps) {
  return (
    <Show when={props.modules.length > 0}>
      <div class="mb-2 text-xs font-medium uppercase tracking-wider text-white/30">
        Up Next
      </div>

      <ul class="relative ml-[7px] border-l-2 border-card-foreground/20">
        <For each={props.modules}>
          {(enrichedModule, index) => {
            const isPrimary = () => index() === 0

            return (
              <li
                class={cn(
                  "relative",
                  index() !== props.modules.length - 1 && "pb-1",
                )}
              >
                <ModuleTimelineItem
                  module={enrichedModule}
                  hideDescription
                  class={
                    isPrimary()
                      ? "-ml-2 text-white bg-dynamic-accent/80 backdrop-blur-sm rounded-xl hover:bg-dynamic-accent hover:scale-[1.02]"
                      : undefined
                  }
                  style={
                    isPrimary()
                      ? {
                          "box-shadow":
                            "0 8px 20px -4px color-mix(in srgb, var(--dynamic-accent) 40%, transparent)",
                        }
                      : undefined
                  }
                  hideDot={isPrimary()}
                />
              </li>
            )
          }}
        </For>
      </ul>
    </Show>
  )
}
