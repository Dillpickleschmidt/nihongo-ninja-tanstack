import { For, Show } from "solid-js"
import { Link } from "@tanstack/solid-router"
import { ChevronRight } from "lucide-solid"
import { Button } from "@/components/ui/button"
import {
  getModuleIcon,
  getModuleIconClasses,
} from "@/data/utils/module-helpers"
import { cn } from "@/utils"
import type { LearningPathModule } from "../learning-path/types"

interface HeroTimelineProps {
  modules: LearningPathModule[]
}

export function HeroTimeline(props: HeroTimelineProps) {
  const primary = () => props.modules[0]
  const rest = () => props.modules.slice(1)

  return (
    <Show when={primary()}>
      {(mod) => {
        const PrimaryIcon = getModuleIcon(mod().module.module_type)
        return (
          <div class="flex flex-col items-start">
            <span class="mb-2 text-xs font-medium uppercase tracking-wider text-white/30">
              Up Next
            </span>

            <Button
              as={Link}
              to={mod().linkTo}
              class="group -ml-2.25 gap-3 rounded-xl bg-(--accent) text-[0.9rem] font-medium text-white transition-all origin-left hover:bg-(--accent) hover:brightness-110 hover:scale-[1.02]"
              style={{
                "box-shadow":
                  "0 8px 15px -4px color-mix(in srgb, var(--accent) 30%, transparent)",
              }}
            >
              <PrimaryIcon class="size-5" />
              <span class="truncate">{mod().module.title}</span>
              <ChevronRight class="size-4 -ml-1 shrink-0" />
            </Button>

            <For each={rest()}>
              {(module) => {
                const ModuleIcon = getModuleIcon(module.module.module_type)
                return (
                  <>
                    <div class="ml-[14px] h-3.5 w-px bg-white/10" />
                    <Link
                      to={module.linkTo}
                      class="flex items-center gap-3 text-[0.9rem] text-white/55 transition-all origin-left hover:text-white/75 hover:scale-[1.02]"
                    >
                      <div class="flex size-7 items-center justify-center rounded-full bg-white/[0.07]">
                        <ModuleIcon
                          size="16px"
                          class={cn(
                            "shrink-0",
                            getModuleIconClasses(module.module.module_type),
                          )}
                        />
                      </div>
                      <span class="truncate">{module.module.title}</span>
                    </Link>
                  </>
                )
              }}
            </For>
          </div>
        )
      }}
    </Show>
  )
}
