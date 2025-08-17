import { Play, Pause, RotateCcw, Settings } from "lucide-solid"
import { Button } from "@/components/ui/button"
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover"

import type {
  KanjiAnimationRef,
  KanjiDisplaySettings,
  KanjiAnimationSettings,
} from "./KanjiAnimation"

interface KanjiAnimationControlsProps {
  animationRef: KanjiAnimationRef | null
  displaySettings: KanjiDisplaySettings
  animationSettings: KanjiAnimationSettings
  onDisplaySettingsChange: (settings: Partial<KanjiDisplaySettings>) => void
  onAnimationSettingsChange: (settings: Partial<KanjiAnimationSettings>) => void
}

export function KanjiAnimationControls(props: KanjiAnimationControlsProps) {
  // Determine the main button state and action
  const getMainButtonConfig = () => {
    const state = props.animationRef?.getState() || {
      isAnimating: false,
      isComplete: false,
    }

    if (state.isAnimating) {
      return {
        icon: <Pause size={14} />,
        onClick: () => props.animationRef?.stop(),
        title: "Pause Animation",
        disabled: false,
      }
    } else if (state.isComplete) {
      return {
        icon: <RotateCcw size={14} />,
        onClick: () => props.animationRef?.reset(),
        title: "Restart Animation",
        disabled: false,
      }
    } else {
      return {
        icon: <Play size={14} />,
        onClick: () => props.animationRef?.play(),
        title: "Play Animation",
        disabled: false,
      }
    }
  }

  const mainButton = () => getMainButtonConfig()

  return (
    <>
      {/* Main Action Button - Play/Pause/Reset (Bottom Left) */}
      <Button
        variant="ghost"
        size="sm"
        class="text-muted-foreground hover:text-foreground pointer-events-auto absolute bottom-1 left-1 h-7 w-7 p-0"
        onClick={mainButton().onClick}
        disabled={mainButton().disabled}
        title={mainButton().title}
      >
        {mainButton().icon}
      </Button>

      {/* Options Popover (Top Right) */}
      <Popover>
        <PopoverTrigger
          as={Button}
          variant="ghost"
          size="sm"
          class="text-muted-foreground hover:text-foreground pointer-events-auto absolute top-1 right-1 h-7 w-7 p-0"
          title="Options"
        >
          <Settings size={14} />
        </PopoverTrigger>
        <PopoverContent class="w-56">
          <div class="space-y-3">
            <h4 class="text-sm font-medium">Display Options</h4>

            <div class="space-y-2">
              <label class="flex items-center space-x-2 text-sm">
                <input
                  type="checkbox"
                  checked={props.animationSettings.autostart}
                  onChange={(e) => {
                    console.log(
                      "Autostart clicked:",
                      e.currentTarget.checked,
                      "(will be persisted in future)",
                    )
                    // TODO: Update cookie for server-side persistence
                  }}
                  class="rounded"
                />
                <span>Autostart Animation</span>
              </label>

              <label class="flex items-center space-x-2 text-sm">
                <input
                  type="checkbox"
                  checked={props.displaySettings.numbers}
                  onChange={(e) =>
                    props.onDisplaySettingsChange({
                      numbers: e.currentTarget.checked,
                    })
                  }
                  class="rounded"
                />
                <span>Numbers</span>
              </label>

              <label class="flex items-center space-x-2 text-sm">
                <input
                  type="checkbox"
                  checked={props.displaySettings.startDots}
                  onChange={(e) =>
                    props.onDisplaySettingsChange({
                      startDots: e.currentTarget.checked,
                    })
                  }
                  class="rounded"
                />
                <span>Dots</span>
              </label>

              <label class="flex items-center space-x-2 text-sm">
                <input
                  type="checkbox"
                  checked={props.displaySettings.directionLines}
                  onChange={(e) =>
                    props.onDisplaySettingsChange({
                      directionLines: e.currentTarget.checked,
                    })
                  }
                  class="rounded"
                />
                <span>Direction Lines</span>
              </label>
            </div>

            <div class="border-t pt-2">
              <label class="block text-sm">
                <span class="mb-2 block">
                  Speed: {props.animationSettings.speed.toFixed(2)}
                </span>
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.01"
                  value={props.animationSettings.speed}
                  onInput={(e) =>
                    props.onAnimationSettingsChange({
                      speed: parseFloat(e.currentTarget.value),
                    })
                  }
                  class="w-full"
                />
              </label>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </>
  )
}
