import { createFileRoute } from "@tanstack/solid-router"
import Furigana from "@/components/text/Furigana"
import SelectText from "@/components/text/MultipleChoiceText"
import { StudentBubble } from "@/features/lessons/components/DialogueBubbles"
import LessonHeader, {
  OverviewItem,
} from "@/features/lessons/components/LessonHeader"
import SectionLabel from "@/features/lessons/components/SectionLabel"
import AsideBlock from "@/features/lessons/components/AsideBlock"
import RevealBlock from "@/features/lessons/components/RevealBlock"
import LessonSummary, {
  SummaryItem,
} from "@/features/lessons/components/LessonSummary"

export const Route = createFileRoute("/lessons/_chapter-4/takusan")({
  component: Takusan,
})

function Takusan() {
  return (
    <div class="relative pb-32">
      {/* Background character */}
      <span class="pointer-events-none absolute top-8 left-24 select-none font-japanese text-[10rem] leading-none text-white/[0.03] sm:top-11 sm:left-auto sm:right-8 sm:text-[11rem]">
        多
      </span>

      <LessonHeader
        chapter="Chapter 4 · Grammar"
        title={
          <>
            Expressing <span class="text-pink-400">A Lot</span> with{" "}
            <span class="font-japanese text-pink-400">たくさん</span>
          </>
        }
        subtitle='Three patterns for saying "a lot" and "many."'
      >
        <OverviewItem>たくさん + verb = did a lot</OverviewItem>
        <OverviewItem>たくさんの + noun = many of something</OverviewItem>
        <OverviewItem>When to use の and when to drop it</OverviewItem>
      </LessonHeader>

      <div class="space-y-14 px-8">
        {/* Intro */}
        <div class="leading-relaxed text-white/70">
          <p>
            <span class="font-japanese font-medium text-white/90">
              たくさん
            </span>{" "}
            is a versatile word meaning "a lot" or "many," and it can be used in
            several ways.
          </p>
        </div>

        {/* Patterns overview */}
        <div class="space-y-4">
          <SectionLabel>Patterns for using <span class="font-japanese text-xs">たくさん</span></SectionLabel>
          <div class="grid gap-3 sm:grid-cols-2">
            <div class="flex flex-col justify-center rounded-lg bg-white/[0.04] p-4 text-center">
              <p class="font-japanese text-lg text-white/90">
                たくさん +{" "}
                <span class="font-medium text-emerald-500">Verb</span>
              </p>
              <p class="mt-1 text-sm text-white/40">
                When describing doing "a lot" of something
              </p>
            </div>
            <div class="rounded-lg bg-white/[0.04] p-4 text-center">
              <div>
                <p class="font-japanese text-lg text-white/90">
                  たくさん +{" "}
                  <span class="font-medium text-amber-300">Noun</span>
                </p>
                <p class="text-xs italic text-white/30">or</p>
                <p class="font-japanese text-lg text-white/90">
                  たくさん
                  <span class="font-medium text-orange-400">の</span> +{" "}
                  <span class="font-medium text-amber-300">Noun</span>
                </p>
                <p class="mt-1 text-sm text-white/40">
                  When describing "many" of something
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Pattern 1 */}
        <div class="space-y-4">
          <div class="text-center">
            <p class="font-japanese text-2xl">たくさん + <span class="text-emerald-500">Verb</span></p>
            <SectionLabel class="mt-1">Pattern 1</SectionLabel>
          </div>
          <p class="leading-relaxed text-white/70">
            When you want to say you did "a lot" of something:
          </p>
          <div class="rounded-lg bg-white/[0.04] p-4">
            <p class="font-japanese text-lg text-white/80">
              日本語をたくさん勉強しました。
            </p>
            <p class="mt-1 text-white/50">I studied Japanese a lot.</p>
          </div>
        </div>

        {/* Pattern 2 */}
        <div class="space-y-4">
          <div class="text-center">
            <p class="font-japanese text-2xl">たくさん<span class="text-orange-400">の</span> + <span class="text-amber-300">Noun</span></p>
            <SectionLabel class="mt-1">Pattern 2</SectionLabel>
          </div>
          <p class="leading-relaxed text-white/70">
            When you want to say there are "many" of something:
          </p>
          <div class="rounded-lg bg-white/[0.04] p-4">
            <p class="font-japanese text-lg text-white/80">
              図書館にたくさんの本があります。
            </p>
            <p class="mt-1 text-white/50">
              There are many books in the library{" "}
              <span class="italic text-white/40">(focusing on the books)</span>.
            </p>
          </div>
        </div>

        {/* Pattern 3 */}
        <div class="space-y-4">
          <div class="text-center">
            <p class="font-japanese text-2xl">たくさん + <span class="text-amber-300">Noun</span></p>
            <SectionLabel class="mt-1">Pattern 3</SectionLabel>
          </div>
          <p class="leading-relaxed text-white/70">
            You can also drop the の, making it slightly less explicit:
          </p>
          <div class="rounded-lg bg-white/[0.04] p-4">
            <p class="font-japanese text-lg text-white/80">
              図書館にたくさん本があります。
            </p>
            <p class="mt-1 text-white/50">
              There are many books in the library{" "}
              <span class="italic text-white/40">
                (focusing on the library)
              </span>
              .
            </p>
          </div>

          <AsideBlock>
            <p class="text-sm italic leading-relaxed text-white/60">
              "
              <span class="font-japanese font-medium not-italic">たくさん</span>{" "}
              may be used before a noun without also using{" "}
              <span class="font-japanese font-medium not-italic">の</span>.
              However, in this case, it will feel more like{" "}
              <span class="font-japanese font-medium not-italic">たくさん</span>{" "}
              is describing the whole phrase, rather than just the noun it is in
              front of. If you strongly want to highlight the noun, using{" "}
              <span class="font-japanese font-medium not-italic">の</span> would
              be best" –{" "}
              <a
                href="https://bunpro.jp/grammar_points/%E3%81%9F%E3%81%8F%E3%81%95%E3%82%93"
                target="_blank"
                class="text-dynamic-accent not-italic underline decoration-dynamic-accent/30 underline-offset-2 hover:decoration-dynamic-accent/60"
              >
                Bunpro
              </a>
            </p>
          </AsideBlock>
        </div>

        {/* Bonus Advanced */}
        <RevealBlock closedLabel="Bonus [Advanced]: When の matters more">
          <div class="space-y-6">
            <StudentBubble>
              Are there any other instances where you want to keep the の?
            </StudentBubble>

            <p class="leading-relaxed text-white/70">
              Whenever you're already using の in the same sentence for the same
              noun, mixing and matching decisions of when to use の would quickly
              get confusing. It would also not sound correct. Take a look at the
              following rediculously long example:
            </p>

            <div class="space-y-2">
              <div class="rounded-lg bg-red-500/5 p-4 ring-1 ring-red-500/20">
                <p class="mb-1 text-xs font-semibold uppercase tracking-wider text-red-400/60">
                  Incorrect
                </p>
                <p class="font-japanese text-base text-white/50">
                  おばあちゃん
                  <span class="font-medium text-orange-400">の</span>家
                  <span class="font-medium text-orange-400">の</span>
                  <Furigana furigana={<span class="text-[10px]">きんじょ</span>}>
                    近所
                  </Furigana>
                  <span class="font-medium text-orange-400">の</span>図書館
                  <span class="font-medium text-orange-400">の</span>
                  たくさん本を読みました。
                </p>
              </div>
              <div class="rounded-lg bg-white/[0.04] p-4">
                <p class="mb-1 text-xs font-semibold uppercase tracking-wider text-white/30">
                  Correct
                </p>
                <p class="font-japanese text-base text-white/80">
                  おばあちゃん
                  <span class="font-medium text-orange-400">の</span>家
                  <span class="font-medium text-orange-400">の</span>
                  <Furigana furigana={<span class="text-[10px]">きんじょ</span>}>
                    近所
                  </Furigana>
                  <span class="font-medium text-orange-400">の</span>図書館
                  <span class="font-medium text-orange-400">の</span>たくさん
                  <span class="font-medium text-orange-400">の</span>
                  本を読みました。
                </p>
                <p class="mt-1 text-sm text-white/40">
                  I read many books from the library near grandma's house.
                </p>
                <p class="mt-1 text-sm text-white/40">
                  近所 → near area/neighborhood
                </p>
              </div>
            </div>

            <p class="text-sm text-white/40">
              Source: Adapted from{" "}
              <a
                href="https://japanese.stackexchange.com/questions/27483/"
                target="_blank"
                class="text-dynamic-accent underline decoration-dynamic-accent/30 underline-offset-2 hover:decoration-dynamic-accent/60"
              >
                Japanese Stack Exchange
              </a>
            </p>

            <p class="leading-relaxed text-white/70">
              Even though it's correct,{" "}
              <span class="italic">
                "this sentence contains five{" "}
                <span class="not-italic">のs</span> and it sounds too many. In
                some situations, using many <span class="not-italic">のs</span>{" "}
                sounds childish or having a poorer writing/speaking skill...
                Using adverb-type <span class="not-italic">たくさん</span>{" "}
                [Pattern 1] helps polish the sentence"
              </span>{" "}
              (HiruneDiver 2020):
            </p>

            <div class="rounded-lg bg-white/[0.04] p-4">
              <p class="font-japanese text-base text-white/80">
                おばあちゃん
                <span class="font-medium text-orange-400">の</span>家
                <span class="font-medium text-orange-400">の</span>近所
                <span class="font-medium text-orange-400">の</span>図書館
                <span class="font-medium text-orange-400">の</span>
                本をたくさん読みました。
              </p>
              <p class="mt-2 text-sm text-white/50">
                By using Pattern 1 (with a verb), we were able to drop a{" "}
                <span class="font-medium text-orange-400">の</span> without
                further confusion.
              </p>
            </div>

            <div class="rounded-lg bg-white/[0.04] p-4">
              <p class="mb-1 text-xs font-semibold uppercase tracking-wider text-white/30">
                Advanced
              </p>
              <p class="text-sm italic leading-relaxed text-white/60">
                "And dividing a sequence of <span class="not-italic">の</span>{" "}
                is commonly preferred. The sentence above can be modified like
                this:"
              </p>
              <p class="mt-2 font-japanese text-base text-white/80">
                おばあちゃん
                <span class="font-medium text-orange-400">の</span>家
                <span class="font-medium text-orange-400">の</span>
                近所にある図書館
                <span class="font-medium text-orange-400">の</span>
                本をたくさん読みました。
              </p>
              <p class="mt-2 text-sm text-white/40">
                The above uses advanced grammar (like qualifying nouns → ある図書
                館), which you'll learn in later chapters.
              </p>
            </div>
          </div>
        </RevealBlock>

        {/* TLDR */}
        <p class="leading-relaxed text-white/70">
          <span class="font-semibold text-white/90">TLDR</span> - As a rule,
          you can just use{" "}
          <span class="font-japanese font-medium text-white/90">たくさん</span>{" "}
          without a{" "}
          <span class="font-medium text-orange-400">の</span> (with verbs and
          nouns) unless you're stringing together multiple{" "}
          <span class="font-medium text-orange-400">の</span>s to modify a
          noun. In that case, consider connecting たくさん to a verb to avoid
          having to add an extra{" "}
          <span class="font-medium text-orange-400">の</span> if the sentence
          is getting too long/confusing.
        </p>

        {/* Practice */}
        <div class="space-y-5">
          <h3 class="text-center text-2xl font-bold">Practice</h3>
          <p class="text-center text-sm italic text-white/40">
            *Some questions have more than 1 correct answer*
          </p>

          <div class="space-y-6">
            <div class="space-y-3">
              <p class="leading-relaxed text-white/70">
                How would you say "There are many students in the classroom"?
              </p>
              <SelectText
                answer="教室にたくさんの学生がいます。"
                a="教室でたくさんの学生がいます。"
                b="教室にたくさん学生がいます。"
                c="教室にたくさんの学生がいます。"
                class="text-xl"
              />
            </div>

            <div class="space-y-3">
              <p class="leading-relaxed text-white/70">
                You want to say "I drank a lot of water". Which is correct?
              </p>
              <SelectText
                answer={[
                  "水をたくさん飲みました。",
                  "たくさん水を飲みました。",
                ]}
                a="水をたくさん飲みました。"
                b="たくさん水を飲みました。"
                c="水のたくさんを飲みました。"
                d="水でたくさん飲みました。"
                class="text-xl"
              />
            </div>

            <div class="space-y-3">
              <p class="leading-relaxed text-white/70">
                How would you say "I want to read many books"?
              </p>
              <SelectText
                answer={[
                  "たくさんの本を読みたいです。",
                  "本をたくさん読みたいです。",
                ]}
                a="たくさんの本を読みたいです。"
                b="本をたくさんの読みたいです。"
                c="本をたくさん読みたいです。"
                d="本のたくさんを読みたいです。"
                class="text-xl"
              />
            </div>

            <div class="space-y-3">
              <p class="leading-relaxed text-white/70">
                Which sentence correctly says "I have many friends"?
              </p>
              <SelectText
                answer="たくさんの友だちがいます。"
                a="友だちがたくさんでいます。"
                b="たくさんの友だちがいます。"
                c="友だちをたくさんがいます。"
                class="text-xl"
              />
            </div>
          </div>
        </div>

        {/* Summary */}
        <LessonSummary>
          <SummaryItem>
            たくさん + verb = did "a lot" (日本語をたくさん勉強しました)
          </SummaryItem>
          <SummaryItem>
            たくさんの + noun = "many" of something (たくさんの本)
          </SummaryItem>
          <SummaryItem>
            Dropping の is okay unless you need to emphasize the noun
          </SummaryItem>
          <SummaryItem>
            With chains of の, use Pattern 1 (verb) to avoid overloading
          </SummaryItem>
        </LessonSummary>
      </div>
    </div>
  )
}
