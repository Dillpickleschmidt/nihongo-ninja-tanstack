import { createMemo } from "solid-js"
import { createStore } from "solid-js/store"
import { useQuery } from "@tanstack/solid-query"
import {
  KanjiAnimation,
  type KanjiDisplaySettings,
  type KanjiAnimationSettings,
  type KanjiStyleSettings,
} from "@/components/KanjiAnimation"
import { KanjiAnimationControls } from "@/components/KanjiAnimationControls"
import { kanjiSvgQueryOptions } from "@/query/query-options"
import { processSvgString } from "@/utils/svg-processor"

// Default settings
const DEFAULT_DISPLAY_SETTINGS: KanjiDisplaySettings = {
  numbers: true,
  startDots: true,
  directionLines: false,
}

const DEFAULT_ANIMATION_SETTINGS: KanjiAnimationSettings = {
  speed: 0.5,
  autostart: true,
}

const DEFAULT_STYLE_SETTINGS: KanjiStyleSettings = {
  strokeWidth: 3,
  strokeColor: "var(--color-primary)",
  size: 190,
  showGrid: true,
}

type Props = {
  character: string
}

/** Fetches and displays an animated kanji SVG. */
export function KanjiDisplay(props: Props) {
  // Local settings state
  const [displaySettings, setDisplaySettings] =
    createStore<KanjiDisplaySettings>({ ...DEFAULT_DISPLAY_SETTINGS })
  const [animationSettings, setAnimationSettings] =
    createStore<KanjiAnimationSettings>({ ...DEFAULT_ANIMATION_SETTINGS })
  const styleSettings = DEFAULT_STYLE_SETTINGS

  const svgQuery = useQuery(() => kanjiSvgQueryOptions(props.character))

  const processedSvgContent = createMemo(() => {
    const svgData = svgQuery.data
    if (!svgData) return null

    return processSvgString(svgData, {
      size: styleSettings.size,
      strokeColor: styleSettings.strokeColor,
      strokeWidth: styleSettings.strokeWidth,
      showGrid: styleSettings.showGrid,
      autostart: animationSettings.autostart,
      showNumbers: displaySettings.numbers,
      showStartDots: displaySettings.startDots,
      showDirectionLines: displaySettings.directionLines,
    })
  })

  return (
    <>
      {svgQuery.data && processedSvgContent() && (
        <div class="flex justify-center">
          <KanjiAnimation
            processedSvgContent={processedSvgContent()!}
            styleSettings={styleSettings}
            displaySettings={displaySettings}
            animationSettings={animationSettings}
          >
            {(animationRef) => (
              <KanjiAnimationControls
                animationRef={animationRef}
                displaySettings={displaySettings}
                animationSettings={animationSettings}
                onDisplaySettingsChange={(settings) =>
                  setDisplaySettings(settings)
                }
                onAnimationSettingsChange={(settings) =>
                  setAnimationSettings(settings)
                }
                rawSvgContent={svgQuery.data!}
                styleSettings={styleSettings}
              />
            )}
          </KanjiAnimation>
        </div>
      )}
    </>
  )
}
