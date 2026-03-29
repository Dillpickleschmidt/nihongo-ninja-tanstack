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

export const Route = createFileRoute(
  "/lessons/_chapter-4/where-things-are",
)({
  component: WhereThingsAre,
})

function WhereThingsAre() {
  return (
    <div class="relative pb-32">
      {/* Background character */}
      <span class="pointer-events-none absolute top-8 left-24 select-none font-japanese text-[10rem] leading-none text-white/[0.03] sm:top-11 sm:left-auto sm:right-8 sm:text-[11rem]">
        位
      </span>

      <LessonHeader
        chapter="Chapter 4 · Grammar"
        title={<>Where Is Everything?</>}
        subtitle="Location words for describing where things are."
      >
        <OverviewItem>上, 下, 前, 後ろ, 中, 隣, 間</OverviewItem>
        <OverviewItem>右, 左, 近く</OverviewItem>
        <OverviewItem>Using の to connect location words</OverviewItem>
      </LessonHeader>

      <div class="space-y-14 px-8">
        {/* Intro */}
        <div class="space-y-4">
          <p class="leading-relaxed text-white/70">
            So you want to explain where things are in Japanese? It's a lot
            easier than saying「あそこ。いや、あそこじゃない、あそこ！」"Over
            there! No, not there, THERE!" Let's learn how to actually describe
            locations!
          </p>

          <GlowBox>
            <div class="space-y-3 text-center">
              <p class="text-xl">
                <span class="text-base font-light text-white/50">X</span> は{" "}
                <span class="text-base font-light text-white/50">Y</span> の{" "}
                <span class="text-base font-light text-white/50">
                  (in front of, above, etc.)
                </span>{" "}
                です
              </p>
              <p class="text-white/50">
                X is (in front of, above, etc.) Y
              </p>
            </div>
          </GlowBox>

          <GlowBox>
            <div class="space-y-3 text-center">
              <p class="text-xl">
                <span class="text-base font-light text-white/50">X</span> は{" "}
                <span class="text-base font-light text-white/50">Y</span>{" "}
                <span class="underline underline-offset-2">と</span>{" "}
                <span class="text-base font-light text-white/50">Z</span> の
                あいだ です
              </p>
              <p class="text-white/50">
                X is between Y <u>and</u> Z
              </p>
              <p class="text-start text-sm text-white/40">
                *と means "<u>and</u>" (more on this later)
              </p>
            </div>
          </GlowBox>
        </div>

        {/* Important Note */}
        <AsideBlock label="Important note">
          <div class="mt-2 space-y-3 text-sm leading-relaxed text-white/60">
            <p>
              Japanese doesn't have a 1-1 translation of the verb "to be."
            </p>
            <div class="space-y-2">
              <div>
                <p class="font-japanese text-base text-white/80">
                  ここに先生がいます。
                </p>
                <p class="text-sm text-white/40">
                  There is a teacher here. (lit. "Here, a teacher exists,"
                  emphasizing existence.)
                </p>
              </div>
              <div>
                <p class="font-japanese text-base text-white/80">
                  山田さんは先生です。
                </p>
                <p class="text-sm text-white/40">
                  Yamada-san is a teacher. (lit. "About Yamada-san,{" "}
                  <u>teacher</u>, emphasizing the attribute of being a
                  teacher.")
                </p>
              </div>
            </div>
            <p class="text-white/40">
              います and あります are strictly for descriptions of existence and
              location, while です is for description of an attribute of a
              person or thing.
            </p>
          </div>
        </AsideBlock>

        {/* Top/Bottom */}
        <div class="space-y-4">
          <SectionLabel>Top / bottom</SectionLabel>
          <div class="grid gap-2 sm:grid-cols-2">
            <LocationCard jp="上" reading="うえ" en="above / on top" />
            <LocationCard jp="下" reading="した" en="below / under" />
          </div>
          <div class="rounded-lg bg-white/[0.04] p-4">
            <p class="font-japanese text-lg text-white/80">
              本は机の上にあります。
            </p>
            <p class="mt-1 text-white/50">
              The book is on top of the desk.
            </p>
            <p class="mt-1 text-sm text-white/40">
              (Not floating above it - it's physically on top!)
            </p>
          </div>
        </div>

        {/* Front/Back */}
        <div class="space-y-4">
          <SectionLabel>Front / back</SectionLabel>
          <div class="grid gap-2 sm:grid-cols-2">
            <LocationCard jp="前" reading="まえ" en="in front" />
            <LocationCard jp="後ろ" reading="うしろ" en="behind" />
          </div>
          <div class="rounded-lg bg-white/[0.04] p-4">
            <p class="font-japanese text-lg text-white/80">
              後ろに誰がいますか。
            </p>
            <p class="mt-1 text-white/50">Who's behind (me)?</p>
            <p class="mt-1 text-sm text-white/40">
              (Perfect for those "I feel like someone's following me" moments)
            </p>
          </div>
        </div>

        {/* Inside/Next To/Between */}
        <div class="space-y-4">
          <SectionLabel>Inside / next to / between</SectionLabel>
          <div class="grid gap-2 sm:grid-cols-3">
            <LocationCard jp="中" reading="なか" en="inside" />
            <LocationCard jp="隣" reading="となり" en="next to" />
            <LocationCard jp="間" reading="あいだ" en="between" />
          </div>

          <div class="rounded-lg bg-white/[0.04] p-4">
            <p class="font-japanese text-lg text-white/80">
              猫は
              <Furigana furigana={<span class="text-xs">はこ</span>}>
                箱
              </Furigana>
              の中にいます。
            </p>
            <p class="mt-1 text-white/50">The cat is in the box.</p>
            <p class="mt-1 text-sm text-white/40">(As cats often are...)</p>
            <div class="mt-3 border-t border-white/5 pt-3">
              <p class="text-sm italic text-white/40">
                *You can also drop 中 as に can imply "inside":
              </p>
              <p class="mt-1 font-japanese text-sm text-white/50">
                猫は箱にいます
              </p>
              <p class="mt-1 text-sm italic text-white/40">
                The difference is kind of like "in" the box vs. "inside" the
                box in English.
              </p>
            </div>
          </div>

          <div class="rounded-lg bg-white/[0.04] p-4">
            <p class="font-japanese text-lg text-white/80">
              お酒がテレビの隣にありますよ！
            </p>
            <p class="mt-1 text-white/50">
              There's alchohol next to the TV!
            </p>
            <p class="mt-1 text-sm text-white/40">
              (Excited to bring out the sake for movie night, are we?)
            </p>
          </div>

          <div class="rounded-lg bg-white/[0.04] p-4">
            <p class="mb-2 text-sm text-white/40">
              <Furigana furigana={<span class="text-[10px]">あにき</span>}>
                兄貴
              </Furigana>{" "}
              → older brother (a respectiful version of many variants)
            </p>
            <p class="font-japanese text-lg text-white/80">
              <Furigana furigana={<span class="text-xs">あおやま</span>}>
                青山
              </Furigana>
              兄貴と
              <Furigana furigana={<span class="text-xs">しろきば</span>}>
                白牙
              </Furigana>
              兄貴の間にいます。
            </p>
            <p class="mt-1 text-white/50">
              I'm between older brothers Aoyama and Shirokiba.
            </p>
            <p class="mt-1 text-sm text-white/40">
              (Ex. you're playing cards with yakuza members, and you're stuck
              in between two of them)
            </p>
          </div>
        </div>

        {/* Special Cases */}
        <AsideBlock label="Special case">
          <div class="mt-2">
            <p class="font-japanese text-base text-white/80">
              バスの中にいます。
            </p>
            <p class="mt-1 text-sm text-white/60">I'm IN the bus</p>
            <p class="mt-1 text-sm text-white/40">
              Not バスの上! Even though we say "on the bus" in English.
            </p>
          </div>
        </AsideBlock>

        {/* Left/Right */}
        <div class="space-y-4">
          <SectionLabel>Left / right</SectionLabel>
          <div class="grid gap-2 sm:grid-cols-2">
            <LocationCard jp="右" reading="みぎ" en="right" />
            <LocationCard jp="左" reading="ひだり" en="left" />
          </div>
          <div class="rounded-lg bg-white/[0.04] p-4">
            <p class="font-japanese text-lg text-white/80">
              郵便局は図書館の右にあります。
            </p>
            <p class="mt-1 text-white/50">
              The post office is to the right of the library.
            </p>
            <p class="mt-1 text-sm text-white/40">
              (Usually from your perspective when facing the building)
            </p>
          </div>
        </div>

        {/* Near */}
        <div class="space-y-4">
          <SectionLabel>Nearby</SectionLabel>
          <div class="sm:w-1/2">
            <LocationCard jp="近く" reading="ちかく" en="near / nearby" />
          </div>
          <div class="rounded-lg bg-white/[0.04] p-4">
            <p class="font-japanese text-lg text-white/80">
              <Furigana furigana={<span class="text-xs">えき</span>}>
                駅
              </Furigana>
              の近くにコンビニがあります。
            </p>
            <p class="mt-1 text-white/50">
              There's a convenience store near the station.
            </p>
            <p class="mt-1 text-sm text-white/40">
              (Let's be honest - there's always a convenience store near the
              station...)
            </p>
          </div>
        </div>

        {/* Practice */}
        <div class="space-y-5">
          <h3 class="text-center text-2xl font-bold">Practice</h3>
          <p class="text-center text-sm italic text-white/40">
            *Choose the correct Japanese for each situation*
          </p>

          <div class="space-y-6">
            <div class="space-y-3">
              <p class="leading-relaxed text-white/70">
                How would you say "The library is between the bank and the post
                office"?
              </p>
              <SelectText
                answer="図書館は銀行と郵便局の間です。"
                a="図書館は銀行とポストの間でです。"
                b="図書館は銀行と郵便局の間です。"
                c="図書館に銀行と郵便局の間があります。"
                class="text-xl"
              />
            </div>

            <div class="space-y-3">
              <p class="leading-relaxed text-white/70">
                How would you say "There's a cat under the table"?
              </p>
              <SelectText
                answer="机の下に猫がいます。"
                a="机の下に猫がいます。"
                b="猫は机の下でいます。"
                c="猫は机の下です。"
                class="text-xl"
              />
            </div>

            <div class="space-y-3">
              <p class="leading-relaxed text-white/70">
                Your friend asks where the convenience store is. How would you
                say it's near the station?
              </p>
              <SelectText
                answer={[
                  "駅の近くにコンビニがあります。",
                  "コンビニは駅の近くです。",
                ]}
                a="駅の近くでコンビニです。"
                b="駅の近くにコンビニがあります。"
                c="コンビニは駅の近くです。"
                class="text-xl"
              />
            </div>

            <div class="space-y-3">
              <p class="leading-relaxed text-white/70">
                How would you say "I'm on the bus"?
              </p>
              <SelectText
                answer="バスの中にいます。"
                a="バスの上にいます。"
                b="バスの中にいます。"
                c="バスの中です。"
                class="text-xl"
              />
            </div>
          </div>
        </div>

        {/* Summary */}
        <LessonSummary>
          <SummaryItem>
            X は Y の (location word) です = "X is (location) Y"
          </SummaryItem>
          <SummaryItem>
            上/下 (above/below), 前/後ろ (front/back), 右/左 (right/left)
          </SummaryItem>
          <SummaryItem>
            中 (inside), 隣 (next to), 間 (between), 近く (near)
          </SummaryItem>
          <SummaryItem>
            Use と to connect two items with 間: Y と Z の間
          </SummaryItem>
        </LessonSummary>
      </div>
    </div>
  )
}

function LocationCard(props: { jp: string; reading: string; en: string }) {
  return (
    <div class="rounded-lg bg-white/[0.04] px-4 py-3">
      <span class="font-japanese text-2xl font-medium text-white/90">
        {props.jp}
      </span>
      <span class="ml-2 text-sm text-white/40">
        ({props.reading}) - {props.en}
      </span>
    </div>
  )
}
