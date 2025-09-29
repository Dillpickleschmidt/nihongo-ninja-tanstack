import Furigana from "@/components/text/Furigana"
import YouTubeVideo from "@/features/youtube/YouTube"
import { formatDuration } from "@/utils/timeFormat"
import { createSignal, For } from "solid-js"

const chapters = [
  { label: "Polite - Slow Speed", time: 0 },
  { label: "Polite - Normal Speed", time: 60 },
  { label: "Casual - Normal Speed", time: 89 },
]

const vocab = [
  {
    japanese: (
      <>
        と<Furigana furigana={<span class="text-xs">もう</span>}>申</Furigana>
        します
      </>
    ),
    english: "my name is",
    time: 5,
  },
  {
    japanese: (
      <>
        と<Furigana furigana={<span class="text-xs">い</span>}>言</Furigana>
        います
      </>
    ),
    english: "my name is",
    time: 10,
  },
  {
    japanese: <>どこ</>,
    english: "where",
    time: 17,
  },
  {
    japanese: (
      <>
        <Furigana furigana={<span class="text-xs">す</span>}>住</Furigana>
        んでいる
      </>
    ),
    english: "currently living (location)",
    time: 18,
  },
  {
    japanese: <>いいところ</>,
    english: "nice place",
    time: 34,
  },
  {
    japanese: <>そちらは</>,
    english: "how about yourself",
    time: 45,
  },
]

export default function page() {
  const [seekTime, setSeekTime] = createSignal<number | null>(null)

  return (
    <>
      <YouTubeVideo
        videoId="XBKeW87xsKc"
        title="Nice to meet you - Japanese Conversation for Beginners."
        credit="Japanese super immersion"
        seekTime={seekTime}
        setSeekTime={setSeekTime}
        vocabTimestamps={vocab}
      />
      <div class="mx-auto max-w-2xl space-y-3 px-4 pb-32">
        <div class="w-full border-b px-12 pt-6 pb-6 text-center text-4xl font-semibold lg:px-28 lg:pt-12">
          <h1 class="text-center text-4xl font-semibold">"Nice to meet you"</h1>
        </div>
        <div>
          <h3 class="font-semibold">
            This video covers self introductions 3 times:
          </h3>
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
        <p>
          Sure, it's still a little boring, but that's just how it is without
          knowing more of the language. The good news is that it only gets
          better from here!
        </p>

        <h2 class="pt-6 text-2xl font-semibold">
          What to get out of this video
        </h2>
        <p>
          Pay attention to how they speak, the rhythm of their words, and the
          flow of their interactions{" "}
          <span class="text-muted-foreground text-base">
            (especially during the normal speed)
          </span>
          .
        </p>
        <p>
          Japanese relies heavily on non-verbal communication, which you can
          start to notice even without understanding the language. While you're
          not expected to practice this yet, but it's good to start noticing it.
        </p>
        <p class="text-muted-foreground text-base">
          *You're not expected to know most of the casual conversation. We'll
          cover that in later chapters.
        </p>

        <h2 class="pt-6 text-2xl font-semibold">New words and phrases</h2>
        <p>
          This is a list of the important new words and phrases from the video
          that you haven't encountered. It's not not all of them, but it's
          enough to help you understand what's going on.
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
