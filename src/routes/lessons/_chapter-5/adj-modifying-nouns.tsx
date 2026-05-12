import { createFileRoute } from "@tanstack/solid-router"
import SelectText from "@/components/text/MultipleChoiceText"
import LessonHeader, {
  OverviewItem,
} from "@/features/lessons/components/LessonHeader"
import SectionLabel from "@/features/lessons/components/SectionLabel"
import AsideBlock from "@/features/lessons/components/AsideBlock"
import LessonSummary, {
  SummaryItem,
} from "@/features/lessons/components/LessonSummary"

export const Route = createFileRoute(
  "/lessons/_chapter-5/adj-modifying-nouns",
)({
  component: AdjModifyingNouns,
})

function AdjModifyingNouns() {
  return (
    <div class="relative pb-32">
      {/* Background character */}
      <span class="pointer-events-none absolute top-8 left-24 select-none font-japanese text-[10rem] leading-none text-foreground/[0.04] dark:text-white/[0.03] sm:top-11 sm:left-auto sm:right-8 sm:text-[11rem]">
        修
      </span>

      <LessonHeader
        chapter="Chapter 5 · Grammar"
        title={<>Modifying Nouns with Adjectives</>}
        subtitle='From "The bus is new" to "The new bus."'
      >
        <OverviewItem>
          <span class="font-japanese font-semibold text-teal-400">い</span>
          -adjectives go directly before the noun
        </OverviewItem>
        <OverviewItem>
          <span class="font-japanese font-semibold text-yellow-400">な</span>
          -adjectives need な before the noun
        </OverviewItem>
        <OverviewItem>Degree words: とても, すごく, ちょっと, 全然</OverviewItem>
      </LessonHeader>

      <div class="space-y-14 px-8">
        {/* Intro */}
        <div class="leading-relaxed text-foreground/75 dark:text-white/70">
          <p>
            Instead of just saying{" "}
            <span class="font-japanese text-foreground dark:text-white/90">バスは新しいです</span>{" "}
            (The bus is new), we'll now learn how to modify nouns with
            adjectives to say things like "
            <span class="font-semibold text-foreground dark:text-white/90">The new bus</span>."
          </p>
        </div>

        {/* い vs な side by side */}
        <div class="grid gap-4 md:grid-cols-2">
          {/* い-Adjectives */}
          <div class="relative rounded-xl bg-card/60 dark:bg-white/[0.04] p-5 backdrop-blur-sm before:absolute before:-inset-px before:rounded-xl before:bg-gradient-to-br before:from-teal-500/15 before:to-transparent before:content-['']">
            <div class="relative">
              <h2 class="text-center text-xl font-bold">
                <span class="text-teal-400">い</span>-Adjectives
              </h2>
              <p class="mt-2 text-sm text-muted-foreground dark:text-white/60">
                Simply place before the noun (keep the い)
              </p>
              <div class="mt-4 space-y-3">
                <div class="rounded-lg bg-card/60 dark:bg-white/[0.04] p-4">
                  <p class="font-japanese text-lg text-muted-foreground dark:text-white/60">
                    高い + 建物
                  </p>
                  <div class="mt-2 rounded-lg bg-card/60 dark:bg-white/[0.04] px-3 py-2 text-center">
                    <p class="font-japanese text-lg text-foreground dark:text-white/90">高い建物</p>
                    <p class="text-sm text-muted-foreground dark:text-white/40">tall building</p>
                  </div>
                </div>
                <div class="rounded-lg bg-card/60 dark:bg-white/[0.04] p-4">
                  <p class="font-japanese text-lg text-muted-foreground dark:text-white/60">
                    おもしろい + 映画
                  </p>
                  <div class="mt-2 rounded-lg bg-card/60 dark:bg-white/[0.04] px-3 py-2 text-center">
                    <p class="font-japanese text-lg text-foreground dark:text-white/90">
                      おもしろい映画
                    </p>
                    <p class="text-sm text-muted-foreground dark:text-white/40">interesting movie</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* な-Adjectives */}
          <div class="relative rounded-xl bg-card/60 dark:bg-white/[0.04] p-5 backdrop-blur-sm before:absolute before:-inset-px before:rounded-xl before:bg-gradient-to-br before:from-yellow-500/15 before:to-transparent before:content-['']">
            <div class="relative">
              <h2 class="text-center text-xl font-bold">
                <span class="text-yellow-400">な</span>-Adjectives
              </h2>
              <p class="mt-2 text-sm text-muted-foreground dark:text-white/60">
                Add な between the adjective and noun
              </p>
              <div class="mt-4 space-y-3">
                <div class="rounded-lg bg-card/60 dark:bg-white/[0.04] p-4">
                  <p class="font-japanese text-lg text-muted-foreground dark:text-white/60">
                    きれい + 写真
                  </p>
                  <div class="mt-2 space-y-2">
                    <div class="rounded-lg bg-red-500/5 px-3 py-2 text-center ring-1 ring-red-500/20">
                      <p class="font-japanese text-lg text-muted-foreground dark:text-white/50 line-through">
                        きれい写真
                      </p>
                    </div>
                    <div class="rounded-lg bg-card/60 dark:bg-white/[0.04] px-3 py-2 text-center">
                      <p class="font-japanese text-lg text-foreground dark:text-white/90">
                        きれい
                        <span class="underline decoration-yellow-400 underline-offset-4">
                          な
                        </span>
                        写真
                      </p>
                      <p class="text-sm text-muted-foreground dark:text-white/40">pretty picture</p>
                    </div>
                  </div>
                </div>
                <div class="rounded-lg bg-card/60 dark:bg-white/[0.04] p-4">
                  <p class="font-japanese text-lg text-muted-foreground dark:text-white/60">
                    静か + 部屋
                  </p>
                  <div class="mt-2 space-y-2">
                    <div class="rounded-lg bg-red-500/5 px-3 py-2 text-center ring-1 ring-red-500/20">
                      <p class="font-japanese text-lg text-muted-foreground dark:text-white/50 line-through">
                        静か部屋
                      </p>
                    </div>
                    <div class="rounded-lg bg-card/60 dark:bg-white/[0.04] px-3 py-2 text-center">
                      <p class="font-japanese text-lg text-foreground dark:text-white/90">
                        静か
                        <span class="underline decoration-yellow-400 underline-offset-4">
                          な
                        </span>
                        部屋
                      </p>
                      <p class="text-sm text-muted-foreground dark:text-white/40">quiet room</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Negative form drops な */}
        <AsideBlock>
          <p class="text-sm leading-relaxed text-muted-foreground dark:text-white/60">
            When the adjective is in its negative form (ex.{" "}
            <span class="font-japanese text-foreground/80 dark:text-white/80">静かじゃない</span>), the
            な is no longer required.
          </p>
          <div class="mt-3 space-y-2">
            <div class="rounded-lg bg-red-500/5 px-3 py-2 text-center ring-1 ring-red-500/20">
              <p class="font-japanese text-sm text-muted-foreground dark:text-white/50">
                静かじゃない
                <span class="underline decoration-red-500 underline-offset-4">
                  な
                </span>
                図書館
              </p>
            </div>
            <div class="rounded-lg bg-card/60 dark:bg-white/[0.04] px-3 py-2 text-center">
              <p class="font-japanese text-sm text-foreground/80 dark:text-white/80">
                静かじゃない図書館
              </p>
              <p class="text-xs text-muted-foreground dark:text-white/40">the not-quiet library</p>
            </div>
          </div>
        </AsideBlock>

        {/* Degree Words */}
        <div class="space-y-4">
          <SectionLabel>Bonus: making adjectives stronger or weaker</SectionLabel>
          <p class="leading-relaxed text-foreground/75 dark:text-white/70">
            Want to spice up your descriptions? Use these degree words:
          </p>

          <div class="grid gap-3 sm:grid-cols-2">
            <div class="rounded-lg bg-card/60 dark:bg-white/[0.04] p-4">
              <p class="font-japanese text-xl font-bold text-foreground dark:text-white/90">
                とても
              </p>
              <p class="mt-2 font-japanese text-base text-foreground/75 dark:text-white/70">
                ここはとてもきれいな公園です。
              </p>
              <p class="mt-1 text-sm text-muted-foreground dark:text-white/40">
                This is a very beautiful park.
              </p>
            </div>
            <div class="rounded-lg bg-card/60 dark:bg-white/[0.04] p-4">
              <p class="font-japanese text-xl font-bold text-foreground dark:text-white/90">
                すごく
              </p>
              <p class="mt-2 font-japanese text-base text-foreground/75 dark:text-white/70">
                すごくおいしいレストランを見つけました。
              </p>
              <p class="mt-1 text-sm text-muted-foreground dark:text-white/40">
                I found a very delicious restaurant.
              </p>
            </div>
            <div class="rounded-lg bg-card/60 dark:bg-white/[0.04] p-4">
              <p class="font-japanese text-xl font-bold text-foreground dark:text-white/90">
                ちょっと
              </p>
              <p class="mt-2 font-japanese text-base text-foreground/75 dark:text-white/70">
                ちょっと高いケーキを買いました。
              </p>
              <p class="mt-1 text-sm text-muted-foreground dark:text-white/40">
                I bought a somewhat expensive cake.
              </p>
            </div>
            <div class="rounded-lg bg-card/60 dark:bg-white/[0.04] p-4">
              <p class="font-japanese text-xl font-bold text-foreground dark:text-white/90">
                全然
              </p>
              <p class="mt-2 font-japanese text-base text-foreground/75 dark:text-white/70">
                全然静かじゃない図書館でした。
              </p>
              <p class="mt-1 text-sm text-muted-foreground dark:text-white/40">
                It was a library that wasn't quiet at all.
              </p>
            </div>
          </div>
        </div>

        {/* Practice */}
        <div class="space-y-5">
          <h3 class="text-center text-2xl font-bold">Practice</h3>
          <p class="text-center text-sm italic text-muted-foreground dark:text-white/40">
            *Choose the correct form when modifying nouns with adjectives*
          </p>

          <div class="space-y-6">
            <div class="space-y-3">
              <p class="leading-relaxed text-foreground/75 dark:text-white/70">
                You want to say "This is a really expensive computer"
              </p>
              <SelectText
                answer="これはとても高いパソコンです。"
                a="これはとても高なパソコンです。"
                b="これはとても高いパソコンです。"
                c="これはとても高のパソコンです。"
                d="これはとても高くパソコンです。"
                class="text-xl"
              />
            </div>

            <div class="space-y-3">
              <p class="leading-relaxed text-foreground/75 dark:text-white/70">
                How would you say "I go to a quiet café every morning"?
              </p>
              <SelectText
                answer="毎朝静かなカフェに行きます。"
                a="毎朝静かのカフェに行きます。"
                b="毎朝静かカフェに行きます。"
                c="毎朝静かなカフェに行きます。"
                d="毎朝静かいカフェに行きます。"
                class="text-xl"
              />
            </div>

            <div class="space-y-3">
              <p class="leading-relaxed text-foreground/75 dark:text-white/70">
                Your friend's cat is super cute. How would you say that?
              </p>
              <SelectText
                answer="すごくかわいい猫ですね。"
                a="すごくかわいな猫ですね。"
                b="すごくかわいい猫ですね。"
                c="すごいかわいい猫ですね。"
                d="すごくかわいの猫ですね。"
                class="text-xl"
              />
            </div>

            <div class="space-y-3">
              <p class="leading-relaxed text-foreground/75 dark:text-white/70">
                You want to complain "This is a not-so-clean restaurant"
              </p>
              <SelectText
                answer="これはあまりきれいじゃないレストランです。"
                a="これはあまりきれいなレストランじゃないです。"
                b="これはあまりきれいじゃないレストランです。"
                c="これはあまりきれいくないレストランです。"
                d="これはあまりきれいのレストランじゃないです。"
                class="text-xl"
              />
            </div>

            <div class="space-y-3">
              <p class="leading-relaxed text-foreground/75 dark:text-white/70">
                You're impressed by Mt. Fuji: "That's an extremely tall
                mountain!"
              </p>
              <SelectText
                answer="あれはすごく高い山ですね。"
                a="あれはすごい高い山ですね。"
                b="あれはすごく高な山ですね。"
                c="あれはすごく高い山ですね。"
                d="あれはすごく高の山ですね。"
                class="text-xl"
              />
            </div>

            <div class="space-y-3">
              <p class="leading-relaxed text-foreground/75 dark:text-white/70">
                Your friend says their test was hard. You want to say "It wasn't
                a difficult test at all!"
              </p>
              <SelectText
                answer="全然難しくないテストでしたよ。"
                a="全然難しいじゃないテストでしたよ。"
                b="全然難しくないテストでしたよ。"
                c="全然難しなテストじゃないでしたよ。"
                d="全然難しいないテストでしたよ。"
                class="text-xl"
              />
            </div>

            <div class="space-y-3">
              <p class="leading-relaxed text-foreground/75 dark:text-white/70">
                You're complaining about your dorm: "This is a rather small
                room..."
              </p>
              <SelectText
                answer="ちょっと小さい部屋ですね。"
                a="ちょっと小さな部屋ですね。"
                b="ちょっと小さい部屋ですね。"
                c="ちょっとの小さい部屋ですね。"
                d="ちょっと小さく部屋ですね。"
                class="text-xl"
              />
            </div>
          </div>
        </div>

        {/* Summary */}
        <LessonSummary>
          <SummaryItem>
            い-adj: place directly before noun (高い建物)
          </SummaryItem>
          <SummaryItem>
            な-adj: add な before noun (静かな部屋)
          </SummaryItem>
          <SummaryItem>
            Negative forms don't need な (静かじゃない図書館)
          </SummaryItem>
          <SummaryItem>
            とても / すごく for "very", ちょっと for "a bit", 全然 for "not at
            all"
          </SummaryItem>
        </LessonSummary>
      </div>
    </div>
  )
}
