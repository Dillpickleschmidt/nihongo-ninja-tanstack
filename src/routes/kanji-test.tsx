import { createFileRoute } from "@tanstack/solid-router"
import { KanjiAnimation } from "../components/KanjiAnimation"

export const Route = createFileRoute("/kanji-test")({
  component: () => <KanjiTestPage />,
})

function KanjiTestPage() {
  return (
    <div class="container mx-auto p-8">
      <h1 class="mb-8 text-3xl font-bold">KanjiVG Animation Test</h1>
      <div class="space-y-8">
        <div class="text-center">
          <h2 class="mb-4 text-xl">Kanji Animation Test</h2>
          <div class="inline-block rounded-lg border-2 border-gray-300 p-8">
            <KanjiAnimation
              svgPath="/05473.svg"
              strokeDelay={30}
              class="mx-auto"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
