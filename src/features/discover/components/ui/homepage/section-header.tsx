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
}

export function SectionHeader(props: SectionHeaderProps) {
  const sectionKey = () => props.section.title

  return (
    <div class="flex items-end px-4 pt-5 pb-2">
      <div class="text-muted-foreground text-lg font-semibold leading-none">
        {props.section.title}
      </div>

      <Popover>
        <PopoverTrigger class="ml-2 cursor-pointer rounded p-1 text-white/20 transition-colors hover:bg-white/5 hover:text-white/40">
          <Settings2 class="size-3.5" />
        </PopoverTrigger>
        <PopoverContent class="w-60 border-white/10 bg-neutral-900/95 backdrop-blur-xl">
          <div class="mb-3 text-[0.65rem] font-semibold uppercase tracking-wider text-white/25">
            {props.section.title} Weights
          </div>
          <WeightSliders
            values={getWeightsForCategory(sectionKey())}
            onChange={(w) => setCategoryOverride(sectionKey(), w)}
            disabled={!overridesEnabled()}
          />
          {!overridesEnabled() && (
            <div class="mt-2 text-[0.6rem] text-white/20">
              Enable per-category overrides in global settings
            </div>
          )}
          <label class="mt-3 flex cursor-pointer items-center gap-2 border-t border-white/6 pt-3">
            <input
              type="checkbox"
              checked={isLargeCards(sectionKey(), props.defaultLarge ?? false)}
              onChange={(e) =>
                setLargeCards(sectionKey(), e.currentTarget.checked)
              }
              class="size-3.5 cursor-pointer rounded border-white/20 bg-white/5 accent-(--accent)"
            />
            <span class="text-xs text-white/40">Large cards</span>
          </label>
        </PopoverContent>
      </Popover>

      <div class="text-muted-foreground ml-auto cursor-pointer text-xs transition-colors hover:text-white/50">
        View More
      </div>
    </div>
  )
}
