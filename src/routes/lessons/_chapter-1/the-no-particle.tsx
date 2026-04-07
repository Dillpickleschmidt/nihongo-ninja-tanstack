import { createFileRoute } from "@tanstack/solid-router"
import Furigana from "@/components/text/Furigana"
import Romaji from "@/components/text/Romaji"
import { TextField, TextFieldInput } from "@/components/ui/text-field"
import YouTubeVideo from "@/features/youtube/YouTube"
import LessonHeader, {
  OverviewItem,
} from "@/features/lessons/components/LessonHeader"
import SectionLabel from "@/features/lessons/components/SectionLabel"
import GlowBox from "@/features/lessons/components/GlowBox"
import LessonSummary, {
  SummaryItem,
} from "@/features/lessons/components/LessonSummary"

export const Route = createFileRoute(
  "/lessons/_chapter-1/the-no-particle",
)({
  component: TheNoParticle,
})

function TheNoParticle() {
  return (
    <div class="relative pb-32">
      {/* Background character */}
      <span class="pointer-events-none absolute top-8 left-24 select-none font-japanese text-[10rem] leading-none text-white/[0.03] sm:top-11 sm:left-auto sm:right-8 sm:text-[11rem]">
        の
      </span>

      <LessonHeader
        chapter="Chapter 1 · Grammar"
        title={
          <>
            The <span class="text-dynamic-accent">の</span> Particle
          </>
        }
        subtitle="Connect nouns to show possession and relationships."
      >
        <OverviewItem>
          How{" "}
          <span class="font-japanese font-semibold text-white/60">の</span>{" "}
          links nouns together
        </OverviewItem>
        <OverviewItem>Possession with [Noun 1] の [Noun 2]</OverviewItem>
        <OverviewItem>Chaining multiple nouns</OverviewItem>
      </LessonHeader>

      <div class="space-y-14 px-8">
        {/* Introduction */}
        <div class="leading-relaxed text-white/70">
          <p>
            Today, we're gonna make our first step towards making longer and
            more complex sentences. Say hello to{" "}
            <span class="font-japanese text-xl font-bold text-white/90">の</span>
            <span class="text-white/40"> (no)</span> — the particle which
            connects nouns.
          </p>
        </div>

        {/* Video */}
        <div>
          <YouTubeVideo
            videoId="MFPOPg34INI"
            title="The Japanese の Particle in 2 minutes!"
            credit="ToKini Andy"
          />
        </div>

        {/* Basics */}
        <div class="space-y-4">
          <SectionLabel>
            The basics: possession with{" "}
            <span class="font-japanese text-white/50">の</span>
          </SectionLabel>
          <p class="leading-relaxed text-white/70">
            The <span class="font-japanese font-semibold text-white/90">の</span>{" "}
            particle is used to connect two nouns, indicating possession or a
            close relationship. It's similar to the apostrophe-s ('s) in
            English.
          </p>

          <div class="rounded-lg bg-white/[0.04] p-4">
            <p class="text-xs font-semibold uppercase tracking-wider text-white/30">
              Example
            </p>
            <p class="mt-2 font-japanese text-xl text-white/90">
              たけしさん
              <span class="text-dynamic-accent">の</span>
              <Furigana furigana={<span class="text-sm">でんわばんごう</span>}>
                電話番号
              </Furigana>
            </p>
            <p class="mt-1 text-sm text-white/40">
              (Takeshi-san no denwa bangou)
            </p>
            <p class="mt-1 text-sm font-semibold text-white/70">
              Takeshi's phone number
            </p>
          </div>

          <p class="leading-relaxed text-white/70">Here's the structure:</p>

          <GlowBox>
            <p class="text-center text-[1.75rem] font-medium text-white/90">
              [Noun 1] +{" "}
              <span class="font-japanese text-dynamic-accent">の</span> + [Noun
              2]
            </p>
            <p class="mt-2 text-center text-sm text-white/40">
              *Noun 1 is the owner, and Noun 2 is the possessed
            </p>
          </GlowBox>

          <div class="space-y-2">
            <p class="text-sm font-medium text-white/40">More examples</p>
            <div class="space-y-2">
              <ExampleRow
                jp={
                  <>
                    わたしの
                    <Furigana furigana={<span class="text-sm">ほん</span>}>
                      本
                    </Furigana>
                  </>
                }
                en="My book"
              />
              <ExampleRow
                jp={
                  <>
                    せんせいの
                    <Furigana furigana={<span class="text-sm">くるま</span>}>
                      車
                    </Furigana>
                  </>
                }
                en="Teacher's car"
              />
              <ExampleRow
                jp={
                  <>
                    ともだちの
                    <Furigana furigana={<span class="text-sm">とけい</span>}>
                      時計
                    </Furigana>
                  </>
                }
                en="Friend's watch"
              />
            </div>
          </div>
        </div>

        {/* Practical Examples */}
        <div class="space-y-4">
          <SectionLabel>More practical examples</SectionLabel>
          <p class="leading-relaxed text-white/70">
            Since you've recently learned family terms, countries, majors, and
            occupations, let's use these topics for more examples.
          </p>

          <div class="space-y-2">
            <ExampleRow
              jp={
                <>
                  <Furigana furigana={<span class="text-sm">さとう</span>}>
                    佐藤
                  </Furigana>
                  さんのおかあさん
                </>
              }
              en="Satou's mother"
            />
            <ExampleRow
              jp={
                <>
                  おとうさんの
                  <Furigana furigana={<span class="text-sm">くるま</span>}>
                    車
                  </Furigana>
                </>
              }
              en="Father's car"
            />
            <ExampleRow
              jp="おかあさんのせんこう"
              en="Mother's major"
            />
            <ExampleRow
              jp={
                <>
                  おにいさんの
                  <Furigana
                    furigana={<span class="text-sm">こんぴゅーたー</span>}
                  >
                    コンピューター
                  </Furigana>
                </>
              }
              en="Older brother's computer"
            />
            <ExampleRow
              jp={
                <>
                  いもうとの
                  <Furigana furigana={<span class="text-sm">ほん</span>}>
                    本
                  </Furigana>
                </>
              }
              en="Younger sister's book"
            />
            <ExampleRow
              jp={
                <>
                  ともだちの
                  <Furigana furigana={<span class="text-sm">けいたい</span>}>
                    携帯
                  </Furigana>
                </>
              }
              en="Friend's cellphone"
            />
          </div>
        </div>

        {/* Multiple の */}
        <div class="space-y-4">
          <SectionLabel>Chaining multiple nouns</SectionLabel>
          <p class="leading-relaxed text-white/70">
            <span class="font-semibold text-white/90">
              You can connect more than just two nouns in a single sentence:
            </span>
          </p>

          <div class="space-y-2">
            <ExampleRow
              jp={
                <>
                  アメリカ
                  <span class="text-dynamic-accent">の</span>ともだち
                  <span class="text-dynamic-accent">の</span>
                  <Furigana furigana={<span class="text-sm">かめら</span>}>
                    カメラ
                  </Furigana>
                </>
              }
              en="American friend's camera"
            />
            <ExampleRow
              jp={
                <>
                  日本語
                  <span class="text-dynamic-accent">の</span>
                  <Furigana furigana={<span class="text-sm">せんせい</span>}>
                    先生
                  </Furigana>
                  <span class="text-dynamic-accent">の</span>
                  <Furigana furigana={<span class="text-sm">とけい</span>}>
                    時計
                  </Furigana>
                </>
              }
              en="Japanese teacher's watch"
            />
            <ExampleRow
              jp={
                <>
                  フランス
                  <span class="text-dynamic-accent">の</span>
                  <Furigana furigana={<span class="text-sm">がくせい</span>}>
                    学生
                  </Furigana>
                  <span class="text-dynamic-accent">の</span>
                  <Furigana furigana={<span class="text-sm">のーと</span>}>
                    ノート
                  </Furigana>
                </>
              }
              en="French student's notebook"
            />
          </div>

          <p class="leading-relaxed text-white/70">
            Btw, の also has other uses that you'll learn later. If you see it used in a
            way that doesn't look like possession, don't worry about it yet.
          </p>
        </div>

        {/* Activity */}
        <div class="space-y-4">
          <SectionLabel>Activity: who owns what?</SectionLabel>
          <p class="leading-relaxed text-white/70">
            Let's play a quick game to reinforce what we've learned. Connect the
            following pictures using{" "}
            <span class="font-japanese text-lg font-semibold text-white/90">
              の
            </span>
            .
          </p>

          {/* Q1 */}
          <div class="mt-4">
            <h3 class="font-japanese text-center text-2xl font-medium text-white/90">
              <Romaji
                romaji={
                  <span class="font-outfit text-sm text-white/40">Who</span>
                }
              >
                <Furigana furigana={<span class="text-base">だれ</span>}>
                  誰
                </Furigana>
              </Romaji>
              の
              <Furigana furigana={<span class="text-base">ほん</span>}>
                本
              </Furigana>
              ですか。
            </h3>
            <ActivityInput />
          </div>

          {/* Q2 */}
          <div class="mt-4">
            <h3 class="font-japanese text-center text-2xl font-medium text-white/90">
              <Furigana furigana={<span class="text-base">だれ</span>}>
                誰
              </Furigana>
              の
              <Furigana
                furigana={<span class="text-base">こんぴゅーたー</span>}
              >
                コンピューター
              </Furigana>
              ですか。
            </h3>
            <ActivityInput />
          </div>
        </div>

        {/* Summary */}
        <LessonSummary>
          <SummaryItem>
            の connects two nouns: [owner] の [thing owned]
          </SummaryItem>
          <SummaryItem>
            Works like apostrophe-s ('s) in English
          </SummaryItem>
          <SummaryItem>
            You can chain multiple の to link several nouns
          </SummaryItem>
          <SummaryItem>
            More uses for の will come in later chapters
          </SummaryItem>
        </LessonSummary>
      </div>
    </div>
  )
}

/* --- Example Row --- */
import type { JSX } from "solid-js"

function ExampleRow(props: { jp: JSX.Element | string; en: string }) {
  return (
    <div class="flex items-baseline justify-between gap-4 rounded-lg bg-white/[0.04] px-4 py-3">
      <span class="font-japanese text-lg text-white/90">{props.jp}</span>
      <span class="shrink-0 text-sm text-white/40">{props.en}</span>
    </div>
  )
}

/* --- Activity Input Block --- */
function ActivityInput() {
  return (
    <div class="mt-6">
      <div class="flex items-center justify-center">
        <div class="h-48 w-48 rounded-lg bg-white/[0.04]" />
        <div class="mx-12 text-4xl text-white/30">+</div>
        <div class="h-48 w-48 rounded-lg bg-white/[0.04]" />
      </div>
      <div class="mt-4 flex w-full max-w-sm justify-center">
        <TextField class="w-full">
          <TextFieldInput placeholder="" />
        </TextField>
      </div>
    </div>
  )
}
