import { createStore } from "solid-js/store"
import { createFileRoute } from "@tanstack/solid-router"
import {
  KanjiAnimation,
  type KanjiDisplaySettings,
  type KanjiAnimationSettings,
  type KanjiStyleSettings,
} from "@/components/KanjiAnimation"
import { KanjiAnimationControls } from "@/components/KanjiAnimationControls"
import { processSvgString, getKanjiSvg } from "@/utils/svg-processor"

export const Route = createFileRoute("/kanji-test")({
  loader: async () => {
    const svgContent = await getKanjiSvg("字")
    return { svgContent }
  },
  component: () => <KanjiTestPage />,
})

function KanjiTestPage() {
  const { svgContent } = Route.useLoaderData()()

  const [displaySettings, setDisplaySettings] =
    createStore<KanjiDisplaySettings>({
      numbers: true,
      startDots: true,
      directionLines: true,
    })

  const [animationSettings, setAnimationSettings] =
    createStore<KanjiAnimationSettings>({
      enabled: false,
      speed: 0.5,
      autoplay: true,
    })

  const styleSettings: KanjiStyleSettings = {
    strokeWidth: 3,
    strokeColor: "#ffffff",
    size: 170,
    showGrid: true,
  }

  // Process SVG with current settings
  const processedSvg = () =>
    processSvgString(svgContent, {
      size: styleSettings.size,
      strokeColor: styleSettings.strokeColor,
      strokeWidth: styleSettings.strokeWidth,
      showGrid: styleSettings.showGrid,
      animationEnabled: animationSettings.enabled,
      showNumbers: displaySettings.numbers,
      showStartDots: displaySettings.startDots,
      showDirectionLines: displaySettings.directionLines,
    })

  return (
    <div class="flex flex-col items-center space-y-4 p-8">
      <h1 class="text-2xl text-white">Kanji Test</h1>

      <KanjiAnimation
        processedSvgContent={processedSvg()}
        styleSettings={styleSettings}
        displaySettings={displaySettings}
        animationSettings={animationSettings}
      >
        {(animationRef) => (
          <KanjiAnimationControls
            animationRef={animationRef}
            displaySettings={displaySettings}
            animationSettings={animationSettings}
            onDisplaySettingsChange={(changes) => setDisplaySettings(changes)}
            onAnimationSettingsChange={(changes) =>
              setAnimationSettings(changes)
            }
          />
        )}
      </KanjiAnimation>
    </div>
  )
}
