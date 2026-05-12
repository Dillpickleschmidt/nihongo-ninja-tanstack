import { createFileRoute } from "@tanstack/solid-router"
import Furigana from "@/components/text/Furigana"
import SelectText from "@/components/text/MultipleChoiceText"
import LessonHeader, {
  OverviewItem,
} from "@/features/lessons/components/LessonHeader"
import SectionLabel from "@/features/lessons/components/SectionLabel"
import GlowBox from "@/features/lessons/components/GlowBox"
import AsideBlock from "@/features/lessons/components/AsideBlock"
import LessonSummary, {
  SummaryItem,
} from "@/features/lessons/components/LessonSummary"

export const Route = createFileRoute("/lessons/_chapter-4/iru-aru")({
  component: IruAru,
})

function IruAru() {
  return (
    <div class="relative pb-32">
      {/* Background character */}
      <span class="pointer-events-none absolute top-8 left-24 select-none font-japanese text-[10rem] leading-none text-foreground/[0.04] dark:text-white/[0.03] sm:top-11 sm:left-auto sm:right-8 sm:text-[11rem]">
        在
      </span>

      <LessonHeader
        chapter="Chapter 4 · Grammar"
        title={
          <>
            <span class="font-japanese text-sky-400">います</span> and{" "}
            <span class="font-japanese text-orange-400">あります</span>
          </>
        }
        subtitle="Expressing existence, location, and possession."
      >
        <OverviewItem>
          <span class="font-japanese font-semibold text-sky-400">います</span>{" "}
          for animate,{" "}
          <span class="font-japanese font-semibold text-orange-400">
            あります
          </span>{" "}
          for inanimate
        </OverviewItem>
        <OverviewItem>Location with に and possession with は</OverviewItem>
        <OverviewItem>Confusing cases and common pitfalls</OverviewItem>
      </LessonHeader>

      <div class="space-y-14 px-8">
        {/* Intro */}
        <div class="space-y-4">
          <p class="leading-relaxed text-foreground/75 dark:text-white/70">
            In this lesson, we'll explore how to use{" "}
            <span class="font-japanese text-xl">います</span> and{" "}
            <span class="font-japanese text-xl">あります</span> to express that
            something exists somewhere or that someone has something. While
            English uses "have" for possession, Japanese describes things as
            "existing" in relation to people or places.
          </p>

          <GlowBox>
            <div class="space-y-3 text-center">
              <p class="text-xl">
                <span class="text-base font-light text-muted-foreground dark:text-white/50">
                  (location)
                </span>{" "}
                に{" "}
                <span class="text-base font-light text-muted-foreground dark:text-white/50">(thing)</span>{" "}
                が{" "}
                <span class="font-medium text-sky-400">います</span>・
                <span class="font-medium text-orange-400">あります</span>
              </p>
              <p class="text-base text-muted-foreground dark:text-white/50">
                There is/are{" "}
                <span class="text-sm font-light">(thing)</span> at{" "}
                <span class="text-sm font-light">(location)</span>
              </p>
            </div>
          </GlowBox>
        </div>

        {/* Basic Usage */}
        <div class="space-y-4">
          <SectionLabel>Basic usage</SectionLabel>

          <div class="grid gap-3 sm:grid-cols-2">
            <div class="rounded-lg bg-card/60 dark:bg-white/[0.04] p-4">
              <p class="font-japanese text-xl font-bold text-sky-400">います</p>
              <p class="mt-2 text-sm text-muted-foreground dark:text-white/60">
                Animate objects (things that can move on their own):
              </p>
              <ul class="mt-2 space-y-1 text-sm text-muted-foreground dark:text-white/40">
                <li>People</li>
                <li>Animals</li>
                <li>Ghosts 👻</li>
              </ul>
            </div>
            <div class="rounded-lg bg-card/60 dark:bg-white/[0.04] p-4">
              <p class="font-japanese text-xl font-bold text-orange-400">
                あります
              </p>
              <p class="mt-2 text-sm text-muted-foreground dark:text-white/60">Inanimate objects:</p>
              <ul class="mt-2 space-y-1 text-sm text-muted-foreground dark:text-white/40">
                <li>Objects</li>
                <li>Places</li>
                <li>Buildings</li>
              </ul>
            </div>
          </div>

          <div class="space-y-3">
            <div class="rounded-lg bg-card/60 dark:bg-white/[0.04] p-4 text-center">
              <p class="font-japanese text-xl text-foreground dark:text-white/90">
                公園に犬が<span class="font-bold text-sky-400">います</span>。
              </p>
              <p class="mt-1 text-sm text-muted-foreground dark:text-white/40">
                There's a dog in the park.
              </p>
            </div>
            <div class="rounded-lg bg-card/60 dark:bg-white/[0.04] p-4 text-center">
              <p class="font-japanese text-xl text-foreground dark:text-white/90">
                <span class="text-muted-foreground dark:text-white/40">(ここに)</span>コンビニが
                <span class="font-bold text-orange-400">あります</span>。
              </p>
              <p class="mt-1 text-sm text-muted-foreground dark:text-white/40">
                There's a convenience store{" "}
                <span class="text-muted-foreground/70 dark:text-white/30">(here)</span>.
              </p>
            </div>
          </div>
        </div>

        {/* Having Things */}
        <div class="space-y-4">
          <SectionLabel>Having things in Japanese</SectionLabel>
          <p class="leading-relaxed text-foreground/75 dark:text-white/70">
            In Japanese, instead of saying we "have" things, we express that
            things "exist in relation to us":
          </p>

          <GlowBox>
            <div class="space-y-3 text-center">
              <p class="text-xl">
                <span class="text-base font-light text-muted-foreground dark:text-white/50">
                  (person)
                </span>{" "}
                は{" "}
                <span class="text-base font-light text-muted-foreground dark:text-white/50">(thing)</span>{" "}
                が{" "}
                <span class="font-medium text-sky-400">います</span>・
                <span class="font-medium text-orange-400">あります</span>
              </p>
              <p class="text-base text-muted-foreground dark:text-white/50">
                <span class="text-sm font-light">(person)</span> has{" "}
                <span class="text-sm font-light">(thing)</span>
              </p>
            </div>
          </GlowBox>
        </div>

        {/* に vs は */}
        <div class="space-y-4">
          <SectionLabel>に vs は</SectionLabel>
          <ul class="space-y-2 leading-relaxed text-foreground/75 dark:text-white/70">
            <li>
              <span class="font-japanese text-xl text-foreground dark:text-white/90">に</span> -
              Emphasizes the location where something exists
            </li>
            <li>
              <span class="font-japanese text-xl text-foreground dark:text-white/90">は</span> -
              Simple statement about what someone has
            </li>
          </ul>

          <div class="space-y-3">
            <div class="rounded-lg bg-card/60 dark:bg-white/[0.04] p-4">
              <p class="font-japanese text-lg text-foreground/80 dark:text-white/80">
                田中さんは猫がいます。
              </p>
              <p class="mt-1 text-sm text-muted-foreground dark:text-white/40">
                Tanaka-san has cats/a cat
              </p>
              <p class="mt-1 text-xs italic text-muted-foreground/70 dark:text-white/30">
                Lit. As for Tanaka-san, cat exist.
              </p>
            </div>
            <div class="rounded-lg bg-card/60 dark:bg-white/[0.04] p-4">
              <p class="font-japanese text-lg text-foreground/80 dark:text-white/80">
                田中さんの家に猫がいます。
              </p>
              <p class="mt-1 text-sm text-muted-foreground dark:text-white/40">
                There is/are cat(s) at Tanaka-san's house
              </p>
              <p class="mt-1 text-xs italic text-muted-foreground/70 dark:text-white/30">
                Lit. At Tanaka-san's house, cat exist.
              </p>
            </div>
          </div>
        </div>

        {/* Confusing Cases */}
        <div class="space-y-6">
          <SectionLabel>Confusing cases</SectionLabel>

          {/* Plants */}
          <div class="space-y-2">
            <p class="text-center text-sm font-semibold text-muted-foreground dark:text-white/50">
              Plants
            </p>
            <div class="rounded-lg bg-red-500/5 p-4 ring-1 ring-red-500/20">
              <p class="mb-1 text-xs font-semibold uppercase tracking-wider text-red-400/60">
                Incorrect
              </p>
              <p class="font-japanese text-base text-muted-foreground dark:text-white/50 line-through">
                庭に木がいます。
              </p>
            </div>
            <div class="rounded-lg bg-card/60 dark:bg-white/[0.04] p-4">
              <p class="mb-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground/70 dark:text-white/30">
                Correct
              </p>
              <p class="font-japanese text-base text-foreground/80 dark:text-white/80">
                庭に木があります。
              </p>
              <p class="mt-1 text-sm text-muted-foreground dark:text-white/40">
                There's a tree in the garden.
              </p>
            </div>
            <p class="text-sm text-muted-foreground dark:text-white/40">
              *Even though they're living, plants are considered inanimate since
              they don't move freely
            </p>
          </div>

          {/* Robots */}
          <div class="space-y-2">
            <p class="text-center text-sm font-semibold text-muted-foreground dark:text-white/50">
              Robots
            </p>
            <p class="text-sm text-muted-foreground dark:text-white/40">
              *While they can move, robots are usually treated as inanimate
              objects → あります (However, in stories or when treated as
              characters, or possibly AI robots, います might be used)
            </p>
          </div>

          {/* Animals as Food */}
          <div class="space-y-2">
            <p class="text-center text-sm font-semibold text-muted-foreground dark:text-white/50">
              Animals as Food
            </p>
            <div class="rounded-lg bg-red-500/5 p-4 ring-1 ring-red-500/20">
              <p class="mb-1 text-xs font-semibold uppercase tracking-wider text-red-400/60">
                Incorrect
              </p>
              <p class="font-japanese text-base text-muted-foreground dark:text-white/50 line-through">
                テーブルに魚がいます。
              </p>
            </div>
            <div class="rounded-lg bg-card/60 dark:bg-white/[0.04] p-4">
              <p class="mb-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground/70 dark:text-white/30">
                Correct
              </p>
              <p class="font-japanese text-base text-foreground/80 dark:text-white/80">
                テーブルに魚があります。
              </p>
              <p class="mt-1 text-sm text-muted-foreground dark:text-white/40">
                There's fish on the table.
              </p>
            </div>
            <p class="text-sm text-muted-foreground dark:text-white/40">
              *When talking about animals as food (fish, meat, etc.), they're
              treated as inanimate objects (since they're no longer alive)
            </p>
          </div>
        </div>

        {/* Common Pitfalls */}
        <div class="space-y-4">
          <SectionLabel>Easy mistakes</SectionLabel>

          <div class="space-y-2">
            <div class="rounded-lg bg-red-500/5 p-4 ring-1 ring-red-500/20">
              <p class="mb-1 text-xs font-semibold uppercase tracking-wider text-red-400/60">
                Incorrect
              </p>
              <p class="font-japanese text-base text-muted-foreground dark:text-white/50 line-through">
                あそこにモスバーガーです。
              </p>
            </div>
            <p class="text-sm text-muted-foreground dark:text-white/40">
              You can't use に with です directly - に needs a verb like あります
              to show existence
            </p>
          </div>

          <div class="space-y-2">
            <div class="rounded-lg bg-red-500/5 p-4 ring-1 ring-red-500/20">
              <p class="mb-1 text-xs font-semibold uppercase tracking-wider text-red-400/60">
                Incorrect
              </p>
              <p class="font-japanese text-base text-muted-foreground dark:text-white/50 line-through">
                モスバーガーはあそこにです。
              </p>
            </div>
            <p class="text-sm text-muted-foreground dark:text-white/40">
              Similar to above - です cannot be used with に. Also, you can't end
              a sentence with に
            </p>
          </div>

          <div class="space-y-2">
            <div class="rounded-lg bg-card/60 dark:bg-white/[0.04] p-4">
              <p class="mb-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground/70 dark:text-white/30">
                Correct
              </p>
              <p class="font-japanese text-base text-foreground/80 dark:text-white/80">
                モスバーガー
                <span class="underline underline-offset-2">はあそこです</span>
                。
              </p>
              <p class="mt-1 text-sm text-muted-foreground dark:text-white/40">X は Y です pattern</p>
            </div>
            <div class="rounded-lg bg-card/60 dark:bg-white/[0.04] p-4">
              <p class="mb-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground/70 dark:text-white/30">
                Correct
              </p>
              <p class="font-japanese text-base text-foreground/80 dark:text-white/80">
                モスバーガーは
                <span class="underline underline-offset-2">
                  あそこにあります
                </span>
                。
              </p>
            </div>
            <div class="rounded-lg bg-card/60 dark:bg-white/[0.04] p-4">
              <p class="mb-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground/70 dark:text-white/30">
                Correct
              </p>
              <p class="font-japanese text-base text-foreground/80 dark:text-white/80">
                <span class="underline underline-offset-2">あそこに</span>
                モスバーガーが
                <span class="underline underline-offset-2">あります</span>。
              </p>
            </div>
          </div>
        </div>

        {/* Functions of に */}
        <AsideBlock label="Functions of に learned so far">
          <ol class="mt-2 space-y-1.5 text-sm leading-relaxed text-muted-foreground dark:text-white/60">
            <li>
              <span class="font-semibold text-foreground/80 dark:text-white/80">1.</span> Direction of
              movement (家に帰ります)
            </li>
            <li>
              <span class="font-semibold text-foreground/80 dark:text-white/80">2.</span> Specific time
              (七時に帰ります)
            </li>
            <li>
              <span class="font-semibold text-foreground/80 dark:text-white/80">3.</span> Place where
              thing is/exists (公園にお母さんがいます)
            </li>
          </ol>
        </AsideBlock>

        {/* Practice */}
        <div class="space-y-5">
          <h3 class="text-center text-2xl font-bold">Practice</h3>
          <p class="text-center text-sm italic text-muted-foreground dark:text-white/40">
            *Choose the correct verb for each situation*
          </p>

          <div class="space-y-6">
            <div class="space-y-3">
              <p class="leading-relaxed text-foreground/75 dark:text-white/70">
                How would you say "There's a cat in the room"?
              </p>
              <SelectText
                answer="部屋に猫がいます。"
                a="部屋に猫がいます。"
                b="部屋に猫があります。"
                class="text-xl"
              />
            </div>

            <div class="space-y-3">
              <p class="leading-relaxed text-foreground/75 dark:text-white/70">
                How would you say "There's a computer on the desk"?
              </p>
              <SelectText
                answer="机にパソコンがあります。"
                a="机にパソコンがいます。"
                b="机にパソコンがあります。"
                class="text-xl"
              />
            </div>

            <div class="space-y-3">
              <p class="leading-relaxed text-foreground/75 dark:text-white/70">
                How would you say "I have an older sister"?
              </p>
              <SelectText
                answer={["私は姉がいます。", "私には姉がいます。"]}
                a="私は姉がいます。"
                b="私は姉があります。"
                c="私には姉がいます。"
                class="text-xl"
              />
            </div>

            <div class="space-y-3">
              <p class="leading-relaxed text-foreground/75 dark:text-white/70">
                How would you say "There's a test tomorrow"?
              </p>
              <SelectText
                answer="明日テストがあります。"
                a="明日テストがいます。"
                b="明日にテストがいます。"
                c="明日テストがあります。"
                d="明日にテストがあります。"
                class="text-xl"
              />
            </div>

            <div class="space-y-3">
              <p class="leading-relaxed text-foreground/75 dark:text-white/70">
                How would you say "There are flowers in the park"?
              </p>
              <SelectText
                answer="公園に花があります。"
                a="公園に花がいます。"
                b="公園に花があります。"
                class="text-xl"
              />
            </div>
          </div>
        </div>

        {/* Summary */}
        <LessonSummary>
          <SummaryItem>
            います for animate (people, animals), あります for inanimate
            (objects, places)
          </SummaryItem>
          <SummaryItem>
            (location) に (thing) が います/あります = "there is X at Y"
          </SummaryItem>
          <SummaryItem>
            (person) は (thing) が います/あります = "X has Y"
          </SummaryItem>
          <SummaryItem>
            Plants, robots, and animals as food use あります
          </SummaryItem>
        </LessonSummary>
      </div>
    </div>
  )
}
