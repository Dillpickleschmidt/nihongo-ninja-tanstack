import { createFileRoute } from "@tanstack/solid-router"
import Furigana from "@/components/text/Furigana"
import SelectText from "@/components/text/MultipleChoiceText"

export const Route = createFileRoute(
  "/lessons/_chapter-4/polite-past-tense",
)({
  component: PolitePastTense,
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

function PolitePastTense() {
  return (
    <div class="mb-32">
      <h1 class="px-12 pb-6 pt-6 text-center text-4xl font-semibold sm:pt-12 lg:px-28 lg:pt-24">
        Past Tense in Polite Japanese
      </h1>

      <div class="space-y-6 px-8 sm:px-16 md:px-24">
        <div>
          <p>
            Today we'll learn how to talk about past events in polite Japanese,
            starting with the simplest form.
          </p>
        </div>

        <h3 class="!mt-9 text-2xl font-bold">1. です → でした</h3>
        <p>This basic transformation lets us describe past states:</p>

        <div class="w-full space-y-4 rounded-lg border-2 border-border px-3 py-5 text-center">
          <div class="grid grid-cols-3 gap-4">
            <div>
              <span class="font-japanese text-xl">
                学生<span class="text-sky-400">です</span>
              </span>
              <span class="mx-2">→</span>
              <span class="font-japanese text-xl">
                学生<span class="text-orange-400">でした</span>
              </span>
            </div>
            <div>
              <span class="font-japanese text-xl">
                先生<span class="text-sky-400">です</span>
              </span>
              <span class="mx-2">→</span>
              <span class="font-japanese text-xl">
                先生<span class="text-orange-400">でした</span>
              </span>
            </div>
            <div>
              <span class="font-japanese text-xl">
                大学生<span class="text-sky-400">です</span>
              </span>
              <span class="mx-2">→</span>
              <span class="font-japanese text-xl">
                大学生<span class="text-orange-400">でした</span>
              </span>
            </div>
          </div>
        </div>

        <div class="mr-[5.75rem] rounded-2xl border-2 border-dashed border-muted bg-card p-4 shadow-md">
          <PortraitIcon src="/img/student.png" />
          <p class="font-japanese text-xl">専攻は何ですか。</p>
          <p class="text-base text-muted-foreground">What's your major?</p>
        </div>
        <div class="ml-24 rounded-2xl border-2 border-dashed border-muted bg-card p-4 shadow-md">
          <PortraitIcon src="/img/guru.png" class="float-end" />
          <p class="font-japanese text-xl">
            <Furigana furigana={<span class="text-xs">きょねん</span>}>
              去年
            </Furigana>
            は経済<span class="text-orange-400">でした</span>。
            <Furigana furigana={<span class="text-xs">ことし</span>}>
              今年
            </Furigana>
            は政治
            <span class="text-sky-400">です</span>。
          </p>
          <p class="text-base text-muted-foreground">
            Last year it was Economics. This year it's Political Science.
          </p>
        </div>

        <h3 class="!mt-9 text-2xl font-bold">2. ます → ました</h3>
        <p>
          Now let's look at how to describe past actions{" "}
          <span class="text-muted-foreground">(verbs)</span>:
        </p>

        <div class="w-full space-y-4 rounded-lg border-2 border-border px-3 py-5 text-center">
          <div class="grid grid-cols-3 gap-4">
            <div>
              <span class="font-japanese text-xl">
                行き<span class="text-sky-400">ます</span>
              </span>
              <span class="mx-2">→</span>
              <span class="font-japanese text-xl">
                行き<span class="text-orange-400">ました</span>
              </span>
            </div>
            <div>
              <span class="font-japanese text-xl">
                食べ<span class="text-sky-400">ます</span>
              </span>
              <span class="mx-2">→</span>
              <span class="font-japanese text-xl">
                食べ<span class="text-orange-400">ました</span>
              </span>
            </div>
            <div>
              <span class="font-japanese text-xl">
                飲み<span class="text-sky-400">ます</span>
              </span>
              <span class="mx-2">→</span>
              <span class="font-japanese text-xl">
                飲み<span class="text-orange-400">ました</span>
              </span>
            </div>
          </div>
        </div>

        <div class="mr-[5.75rem] rounded-2xl border-2 border-dashed border-muted bg-card p-4 shadow-md">
          <PortraitIcon src="/img/student.png" />
          <p class="font-japanese text-xl">
            昨日、図書館に行き<span class="text-orange-400">ました</span>か。
          </p>
          <p class="text-base text-muted-foreground">
            Did you go to the library yesterday?
          </p>
        </div>
        <div class="ml-24 rounded-2xl border-2 border-dashed border-muted bg-card p-4 shadow-md">
          <PortraitIcon src="/img/guru.png" class="float-end" />
          <p class="font-japanese text-xl">
            はい、図書館で勉強<span class="text-orange-400">しました</span>
            。それから、カフェでコーヒーを飲み
            <span class="text-orange-400">ました</span>。
          </p>
          <p class="text-base text-muted-foreground">
            Yes, I studied at the library. After that, I drank coffee at a cafe.
          </p>
        </div>

        <h3 class="!mt-9 text-2xl font-bold">
          3. Negative Past: ません → ませんでした
        </h3>
        <p>For describing actions that didn't happen:</p>

        <div class="w-full space-y-4 rounded-lg border-2 border-border px-3 py-5 text-center">
          <div class="grid grid-cols-2 gap-4">
            <div>
              <span class="font-japanese text-xl">
                飲み<span class="text-sky-400">ません</span>
              </span>
              <span class="mx-2">→</span>
              <span class="font-japanese text-xl">
                飲み<span class="text-orange-400">ませんでした</span>
              </span>
            </div>
            <div>
              <span class="font-japanese text-xl">
                見<span class="text-sky-400">ません</span>
              </span>
              <span class="mx-2">→</span>
              <span class="font-japanese text-xl">
                見<span class="text-orange-400">ませんでした</span>
              </span>
            </div>
          </div>
        </div>

        <div class="rounded-lg bg-card/50 p-4">
          <p class="font-medium">Quick Note:</p>
          <p class="mt-2">
            You might sometimes hear variations like{" "}
            <span class="font-japanese">行かなかった</span> instead of{" "}
            <span class="font-japanese">行きませんでした</span>. Don't worry
            about these for now - we'll learn more about short forms in later
            chapters!
          </p>
        </div>

        <div class="mr-[5.75rem] rounded-2xl border-2 border-dashed border-muted bg-card p-4 shadow-md">
          <PortraitIcon src="/img/student.png" />
          <p class="font-japanese text-xl">昨日、映画を見ましたか。</p>
          <p class="text-base text-muted-foreground">
            Did you watch a movie yesterday?
          </p>
        </div>
        <div class="ml-24 rounded-2xl border-2 border-dashed border-muted bg-card p-4 shadow-md">
          <PortraitIcon src="/img/guru.png" class="float-end" />
          <p class="font-japanese text-xl">
            いいえ、見<span class="text-orange-400">ませんでした</span>
            。図書館で勉強<span class="text-orange-400">しました</span>。
          </p>
          <p class="text-base text-muted-foreground">
            No, I didn't watch a movie. I studied at the library.
          </p>
        </div>
      </div>

      <div class="space-y-4 px-12 pb-32 leading-8 sm:px-16 md:px-24 [&>*]:space-y-4">
        <h3 class="pt-12 text-center text-3xl font-bold">Practice</h3>
        <p class="text-center text-base italic text-muted-foreground">
          *Choose the correct form for each situation*
        </p>

        <p>
          Your friend asks what your major was last year. How would you say "It
          was Economics"?
        </p>
        <SelectText
          answer="経済でした。"
          a="経済です。"
          b="経済でした。"
          c="経済だでした。"
          d="経済ました。"
          class="text-xl"
        />

        <p>
          You want to say you didn't study Japanese yesterday. Which is correct?
        </p>
        <SelectText
          answer="日本語を勉強しませんでした。"
          a="日本語を勉強しますでした。"
          b="日本語を勉強でした。"
          c="日本語を勉強しませんでした。"
          d="日本語を勉強じゃありませんでした。"
          class="text-xl"
        />

        <p>
          Complete this conversation: "昨日の晩ご飯は何を___？" (What did you
          eat for dinner yesterday?)
        </p>
        <SelectText
          answer="食べましたか"
          a="食べますか"
          b="食べましたか"
          c="食べでしたか"
          d="食べませんでしたか"
          class="text-xl"
        />

        <p>
          Your friend asks if you watched a movie last week. How would you say
          "No, I didn't watch it"?
        </p>
        <SelectText
          answer="いいえ、見ませんでした。"
          a="いいえ、見ましたでした。"
          b="いいえ、見ませんでした。"
          c="いいえ、見でした。"
          d="いいえ、見ますでした。"
          class="text-xl"
        />
      </div>
    </div>
  )
}
