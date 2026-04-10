import type { JSX } from "solid-js"
import { createFileRoute } from "@tanstack/solid-router"
import Furigana from "@/components/text/Furigana"
import YouTubeVideo from "@/features/youtube/YouTube"
import LessonHeader, {
  OverviewItem,
} from "@/features/lessons/components/LessonHeader"
import SectionLabel from "@/features/lessons/components/SectionLabel"
import AsideBlock from "@/features/lessons/components/AsideBlock"
import LessonSummary, {
  SummaryItem,
} from "@/features/lessons/components/LessonSummary"

export const Route = createFileRoute(
  "/lessons/_chapter-2/words-that-point",
)({
  component: WordsThatPoint,
})

function WordsThatPoint() {
  return (
    <div class="relative pb-32">
      {/* Background character */}
      <span class="pointer-events-none absolute top-8 left-24 select-none font-japanese text-[10rem] leading-none text-white/[0.03] sm:top-11 sm:left-auto sm:right-8 sm:text-[11rem]">
        指
      </span>

      <LessonHeader
        chapter="Chapter 2 · Grammar"
        title={<>Words That Point</>}
        subtitle="This, that, over there, and which — for objects, adjectives, locations, and people."
      >
        <OverviewItem>これ/それ/あれ/どれ for objects</OverviewItem>
        <OverviewItem>この/その/あの/どの as adjectives</OverviewItem>
        <OverviewItem>ここ/そこ/あそこ/どこ for locations</OverviewItem>
        <OverviewItem>こちら/そちら/あちら/どちら for people and directions</OverviewItem>
      </LessonHeader>

      <div class="space-y-14 px-8">
        {/* Intro */}
        <div class="space-y-4">
          <p class="leading-relaxed text-white/70">
            In Japanese, there are specific words used to point to objects.
            These words help to clarify what you are referring to and are
            essential for everyday conversations. Let's explore these
            demonstratives in detail with examples of everyday situations where
            each would be applicable.
          </p>

          <YouTubeVideo
            videoId="ETeWHyYOifk"
            title="Comprehensible Japanese Beginner これ、それ、 あれ、どれ"
            credit="Nihongo-Learning"
          />
        </div>

        {/* Objects */}
        <div class="space-y-4">
          <SectionLabel>Demonstratives for objects</SectionLabel>
          <p class="leading-relaxed text-white/70">
            These group of words can stand on their own — acting as full
            sentences.
          </p>

          <div class="space-y-3">
            <DemoCard
              jp="これ"
              en="This one"
              color="text-sky-400"
              proximity="near the speaker"
              example="これはペンです。"
              translation="This is a pen."
              situation="When you are holding a pen and showing it to someone next to you."
            />
            <DemoCard
              jp="それ"
              en="That one"
              color="text-sky-400"
              proximity="near the listener"
              example="それはペンです。"
              translation="That is a pen."
              situation="When the pen is near the person you are speaking to."
            />
            <DemoCard
              jp="あれ"
              en="That one (over there)"
              color="text-sky-400"
              proximity="far from both"
              example="あれはペンです。"
              translation="That (over there) is a pen."
              situation="When the pen is on a table across the room from both you and the listener."
            />
            <DemoCard
              jp="どれ"
              en="Which one?"
              color="text-yellow-500"
              proximity="question"
              example="どれがペンですか。"
              translation="Which one is the pen?"
              situation="When there are several items on a table, and you want to know which one is the pen."
              note="(more on the が particle later)"
            />
          </div>

          <YouTubeVideo
            videoId="pv9B20HEjVY"
            title="This and That in Japanese in UNDER 2 Minutes"
            credit="ToKini Andy"
          />

          <AsideBlock>
            <p class="text-sm leading-relaxed text-white/60">
              Question words like{" "}
              <span class="font-japanese">どれ</span>,{" "}
              <span class="font-japanese">どの</span>, and{" "}
              <span class="font-japanese">なに</span> cannot be followed by the
              particle <span class="font-japanese">は</span>. Instead, they are
              followed by <span class="font-japanese">が</span>. We'll cover
              this in more detail in the next lesson.
            </p>
          </AsideBlock>
        </div>

        {/* Adjectives */}
        <div class="space-y-4">
          <SectionLabel>Demonstrative adjectives</SectionLabel>
          <p class="leading-relaxed text-white/70">
            These group of words{" "}
            <span class="font-semibold text-white/90">modify nouns</span> and
            can <span class="font-semibold italic text-white/90">NOT</span>{" "}
            stand on their own.
          </p>

          <div class="space-y-3">
            <DemoCard
              jp="この"
              en="This..."
              color="text-red-500"
              proximity="adjective, used with a noun"
              example={
                <>
                  このペンは
                  <Furigana furigana={<span class="text-xs">あお</span>}>
                    青
                  </Furigana>
                  いです。
                </>
              }
              translation="This pen is blue."
              situation="When you are holding a blue pen and describing it."
            />
            <DemoCard
              jp="その"
              en="That..."
              color="text-red-500"
              proximity="adjective, used with a noun"
              example={
                <>
                  そのペンは
                  <Furigana furigana={<span class="text-xs">あお</span>}>
                    青
                  </Furigana>
                  いです。
                </>
              }
              translation="That pen is blue."
              situation="When the blue pen is near the listener, and you are describing it."
            />
            <DemoCard
              jp="あの"
              en="That... (over there)"
              color="text-red-500"
              proximity="adjective, used with a noun"
              example={
                <>
                  あのペンは
                  <Furigana furigana={<span class="text-xs">あお</span>}>
                    青
                  </Furigana>
                  いです。
                </>
              }
              translation="That pen (over there) is blue."
              situation="When the blue pen is across the room from both you and the listener."
            />
            <DemoCard
              jp="どの"
              en="Which..."
              color="text-yellow-500"
              proximity="adjective, used with a noun, for questions"
              example={
                <>
                  どのペンが
                  <Furigana furigana={<span class="text-xs">あお</span>}>
                    青
                  </Furigana>
                  いですか。
                </>
              }
              translation="Which pen is blue?"
              situation="When there are several pens, and you want to know which one is blue."
            />
          </div>

          <p class="text-center text-sm italic text-white/40">
            **Just a reminder that Japanese doesn't distinguish singular from
            plural!**
          </p>
        </div>

        {/* Recap */}
        <div class="space-y-4">
          <SectionLabel>Recap</SectionLabel>
          <p class="leading-relaxed text-white/70">
            Use{" "}
            <span class="font-japanese text-lg font-medium text-white/90">
              これ
            </span>
            ,{" "}
            <span class="font-japanese text-lg font-medium text-white/90">
              それ
            </span>
            ,{" "}
            <span class="font-japanese text-lg font-medium text-white/90">
              あれ
            </span>
            , and{" "}
            <span class="font-japanese text-lg font-medium text-white/90">
              どれ
            </span>{" "}
            for standalone topics/subjects and{" "}
            <span class="font-japanese text-lg font-medium text-white/90">
              この
            </span>
            ,{" "}
            <span class="font-japanese text-lg font-medium text-white/90">
              その
            </span>
            ,{" "}
            <span class="font-japanese text-lg font-medium text-white/90">
              あの
            </span>
            , and{" "}
            <span class="font-japanese text-lg font-medium text-white/90">
              どの
            </span>{" "}
            for modifying nouns.
          </p>

          <div class="flex justify-around gap-4">
            <div class="space-y-1 text-muted-foreground">
              <p>this one</p>
              <p>this pen</p>
            </div>
            <div class="space-y-1 font-japanese text-xl font-medium">
              <p class="text-white/50 line-through">
                こ<span class="text-red-500">の</span>
              </p>
              <p class="text-white/50 line-through">
                こ<span class="text-red-500">れ</span>ぺん
              </p>
            </div>
            <div class="space-y-1 font-japanese text-xl font-medium">
              <p>
                こ<span class="text-green-500">れ</span>
              </p>
              <p>
                こ<span class="text-green-500">の</span>ペン
              </p>
            </div>
          </div>

          <div class="mx-auto max-w-sm overflow-hidden rounded-lg">
            <img
              src="/img/chapter-2/words-that-point/spiderman-words-that-point.jpg"
              alt="spiderman-pointing-meme"
              class="w-full"
            />
          </div>
        </div>

        {/* Locations */}
        <div class="space-y-4">
          <SectionLabel>Demonstratives for locations</SectionLabel>

          <div class="space-y-3">
            <DemoCard
              jp="ここ"
              en="Here"
              color="text-orange-400"
              proximity="near the speaker"
              example="ここはオフィスです。"
              translation="Here is the office."
              situation="When you are inside the office."
            />
            <DemoCard
              jp="そこ"
              en="There"
              color="text-orange-400"
              proximity="near the listener"
              example="そこはオフィスです。"
              translation="There is the office."
              situation="When the office is near the listener."
            />
            <DemoCard
              jp="あそこ"
              en="Over there"
              color="text-orange-400"
              proximity="far from both"
              example="あそこはオフィスです。"
              translation="Over there is the office."
              situation="When the office is far from both you and the listener."
            />
            <DemoCard
              jp="どこ"
              en="Where?"
              color="text-yellow-500"
              proximity="question"
              example="オフィスはどこですか。"
              translation="Where is the office?"
              situation="When you want to know the location of the classroom."
            />
          </div>
        </div>

        {/* People & Directions */}
        <div class="space-y-4">
          <SectionLabel>Demonstratives for people and directions</SectionLabel>

          <div class="space-y-3">
            <DemoCard
              jp="こちら"
              en="This way/person"
              color="text-green-400"
              proximity="near the speaker"
              example="こちらは田中さんです。"
              translation="This is Mr. Tanaka."
              situation="When introducing Mr. Tanaka who is near you."
            />
            <DemoCard
              jp="そちら"
              en="That way/person"
              color="text-green-400"
              proximity="near the listener"
              example="そちらは山田さんですか。"
              translation="Is that Mr. Yamada?"
              situation="When asking about Mr. Yamada who is near the listener."
            />
            <DemoCard
              jp="あちら"
              en="That way/person over there"
              color="text-green-400"
              proximity="far from both"
              example={
                <>
                  あちらは
                  <Furigana furigana={<span class="text-xs">ぶちょう</span>}>
                    部長
                  </Furigana>
                  です。
                </>
              }
              translation="That is the department manager over there."
              situation="When referring to someone or something far from both you and the listener."
            />
            <DemoCard
              jp="どちら"
              en="Which way/person?"
              color="text-yellow-500"
              proximity="question"
              example={
                <>
                  どちら
                  <Furigana furigana={<span class="text-xs">さま</span>}>
                    様
                  </Furigana>
                  ですか。
                </>
              }
              translation="Who are you? (very polite)"
              situation="When asking politely about someone's identity or direction."
            />

          <AsideBlock>
            <ul class="-ml-1 mt-4 list-inside" style={'list-style-type: "- ";'}>
              <li class="text-sm leading-relaxed text-white/60">
                These should generally be used in place of{" "}
                <span class="font-japanese">これ</span>,{" "}
                <span class="font-japanese">この</span>,{" "}
                <span class="font-japanese">ここ</span>, and{" "}
                <span class="font-japanese">それ</span>, etc., whenever referring to people, as it's more polite. People aren't things and as such generally deserve different treatment.
              </li>
              <li class="text-sm leading-relaxed text-white/60">If you're not about to describe their name specifically, you don't have to use these unless you want to show high regard for the person. 
              </li>
              <li class="text-sm leading-relaxed text-white/60">For example: 
                <span class="font-japanese">この子</span> - "this child" (still polite), 
                <span class="font-japanese">このバカ</span> - "this idiot".
              </li>
           </ul>
          </AsideBlock>
          </div>
        </div>

        <p class="leading-relaxed text-white/70">
          <span class="font-semibold italic text-white/90">Don't worry</span>{" "}
          if you think you'll struggle differentiating these words. You'll naturally 
          get plenty of practice as you continue learning new material.
        </p>

        {/* Summary */}
        <LessonSummary>
          <SummaryItem>
            こ = near me, そ = near you, あ = far from both, ど = question
          </SummaryItem>
          <SummaryItem>
            これ/それ/あれ/どれ stand alone as subjects
          </SummaryItem>
          <SummaryItem>
            この/その/あの/どの modify a noun (cannot stand alone)
          </SummaryItem>
          <SummaryItem>
            ここ/そこ/あそこ/どこ for locations
          </SummaryItem>
          <SummaryItem>
            こちら/そちら/あちら/どちら for people and directions (polite)
          </SummaryItem>
        </LessonSummary>
      </div>
    </div>
  )
}

function DemoCard(props: {
  jp: string
  en: string
  color: string
  proximity: string
  example: string | JSX.Element
  translation: string
  situation: string
  note?: string
}) {
  return (
    <div class="rounded-lg bg-white/[0.04] p-4">
      <div class="flex items-baseline gap-2">
        <span class={`font-japanese text-2xl font-semibold ${props.color}`}>
          {props.jp}
        </span>
        <span class={`font-semibold ${props.color}`}>{props.en}</span>
        <span class="text-xs italic text-white/30">({props.proximity})</span>
      </div>
      <div class="mt-3 space-y-1.5 text-white/60">
        <p>
          <span class="font-japanese text-lg text-white/80">
            {props.example}
          </span>
          {props.note && (
            <span class="ml-1 text-xs text-white/30">{props.note}</span>
          )}
          <span class="ml-2 text-sm text-white/40">{props.translation}</span>
        </p>
        <p class="text-sm text-white/40">{props.situation}</p>
      </div>
    </div>
  )
}
