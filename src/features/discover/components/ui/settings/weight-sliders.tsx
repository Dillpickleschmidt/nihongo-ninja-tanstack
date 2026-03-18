import {
  Slider,
  SliderTrack,
  SliderFill,
  SliderThumb,
} from "~/components/ui/slider"
import type { Weights } from "~/features/discover/hooks/useWeightSettings"

interface WeightSlidersProps {
  values: Weights
  onChange: (weights: Weights) => void
  disabled?: boolean
}

const SLIDER_LABELS = [
  { key: "jlpt" as const, label: "JLPT Level", icon: "N" },
  { key: "vocab" as const, label: "Vocab Learned", icon: "文" },
  { key: "prefs" as const, label: "Watch Prefs", icon: "目" },
]

export function WeightSliders(props: WeightSlidersProps) {
  function handleChange(key: keyof Weights, value: number) {
    props.onChange({ ...props.values, [key]: value })
  }

  return (
    <div
      class="flex flex-col gap-3"
      classList={{ "pointer-events-none opacity-35": props.disabled }}
    >
      {SLIDER_LABELS.map((item) => (
        <div class="flex flex-col gap-1.5">
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-2">
              <span class="flex h-5 w-5 items-center justify-center rounded bg-white/6 text-[0.6rem] font-bold text-white/40">
                {item.icon}
              </span>
              <span class="text-xs font-medium text-white/50">
                {item.label}
              </span>
            </div>
            <span class="tabular-nums text-xs font-semibold text-dynamic-accent">
              {props.values[item.key]}%
            </span>
          </div>
          <Slider
            value={[props.values[item.key]]}
            onChange={([v]) => handleChange(item.key, v)}
            minValue={0}
            maxValue={100}
          >
            <SliderTrack class="h-1.5 bg-white/8">
              <SliderFill class="bg-dynamic-accent" />
              <SliderThumb class="-top-1 size-3.5 border-2 border-white/15 bg-dynamic-accent shadow-[0_2px_6px_rgba(0,0,0,0.3)] transition-transform hover:scale-115" />
            </SliderTrack>
          </Slider>
        </div>
      ))}
    </div>
  )
}
