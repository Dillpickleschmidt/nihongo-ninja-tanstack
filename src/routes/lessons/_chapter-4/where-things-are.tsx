import { createFileRoute } from "@tanstack/solid-router"
import Furigana from "@/components/text/Furigana"
import SelectText from "@/components/text/MultipleChoiceText"

export const Route = createFileRoute(
  "/lessons/_chapter-4/where-things-are",
)({
  component: WhereThingsAre,
})

function WhereThingsAre() {
  return (
    <div class="mb-32">
      <h1 class="px-12 pb-6 pt-6 text-center text-4xl font-semibold sm:pt-12 lg:px-28 lg:pt-24">
        Where Is Everything? ～ Your Guide to Japanese Location Words
      </h1>

      <div class="space-y-6 px-8 sm:px-16 md:px-24">
        <p>
          So you want to explain where things are in Japanese? It's a lot easier
          than saying「あそこ。いや、あそこじゃない、あそこ！」"Over there! No,
          not there, THERE!" Let's learn how to actually describe locations!
        </p>

        <div class="w-full space-y-4 rounded-lg border-2 border-border px-3 py-5 text-center">
          <p class="text-2xl">
            <span class="text-xl font-light">X</span> は{" "}
            <span class="text-xl font-light">Y</span> の{" "}
            <span class="text-xl font-light">(in front of, above, etc.)</span>{" "}
            です
          </p>
          <p class="mx-4 text-xl">X is (in front of, above, etc.) Y</p>
        </div>

        <div class="w-full space-y-4 rounded-lg border-2 border-border px-3 py-5 text-center">
          <p class="text-2xl">
            <span class="text-xl font-light">X</span> は{" "}
            <span class="text-xl font-light">Y</span>{" "}
            <span class="underline underline-offset-2">と</span>{" "}
            <span class="text-xl font-light">Z</span> の あいだ です
          </p>
          <p class="mx-4 text-xl">
            X is between Y <u>and</u> Z
          </p>
          <p class="text-start text-base text-muted-foreground">
            *と means "<u>and</u>" (more on this later)
          </p>
        </div>

        <div class="mt-6 rounded-lg bg-card/50 p-4">
          <p class="font-medium">Important Note:</p>
          <p class="mt-2">
            Japanese doesn't have a 1-1 translation of the verb "to be."
          </p>
          <div class="mt-2 space-y-2">
            <p class="font-japanese text-xl">
              ここに先生がいます。
              <span class="ml-2 text-base text-muted-foreground">
                There is a teacher here. (lit. "Here, a teacher exists,""
                emphasizing existence.")
              </span>
            </p>
            <p class="font-japanese text-xl">
              山田さんは先生です。
              <span class="ml-2 text-base text-muted-foreground">
                Yamada-san is a teacher. (lit. "About Yamada-san, <u>teacher</u>
                , emphasizing the attribute of being a teacher .")
              </span>
            </p>
          </div>
          <p class="mt-4 text-muted-foreground">
            います and あります are strictly for descriptions of existence and
            location, while です is for description of an attribute of a person
            or thing.
          </p>
        </div>

        <h3 class="!mt-9 text-xl font-bold">Top/Bottom Crew</h3>
        <ul class="!mt-2 list-inside space-y-2">
          <li>
            <span class="font-japanese text-3xl font-medium">上</span> (うえ) -{" "}
            <span class="font-honk text-3xl">above/on top</span>
          </li>
          <li>
            <span class="font-japanese text-3xl font-medium">下</span> (した) -{" "}
            <span class="font-honk text-3xl">below/under</span>
          </li>
        </ul>

        <div class="flex w-full justify-center">
          <div class="space-y-4">
            <p class="font-japanese text-xl">本は机の上にあります。</p>
            <p class="text-base">{"->"} The book is on top of the desk.</p>
            <p class="text-sm text-muted-foreground">
              (Not floating above it - it's physically on top!)
            </p>
          </div>
        </div>

        <h3 class="!mt-9 text-xl font-bold">Front/Back Squad</h3>
        <ul class="!mt-2 list-inside space-y-2">
          <li>
            <span class="font-japanese text-3xl font-medium">前</span> (まえ) -{" "}
            <span class="font-honk text-3xl">in front</span>
          </li>
          <li>
            <span class="font-japanese text-3xl font-medium">後ろ</span>{" "}
            (うしろ) - <span class="font-honk text-3xl">behind</span>
          </li>
        </ul>

        <div class="flex w-full justify-center">
          <div class="space-y-4">
            <p class="font-japanese text-xl">後ろに誰がいますか。</p>
            <p class="text-base">{"->"} Who's behind (me)?</p>
            <p class="text-sm text-muted-foreground">
              (Perfect for those "I feel like someone's following me" moments)
            </p>
          </div>
        </div>

        <h3 class="!mt-9 text-xl font-bold">Inside/Next To Gang</h3>
        <ul class="!mt-2 list-inside space-y-2">
          <li>
            <span class="font-japanese text-3xl font-medium">中</span> (なか) -{" "}
            <span class="font-honk text-3xl">inside</span>
          </li>
          <li>
            <span class="font-japanese text-3xl font-medium">隣</span> (となり){" "}
            - <span class="font-honk text-3xl">next to</span>
          </li>
          <li>
            <span class="font-japanese text-3xl font-medium">間</span> (あいだ){" "}
            - <span class="font-honk text-3xl">between</span>
          </li>
        </ul>

        <div class="flex w-full justify-center">
          <div class="space-y-4">
            <p class="font-japanese text-xl">
              猫は
              <Furigana furigana={<span class="text-sm">はこ</span>}>
                箱
              </Furigana>
              の中にいます。
            </p>
            <p class="text-base">{"->"} The cat is in the box.</p>
            <p class="text-sm text-muted-foreground">(As cats often are...)</p>
            <p class="text-sm italic text-muted-foreground">
              *You can also drop 中 as に can imply "inside":
            </p>
            <p class="!mt-2 font-japanese text-base font-medium text-muted-foreground">
              猫は箱にいます
            </p>
            <p class="text-sm italic text-muted-foreground">
              The difference is kind of like like "in" the box <br />
              vs. "inside" the box in English.
            </p>
          </div>
        </div>

        <div class="flex w-full justify-center">
          <div class="space-y-4">
            <p class="font-japanese text-xl">お酒がテレビの隣にありますよ！</p>
            <p class="text-base">{"->"} There's alchohol next to the TV!</p>
            <p class="text-sm text-muted-foreground">
              (Excited to bring out the sake for movie night, are we?)
            </p>
          </div>
        </div>

        <div class="flex w-full justify-center">
          <div class="space-y-4">
            <p class="text-base text-muted-foreground">
              <Furigana furigana={<span class="text-xs">あにき</span>}>
                兄貴
              </Furigana>{" "}
              {"->"} older brother (a respectiful version of many variants)
            </p>
            <p class="font-japanese text-xl">
              <span>
                <Furigana furigana={<span class="text-sm">あおやま</span>}>
                  青山
                </Furigana>
              </span>
              兄貴と
              <span class="ml-2">
                <Furigana furigana={<span class="text-sm">しろきば</span>}>
                  白牙
                </Furigana>
              </span>
              兄貴の間にいます。
            </p>
            <p class="text-base">
              {"->"} I'm between older brothers Aoyama and Shirokiba.
            </p>
            <p class="text-sm text-muted-foreground">
              (Ex. you're playing cards with yakuza members, and you're stuck in
              between two of them)
            </p>
          </div>
        </div>

        <h4 class="!mt-9 font-bold">Special Cases</h4>
        <div class="!mt-0 space-y-4">
          <div class="rounded-lg bg-card/50 p-4">
            <p class="font-japanese text-xl">バスの中にいます。</p>
            <p class="text-base">{"->"} I'm IN the bus</p>
            <p class="text-sm text-muted-foreground">
              Not バスの上! Even though we say "on the bus" in English.
            </p>
          </div>
        </div>

        <h3 class="!mt-9 text-xl font-bold">Left/Right Alliance</h3>
        <ul class="!mt-2 list-inside space-y-2">
          <li>
            <span class="font-japanese text-3xl font-medium">右</span> (みぎ) -{" "}
            <span class="font-honk text-3xl">right</span>
          </li>
          <li>
            <span class="font-japanese text-3xl font-medium">左</span> (ひだり){" "}
            - <span class="font-honk text-3xl">left</span>
          </li>
        </ul>

        <div class="flex w-full justify-center">
          <div class="space-y-4">
            <p class="font-japanese text-xl">郵便局は図書館の右にあります。</p>
            <p class="text-base">
              {"->"} The post office is to the right of the library.
            </p>
            <p class="text-sm text-muted-foreground">
              (Usually from your perspective when facing the building)
            </p>
          </div>
        </div>

        <h3 class="!mt-9 text-xl font-bold">Near Zone</h3>
        <ul class="!mt-2 list-inside space-y-2">
          <li>
            <span class="font-japanese text-3xl font-medium">近く</span>{" "}
            (ちかく) - <span class="font-honk text-3xl">near/nearby</span>
          </li>
        </ul>

        <div class="flex w-full justify-center">
          <div class="space-y-4">
            <p class="font-japanese text-xl">
              <Furigana furigana={<span class="text-sm">えき</span>}>
                駅
              </Furigana>
              の近くにコンビニがあります。
            </p>
            <p class="text-base">
              {"->"} There's a convenience store near the station.
            </p>
            <p class="text-sm text-muted-foreground">
              (Let's be honest - there's always a convenience store near the
              station...)
            </p>
          </div>
        </div>
      </div>

      <div class="space-y-4 px-12 pb-32 leading-8 sm:px-16 md:px-24 [&>*]:space-y-4">
        <h3 class="pt-12 text-center text-3xl font-bold">Practice</h3>
        <p class="text-center text-base italic text-muted-foreground">
          *Choose the correct Japanese for each situation*
        </p>

        <p>
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

        <p>How would you say "There's a cat under the table"?</p>
        <SelectText
          answer="机の下に猫がいます。"
          a="机の下に猫がいます。"
          b="猫は机の下でいます。"
          c="猫は机の下です。"
          class="text-xl"
        />

        <p>
          Your friend asks where the convenience store is. How would you say
          it's near the station?
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

        <p>How would you say "I'm on the bus"?</p>
        <SelectText
          answer="バスの中にいます。"
          a="バスの上にいます。"
          b="バスの中にいます。"
          c="バスの中です。"
          class="text-xl"
        />
      </div>
    </div>
  )
}
