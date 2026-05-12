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
      <PopoverTrigger class="flex cursor-pointer items-center gap-1.5 rounded-lg border border-border/70 bg-background/70 px-2.5 py-1.5 text-muted-foreground shadow-sm backdrop-blur-sm transition-colors hover:border-border hover:text-foreground dark:border-white/8 dark:bg-white/3 dark:text-white/40 dark:shadow-none dark:hover:border-white/15 dark:hover:text-white/60">
        <Settings2 class="size-3.5" />
        <span class="text-[0.7rem] font-medium">Weights</span>
      </PopoverTrigger>
      <PopoverContent class="w-64 border-border/70 bg-popover text-popover-foreground backdrop-blur-xl dark:border-white/10 dark:bg-neutral-900/95">
        <div class="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground dark:text-white/30">
          Global Display Weights
        </div>
        <WeightSliders values={globalWeights()} onChange={setGlobalWeights} />
        <label class="mt-4 flex cursor-pointer items-center gap-2 border-t border-border/60 pt-3 dark:border-white/6">
          <input
            type="checkbox"
            checked={overridesEnabled()}
            onChange={(e) => setOverridesEnabled(e.currentTarget.checked)}
            class="size-3.5 cursor-pointer rounded border-border bg-background accent-dynamic-accent dark:border-white/20 dark:bg-white/5"
          />
          <span class="text-xs text-muted-foreground dark:text-white/40">Per-category overrides</span>
        </label>
      </PopoverContent>
    </Popover>
  )
}
