import { Settings2 } from "lucide-solid"
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "~/components/ui/popover"
import { WeightSliders } from "../settings/weight-sliders"
import {
  overridesEnabled,
  getWeightsForCategory,
  setCategoryOverride,
  isLargeCards,
  setLargeCards,
} from "~/features/discover/hooks/useWeightSettings"
import type { SectionConfig } from "~/features/discover/utils/section-configs"

interface SectionHeaderProps {
  section: SectionConfig
  defaultLarge?: boolean
  expanded?: boolean
  onToggleExpand?: () => void
}

export function SectionHeader(props: SectionHeaderProps) {
  const sectionKey = () => props.section.title

  return (
    <div class="flex items-end px-4 pt-5 pb-2">
      <div class="text-muted-foreground text-lg font-semibold leading-none">
        {props.section.title}
      </div>

      <Popover>
        <PopoverTrigger class="ml-2 cursor-pointer rounded p-1 text-muted-foreground/60 transition-colors hover:bg-accent hover:text-foreground dark:text-white/20 dark:hover:bg-white/5 dark:hover:text-white/40">
          <Settings2 class="size-3.5" />
        </PopoverTrigger>
        <PopoverContent class="w-60 border-border/70 bg-popover text-popover-foreground backdrop-blur-xl dark:border-white/10 dark:bg-neutral-900/95">
          <div class="mb-3 text-[0.65rem] font-semibold uppercase tracking-wider text-muted-foreground dark:text-white/25">
            {props.section.title} Weights
          </div>
          <WeightSliders
            values={getWeightsForCategory(sectionKey())}
            onChange={(w) => setCategoryOverride(sectionKey(), w)}
            disabled={!overridesEnabled()}
          />
          {!overridesEnabled() && (
            <div class="mt-2 text-[0.6rem] text-muted-foreground/70 dark:text-white/20">
              Enable per-category overrides in global settings
            </div>
          )}
          <label class="mt-3 flex cursor-pointer items-center gap-2 border-t border-border/60 pt-3 dark:border-white/6">
            <input
              type="checkbox"
              checked={isLargeCards(sectionKey(), props.defaultLarge ?? false)}
              onChange={(e) =>
                setLargeCards(sectionKey(), e.currentTarget.checked)
              }
              class="size-3.5 cursor-pointer rounded border-border bg-background accent-dynamic-accent dark:border-white/20 dark:bg-white/5"
            />
            <span class="text-xs text-muted-foreground dark:text-white/40">Large cards</span>
          </label>
        </PopoverContent>
      </Popover>

      <button
        type="button"
        onClick={() => props.onToggleExpand?.()}
        class="text-muted-foreground ml-auto cursor-pointer text-xs transition-colors hover:text-foreground dark:hover:text-white/50"
      >
        {props.expanded ? "View Less" : "View More"}
      </button>
    </div>
  )
}
