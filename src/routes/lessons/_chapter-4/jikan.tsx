import { createFileRoute } from "@tanstack/solid-router"
import Furigana from "@/components/text/Furigana"
import SelectText from "@/components/text/MultipleChoiceText"
import MinutesChart1 from "@/components/charts/MinutesChart1"
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@/components/ui/custom/collapsible"

export const Route = createFileRoute("/lessons/_chapter-4/jikan")({
  component: Jikan,
})

function Jikan() {
  return (
    <div class="mb-32">
      <h1 class="px-12 pb-6 pt-6 text-center text-4xl font-semibold sm:pt-12 lg:px-28 lg:pt-24">
        Expressing Time Duration in Japanese
      </h1>

      <div class="space-y-6 px-8 sm:px-16 md:px-24">
        <p>
          Now that you can tell the time in Japanese, let's learn how to say how
          long something takes!
        </p>

        <h3 class="!mt-9 text-xl font-bold">Basic Pattern</h3>
        <p>
          [number]
          <Furigana furigana={<span class="text-xs">じかん</span>}>
            時間
          </Furigana>{" "}
          (no particle needed!)
        </p>

        <div class="w-full space-y-4 rounded-lg border-2 border-border px-3 py-5 text-center">
          <div class="grid grid-cols-3 gap-4">
            <div>
              <span class="font-japanese text-xl">一時間</span>
              <p class="text-base">1 hour</p>
            </div>
            <div>
              <span class="font-japanese text-xl">三時間</span>
              <p class="text-base">3 hours</p>
            </div>
            <div>
              <span class="font-japanese text-xl">七時間</span>
              <p class="text-base">7 hours</p>
            </div>
          </div>
        </div>

        <p>
          Unlike other nouns in Japanese, when talking about duration, 時間
          stands alone without any particle:
        </p>

        <div class="flex w-full justify-center">
          <div class="space-y-4">
            <p class="font-japanese text-xl">
              田中さんは図書館で三時間勉強しました。
            </p>
            <p class="text-base">
              Tanaka studied at the library for three hours.
            </p>
          </div>
        </div>

        <h3 class="!mt-9 text-xl font-bold">Making it Approximate</h3>
        <p>Want to say "about 3 hours"? Add ぐらい (or くらい) after it:</p>

        <div class="w-full space-y-4 rounded-lg border-2 border-border px-3 py-5 text-center">
          <div>
            <span class="font-japanese text-xl">
              三時間ぐらい / 三時間くらい
            </span>
            <p class="text-base">about 3 hours</p>
          </div>
        </div>

        <div class="rounded-lg bg-card/50 p-4">
          <p class="font-medium">Note:</p>
          <p class="mt-2">
            ぐらい and くらい mean exactly the same thing - くらい is just a
            more casual way of writing it.
          </p>
        </div>

        <div class="flex w-full justify-center">
          <div class="space-y-4">
            <p class="font-japanese text-xl">
              昨日二時間ぐらいテレビを見ました。
            </p>
            <p class="text-base">I watched TV for about two hours yesterday.</p>
          </div>
        </div>

        <h3 class="!mt-9 text-xl font-bold">Half Hours</h3>
        <p>To say "and a half", add 半:</p>

        <div class="w-full space-y-4 rounded-lg border-2 border-border px-3 py-5 text-center">
          <div class="grid grid-cols-2 gap-4">
            <div>
              <span class="font-japanese text-xl">一時間半</span>
              <p class="text-base">1.5 hours</p>
            </div>
            <div>
              <span class="font-japanese text-xl">七時間半</span>
              <p class="text-base">7.5 hours</p>
            </div>
          </div>
        </div>

        <div class="flex w-full justify-center">
          <div class="space-y-4">
            <p class="font-japanese text-xl">トイレに一時間半いました。</p>
            <p class="text-base">
              I was in the bathroom for an hour and a half.
            </p>
          </div>
        </div>

        <h3 class="!mt-9 text-xl font-bold">Special Note</h3>
        <p>Want to combine them all? Remember ぐらい comes last:</p>

        <div class="w-full space-y-4 rounded-lg border-2 border-border px-3 py-5 text-center">
          <div>
            <span class="font-japanese text-xl">一時間半ぐらい</span>
            <p class="text-base">about an hour and a half</p>
          </div>
        </div>

        <h3 class="!mt-9 text-xl font-bold">Expressing Minutes</h3>
        <p>For exact minutes, use 分 (no particle needed!):</p>

        <div class="w-full space-y-4 rounded-lg border-2 border-border px-3 py-5 text-center">
          <div class="grid grid-cols-2 gap-4">
            <div>
              <span class="font-japanese text-xl">三十分</span>
              <p class="text-base">30 minutes</p>
            </div>
            <div>
              <span class="font-japanese text-xl">四十五分</span>
              <p class="text-base">45 minutes</p>
            </div>
          </div>
        </div>

        <p>
          Remember the unique readings of{" "}
          <span class="font-japanese font-medium">分 (ふん・ぷん)</span> for
          each number!
        </p>
        <div class="flex justify-center">
          <Collapsible class="rounded-xl bg-white/[0.04] ring-1 ring-white/10">
            <CollapsibleTrigger class="p-4 text-lg font-semibold text-white/80">
              Minutes Chart
            </CollapsibleTrigger>
            <CollapsibleContent class="p-4">
              <MinutesChart1 />
            </CollapsibleContent>
          </Collapsible>
        </div>

        <div class="flex w-full justify-center">
          <div class="space-y-4">
            <p class="font-japanese text-xl">バスを四十五分待ちました。</p>
            <p class="text-base">I waited for the bus for 45 minutes.</p>
          </div>
        </div>

        <h3 class="!mt-9 text-xl font-bold">Hour + Minute Duration</h3>
        <div class="flex w-full justify-center">
          <div class="space-y-4">
            <p class="font-japanese text-xl">
              バスを一時間四十五分待ちました。
            </p>
            <p class="text-base">
              I waited for the bus for an hour and 45 minutes.
            </p>
          </div>
        </div>
      </div>

      <div class="space-y-4 px-12 pb-32 leading-8 sm:px-16 md:px-24 [&>*]:space-y-4">
        <h3 class="pt-12 text-center text-3xl font-bold">Practice</h3>
        <p class="text-center text-base italic text-muted-foreground">
          *Choose the correct expression for each situation*
        </p>

        <p>
          Someone asks how long you studied yesterday. How would you say "I
          studied for 2 hours"?
        </p>
        <SelectText
          answer="二時間勉強しました。"
          a="二時間に勉強しました。"
          b="二時間を勉強しました。"
          c="二時間勉強しました。"
          d="二時間で勉強しました。"
          class="text-xl"
        />

        <p>You want to say you slept for about 8 hours. Which is correct?</p>
        <SelectText
          answer="八時間ぐらい寝ました。"
          a="八時間ぐらい寝ました。"
          b="八時間で寝ました。"
          c="八時間ぐらいに寝ました。"
          d="八時間を寝ました。"
          class="text-xl"
        />

        <p>How would you say "I waited for my friend for 1.5 hours"?</p>
        <SelectText
          answer="一時間半友だちを待ちました。"
          a="一時間半友だちを待ちました。"
          b="一時間と半友だちを待ちました。"
          c="一時間半に友だちを待ちました。"
          d="一時間と三十分友だちを待ちました。"
          class="text-xl"
        />

        <p>
          You want to say you studied for about 1.5 hours. Which is correct?
        </p>
        <SelectText
          answer="一時間半くらい勉強しました。"
          a="一時間半くらい勉強しました。"
          b="一時間くらい半勉強しました。"
          c="一時間ぐらいと半勉強しました。"
          d="一時間半で勉強しました。"
          class="text-xl"
        />
      </div>
    </div>
  )
}
