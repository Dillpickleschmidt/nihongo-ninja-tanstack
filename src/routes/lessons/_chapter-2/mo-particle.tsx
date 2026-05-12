import { createFileRoute } from "@tanstack/solid-router"
import Furigana from "@/components/text/Furigana"
import SelectText from "@/components/text/MultipleChoiceText"
import { TextField, TextFieldInput } from "@/components/ui/text-field"
import WanakanaWrapper from "@/features/wanakana/WanaKana"
import YouTubeVideo from "@/features/youtube/YouTube"
import LessonHeader, {
  OverviewItem,
} from "@/features/lessons/components/LessonHeader"
import SectionLabel from "@/features/lessons/components/SectionLabel"
import GlowBox from "@/features/lessons/components/GlowBox"
import AsideBlock from "@/features/lessons/components/AsideBlock"
import LessonSummary, {
  SummaryItem,
} from "@/features/lessons/components/LessonSummary"

export const Route = createFileRoute("/lessons/_chapter-2/mo-particle")({
  component: MoParticle,
})

function MoParticle() {
  return (
    <div class="relative pb-32">
      {/* Background character */}
      <span class="pointer-events-none absolute top-8 left-24 select-none font-japanese text-[10rem] leading-none text-foreground/[0.04] dark:text-white/[0.03] sm:top-11 sm:left-auto sm:right-8 sm:text-[11rem]">
        も
      </span>

      <LessonHeader
        chapter="Chapter 2 · Grammar"
        title={
          <>
            How to say <span class="italic">also</span> with{" "}
            <span class="font-japanese not-italic text-purple-400">も</span>
          </>
        }
        subtitle="The inclusive particle も — also, too, as well."
      >
        <OverviewItem>
          Using{" "}
          <span class="font-japanese font-semibold text-purple-400">も</span>{" "}
          to add similar information
        </OverviewItem>
        <OverviewItem>Where to place も in a sentence</OverviewItem>
        <OverviewItem>When not to use も</OverviewItem>
      </LessonHeader>

      <div class="space-y-14 px-8">
        {/* Intro */}
        <div class="space-y-4 leading-relaxed text-foreground/75 dark:text-white/70">
          <p>
            The{" "}
            <span class="font-japanese text-xl font-semibold text-purple-400">
              も
            </span>{" "}
            (mo) particle in Japanese is used to indicate that something is
            similar or in addition to something else. It translates to{" "}
            <span class="font-bold italic text-foreground dark:text-white/90">also</span>,{" "}
            <span class="font-bold italic text-foreground dark:text-white/90">too</span>, or{" "}
            <span class="font-bold italic text-foreground dark:text-white/90">as well</span> in
            English. Understanding where to place{" "}
            <span class="font-japanese text-xl font-semibold text-purple-400">
              も
            </span>{" "}
            in a sentence is crucial for conveying the correct meaning.
          </p>

          {/* Formula Box */}
          <div class="relative mx-auto w-fit">
            <div
              class="absolute -inset-px rounded-xl"
              style={{
                background: `linear-gradient(135deg, var(--dynamic-accent), transparent 50%)`,
                opacity: 0.2,
              }}
            />
            <div class="relative rounded-xl border-2 border-orange-400 bg-card/60 dark:bg-white/[0.04] p-6 backdrop-blur-sm">
              <div class="space-y-2 text-center">
                <p class="text-2xl">
                  A{" "}
                  <span class="font-japanese font-bold text-sky-400">は</span> X
                  <span class="font-japanese">です。</span>
                  <span class="ml-4 text-xl text-muted-foreground dark:text-white/50">→ A is X.</span>
                </p>
                <p class="text-2xl">
                  B{" "}
                  <span class="font-japanese font-bold text-purple-400">
                    も
                  </span>{" "}
                  X<span class="font-japanese">です。</span>
                  <span class="ml-4 text-xl text-muted-foreground dark:text-white/50">
                    → B is <span class="text-purple-400">also</span> X.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Video */}
        <div>
          <YouTubeVideo
            videoId="M27oQwq4jqg"
            title="「も」- The Inclusive Particle MO - JLPT N5 Grammar ┃ Genki Lesson 2"
            credit="Game Gengo ゲーム言語"
          />
        </div>

        {/* Basic Usage */}
        <div class="space-y-4">
          <SectionLabel>Basic usage</SectionLabel>

          <div class="space-y-3">
            <div class="rounded-lg bg-card/60 dark:bg-white/[0.04] p-4">
              <p class="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground/70 dark:text-white/30">
                Adding similar information
              </p>
              <div class="space-y-2 text-sm leading-relaxed text-muted-foreground dark:text-white/60">
                <p>
                  A:{" "}
                  <span class="font-japanese text-base text-foreground/80 dark:text-white/80">
                    <Furigana furigana={<span class="text-xs">わたし</span>}>
                      私
                    </Furigana>
                    <span class="font-semibold text-sky-400">は</span>
                    <Furigana furigana={<span class="text-xs">がくせい</span>}>
                      学生
                    </Furigana>
                    です。
                  </span>{" "}
                  → I am a student.
                </p>
                <p>
                  B:{" "}
                  <span class="font-japanese text-base text-foreground/80 dark:text-white/80">
                    <Furigana furigana={<span class="text-xs">わたし</span>}>
                      私
                    </Furigana>
                    <span class="font-semibold text-purple-400">も</span>
                    <Furigana furigana={<span class="text-xs">がくせい</span>}>
                      学生
                    </Furigana>
                    です。
                  </span>{" "}
                  → I am <span class="text-purple-400">also</span> a student.
                </p>
              </div>
            </div>

            <div class="rounded-lg bg-card/60 dark:bg-white/[0.04] p-4">
              <p class="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground/70 dark:text-white/30">
                Listing multiple similar items
              </p>
              <div class="text-sm leading-relaxed text-muted-foreground dark:text-white/60">
                <p>
                  <span class="font-japanese text-base text-foreground/80 dark:text-white/80">
                    <Furigana furigana={<span class="text-xs">ねこ</span>}>
                      猫
                    </Furigana>
                    <span class="font-semibold text-purple-400">も</span>
                    <Furigana furigana={<span class="text-xs">いぬ</span>}>
                      犬
                    </Furigana>
                    <span class="font-semibold text-purple-400">も</span>
                    <Furigana furigana={<span class="text-xs">す</span>}>
                      好
                    </Furigana>
                    きです。
                  </span>{" "}
                  → <span class="text-muted-foreground dark:text-white/40">(I)</span> like <em>both</em>{" "}
                  cats <em>and</em> dogs.
                </p>
              </div>
            </div>
          </div>

          <p class="text-center text-sm italic text-muted-foreground dark:text-white/50">
            **The particle <span class="font-japanese not-italic">も</span> must
            be placed directly after the noun it is modifying.**
          </p>
        </div>

        {/* Example Sentences */}
        <div class="space-y-4">
          <SectionLabel>Example sentences</SectionLabel>
          <div class="space-y-3">
            <div class="rounded-lg bg-card/60 dark:bg-white/[0.04] p-4">
              <div class="space-y-1 text-sm leading-relaxed text-muted-foreground dark:text-white/60">
                <p>
                  <span class="font-japanese text-base text-foreground/80 dark:text-white/80">
                    <Furigana furigana={<span class="text-xs">たなか</span>}>
                      田中
                    </Furigana>
                    は
                    <Furigana
                      furigana={<span class="text-xs">にほんじん</span>}
                    >
                      日本人
                    </Furigana>
                    です。
                  </span>{" "}
                  → Tanaka is Japanese.
                </p>
                <p>
                  <span class="font-japanese text-base text-foreground/80 dark:text-white/80">
                    <Furigana furigana={<span class="text-xs">いしだ</span>}>
                      石田
                    </Furigana>
                    <span class="text-purple-400">も</span>
                    <Furigana
                      furigana={<span class="text-xs">にほんじん</span>}
                    >
                      日本人
                    </Furigana>
                    です。
                  </span>{" "}
                  → Ishida is <span class="text-purple-400">also</span>{" "}
                  Japanese.
                </p>
              </div>
            </div>

            <div class="rounded-lg bg-card/60 dark:bg-white/[0.04] p-4">
              <div class="space-y-1 text-sm leading-relaxed text-muted-foreground dark:text-white/60">
                <p>
                  <span class="font-japanese text-base text-foreground/80 dark:text-white/80">
                    これは
                    <Furigana furigana={<span class="text-xs">わたし</span>}>
                      私
                    </Furigana>
                    の
                    <Furigana furigana={<span class="text-xs">かばん</span>}>
                      鞄
                    </Furigana>
                    です。
                  </span>{" "}
                  → This is my bag.
                </p>
                <p>
                  <span class="font-japanese text-base text-foreground/80 dark:text-white/80">
                    これ
                    <span class="text-purple-400">も</span>
                    <Furigana furigana={<span class="text-xs">わたし</span>}>
                      私
                    </Furigana>
                    の
                    <Furigana furigana={<span class="text-xs">かばん</span>}>
                      鞄
                    </Furigana>
                    です。
                  </span>{" "}
                  → This is <span class="text-purple-400">also</span> my bag.
                </p>
              </div>
            </div>

            <div class="rounded-lg bg-card/60 dark:bg-white/[0.04] p-4">
              <div class="space-y-1 text-sm leading-relaxed text-muted-foreground dark:text-white/60">
                <p>
                  <span class="font-japanese text-base text-foreground/80 dark:text-white/80">
                    この
                    <Furigana furigana={<span class="text-xs">かばん</span>}>
                      鞄
                    </Furigana>
                    は
                    <Furigana furigana={<span class="text-xs">たなか</span>}>
                      田中
                    </Furigana>
                    さんの
                    <Furigana furigana={<span class="text-xs">かばん</span>}>
                      鞄
                    </Furigana>
                    です。
                  </span>{" "}
                  → This bag is Tanaka's bag.
                </p>
                <p>
                  <span class="font-japanese text-base text-foreground/80 dark:text-white/80">
                    あの
                    <Furigana furigana={<span class="text-xs">かばん</span>}>
                      鞄
                    </Furigana>
                    <span class="text-purple-400">も</span>
                    <Furigana furigana={<span class="text-xs">たなか</span>}>
                      田中
                    </Furigana>
                    さんの
                    <Furigana furigana={<span class="text-xs">かばん</span>}>
                      鞄
                    </Furigana>
                    です。
                  </span>{" "}
                  → That bag (over there) is{" "}
                  <span class="text-purple-400">also</span> Tanaka's bag.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Positioning */}
        <div class="space-y-4">
          <SectionLabel>
            Positioning{" "}
            <span class="font-japanese text-purple-400">も</span> in sentences
          </SectionLabel>
          <p class="leading-relaxed text-foreground/75 dark:text-white/70">
            The position of{" "}
            <span class="font-japanese text-xl font-semibold text-purple-400">
              も
            </span>{" "}
            in a sentence can change its meaning. Compare:
          </p>

          <div class="space-y-3">
            <div class="rounded-lg bg-card/60 dark:bg-white/[0.04] p-4">
              <p class="font-japanese text-lg text-foreground dark:text-white/90">
                <Furigana furigana={<span class="text-xs">わたし</span>}>
                  私
                </Furigana>
                <span class="font-semibold text-purple-400">も</span>
                <Furigana furigana={<span class="text-xs">せんこう</span>}>
                  専攻
                </Furigana>
                <span class="font-semibold text-sky-400">は</span>
                <Furigana furigana={<span class="text-xs">にほんご</span>}>
                  日本語
                </Furigana>
                です。
              </p>
              <p class="mt-1 text-sm text-muted-foreground dark:text-white/50">
                → I'm <span class="text-purple-400">also</span> a Japanese
                major.
              </p>
            </div>
            <div class="rounded-lg bg-card/60 dark:bg-white/[0.04] p-4">
              <p class="font-japanese text-lg text-foreground dark:text-white/90">
                <Furigana furigana={<span class="text-xs">わたし</span>}>
                  私
                </Furigana>
                <span class="font-semibold text-sky-400">は</span>
                <Furigana furigana={<span class="text-xs">にほんご</span>}>
                  日本語
                </Furigana>
                <span class="font-semibold text-purple-400">も</span>
                <Furigana furigana={<span class="text-xs">せんこう</span>}>
                  専攻
                </Furigana>
                です。
              </p>
              <p class="mt-1 text-sm text-muted-foreground dark:text-white/50">
                → As for me, I{" "}
                <span class="text-purple-400">also</span> have a Japanese
                major.
              </p>
            </div>
          </div>

          <p class="text-sm italic text-muted-foreground dark:text-white/40">
            *Place <span class="font-japanese not-italic">も</span> after the
            noun there are more than one of.
          </p>
        </div>

        {/* When not to use も */}
        <div class="space-y-4">
          <SectionLabel>
            When not to use{" "}
            <span class="font-japanese text-purple-400">も</span>
          </SectionLabel>
          <p class="leading-relaxed text-foreground/75 dark:text-white/70">
            For questions using words like{" "}
            <Furigana furigana={<span class="text-sm">だれ</span>}>誰</Furigana>
            ,{" "}
            <Furigana furigana={<span class="text-sm">なに</span>}>何</Furigana>
            , <span class="font-japanese">どこ</span>, etc., using{" "}
            <span class="font-japanese font-semibold text-green-500">が</span>{" "}
            is more appropriate.{" "}
            <span class="font-japanese font-semibold text-purple-400">も</span>{" "}
            would imply something else entirely (covered later).
          </p>

          <div class="space-y-3">
            <div class="rounded-lg bg-red-500/5 p-4 ring-1 ring-red-500/20">
              <p class="mb-1 text-xs font-semibold uppercase tracking-wider text-red-400/60">
                Incorrect
              </p>
              <p class="font-japanese text-xl text-muted-foreground dark:text-white/50 line-through">
                <Furigana furigana={<span class="text-base">だれ</span>}>
                  誰
                </Furigana>
                <span class="font-bold text-purple-400">も</span>
                <Furigana furigana={<span class="text-base">き</span>}>
                  来
                </Furigana>
                ますか。
              </p>
            </div>
            <div class="rounded-lg bg-card/60 dark:bg-white/[0.04] p-4">
              <p class="mb-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground/70 dark:text-white/30">
                Correct
              </p>
              <p class="font-japanese text-xl text-foreground dark:text-white/90">
                <Furigana furigana={<span class="text-base">だれ</span>}>
                  誰
                </Furigana>
                <span class="font-bold text-green-500">が</span>
                <Furigana furigana={<span class="text-base">き</span>}>
                  来
                </Furigana>
                ますか。
              </p>
              <p class="mt-1 text-sm text-muted-foreground dark:text-white/40">→ Who is coming?</p>
            </div>
          </div>

          <AsideBlock>
            <p class="text-sm leading-relaxed text-muted-foreground dark:text-white/60">
              If you want to specifically say "who else", you'd use ほかに.
            </p>
            <p class="mt-2 text-sm text-muted-foreground dark:text-white/60">
              <span class="font-japanese text-base text-foreground/80 dark:text-white/80">
                ほかに誰が来ますか。
              </span>{" "}
              → Who else is coming?
            </p>
          </AsideBlock>
        </div>

        {/* Practice */}
        <div class="space-y-5">
          <h3 class="text-center text-2xl font-bold">Practice</h3>

          <div class="space-y-6">
            <div class="space-y-3">
              <p class="leading-relaxed text-foreground/75 dark:text-white/70">
                Someone asks if Tanaka likes dogs. You want to say "yes, and he
                also likes cats."
              </p>
              <p class="text-sm text-muted-foreground dark:text-white/40">
                *<span class="font-japanese">猫</span> (ねこ) → cat
              </p>
              <SelectText
                answer="はい、田中さんは猫も好きです。"
                a="はい、田中さんも猫が好きです。"
                b="はい、田中さんも猫は好きです。"
                c="はい、田中さんは猫も好きです。"
                d="はい、田中さんは猫が好きです。"
                class="text-xl"
              />
            </div>

            <div class="space-y-3">
              <p class="leading-relaxed text-foreground/75 dark:text-white/70">
                Someone asks who is coming to the party.
              </p>
              <SelectText
                answer="誰が来ますか。"
                a="誰が来ますか。"
                b="誰も来ますか。"
                class="text-xl"
              />
            </div>

            <div class="space-y-3">
              <p class="leading-relaxed text-foreground/75 dark:text-white/70">
                Which sentence correctly states that both your brother and
                sister like shoes?
              </p>
              <SelectText
                answer="お兄さんも妹も靴が好きです。"
                a="お兄さんも妹も靴が好きです。"
                b="お兄さんも妹は靴が好きです。"
                c="お兄さんも妹も靴は好きです。"
                d="お兄さんも妹は靴は好きです。"
                class="text-xl"
              />
            </div>
          </div>
        </div>

        {/* Fill in Blanks */}
        <div class="space-y-4">
          <SectionLabel>Fill in the blanks</SectionLabel>
          <p class="leading-relaxed text-foreground/75 dark:text-white/70">
            Where can <span class="font-japanese">も</span> appear in a
            sentence? Fill in the blanks. If{" "}
            <span class="font-japanese">も</span> cannot be used, then write an
            X.
          </p>
          <div class="font-japanese space-y-6 text-xl text-foreground dark:text-white/90">
            <div>
              <div class="flex flex-wrap items-center gap-2">
                あれ
                <TextField class="inline-block w-12">
                  <WanakanaWrapper enabled={true} watch={null}>
                    <TextFieldInput class="text-center text-xl" />
                  </WanakanaWrapper>
                </TextField>
                <Furigana furigana={<span class="text-sm">たか</span>}>
                  高
                </Furigana>
                い
                <TextField class="inline-block w-12">
                  <WanakanaWrapper enabled={true} watch={null}>
                    <TextFieldInput class="text-center text-xl" />
                  </WanakanaWrapper>
                </TextField>
                です。
              </div>
              <p class="mt-1 text-sm text-muted-foreground dark:text-white/40">
                *<span class="font-japanese">高い</span> → expensive
              </p>
            </div>

            <div class="flex flex-wrap items-center gap-2">
              私は
              <Furigana furigana={<span class="text-sm">かんこくじん</span>}>
                韓国人
              </Furigana>
              <TextField class="inline-block w-12">
                <TextFieldInput class="text-center text-xl" />
              </TextField>
              です。
            </div>

            <div class="flex flex-wrap items-center gap-2">
              <Furigana furigana={<span class="text-sm">せんせい</span>}>
                先生
              </Furigana>
              <TextField class="inline-block w-12">
                <TextFieldInput class="text-center text-xl" />
              </TextField>
              わかりません。
            </div>

            <div>
              <div class="flex flex-wrap items-center gap-2">
                あそこ
                <TextField class="inline-block w-12">
                  <WanakanaWrapper enabled={true} watch={null}>
                    <TextFieldInput class="text-center text-xl" />
                  </WanakanaWrapper>
                </TextField>
                コンビニです。
              </div>
              <p class="mt-1 text-sm text-muted-foreground dark:text-white/40">
                *<span class="font-japanese">コンビニ</span> → convenience
                store
              </p>
            </div>

            <div class="flex flex-wrap items-center gap-2">
              <Furigana furigana={<span class="text-sm">じてんしゃ</span>}>
                自転車
              </Furigana>
              <TextField class="inline-block w-12">
                <TextFieldInput class="text-center text-xl" />
              </TextField>
              ください。
            </div>

            <div class="flex flex-wrap items-center gap-2">
              私の
              <Furigana furigana={<span class="text-sm">しゅっしん</span>}>
                出身
              </Furigana>
              <TextField class="inline-block w-12">
                <TextFieldInput class="text-center text-xl" />
              </TextField>
              <Furigana furigana={<span class="text-sm">ちゅうごく</span>}>
                中国
              </Furigana>
              です。
            </div>
          </div>
        </div>

        {/* Summary */}
        <LessonSummary>
          <SummaryItem>
            <span class="font-japanese text-purple-400">も</span> = "also /
            too / as well"
          </SummaryItem>
          <SummaryItem>
            Place it directly after the noun it modifies
          </SummaryItem>
          <SummaryItem>
            Used for adding, comparing, or listing things
          </SummaryItem>
          <SummaryItem>
            Avoid in direct questions with 誰, 何, どこ — use が instead
          </SummaryItem>
        </LessonSummary>
      </div>
    </div>
  )
}
