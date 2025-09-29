import Furigana from "@/components/text/Furigana"
import YouTubeVideo from "@/features/youtube/YouTube"
import { formatDuration } from "@/utils/timeFormat"
import { createSignal, For } from "solid-js"

const vocab = [
  {
    japanese: "～について",
    english: "about...; concerning...",
    time: 7,
  },
  {
    japanese: (
      <>
        <Furigana furigana={<span class="text-xs">つか</span>}>使</Furigana>う
      </>
    ),
    english: "to use",
    time: 23,
  },
  {
    japanese: (
      <>
        <Furigana furigana={<span class="text-xs">にんき</span>}>人気</Furigana>
      </>
    ),
    english: "popular",
    time: 44,
  },
  {
    japanese: (
      <>
        ある
        <Furigana furigana={<span class="text-xs">とき</span>}>時</Furigana>
      </>
    ),
    english: "at the time when...",
    time: 75,
  },
  {
    japanese: (
      <>
        <Furigana furigana={<span class="text-xs">じょうず</span>}>
          上手
        </Furigana>
      </>
    ),
    english: "skillful; good at...",
    time: 117,
  },
  {
    japanese: (
      <>
        <Furigana furigana={<span class="text-xs">さいきん</span>}>
          最近
        </Furigana>
      </>
    ),
    english: "recently",
    time: 127,
  },
  {
    japanese: (
      <>
        <Furigana furigana={<span class="text-xs">ゆうめい</span>}>
          有名
        </Furigana>
      </>
    ),
    english: "famous",
    time: 132,
  },
  {
    japanese: "楽しむ",
    english: "to enjoy",
    time: 304,
  },
  {
    japanese: (
      <>
        <Furigana furigana={<span class="text-xs">しょうらい</span>}>
          将来
        </Furigana>
      </>
    ),
    english: "future",
    time: 442,
  },
]

export default function page() {
  const [seekTime, setSeekTime] = createSignal<number | null>(null)

  return (
    <>
      <YouTubeVideo
        videoId="MYuNYVhz3Gs"
        title="Sports - Easy Japanese"
        credit="Nihongo-Learning"
        seekTime={seekTime}
        setSeekTime={setSeekTime}
        vocabTimestamps={vocab}
      />
      <div class="mx-auto max-w-2xl space-y-3 px-4 pb-32">
        <div class="w-full border-b px-12 pt-6 pb-6 text-center text-4xl font-semibold lg:px-28 lg:pt-12">
          <h1 class="text-center text-4xl font-semibold">Sports</h1>
        </div>
        <p>
          This video is great for getting a feel for how Japanese speakers
          construct their sentences. You're not expected to know most of the
          grammar structures, but you can still get a feel for the flow of the
          language.
        </p>
        <p>Try without subtitles and see how much you can pick up on!</p>
        <p>
          By the end of chapter 6, you're going to understand a lot of the
          grammar used in this video.
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
