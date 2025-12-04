// routes/lessons/_chapter-2/mo-particle.tsx
import { createFileRoute } from "@tanstack/solid-router"
import Furigana from "@/components/text/Furigana"
import SelectText from "@/components/text/MultipleChoiceText"
import { TextField, TextFieldInput } from "@/components/ui/text-field"
import YouTubeVideo from "@/features/youtube/YouTube"

export const Route = createFileRoute("/_home/lessons/_chapter-2/mo-particle")({
  loader: async () => ({
    contentBox: { nextButtonLink: "/lessons/_chapter-2/janai" },
  }),
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div class="mb-32">
      {/* --- Consistent Header --- */}
      <header class="mx-auto max-w-3xl px-6 py-14 text-center">
        <h1 class="mb-3 text-4xl font-extrabold tracking-tight">
          How to say <span class="font-bold italic">also</span> with{" "}
          <span class="font-japanese text-purple-400">も</span>
        </h1>
        <div class="mx-auto mb-6 h-1 w-20 rounded bg-emerald-400" />
        <p class="text-muted-foreground mx-auto max-w-2xl text-lg leading-relaxed">
          The inclusive particle <span class="font-japanese">も</span> — meaning{" "}
          <em class="font-bold">also</em>, <em class="font-bold">too</em>, or{" "}
          <em class="font-bold">as well</em>.
        </p>
      </header>

      {/* --- Main --- */}
      <main class="mx-auto max-w-3xl space-y-16 px-6 leading-relaxed">
        {/* Intro */}
        <section class="space-y-6">
          <p>
            The{" "}
            <span class="font-japanese text-xl font-semibold text-purple-400">
              も
            </span>{" "}
            (mo) particle in Japanese is used to indicate that something is
            similar or in addition to something else. It translates to{" "}
            <span class="font-bold italic">also</span>,{" "}
            <span class="font-bold italic">too</span>, or{" "}
            <span class="font-bold italic">as well</span> in English.
            Understanding where to place{" "}
            <span class="font-japanese text-xl font-semibold text-purple-400">
              も
            </span>{" "}
            in a sentence is crucial for conveying the correct meaning.
          </p>

          {/* Formula Box */}
          <div class="flex w-full flex-col items-center">
            <div class="rounded-lg border-2 border-orange-400 p-5">
              <div class="flex items-center">
                <p class="mx-2 text-2xl">
                  A <span class="font-japanese font-bold text-sky-400">は</span>{" "}
                  X<span class="font-japanese">です。</span>
                </p>
                <p class="mx-2 text-xl">{"->"} A is X.</p>
              </div>
              <div class="mt-2 flex items-center">
                <p class="mx-2 text-2xl">
                  B{" "}
                  <span class="font-japanese font-bold text-purple-400">
                    も
                  </span>{" "}
                  X<span class="font-japanese">です。</span>
                </p>
                <p class="mx-2 text-xl">
                  {"->"} B is{" "}
                  <span class="font-medium text-purple-400">also</span> X.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Video */}
        <YouTubeVideo
          videoId="M27oQwq4jqg"
          title="「も」- The Inclusive Particle MO - JLPT N5 Grammar ┃ Genki Lesson 2"
          credit="Game Gengo ゲーム言語"
        />

        {/* Basic Usage */}
        <section>
          <h3 class="text-2xl font-bold">Basic Usage</h3>
          <ol class="!mt-4 ml-6 list-decimal space-y-2">
            <li>
              <span>When adding similar information:</span>
              <ul class="list-inside list-disc">
                <li class="mt-2">
                  A:{" "}
                  <span class="font-japanese text-xl">
                    <Furigana furigana={<span class="text-xs">わたし</span>}>
                      私
                    </Furigana>
                    <span class="font-semibold text-sky-400">は</span>
                    <Furigana furigana={<span class="text-xs">がくせい</span>}>
                      学生
                    </Furigana>
                    です。
                  </span>{" "}
                  {"->"} I am a student.
                </li>
                <li class="mt-2">
                  B:{" "}
                  <span class="font-japanese text-xl">
                    <Furigana furigana={<span class="text-xs">わたし</span>}>
                      私
                    </Furigana>
                    <span class="font-semibold text-purple-400">も</span>
                    <Furigana furigana={<span class="text-xs">がくせい</span>}>
                      学生
                    </Furigana>
                    です。
                  </span>{" "}
                  {"->"} I am{" "}
                  <span class="font-semibold text-purple-400">also</span> a
                  student.
                </li>
              </ul>
            </li>
            <li>
              <span>When listing multiple similar items:</span>
              <ul class="list-inside list-disc">
                <li class="mt-2">
                  <span class="font-japanese text-xl">
                    <Furigana furigana={<span class="text-sm">ねこ</span>}>
                      猫
                    </Furigana>
                    <span class="font-semibold text-purple-400">も</span>
                    <Furigana furigana={<span class="text-sm">いぬ</span>}>
                      犬
                    </Furigana>
                    <span class="font-semibold text-purple-400">も</span>
                    <Furigana furigana={<span class="text-sm">す</span>}>
                      好
                    </Furigana>
                    きです。
                  </span>{" "}
                  {"->"} <span class="text-muted-foreground">(I)</span> like{" "}
                  <em>both</em> cats <em>and</em> dogs.
                </li>
              </ul>
            </li>
          </ol>

          <p class="mt-4 text-center text-base italic">
            **The particle <span class="font-japanese not-italic">も</span> must
            be placed directly after the noun it is modifying.**
          </p>
        </section>

        {/* Example Sentences */}
        <section class="space-y-4">
          <h4 class="text-xl font-semibold italic">Example Sentences</h4>
          <ol class="!mt-3 list-inside list-decimal">
            <li>
              <ul class="ml-6 list-inside list-disc">
                <li>
                  <span class="font-japanese text-xl">
                    <Furigana furigana={<span class="text-sm">たなか</span>}>
                      田中
                    </Furigana>
                    は
                    <Furigana
                      furigana={<span class="text-sm">にほんじん</span>}
                    >
                      日本人
                    </Furigana>
                    です。
                  </span>{" "}
                  {"->"} Tanaka is Japanese.
                </li>
                <li class="mt-1">
                  <span class="font-japanese text-xl">
                    <Furigana furigana={<span class="text-sm">いしだ</span>}>
                      石田
                    </Furigana>
                    <span class="text-purple-400">も</span>
                    <Furigana
                      furigana={<span class="text-sm">にほんじん</span>}
                    >
                      日本人
                    </Furigana>
                    です。
                  </span>
                  {"->"} Ishida is <span class="text-purple-400">also</span>{" "}
                  Japanese.
                </li>
              </ul>
            </li>
            <li>
              <ul class="ml-6 list-inside list-disc">
                <li>
                  <span class="font-japanese text-xl">
                    これは
                    <Furigana furigana={<span class="text-sm">わたし</span>}>
                      私
                    </Furigana>
                    の
                    <Furigana furigana={<span class="text-sm">かばん</span>}>
                      鞄
                    </Furigana>
                    です。
                  </span>{" "}
                  {"->"} This is my bag.
                </li>
                <li class="mt-1">
                  <span class="font-japanese text-xl">
                    これ
                    <span class="text-purple-400">も</span>
                    <Furigana furigana={<span class="text-sm">わたし</span>}>
                      私
                    </Furigana>
                    の
                    <Furigana furigana={<span class="text-sm">かばん</span>}>
                      鞄
                    </Furigana>
                    です。
                  </span>{" "}
                  {"->"} This is <span class="text-purple-400">also</span> my
                  bag.
                </li>
              </ul>
            </li>
            <li>
              <ul class="ml-6 list-inside list-disc">
                <li>
                  <span class="font-japanese text-xl">
                    この
                    <Furigana furigana={<span class="text-sm">かばん</span>}>
                      鞄
                    </Furigana>
                    は
                    <Furigana furigana={<span class="text-sm">たなか</span>}>
                      田中
                    </Furigana>
                    さんの
                    <Furigana furigana={<span class="text-sm">かばん</span>}>
                      鞄
                    </Furigana>
                    です。
                  </span>{" "}
                  {"->"} This bag is Tanaka's bag.
                </li>
                <li class="mt-1">
                  <span class="font-japanese text-xl">
                    あの
                    <Furigana furigana={<span class="text-sm">かばん</span>}>
                      鞄
                    </Furigana>
                    <span class="text-purple-400">も</span>
                    <Furigana furigana={<span class="text-sm">たなか</span>}>
                      田中
                    </Furigana>
                    さんの
                    <Furigana furigana={<span class="text-sm">かばん</span>}>
                      鞄
                    </Furigana>
                    です。
                  </span>{" "}
                  {"->"} That bag (over there) is{" "}
                  <span class="text-purple-400">also</span> Tanaka's bag.
                </li>
              </ul>
            </li>
          </ol>
        </section>

        {/* Positioning */}
        <section class="space-y-4">
          <h3 class="text-center text-2xl font-bold">
            Positioning{" "}
            <span class="font-japanese text-[1.6rem] font-bold text-purple-400">
              も
            </span>{" "}
            in Sentences
          </h3>
          <p>
            The position of{" "}
            <span class="font-japanese text-xl font-semibold text-purple-400">
              も
            </span>{" "}
            in a sentence can change its meaning. Compare:
          </p>
          <ol class="!mt-4 ml-6 list-decimal space-y-2">
            <li>
              <span class="font-japanese text-xl">
                <Furigana furigana={<span class="text-xs">わたし</span>}>
                  私
                </Furigana>
                <span class="font-japanese font-semibold text-purple-400">
                  も
                </span>
                <Furigana furigana={<span class="text-xs">せんこう</span>}>
                  専攻
                </Furigana>
                <span class="font-japanese font-semibold text-sky-400">は</span>
                <Furigana furigana={<span class="text-xs">にほんご</span>}>
                  日本語
                </Furigana>
                です。
              </span>{" "}
              {"->"} I'm <span class="font-semibold text-purple-400">also</span>{" "}
              a Japanese major.{" "}
            </li>
            <li>
              <span class="font-japanese text-xl">
                <Furigana furigana={<span class="text-xs">わたし</span>}>
                  私
                </Furigana>
                <span class="font-japanese font-semibold text-sky-400">は</span>
                <Furigana furigana={<span class="text-xs">にほんご</span>}>
                  日本語
                </Furigana>
                <span class="font-japanese font-semibold text-purple-400">
                  も
                </span>
                <Furigana furigana={<span class="text-xs">せんこう</span>}>
                  専攻
                </Furigana>
                です。
              </span>{" "}
              {"->"} As for me, I{" "}
              <span class="font-semibold text-purple-400">also</span> have a
              Japanese major.
            </li>
          </ol>
          <p class="text-muted-foreground text-base italic">
            *Place <span class="font-japanese">も</span> after the noun there
            are more than one of.
          </p>
        </section>

        {/* When not to use も */}
        <section class="space-y-4">
          <h3 class="text-center text-2xl font-bold">
            When not to use{" "}
            <span class="font-japanese text-[1.6rem] font-bold text-purple-400">
              も
            </span>
          </h3>
          <p>
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

          <div class="flex w-full flex-col items-center space-y-3">
            <p class="font-japanese mx-4 text-2xl line-through">
              <Furigana furigana={<span class="text-base">だれ</span>}>
                誰
              </Furigana>
              <span class="font-bold text-purple-400">も</span>
              <Furigana furigana={<span class="text-base">き</span>}>
                来
              </Furigana>
              ますか。
            </p>
            <div class="flex items-end">
              <p class="font-japanese mx-4 text-2xl">
                <Furigana furigana={<span class="text-base">だれ</span>}>
                  誰
                </Furigana>
                <span class="font-bold text-green-500">が</span>
                <Furigana furigana={<span class="text-base">き</span>}>
                  来
                </Furigana>
                ますか。
              </p>
              <p class="mx-4 text-xl">{"->"} Who is coming?</p>
            </div>
          </div>

          <div class="text-muted-foreground">
            <p>If you want to specifically say "who else", you'd use ほかに.</p>
            <ul class="mt-2 list-inside list-disc">
              <li>
                <span class="font-japanese text-xl">ほかに誰が来ますか。</span>{" "}
                {"->"} Who else is coming?
              </li>
            </ul>
          </div>
        </section>

        {/* Practice Multiple Choice */}
        <PracticeSection />

        {/* Fill in Blanks */}
        <FillInBlanks />

        {/* Summary */}
        <section>
          <h2 class="pt-10 text-center text-2xl font-bold">Summary</h2>
          <ul class="mt-3 ml-6 list-disc space-y-2">
            <li>
              <span class="font-japanese text-purple-400">も</span> = "
              <strong>also / too / as well</strong>"
            </li>
            <li>Place it directly after the noun it modifies</li>
            <li>Used for adding, comparing, or listing things</li>
            <li>
              Avoid in direct questions with{" "}
              <span class="font-japanese">誰</span>,{" "}
              <span class="font-japanese">何</span>,{" "}
              <span class="font-japanese">どこ</span>
            </li>
          </ul>
        </section>
      </main>
    </div>
  )
}

function PracticeSection() {
  return (
    <section class="space-y-4">
      <h3 class="pt-12 text-center text-3xl font-bold">Practice</h3>

      <p>
        Someone asks if Tanaka likes dogs. You want to say "yes, and he also
        likes cats."
      </p>
      <p class="text-muted-foreground text-base">
        *<span class="font-japanese">猫</span> (ねこ) {"->"} cat
      </p>
      <SelectText
        answer="はい、田中さんは猫も好きです。"
        a="はい、田中さんも猫が好きです。"
        b="はい、田中さんも猫は好きです。"
        c="はい、田中さんは猫も好きです。"
        d="はい、田中さんは猫が好きです。"
        class="text-xl"
      />

      <p>Someone asks who is coming to the party.</p>
      <SelectText
        answer="誰が来ますか。"
        a="誰が来ますか。"
        b="誰も来ますか。"
        class="text-xl"
      />

      <p>
        Which sentence correctly states that both your brother and sister like
        shoes?
      </p>
      <SelectText
        answer="お兄さんも妹も靴が好きです。"
        a="お兄さんも妹も靴が好きです。"
        b="お兄さんも妹は靴が好きです。"
        c="お兄さんも妹も靴は好きです。"
        d="お兄さんも妹は靴は好きです。"
        class="text-xl"
      />
    </section>
  )
}

function FillInBlanks() {
  return (
    <section class="space-y-6 px-2">
      <h4 class="!mt-6 text-xl font-bold">
        Where can <span class="font-japanese">も</span> appear in a sentence?
        Fill in the blanks. If <span class="font-japanese">も</span> cannot be
        used, then write an X.
      </h4>
      <div class="font-japanese space-y-6 text-xl">
        <div class="flex flex-wrap items-center gap-2">
          あれ
          <TextField class="inline-block w-12">
            <TextFieldInput class="text-center text-xl" />
          </TextField>
          <Furigana furigana={<span class="text-sm">たか</span>}>高</Furigana>い
          <TextField class="inline-block w-12">
            <TextFieldInput class="text-center text-xl" />
          </TextField>
          です。
        </div>
        <p class="text-muted-foreground text-sm">
          *<span class="font-japanese">高い</span> {"->"} expensive
        </p>

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

        <div class="flex flex-wrap items-center gap-2">
          あそこ
          <TextField class="inline-block w-12">
            <TextFieldInput class="text-center text-xl" />
          </TextField>
          コンビニです。
        </div>
        <p class="text-muted-foreground text-sm">
          *<span class="font-japanese">コンビニ</span> {"->"} convenience store
        </p>

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
    </section>
  )
}
