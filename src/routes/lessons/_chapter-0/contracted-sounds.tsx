import { createFileRoute } from "@tanstack/solid-router"
import LessonHeader, {
  OverviewItem,
} from "@/features/lessons/components/LessonHeader"
import SectionLabel from "@/features/lessons/components/SectionLabel"
import AsideBlock from "@/features/lessons/components/AsideBlock"
import LessonSummary, {
  SummaryItem,
} from "@/features/lessons/components/LessonSummary"

export const Route = createFileRoute(
  "/lessons/_chapter-0/contracted-sounds",
)({

  component: ContractedSounds,
})

function ContractedSounds() {
  return (
    <div class="relative pb-32">
      <LessonHeader
        chapter="Chapter 0 · Foundations"
        title={<>Contracted Sounds</>}
        subtitle="When two kana blend into one sound."
      >
        <OverviewItem>
          How small kana blend sounds
        </OverviewItem>
        <OverviewItem>Moras and tempo</OverviewItem>
      </LessonHeader>

      <div class="space-y-14 px-8">
        {/* How they work — with vertical text */}
        <div class="flex gap-6">
          <div class="hidden select-none items-center sm:flex">
            <div class="flex flex-col items-center text-center text-lg font-bold italic leading-snug text-muted-foreground/40 dark:text-white/15">
              {"Contracted".split("").map((c) => (
                <span>{c}</span>
              ))}
              <span class="my-2" />
              {"Sounds".split("").map((c) => (
                <span>{c}</span>
              ))}
            </div>
          </div>
          <div class="space-y-6">
            <SectionLabel>How they work</SectionLabel>
            <div class="space-y-4 leading-relaxed text-foreground/75 dark:text-white/70">
              <p>
                Some hiragana pair with smaller kana to produce a new single,
                shorter sound.
              </p>
              <p>
                Take{" "}
                <span class="font-japanese font-semibold text-dynamic-accent">
                  きょ
                </span>{" "}
                (kyo) for example.{" "}
                <span class="font-japanese font-semibold text-foreground dark:text-white/90">
                  き
                </span>{" "}
                (ki) pairs with a small{" "}
                <span class="font-japanese font-semibold text-foreground dark:text-white/90">
                  ょ
                </span>{" "}
                (yo). Instead of pronouncing{" "}
                <span class="font-japanese text-foreground dark:text-white/90">きよ</span> (kiyo) as
                two separate sounds, speakers shorten it to{" "}
                <span class="font-japanese font-semibold text-dynamic-accent">
                  きょ
                </span>{" "}
                (kyo). You'll hear this in words like{" "}
                <span class="font-japanese text-foreground dark:text-white/90">きょねん</span>{" "}
                (kyonen, "last year").
              </p>
              <p>
                Notice the romaji:{" "}
                <span class="font-japanese font-semibold text-foreground dark:text-white/90">き</span>{" "}
                is "ki," but when it contracts, the "i" drops and you get "kyo"
                instead of "kiyo." That pattern holds for all contracted sounds.
                Check the last letter of the base kana's romaji, drop it, and
                add the small kana's sound.
              </p>
              <p>
                The small size is what tells you it's a contraction. When you see
                a full-sized{" "}
                <span class="font-japanese text-foreground dark:text-white/90">や</span>,{" "}
                <span class="font-japanese text-foreground dark:text-white/90">ゆ</span>, or{" "}
                <span class="font-japanese text-foreground dark:text-white/90">よ</span>, it's a
                separate sound. When it's small (
                <span class="font-japanese text-foreground dark:text-white/90">ゃ</span>,{" "}
                <span class="font-japanese text-foreground dark:text-white/90">ゅ</span>,{" "}
                <span class="font-japanese text-foreground dark:text-white/90">ょ</span>), it merges
                with the character before it.
              </p>
              <p>
                The most common small kana are{" "}
                <span class="font-japanese font-semibold text-foreground dark:text-white/90">
                  ゃ
                </span>
                ,{" "}
                <span class="font-japanese font-semibold text-foreground dark:text-white/90">
                  ゅ
                </span>
                , and{" "}
                <span class="font-japanese font-semibold text-foreground dark:text-white/90">
                  ょ
                </span>
                , though any other small kana you see will work the same way.
              </p>
              <p class="text-sm text-muted-foreground dark:text-white/40">
                Note: you might see "ja" romanized as "jya" in some places. Both
                refer to the same sound.
              </p>
              <p class="text-sm text-muted-foreground dark:text-white/50 italic">
                They feel a little weird at first, but the more Japanese you
                hear, the more natural they'll sound.
              </p>
            </div>
          </div>
        </div>

        {/* Examples */}
        <div class="space-y-4">
          <SectionLabel>Examples</SectionLabel>
          <div class="grid gap-4 sm:grid-cols-3">
            <ExampleCard
              formula="し + ゃ = しゃ"
              word="しゃしん"
              gloss="photograph"
            />
            <ExampleCard
              formula="じ + ゅ = じゅ"
              word="じゅんび"
              gloss="preparation"
            />
            <ExampleCard
              formula="き + ょ = きょ"
              word="きょねん"
              gloss="last year"
            />
          </div>
        </div>

        {/* What's a mora? */}
        <AsideBlock label="What's a mora?">
          <div class="mt-2 space-y-3 leading-relaxed text-foreground/75 dark:text-white/70">
            <p>
              Each full-sized kana takes up one mora, and every mora gets the
              same amount of time when spoken.{" "}
              <span class="font-japanese font-semibold text-foreground dark:text-white/90">
                びよういん
              </span>{" "}
              (bi・yo・u・i・n, beauty salon) is five mora.{" "}
              <span class="font-japanese font-semibold text-foreground dark:text-white/90">
                びょういん
              </span>{" "}
              (byo・u・i・n, hospital) is four, because{" "}
              <span class="font-japanese font-semibold text-dynamic-accent">
                びょ
              </span>{" "}
              is contracted into one. More on this in the next lesson.
            </p>
          </div>
        </AsideBlock>

        {/* Summary */}
        <LessonSummary>
          <SummaryItem>
            Small{" "}
            <span class="font-japanese font-semibold text-foreground/80 dark:text-white/80">
              ゃ, ゅ, ょ
            </span>{" "}
            merge with the preceding kana into one mora
          </SummaryItem>
          <SummaryItem>
            Full-sized = separate mora, small = contraction
          </SummaryItem>
        </LessonSummary>
      </div>
    </div>
  )
}

function ExampleCard(props: {
  formula: string
  word: string
  gloss: string
}) {
  return (
    <div class="rounded-lg bg-card/60 dark:bg-white/[0.04] p-4 text-center">
      <p class="text-xs text-muted-foreground dark:text-white/40">{props.formula}</p>
      <p class="font-japanese mt-2 text-2xl font-bold text-foreground dark:text-white/90">
        {props.word}
      </p>
      <p class="mt-1 text-sm text-muted-foreground dark:text-white/50">{props.gloss}</p>
    </div>
  )
}
