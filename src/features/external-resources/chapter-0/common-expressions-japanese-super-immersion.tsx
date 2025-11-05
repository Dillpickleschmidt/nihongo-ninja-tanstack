import Furigana from "@/components/text/Furigana"
import YouTubeVideo from "@/features/youtube/YouTube"
import { formatDuration } from "@/utils/timeFormat"
import { createSignal, For } from "solid-js"

const chapters = [
  { label: "ありがとうございます", time: 0 },
  { label: "ありがとう", time: 22 },
  { label: "いただきます", time: 43 },
  { label: "ごちそうさまでした", time: 65 },
  { label: "お疲れ様です", time: 89 },
  { label: "お疲れ", time: 111 },
]

export default function page() {
  const [seekTime, setSeekTime] = createSignal<number | null>(null)

  return (
    <>
      <YouTubeVideo
        videoId="4PBR4w47wsQ"
        title="Greetings 2 - Japanese Conversation for Beginners."
        credit="Japanese super immersion"
        seekTime={seekTime}
        setSeekTime={setSeekTime}
        autoFocus
      />
      <div class="mx-auto max-w-2xl space-y-3 px-4 pb-32">
        <div class="w-full border-b px-12 pt-6 pb-6 text-center text-4xl font-semibold lg:px-28 lg:pt-12">
          <h1 class="text-center text-4xl font-semibold">
            More Common Expressions
          </h1>
        </div>
        <div>
          <h3 class="font-semibold">Continuing with more listening:</h3>
          <ul class="space-y-1 pt-1 pl-4">
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

        <h2 class="pt-6 text-2xl font-semibold">New words and phrases</h2>
        <p>There's one additional word in here that you haven't heard yet:</p>
        <p>
          <span>
            お
            <Furigana furigana={<span class="text-sm">つか</span>}>疲</Furigana>
            れ
            <Furigana furigana={<span class="text-sm">さま</span>}>様</Furigana>
            です
          </span>{" "}
          <span class="text-base">
            - It means you you must be tired, or thank you for your hard work,
            and is a way to say goodbye for the day, thus it is typically used
            at the end of the work day.
          </span>
        </p>
        <p>
          <span>
            お
            <Furigana furigana={<span class="text-sm">つか</span>}>疲</Furigana>
            れ
          </span>{" "}
          <span class="text-base">Is just the more casual version.</span>
        </p>
      </div>
    </>
  )
}
