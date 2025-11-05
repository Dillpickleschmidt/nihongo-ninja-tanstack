import Furigana from "@/components/text/Furigana"
import YouTubeVideo from "@/features/youtube/YouTube"
import { formatDuration } from "@/utils/timeFormat"
import { createSignal, For } from "solid-js"

const vocab = [
  {
    japanese: (
      <>
        <Furigana furigana={<span class="text-xs">どうが</span>}>動画</Furigana>
      </>
    ),
    english: "video",
    time: 4,
  },
  {
    japanese: (
      <>
        <Furigana furigana={<span class="text-xs">す</span>}>好</Furigana>き
      </>
    ),
    english: "to like",
    time: 145,
  },
]

export default function page() {
  const [seekTime, setSeekTime] = createSignal<number | null>(null)

  return (
    <>
      <YouTubeVideo
        videoId="PFJZdvrghgI"
        title="Japanese for Beginners - Easy Learning with Yuta"
        credit="Nihongo-Learning"
        seekTime={seekTime}
        setSeekTime={setSeekTime}
        vocabTimestamps={vocab}
        autoFocus
      />
      <div class="mx-auto max-w-2xl space-y-3 px-4 pb-32">
        <div class="w-full border-b px-12 pt-6 pb-6 text-center text-4xl font-semibold lg:px-28 lg:pt-12">
          <h1 class="text-center text-4xl font-semibold">
            Immersion With Yuta
          </h1>
        </div>
        <p>
          This video includes tons of stuff from this chapter, and is just a fun
          break from the usual reading.
        </p>

        <h2 class="pt-6 text-2xl font-semibold">New words and phrases</h2>
        <p>
          There's a lot of new words, but we'll let you figure most of them out
          from watching. Here's a few of the less obvious ones.
        </p>

        <ul class="space-y-1 pl-4">
          <For each={vocab}>
            {(word) => (
              <div
                class="origin-left transform cursor-pointer duration-150 ease-in-out hover:scale-[99%]"
                onClick={() => setSeekTime(word.time)}
              >
                <div class="inline-flex items-end space-x-2">
                  <div class="min-w-8 text-base font-light text-blue-400">
                    {formatDuration(word.time)}
                  </div>
                  <span class="font-japanese text-xl">{word.japanese}</span>
                  <span class="">- {word.english}</span>
                </div>
              </div>
            )}
          </For>
        </ul>
      </div>
    </>
  )
}
