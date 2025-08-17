import { createStore } from "solid-js/store"
import { createFileRoute } from "@tanstack/solid-router"
import {
  KanjiAnimation,
  type KanjiDisplaySettings,
  type KanjiAnimationSettings,
  type KanjiStyleSettings,
} from "@/components/KanjiAnimation"
import { KanjiAnimationControls } from "@/components/KanjiAnimationControls"

export const Route = createFileRoute("/kanji-test")({
  component: () => <KanjiTestPage />,
})

function KanjiTestPage() {
  const [displaySettings, setDisplaySettings] =
    createStore<KanjiDisplaySettings>({
      numbers: true,
      startDots: true,
      directionLines: true,
    })

  const [animationSettings, setAnimationSettings] =
    createStore<KanjiAnimationSettings>({
      enabled: true,
      speed: 0.5,
      autoplay: true,
    })

  const styleSettings: KanjiStyleSettings = {
    strokeWidth: 3,
    strokeColor: "#ffffff",
    size: 170,
    showGrid: true,
  }

  return (
    <div class="flex flex-col items-center space-y-4 p-8">
      <h1 class="text-2xl text-white">Kanji Test</h1>

      <KanjiAnimation
        svgPath="/05473.svg"
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
