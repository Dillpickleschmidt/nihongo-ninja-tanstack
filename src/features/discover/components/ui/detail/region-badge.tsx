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
      <PopoverContent class="w-64 border-white/10 bg-neutral-900/95 backdrop-blur-xl">
        <div class="mb-2 text-xs font-semibold text-white/60">Available in</div>
        <div class="flex flex-wrap gap-1.5">
          {props.countries.map((country) => (
            <span class="rounded-md border border-white/8 bg-white/4 px-2 py-0.5 text-[0.65rem] font-medium text-white/50">
              {country}
            </span>
          ))}
        </div>
        <div class="mt-3 border-t border-white/6 pt-2.5 text-[0.65rem] leading-relaxed text-white/30">
          Consider using a VPN to access content from supported regions.
        </div>
      </PopoverContent>
    </Popover>
  )
}
