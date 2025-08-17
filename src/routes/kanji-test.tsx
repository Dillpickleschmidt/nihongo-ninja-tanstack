import { createSignal } from "solid-js"
import { createFileRoute } from "@tanstack/solid-router"
import { KanjiAnimation } from "@/components/KanjiAnimation"

export const Route = createFileRoute("/kanji-test")({
  component: () => <KanjiTestPage />,
})

function KanjiTestPage() {
  // Separate signals for each control
  const [animate, setAnimate] = createSignal<() => void>(() => {})
  const [reset, setReset] = createSignal<() => void>(() => {})
  const [isAnimating, setIsAnimating] = createSignal<() => boolean>(() => false)
  const [toggleNumbers, setToggleNumbers] = createSignal<
    (show: boolean) => void
  >(() => {})
  const [animationComplete, setAnimationComplete] = createSignal<() => boolean>(
    () => false,
  )

  const [showNumbers, setShowNumbers] = createSignal(false)
  const [speed, setSpeed] = createSignal(0.5) // default medium

  return (
    <div class="container mx-auto space-y-6 p-8">
      <h1 class="text-2xl font-bold text-white">Kanji Test</h1>

      {/* Kanji Animation */}
      <KanjiAnimation
        svgPath="/06f22.svg"
        showGrid
        size={200}
        speed={speed()}
        enableAnimate={true}
        onControlsReady={(c) => {
          setAnimate(() => c.animate)
          setReset(() => c.reset)
          setIsAnimating(() => c.isAnimating)
          setToggleNumbers(() => c.toggleNumbers)
          setAnimationComplete(() => c.animationComplete)
        }}
      />

      {/* External Controls */}
      <div class="flex items-center gap-4">
        <button
          onClick={() => animate()()}
          disabled={isAnimating()()}
          class="rounded bg-blue-500 px-4 py-2 text-white disabled:opacity-50"
        >
          {isAnimating()() ? "Animating..." : "Animate"}
        </button>

        <button
          onClick={() => reset()()}
          class="rounded bg-gray-500 px-4 py-2 text-white"
        >
          Reset
        </button>

        <label class="flex items-center gap-2 text-white">
          <input
            type="checkbox"
            checked={showNumbers()}
            onChange={(e) => {
              const checked = e.currentTarget.checked
              setShowNumbers(checked)
              toggleNumbers()(checked)
            }}
          />
          Show stroke numbers
        </label>
      </div>

      {/* Speed Slider */}
      <div class="space-y-2">
        <label for="speed" class="block text-white">
          Animation Speed ({speed().toFixed(2)})
        </label>
        <input
          id="speed"
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={speed()}
          onInput={(e) => setSpeed(parseFloat(e.currentTarget.value))}
          class="w-64"
        />
        <div class="flex w-64 justify-between text-sm text-gray-300">
          <span>Slow</span>
          <span>Medium</span>
          <span>Fast</span>
        </div>
      </div>
    </div>
  )
}
