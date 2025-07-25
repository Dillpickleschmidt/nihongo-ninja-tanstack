import { createFileRoute } from "@tanstack/solid-router"
import { createSignal } from "solid-js"
import { DmakKanji } from "../components/DmakKanji"

export const Route = createFileRoute("/kanji-test")({
  component: () => <KanjiTestPage />,
})

function KanjiTestPage() {
  const [showNumbers, setShowNumbers] = createSignal(false)
  const [colored, setColored] = createSignal(true)
  let dmakControls: any = null

  return (
    <div class="container mx-auto p-8">
      <h1 class="mb-8 text-3xl font-bold">KanjiVG Animation Test</h1>
      <div class="space-y-8">
        <div class="text-center">
          <h2 class="mb-4 text-xl">dmak-style Kanji Animation</h2>
          <div class="inline-block rounded-lg border-2 border-gray-300 p-8">
            <DmakKanji
              svgPath="/05473.svg"
              showGrid={true}
              shouldShowNumbers={showNumbers()}
              colored={colored()}
              onControlsReady={(controls) => {
                dmakControls = controls
              }}
              class="mx-auto"
            />
          </div>

          <div class="mt-4 space-y-2">
            <div class="space-x-2">
              <button
                onClick={() => dmakControls?.render()}
                disabled={dmakControls?.isAnimating()}
                class="rounded bg-blue-500 px-4 py-2 text-white disabled:opacity-50"
              >
                {dmakControls?.isAnimating() ? "Animating..." : "Animate"}
              </button>
              <button
                onClick={() => dmakControls?.erase()}
                class="rounded bg-red-500 px-4 py-2 text-white"
              >
                Erase
              </button>
            </div>

            <div class="flex items-center justify-center space-x-4">
              <div class="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="show-stroke-numbers"
                  checked={showNumbers()}
                  onChange={(e) => setShowNumbers(e.target.checked)}
                  class="rounded"
                />
                <label for="show-stroke-numbers" class="text-sm text-white">
                  Show stroke numbers
                </label>
              </div>

              <div class="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="colored"
                  checked={colored()}
                  onChange={(e) => setColored(e.target.checked)}
                  class="rounded"
                />
                <label for="colored" class="text-sm text-white">
                  Rainbow colors
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
