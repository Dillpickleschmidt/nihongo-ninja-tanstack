import { createSignal, For } from "solid-js"
import YouTubeVideo from "@/features/youtube/YouTube"
import { formatDuration } from "@/utils/timeFormat"

const chapters = [
  { label: "おはようございます", time: 0 },
  { label: "おはよう", time: 21 },
  { label: "こんにちは", time: 43 },
  { label: "こんばんは", time: 60 },
  { label: "おやすみなさい", time: 79 },
  { label: "おやすみ", time: 90 },
]

export default function page() {
  const [seekTime, setSeekTime] = createSignal<number | null>(null)

  return (
    <div class="mb-32">
      <YouTubeVideo
        videoId="po_6rnpP5mI"
        title="Greetings - Japanese Conversation for Beginners."
        credit="Japanese super immersion"
        seekTime={seekTime}
        setSeekTime={setSeekTime}
        autoFocus
      />
      <div class="mx-auto max-w-2xl space-y-6 px-6">
        <div class="w-full border-b pt-6 pb-6 lg:pt-12">
          <h1 class="text-center text-3xl font-semibold lg:text-4xl">
            Good Morning, Good Afternoon, Good Evening, Goodnight
          </h1>
        </div>
        <div>
          <h3 class="font-semibold">
            This video covers many ways to say good morning, good afternoon, and
            goodnight:
          </h3>
          <ul class="space-y-1 pt-2 pl-4">
            <For each={chapters}>
              {(chapter) => (
                <div
                  class="origin-left transform cursor-pointer duration-150 ease-in-out hover:scale-[99%]"
                  onClick={() => setSeekTime(chapter.time)}
                >
                  <div class="inline-flex space-x-2 text-base font-light text-blue-400">
                    <div class="min-w-8">{formatDuration(chapter.time)}</div>
                    <span>{chapter.label}</span>
                  </div>
                </div>
              )}
            </For>
          </ul>
        </div>
        <div class="space-y-4">
          <p>
            These greetings can get really squished sometimes, so let's expose
            your brain to the many ways Japanese speakers might say them.
          </p>
          <p>
            Around 17 seconds in, you're gonna think they're unrecognizable.
            That's okay, if someone talks like that, they'd only subject you to
            such torture if they knew that you knew you could assume what
            they're saying without actually understanding them.
          </p>
        </div>
      </div>
    </div>
  )
}
