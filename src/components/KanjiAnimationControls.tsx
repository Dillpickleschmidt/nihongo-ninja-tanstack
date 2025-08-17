import { Play, Pause, RotateCcw, Settings, Maximize2 } from "lucide-solid"
import { Button } from "@/components/ui/button"
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover"
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog"
import { KanjiAnimation } from "./KanjiAnimation"
import { processSvgString } from "@/utils/svg-processor"

import type {
  KanjiAnimationRef,
  KanjiDisplaySettings,
  KanjiAnimationSettings,
  KanjiStyleSettings,
} from "./KanjiAnimation"

interface KanjiAnimationControlsProps {
  animationRef: KanjiAnimationRef | null
  displaySettings: KanjiDisplaySettings
  animationSettings: KanjiAnimationSettings
  onDisplaySettingsChange: (settings: Partial<KanjiDisplaySettings>) => void
  onAnimationSettingsChange: (settings: Partial<KanjiAnimationSettings>) => void
  processedSvgContent: string
  rawSvgContent: string
  styleSettings: KanjiStyleSettings
}

export function KanjiAnimationControls(props: KanjiAnimationControlsProps) {
  // Process SVG for modal with larger size
  const modalSvgContent = () =>
    processSvgString(props.rawSvgContent, {
      size: 400,
      strokeColor: props.styleSettings.strokeColor,
      strokeWidth: props.styleSettings.strokeWidth,
      showGrid: props.styleSettings.showGrid,
      autostart: props.animationSettings.autostart,
      showNumbers: props.displaySettings.numbers,
      showStartDots: props.displaySettings.startDots,
      showDirectionLines: props.displaySettings.directionLines,
    })

  return (
    <>
      {/* Main Action Button - Play/Pause/Reset (Bottom Left) */}
      {props.animationRef && (
        <AnimationControlButton
          animationRef={props.animationRef}
          class="text-muted-foreground hover:text-foreground pointer-events-auto absolute bottom-1 left-1 h-7 w-7 p-0"
          size={14}
        />
      )}

      {/* Maximize Button (Top Right) */}
      <Dialog>
        <DialogTrigger
          as={Button}
          variant="ghost"
          size="sm"
          class="text-muted-foreground hover:text-foreground pointer-events-auto absolute top-1 right-1 h-7 w-7 p-0"
          title="Maximize"
        >
          <Maximize2 size={14} />
        </DialogTrigger>
        <DialogContent
          class="border-card-foreground bg-card flex justify-center"
          style={{
            "--tw-enter-translate-x": "0",
            "--tw-enter-translate-y": "0",
            "--tw-exit-translate-x": "0",
            "--tw-exit-translate-y": "0",
          }}
        >
          <KanjiAnimation
            processedSvgContent={modalSvgContent()}
            styleSettings={{
              ...props.styleSettings,
              size: 400, // Larger size for modal
            }}
            displaySettings={props.displaySettings}
            animationSettings={props.animationSettings}
          >
            {(modalAnimationRef) => (
              <AnimationControlButton
                animationRef={modalAnimationRef}
                class="text-muted-foreground hover:text-foreground pointer-events-auto absolute bottom-1 left-1 h-7 w-7 p-0"
                size={14}
              />
            )}
          </KanjiAnimation>
        </DialogContent>
      </Dialog>

      {/* Options Popover (Bottom Right) */}
      <Popover>
        <PopoverTrigger
          as={Button}
          variant="ghost"
          size="sm"
          class="text-muted-foreground hover:text-foreground pointer-events-auto absolute right-1 bottom-1 h-7 w-7 p-0"
          title="Options"
        >
          <Settings size={14} />
        </PopoverTrigger>
        <PopoverContent class="bg-background border-card-foreground w-56">
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

// Reusable animation control button component
function AnimationControlButton(props: {
  animationRef: KanjiAnimationRef
  class?: string
  size: number
}) {
  const iconSize = props.size

  const getButtonConfig = () => {
    const state = props.animationRef.getState()

    if (state.isAnimating) {
      return {
        icon: <Pause size={iconSize} />,
        onClick: () => props.animationRef.stop(),
        title: "Pause Animation",
      }
    } else if (state.isComplete) {
      return {
        icon: <RotateCcw size={iconSize} />,
        onClick: () => props.animationRef.reset(),
        title: "Restart Animation",
      }
    } else {
      return {
        icon: <Play size={iconSize} />,
        onClick: () => props.animationRef.play(),
        title: "Play Animation",
      }
    }
  }

  const config = () => getButtonConfig()

  return (
    <Button
      variant="ghost"
      size="sm"
      class={props.class}
      onClick={config().onClick}
      title={config().title}
    >
      {config().icon}
    </Button>
  )
}
