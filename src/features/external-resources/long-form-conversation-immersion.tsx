import ContentBox from "@/components/ContentBox"
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
        <Furigana furigana={<span class="text-xs">もう</span>}>知</Furigana>
        っている？
      </>
    ),
    english: "do you know it?",
    time: 38,
  },
  {
    japanese: <>ところ</>,
    english: "place",
    time: 41,
  },
  {
    japanese: (
      <>
        <Furigana furigana={<span class="text-xs">しゅみ</span>}>趣味</Furigana>
      </>
    ),
    english: "hobbies",
    time: 76,
  },
  {
    japanese: (
      <>
        <Furigana furigana={<span class="text-xs">す</span>}>好</Furigana>き
      </>
    ),
    english: "to like",
    time: 87,
  },
  {
    japanese: (
      <>
        <Furigana furigana={<span class="text-xs">めずら</span>}>珍</Furigana>
        しい
      </>
    ),
    english: "rare",
    time: 115,
  },
  {
    japanese: (
      <>
        <Furigana furigana={<span class="text-xs">しごと</span>}>仕事</Furigana>
      </>
    ),
    english: "job",
    time: 287,
  },
  {
    japanese: (
      <>
        <Furigana furigana={<span class="text-xs">えいがかんとく</span>}>
          映画監督
        </Furigana>
      </>
    ),
    english: "film director",
    time: 292,
  },
  {
    japanese: (
      <>
        <Furigana furigana={<span class="text-xs">つく</span>}>作</Furigana>る
      </>
    ),
    english: "to make",
    time: 305,
  },
  {
    japanese: (
      <>
        <Furigana furigana={<span class="text-xs">てんちょう</span>}>
          店長
        </Furigana>
      </>
    ),
    english: "manager",
    time: 349,
  },
  {
    japanese: "見えない",
    english: "I can't see it",
    time: 357,
  },
  {
    japanese: "できない",
    english: "negative of できる - to be able",
    time: 415,
  },
  {
    japanese: "いる",
    english: "(they) exist",
    time: 607,
  },
  {
    japanese: "たくさん",
    english: "(I have) many",
    time: 611,
  },
  {
    japanese: (
      <>
        <Furigana furigana={<span class="text-xs">きのう</span>}>昨日</Furigana>
      </>
    ),
    english: "yesterday",
    time: 668,
  },
  {
    japanese: (
      <>
        <Furigana furigana={<span class="text-xs">やす</span>}>安</Furigana>い
      </>
    ),
    english: "cheap",
    time: 922,
  },
  {
    japanese: "ない",
    english: "don't have",
    time: 948,
  },
  {
    japanese: (
      <>
        <Furigana furigana={<span class="text-xs">ふたり</span>}>二人</Furigana>
      </>
    ),
    english: "two people (two of us)",
    time: 980,
  },
  {
    japanese: (
      <>
        <Furigana furigana={<span class="text-xs">ゆうえんち</span>}>
          遊園地
        </Furigana>
      </>
    ),
    english: "amusement park",
    time: 997,
  },
]

export default function page() {
  const [seekTime, setSeekTime] = createSignal<number | null>(null)

  return (
    <>
      <YouTubeVideo
        videoId="IJEn-9nAFQE"
        title="０から始める日本語 日常会話！"
        credit="Japanese super immersion"
        seekTime={seekTime}
        setSeekTime={setSeekTime}
        vocabTimestamps={vocab}
        autoFocus
      />
      <div class="mx-auto max-w-2xl space-y-3 px-4 pb-32">
        <div class="w-full border-b px-12 pt-6 pb-6 text-center text-4xl font-semibold lg:pt-12">
          <h1 class="text-center text-4xl font-semibold">
            Long-Form Conversation Immersion
          </h1>
        </div>
        <p>
          This is a long video, and it uses some more advanced grammar points.
          You're not expected to be able to understand most of it, but you'll
          definetly be able to pick up a good portion of it!
        </p>

        <h2 class="pt-6 text-2xl font-semibold">
          What to get out of this video
        </h2>
        <p>
          It's actually pretty hilarious at times. It starts off similar to a
          video that you've already watched, but it quickly goes into some more
          interesting topics.
        </p>
        <p>
          I just love watching these two, and I love it when I can understand
          parts of what they're saying. Relax, and have fun with this one.
        </p>

        <h2 class="pt-6 text-2xl font-semibold">New words and phrases</h2>
        <p>
          There's a ton of stuff here that you haven't encountered yet. This
          lesson is primarily for casual listening, so don't focus too much on
          trying to understand the parts you don't know yet.
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
