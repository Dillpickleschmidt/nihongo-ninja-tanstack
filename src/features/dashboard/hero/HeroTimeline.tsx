import { For, Show } from "solid-js"
import { cn } from "@/utils"
import type { LearningPathModule } from "../learning-path/types"
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
                  linkClass={
                    isPrimary()
                      ? "-ml-2 bg-(--accent)/80 backdrop-blur-sm rounded-xl hover:bg-(--accent) hover:scale-[1.02]"
                      : undefined
                  }
                  linkStyle={
                    isPrimary()
                      ? {
                          "box-shadow":
                            "0 8px 20px -4px color-mix(in srgb, var(--accent) 40%, transparent)",
                        }
                      : undefined
                  }
                  hideDot={isPrimary()}
                  titleClass={isPrimary() ? "text-white" : undefined}
                  chevronClass={
                    isPrimary()
                      ? "text-white/60 group-hover:text-white/80"
                      : undefined
                  }
                />
              </li>
            )
          }}
        </For>
      </ul>
    </Show>
  )
}
