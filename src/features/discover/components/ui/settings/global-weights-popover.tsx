import { Settings2 } from "lucide-solid"
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "~/components/ui/popover"
import { WeightSliders } from "./weight-sliders"
import {
  globalWeights,
  setGlobalWeights,
  overridesEnabled,
  setOverridesEnabled,
} from "~/features/discover/hooks/useWeightSettings"

export function GlobalWeightsPopover() {
  return (
    <Popover>
      <PopoverTrigger class="flex cursor-pointer items-center gap-1.5 rounded-lg border border-white/8 bg-white/3 px-2.5 py-1.5 text-white/40 backdrop-blur-sm transition-colors hover:border-white/15 hover:text-white/60">
        <Settings2 class="size-3.5" />
        <span class="text-[0.7rem] font-medium">Weights</span>
      </PopoverTrigger>
      <PopoverContent class="w-64 border-white/10 bg-neutral-900/95 backdrop-blur-xl">
        <div class="mb-3 text-xs font-semibold uppercase tracking-wider text-white/30">
          Global Display Weights
        </div>
        <WeightSliders values={globalWeights()} onChange={setGlobalWeights} />
        <label class="mt-4 flex cursor-pointer items-center gap-2 border-t border-white/6 pt-3">
          <input
            type="checkbox"
            checked={overridesEnabled()}
            onChange={(e) => setOverridesEnabled(e.currentTarget.checked)}
            class="size-3.5 cursor-pointer rounded border-white/20 bg-white/5 accent-dynamic-accent"
          />
          <span class="text-xs text-white/40">Per-category overrides</span>
        </label>
      </PopoverContent>
    </Popover>
  )
}
