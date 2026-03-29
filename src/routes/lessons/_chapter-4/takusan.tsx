import { createFileRoute } from "@tanstack/solid-router"
import Furigana from "@/components/text/Furigana"
import SelectText from "@/components/text/MultipleChoiceText"

export const Route = createFileRoute("/lessons/_chapter-4/takusan")({
  component: Takusan,
})

function PortraitIcon(props: { src: string; class?: string }) {
  return (
    <img
      src={props.src}
      alt=""
      class={`size-12 rounded-full ring-1 ring-white/10 ${props.class ?? ""}`}
    />
  )
}

function Takusan() {
  return (
    <div class="mb-32">
      <h1 class="px-12 pb-6 pt-6 text-center text-4xl font-semibold sm:pt-12 lg:px-28 lg:pt-24">
        Expressing <span class="font-bold text-pink-400">A Lot</span> with{" "}
        <span class="font-bold text-pink-400">たくさん</span>
      </h1>

      <div class="space-y-6 px-8 sm:px-16 md:px-24">
        <p>
          <span class="font-japanese font-medium">たくさん</span> is a versatile
          word meaning "a lot" or "many," and it can be used in several ways.
        </p>

        <h3 class="!mt-9 text-xl font-bold">Patterns for Using たくさん</h3>

        <div class="w-full space-y-4 rounded-lg border-2 border-border px-3 py-5 text-center">
          <div class="grid grid-cols-2 items-center gap-4">
            <div>
              <span class="font-japanese text-xl">
                たくさん +{" "}
                <span class="font-medium text-emerald-500">Verb</span>
              </span>
              <p class="text-base">
                When describing doing "a lot" of something
              </p>
            </div>
            <div>
              <div>
                <p class="font-japanese text-xl">
                  たくさん +{" "}
                  <span class="font-medium text-black dark:text-amber-300">
                    Noun
                  </span>
                </p>
                <p class="-mb-1 -mt-1 text-base italic text-muted-foreground">
                  or
                </p>
                <p class="font-japanese text-xl">
                  たくさん<span class="font-medium text-orange-400">の</span> +{" "}
                  <span class="font-medium text-black dark:text-amber-300">
                    Noun
                  </span>
                </p>
                <p class="text-base">When describing "many" of something</p>
              </div>
            </div>
          </div>
        </div>

        <h3 class="!mt-9 text-xl font-bold">Pattern 1: たくさん + Verb</h3>
        <p>When you want to say you did "a lot" of something:</p>

        <div class="flex w-full justify-center">
          <div class="space-y-4">
            <p class="font-japanese text-xl">日本語をたくさん勉強しました。</p>
            <p class="text-base">I studied Japanese a lot.</p>
          </div>
        </div>

        <h3 class="!mt-9 text-xl font-bold">Pattern 2: たくさんの + Noun</h3>
        <p>When you want to say there are "many" of something:</p>

        <div class="flex w-full justify-center">
          <div class="space-y-4">
            <p class="font-japanese text-xl">
              図書館にたくさんの本があります。
            </p>
            <p class="text-base">
              There are many books in the library{" "}
              <span class="italic">(focusing on the books)</span>.
            </p>
          </div>
        </div>

        <h3 class="!mt-9 text-xl font-bold">Pattern 3: たくさん + Noun</h3>
        <p>You can also drop the の, making it slightly less explicit:</p>
        <div class="flex w-full justify-center">
          <div class="space-y-4">
            <p class="font-japanese text-xl">図書館にたくさん本があります。</p>
            <p class="text-base">
              There are many books in the library{" "}
              <span class="italic">(focusing on the library)</span>.
            </p>
          </div>
        </div>
        <div class="rounded-lg bg-card/50 p-4">
          <p class="text-base italic">
            "<span class="font-japanese font-medium not-italic">たくさん</span>{" "}
            may be used before a noun without also using{" "}
            <span class="font-japanese font-medium not-italic">の</span>.
            However, in this case, it will feel more like{" "}
            <span class="font-japanese font-medium not-italic">たくさん</span>{" "}
            is describing the whole phrase, rather than just the noun it is in
            front of. If you strongly want to highlight the noun, using{" "}
            <span class="font-japanese font-medium not-italic">の</span> would
            be best" -{" "}
            <a
              href="https://bunpro.jp/grammar_points/%E3%81%9F%E3%81%8F%E3%81%95%E3%82%93"
              target="_blank"
              class="text-sky-400 underline"
            >
              Bunpro
            </a>
          </p>
        </div>

        <h3 class="pt-12 text-center text-3xl font-bold">
          Bonus <span class="text-2xl text-red-500">[Advanced]</span>
        </h3>
        <p>
          This section is added for the sake of completeness. Skip it if you
          just want to know the essentials.
        </p>
        <div class="mr-[5.75rem] rounded-2xl border-2 border-dashed border-muted bg-card p-4 shadow-md">
          <PortraitIcon src="/img/student.png" />
          <p>Are there any other instances where you want to keep the の?</p>
        </div>
        <p>
          Whenever you're already using の in the same sentence for the same
          noun, mixing and matching decisions of when to use の would quickly
          get confusing. It would also not sound correct. Take a look at the
          following rediculously long example:
        </p>
        <div class="rounded-lg bg-card/50 p-4">
          <div class="flex w-full items-center">
            <p class="w-1/4 font-bold text-red-500">Incorrect</p>
            <p class="w-3/4">
              おばあちゃん<span class="font-medium text-orange-400">の</span>家
              <span class="font-medium text-orange-400">の</span>
              <Furigana furigana={<span class="text-xs">きんじょ</span>}>
                近所
              </Furigana>
              <span class="font-medium text-orange-400">の</span>図書館
              <span class="font-medium text-orange-400">の</span>
              たくさん本を読みました。
            </p>
          </div>
          <div class="flex w-full items-center">
            <p class="w-1/4 font-bold">Correct</p>
            <p class="w-3/4">
              おばあちゃん<span class="font-medium text-orange-400">の</span>家
              <span class="font-medium text-orange-400">の</span>
              <Furigana furigana={<span class="text-xs">きんじょ</span>}>
                近所
              </Furigana>
              <span class="font-medium text-orange-400">の</span>図書館
              <span class="font-medium text-orange-400">の</span>たくさん
              <span class="font-medium text-orange-400">の</span>
              本を読みました。
            </p>
          </div>
          <div class="space-y-4">
            <p class="text-base text-muted-foreground">
              I read many books from the library near grandma's house.
            </p>
            <p class="text-base text-muted-foreground">
              近所 {"->"} near area/neighborhood
            </p>
            <p class="text-sm">
              Source: Adapted from{" "}
              <a
                href="https://japanese.stackexchange.com/questions/27483/"
                target="_blank"
                class="text-sky-400 underline"
              >
                Japanese Stack Exchange
              </a>
            </p>
            <p class="text-base">
              Even though it's correct,{" "}
              <span class="italic">
                "this sentence contains five <span class="not-italic">のs</span>{" "}
                and it sounds too many. In some situations, using many{" "}
                <span class="not-italic">のs</span> sounds childish or having a
                poorer writing/speaking skill... Using adverb-type{" "}
                <span class="not-italic">たくさん</span> [Pattern 1] helps
                polish the sentence"
              </span>{" "}
              (HiruneDiver 2020):
            </p>
          </div>
        </div>

        <div class="rounded-lg bg-card/50 p-4">
          <div class="space-y-4">
            <p class="font-japanese text-xl">
              おばあちゃん<span class="font-medium text-orange-400">の</span>家
              <span class="font-medium text-orange-400">の</span>近所
              <span class="font-medium text-orange-400">の</span>図書館
              <span class="font-medium text-orange-400">の</span>
              本をたくさん読みました。
            </p>
            <p class="text-base">
              By using Pattern 1 (with a verb), we were able to drop a{" "}
              <span class="font-medium text-orange-400">の</span> without
              further confusion.
            </p>
            <p class="text-base">
              <span class="font-medium text-red-500">[Advanced] </span>
              <span class="italic">
                "And dividing a sequence of <span class="not-italic">の</span>{" "}
                is commonly preferred. The sentence above can be modified like
                this:"
              </span>
            </p>
          </div>
        </div>

        <div class="rounded-lg bg-card/50 p-4">
          <div class="space-y-4">
            <p class="font-japanese text-xl">
              おばあちゃん<span class="font-medium text-orange-400">の</span>家
              <span class="font-medium text-orange-400">の</span>
              近所にある図書館
              <span class="font-medium text-orange-400">の</span>
              本をたくさん読みました。
            </p>
            <p class="text-base">
              The above uses advanced grammar (like qualifying nouns {"->"}{" "}
              ある図書館), which you’ll learn in later chapters.
            </p>
          </div>
        </div>

        <p>
          <span class="font-bold">TLDR</span> - As a rule, you can just use{" "}
          <span class="font-japanese font-medium">たくさん</span> without a{" "}
          <span class="font-medium text-orange-400">の</span> (with verbs and
          nouns) unless you're stringing together multiple{" "}
          <span class="font-medium text-orange-400">の</span>s to modify a noun.
          In that case, consider connecting たくさん to a verb to avoid having
          to add an extra <span class="font-medium text-orange-400">の</span> if
          the sentence is getting too long/confusing.
        </p>
      </div>

      <div class="space-y-4 px-12 pb-32 leading-8 sm:px-16 md:px-24 [&>*]:space-y-4">
        <h3 class="pt-12 text-center text-3xl font-bold">Practice</h3>
        <p class="text-center text-base italic text-muted-foreground">
          *Some questions have more than 1 correct answer*
        </p>

        <p>How would you say "There are many students in the classroom"?</p>
        <SelectText
          answer="教室にたくさんの学生がいます。"
          a="教室でたくさんの学生がいます。"
          b="教室にたくさん学生がいます。"
          c="教室にたくさんの学生がいます。"
          class="text-xl"
        />

        <p>You want to say "I drank a lot of water". Which is correct?</p>
        <SelectText
          answer={["水をたくさん飲みました。", "たくさん水を飲みました。"]}
          a="水をたくさん飲みました。"
          b="たくさん水を飲みました。"
          c="水のたくさんを飲みました。"
          d="水でたくさん飲みました。"
          class="text-xl"
        />

        <p>How would you say "I want to read many books"?</p>
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

        <p>Which sentence correctly says "I have many friends"?</p>
        <SelectText
          answer="たくさんの友だちがいます。"
          a="友だちがたくさんでいます。"
          b="たくさんの友だちがいます。"
          c="友だちをたくさんがいます。"
          class="text-xl"
        />
      </div>
    </div>
  )
}
