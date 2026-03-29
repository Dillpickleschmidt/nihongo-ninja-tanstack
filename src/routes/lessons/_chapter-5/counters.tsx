import { createFileRoute } from "@tanstack/solid-router"
import { Button } from "@/components/ui/button"
import Furigana from "@/components/text/Furigana"

export const Route = createFileRoute("/lessons/_chapter-5/counters")({
  component: Counters,
})

function GenericCounters() {
  return (
    <div class="flex w-full justify-center rounded-md bg-white/[0.04] px-16 pb-12 pt-8">
      <ul class="w-full [&>*]:flex [&>*]:min-w-72 [&>*]:items-center [&>*]:justify-between [&>*]:border-b [&>*]:border-white/10 [&>*]:py-2 [&>*]:pl-2 [&>*]:pr-4">
        <li class="text-2xl">
          <div class="flex w-full">
            <div class="w-2/5 font-japanese font-semibold">一つ</div>
            <div class="font-japanese font-semibold">ひとつ</div>
          </div>
          <div class="whitespace-nowrap text-end text-lg">1 thing</div>
        </li>
        <li class="text-2xl">
          <div class="flex w-full">
            <div class="w-2/5 font-japanese font-semibold">二つ</div>
            <div class="font-japanese font-semibold">ふたつ</div>
          </div>
          <div class="whitespace-nowrap text-end text-lg">2 things</div>
        </li>
        <li class="text-2xl">
          <div class="flex w-full">
            <div class="w-2/5 font-japanese font-semibold">三つ</div>
            <div class="font-japanese font-semibold">みつ</div>
          </div>
          <div class="whitespace-nowrap text-end text-lg">3 things</div>
        </li>
        <li class="text-2xl">
          <div class="flex w-full">
            <div class="w-2/5 font-japanese font-semibold">四つ</div>
            <div class="font-japanese font-semibold">よつ</div>
          </div>
          <div class="whitespace-nowrap text-end text-lg">4 things</div>
        </li>
        <li class="text-2xl">
          <div class="flex w-full">
            <div class="w-2/5 font-japanese font-semibold">五つ</div>
            <div class="font-japanese font-semibold">いつつ</div>
          </div>
          <div class="whitespace-nowrap text-end text-lg">5 things</div>
        </li>
        <li class="text-2xl">
          <div class="flex w-full">
            <div class="w-2/5 font-japanese font-semibold">六つ</div>
            <div class="font-japanese font-semibold">むっつ</div>
          </div>
          <div class="whitespace-nowrap text-end text-lg">6 things</div>
        </li>
        <li class="text-2xl">
          <div class="flex w-full">
            <div class="w-2/5 font-japanese font-semibold">七つ</div>
            <div class="font-japanese font-semibold">ななつ</div>
          </div>
          <div class="whitespace-nowrap text-end text-lg">7 things</div>
        </li>
        <li class="text-2xl">
          <div class="flex w-full">
            <div class="w-2/5 font-japanese font-semibold">八つ</div>
            <div class="font-japanese font-semibold">やっつ</div>
          </div>
          <div class="whitespace-nowrap text-end text-lg">8 things</div>
        </li>
        <li class="text-2xl">
          <div class="flex w-full">
            <div class="w-2/5 font-japanese font-semibold">九つ</div>
            <div class="font-japanese font-semibold">ここのつ</div>
          </div>
          <div class="whitespace-nowrap text-end text-lg">9 things</div>
        </li>
        <li class="text-2xl">
          <div class="flex w-full">
            <div class="w-2/5 font-japanese font-semibold">十</div>
            <div class="font-japanese font-semibold">とお</div>
          </div>
          <div class="whitespace-nowrap text-end text-lg">10 things</div>
        </li>
        <li class="text-2xl">
          <div class="flex w-full">
            <div class="w-2/5 font-japanese font-semibold text-sky-500">
              いくつ
            </div>
          </div>
          <div class="whitespace-nowrap text-end text-lg">How many?</div>
        </li>
      </ul>
    </div>
  )
}

function Counters() {
  return (
    <div class="mb-32">
      <h1 class="px-6 pb-6 pt-6 text-center text-4xl font-semibold sm:px-12 sm:pt-12 lg:px-28 lg:pt-24">
        Generic Counters: One Thing, Two Things, etc.
      </h1>
      <div class="space-y-6 px-8 pb-32 sm:px-16 md:px-24">
        <p>
          It makes sense to get early exposure to these generic counters—they're
          really useful to know, and you'll be using them a lot.
        </p>

        <hr class="my-6 border-t" />

        <h2 class="mt-12 text-center text-2xl font-bold">
          Introduction to Generic Counters
        </h2>
        <p>
          Japanese uses counters to quantify things. While English sometimes
          uses counter words{" "}
          <span class="italic text-muted-foreground">
            (3 <u>sheets</u> of paper, 2 <u>pieces</u> of bread)
          </span>
          , it more often doesn't{" "}
          <span class="italic text-muted-foreground">
            (ex. 4 <u>plates</u>)
          </span>
          . However, Japanese <span class="font-black">always</span> uses
          specific counter words to indicate the type or shape of objects being
          counted, with the generic counter <b>～つ</b> as the baseline.
        </p>
        <p>
          Generic counters like <b>～つ</b> are versatile and can count many
          types of objects that don’t fit neatly into a specific category.
        </p>

        <div class="flex w-full justify-center p-6">
          <GenericCounters />
        </div>

        <hr class="my-6 border-t" />

        <h3 class="mt-8 text-xl font-semibold">
          Example sentences using counters:
        </h3>
        <ul class="list-disc space-y-2 pl-6">
          <li>
            <span class="font-japanese text-xl">
              りんごを
              <Furigana furigana={<span class="text-xs">み</span>}>
                <strong>三</strong>
              </Furigana>
              つ食べました
            </span>{" "}
            {"->"} I ate three apples.
          </li>
          <li>
            <span class="font-japanese text-xl">
              <Furigana furigana={<span class="text-xs">かみ</span>}>
                紙
              </Furigana>
              を
              <Furigana furigana={<span class="text-xs">ごまい</span>}>
                <strong>五枚</strong>
              </Furigana>
              買いました
            </span>{" "}
            {"->"} I bought five sheets of paper.
          </li>
          <li>
            <span class="font-japanese text-xl">
              本を
              <Furigana furigana={<span class="text-xs">ごさつ</span>}>
                <strong>五冊</strong>
              </Furigana>
              読みました
            </span>{" "}
            {"->"} I read five books.
          </li>
          <li>
            <span class="font-japanese text-xl">
              お
              <Furigana furigana={<span class="text-xs">さら</span>}>
                皿
              </Furigana>
              は<strong>いくつ</strong>ありますか?
            </span>{" "}
            {"->"} How many plates are there?
          </li>
        </ul>

        <hr class="my-6 border-t" />

        <h2 class="mt-12 text-center text-2xl font-bold">New Counter: ～枚</h2>
        <p>
          The counter <b>～枚 (まい)</b> is used for counting flat, thin objects
          like paper, tickets, or plates. Unlike <b>～つ</b>, it applies to more
          specific categories of items. Here are a few examples:
        </p>
        <ul class="list-disc pl-6">
          <li>
            <strong>一枚の紙</strong> (いちまいのかみ) {"->"} one sheet of paper
          </li>
          <li>
            <strong>三枚のチケット</strong> (さんまいのチケット) {"->"} three
            tickets
          </li>
          <li>
            <strong>二枚のお皿</strong> (にまいのおさら) {"->"} two plates
          </li>
        </ul>

        <hr class="my-6 border-t" />

        <h2 class="mt-12 text-center text-2xl font-bold">
          Comparing Counters in English and Japanese
        </h2>
        <p>
          English sometimes uses counters too, though not as systematically as
          Japanese. For example:
        </p>
        <ul class="list-disc pl-6">
          <li>
            <strong>Three sheets of paper</strong> {"->"} uses "sheets" as a
            counter, similar to <b>～枚</b> in Japanese.
          </li>
          <li>
            <strong>Two pieces of bread</strong> {"->"} uses "pieces" to
            indicate the quantity of individual slices. We wouldn't say "two
            breads" or "two bread."
          </li>
        </ul>
        <p>
          However, unlike Japanese, English often omits the counter altogether.
          For example:
        </p>
        <ul class="list-disc pl-6">
          <li>
            <i>Two plates</i> doesn’t need "sheets" or "pieces" because "plates"
            already conveys the idea.
          </li>
        </ul>
        <p>
          In Japanese, you cannot omit the counter. Each number needs one to
          clarify the object’s category or type.
        </p>
      </div>
    </div>
  )
}
