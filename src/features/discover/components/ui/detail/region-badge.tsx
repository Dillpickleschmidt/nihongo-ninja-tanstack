import { Info } from "lucide-solid"
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "~/components/ui/popover"

interface RegionBadgeProps {
  service: string
  countries: string[]
}

export function RegionBadge(props: RegionBadgeProps) {
  return (
    <Popover>
      <PopoverTrigger class="flex cursor-pointer items-center gap-2 rounded-lg border border-red-500/15 bg-red-500/8 px-3 py-2 text-red-400 transition-colors hover:border-red-500/25 hover:bg-red-500/12">
        <span class="text-xs font-medium">Unavailable in your country</span>
        <span class="text-[0.65rem] text-red-400/50">({props.service})</span>
        <Info class="size-3.5 shrink-0 text-red-400/60" />
      </PopoverTrigger>
      <PopoverContent class="w-64 border-border/70 bg-popover text-popover-foreground backdrop-blur-xl dark:border-white/10 dark:bg-neutral-900/95">
        <div class="mb-2 text-xs font-semibold text-foreground/70 dark:text-white/60">Available in</div>
        <div class="flex flex-wrap gap-1.5">
          {props.countries.map((country) => (
            <span class="rounded-md border border-border/70 bg-muted/50 px-2 py-0.5 text-[0.65rem] font-medium text-muted-foreground dark:border-white/8 dark:bg-white/4 dark:text-white/50">
              {country}
            </span>
          ))}
        </div>
        <div class="mt-3 border-t border-border/60 pt-2.5 text-[0.65rem] leading-relaxed text-muted-foreground dark:border-white/6 dark:text-white/30">
          Consider using a VPN to access content from supported regions.
        </div>
      </PopoverContent>
    </Popover>
  )
}
