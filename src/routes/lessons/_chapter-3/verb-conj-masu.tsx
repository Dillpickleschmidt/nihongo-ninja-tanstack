import { createFileRoute } from "@tanstack/solid-router"
import YouTubeVideo from "@/features/youtube/YouTube"
import GodanEndingChart from "@/features/routes-misc/chapter-3/verb-conj-masu/GodanEndingChart"
import Furigana from "@/components/text/Furigana"
import Romaji from "@/components/text/Romaji"
import IruEruExceptionsChart from "@/features/routes-misc/chapter-3/verb-conj-masu/IruEruExceptionsChart"
import IruEruPractice from "@/features/routes-misc/chapter-3/verb-conj-masu/IruEruPractice"
import IrregularPractice from "@/features/routes-misc/chapter-3/verb-conj-masu/IrregularPractice"

export const Route = createFileRoute("/lessons/_chapter-3/verb-conj-masu")({
  loader: async () => ({
    contentBox: {
      nextButtonLink: "/learn/chapter-2/janai",
    },
  }),
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div class="mb-32">
      {/* Header */}
      <header class="mx-auto max-w-3xl px-6 py-14 text-center">
        <h1 class="mb-3 text-4xl font-extrabold tracking-tight">
          Verb Conjugation –{" "}
          <span class="font-japanese text-emerald-500">ます</span> Form
        </h1>
        <div class="mx-auto mb-5 h-1 w-16 rounded bg-emerald-500" />
        <p class="text-muted-foreground text-lg">
          Learn how godan and ichidan verbs behave, and how to conjugate them
          into polite <span class="font-japanese">ます</span> form to describe
          daily habits and the future tense.
        </p>
      </header>

      <main class="mx-auto max-w-3xl space-y-12 px-6 leading-relaxed">
        {/* Intro */}
        <section>
          <p>
            Today, you will learn the differences between godan (
            <span class="font-japanese text-xl font-medium">る</span>) and
            ichidan (<span class="font-japanese text-xl font-medium">う</span>)
            verbs and will learn how to conjugate them to describe habitual
            actions and the future tense using the{" "}
            <span class="font-japanese text-xl font-semibold text-emerald-500">
              ます
            </span>{" "}
            form.
          </p>
          <YouTubeVideo
            videoId="ed4rmIY4mL0"
            title="【N5】Genki 1 Lesson 3 Grammar Made Clear | ます CONJUGATION SIMPLIFIED"
            credit="ToKini Andy"
          />
        </section>

        {/* Godan & Ichidan */}
        <section>
          <h2 class="text-center text-3xl font-bold">The Two Types of Verbs</h2>
          <p class="mt-4">
            In Japanese, verbs are divided into two main categories.
          </p>
          <div class="mt-6 flex justify-center text-3xl font-semibold">
            <p>Godan</p>
            <p class="mx-10 lg:mx-16">{"->"}</p>
            <p>Ichidan</p>
          </div>

          {/* Godan Verbs */}
          <h3 class="mt-9 text-2xl font-bold">Godan Verbs</h3>
          <p class="mt-4">
            Godan verbs are also known as <strong>U-verbs</strong> because they
            always end with an <span class="font-black">u</span> sound in their
            dictionary form.
          </p>
          <ul class="mt-4 list-inside list-disc">
            <li>
              <span class="font-japanese text-xl">聞く</span> (kik<u>u</u>) – to
              listen/ask
            </li>
            <li>
              <span class="font-japanese text-xl">読む</span> (yom<u>u</u>) – to
              read
            </li>
            <li>
              <span class="font-japanese text-xl">話す</span> (hanas<u>u</u>) –
              to speak
            </li>
          </ul>
          <p class="mt-4">
            Here are <strong>all possible endings</strong> a godan verb might
            have (just for reference):
          </p>
          <div class="mt-4 flex justify-center">
            <ul class="font-japanese flex max-w-lg flex-wrap items-center justify-center text-center text-4xl font-semibold [&>*]:mx-1">
              <li>う</li>
              <li>・</li>
              <li>く</li>
              <li>・</li>
              <li>ぐ</li>
              <li>・</li>
              <li>す</li>
              <li>・</li>
              <li>つ</li>
              <li>・</li>
              <li class="flex [&>*]:mx-1">
                <div>ぬ</div>
                <div>・</div>
              </li>
              <li>ぶ</li>
              <li>・</li>
              <li>む</li>
              <li>・</li>
              <li>
                る<span class="text-2xl">**</span>
              </li>
            </ul>
          </div>

          {/* Ichidan Verbs */}
          <h3 class="mt-9 text-2xl font-bold">Ichidan Verbs</h3>
          <p class="mt-4">
            Ichidan verbs are also called <strong>Ru‑verbs</strong> because they
            end with either <span class="font-japanese text-xl">いる</span>{" "}
            (iru) or <span class="font-japanese text-xl">える</span> (eru).
          </p>
          <ul class="mt-4 list-inside list-disc">
            <li>
              <span class="font-japanese text-xl">食べる</span> (tab<u>eru</u>)
              – to eat
            </li>
            <li>
              <span class="font-japanese text-xl">見る</span> (m<u>iru</u>) – to
              see/look/watch
            </li>
            <li>
              <span class="font-japanese text-xl">起きる</span> (ok<u>iru</u>) –
              to wake up
            </li>
          </ul>
          <p class="mt-4">
            Calling them just “ru‑verbs” is confusing, since some godan verbs
            also end in る (例: 乗る noru). It’s better to call them{" "}
            <strong>ichidan</strong>.
          </p>
        </section>

        {/* ます Form */}
        <section>
          <h2 class="mt-12 text-center text-3xl font-bold">
            The{" "}
            <span class="font-japanese font-semibold text-emerald-500">
              ます
            </span>{" "}
            Form: Habitual & Future
          </h2>

          <YouTubeVideo
            videoId="20gML75dUDw"
            title="Learn Japanese verb conjugation: The polite form MASU (ます形)"
            credit="KANJI - Link"
          />

          <p>
            The{" "}
            <span class="font-japanese text-xl font-semibold text-emerald-500">
              ます
            </span>{" "}
            form is a polite way to express verbs in Japanese. It can mean
            habitual or future depending on context.
          </p>
          <ol class="mt-4 ml-6 list-decimal space-y-6">
            <li>
              <p>
                <strong>Habitual Actions:</strong> It can describe regular or
                habitual actions.
              </p>
              <p class="mt-2">
                <span class="font-bold">Example: </span>
                <span class="font-japanese text-xl">
                  <Furigana furigana={<span class="text-sm">まいにち</span>}>
                    毎日
                  </Furigana>
                  日本語を勉強します。
                </span>
              </p>
              <p class="mt-1">→ I study Japanese every day.</p>
              <p class="text-muted-foreground text-sm italic">
                *This uses the を particle, which you’ll learn shortly.
              </p>
            </li>

            <li>
              <p>
                <strong>Future Tense:</strong> It’s also used to express future
                actions or intentions.
              </p>
              <p class="mt-2">
                <span class="font-bold">Example: </span>
                <span class="font-japanese text-xl">
                  <Furigana furigana={<span class="text-sm">あした</span>}>
                    明日
                  </Furigana>
                  <Romaji romaji="Tokyo" class="mr-2 ml-2">
                    東京
                  </Romaji>
                  に行きます。
                </span>
              </p>
              <p class="mt-1">→ I will go to Tokyo tomorrow.</p>
              <p class="text-muted-foreground text-sm italic">
                *This uses the に particle, which you’ll learn shortly.
              </p>
            </li>
          </ol>
        </section>

        {/* Godan Conjugation */}
        <section>
          <h3 class="mt-9 text-2xl font-bold">
            Creating the{" "}
            <span class="font-japanese text-emerald-500">ます</span> Form
            (Godan)
          </h3>
          <ol class="mt-4 ml-6 list-decimal space-y-2">
            <li>Identify the last syllable.</li>
            <li>Change it to its “i” counterpart.</li>
            <li>
              Add <span class="font-japanese text-emerald-500">ます</span>.
            </li>
          </ol>
          <GodanEndingChart />
          <p class="text-muted-foreground text-base italic">
            *Look at the hiragana chart: shift column「う」→「い」.
          </p>
          <h4 class="mt-6 text-center text-xl font-bold">Examples</h4>
          <ul class="mt-4 list-inside list-disc space-y-2">
            <li>聞く → 聞きます</li>
            <li>読む → 読みます</li>
            <li>話す → 話します</li>
          </ul>
        </section>

        {/* Ichidan Conjugation */}
        <section>
          <h3 class="mt-9 text-2xl font-bold">
            Creating the{" "}
            <span class="font-japanese text-emerald-500">ます</span> Form
            (Ichidan)
          </h3>
          <ol class="mt-4 ml-6 list-decimal space-y-2">
            <li>Remove the final る.</li>
            <li>
              Add <span class="font-japanese text-emerald-500">ます</span>.
            </li>
          </ol>
          <h4 class="mt-6 text-center text-xl font-bold">Examples</h4>
          <ul class="mt-4 list-inside list-disc space-y-2">
            <li>食べる → 食べます</li>
            <li>見る → 見ます</li>
            <li>起きる → 起きます</li>
          </ul>
        </section>

        {/* Practice */}
        <section>
          <h2 class="mt-12 text-center text-3xl font-bold">Practice</h2>
          <p>
            Conjugate the following verbs into{" "}
            <span class="font-japanese text-emerald-500">ます</span> form.
          </p>
          <IruEruPractice />
        </section>

        {/* Irregular Verbs */}
        <section>
          <h2 class="mt-12 text-center text-3xl font-bold">Irregular Verbs</h2>
          <p>
            In addition to godan and ichidan verbs, Japanese has a few irregular
            verbs:
          </p>
          <div class="mt-4 flex flex-col items-center">
            <h3 class="text-xl font-bold">
              <span class="font-japanese text-2xl">する</span> – to do
            </h3>
            <p>→ します</p>

            <h3 class="mt-6 text-xl font-bold">
              <Furigana furigana={<span class="text-base">く</span>}>
                来
              </Furigana>
              る – to come
            </h3>
            <p>→ 来ます</p>
          </div>
        </section>

        <section>
          <h4 class="mt-9 text-xl font-bold italic">Special Note on する</h4>
          <p class="mt-4">
            <span class="font-japanese">する</span> is especially useful: it
            combines with nouns to form compound verbs.
          </p>
          <ul class="mt-4 list-inside list-disc space-y-2">
            <li>勉強する → 勉強します (to study)</li>
            <li>練習する → 練習します (to practice)</li>
            <li>掃除する → 掃除します (to clean)</li>
          </ul>
        </section>

        <section>
          <h4 class="mt-9 text-xl font-bold">Non‑Ichidan iru/eru Verbs</h4>
          <p class="mt-4">
            Some verbs ending in いる or える actually behave as godan instead.
            There are only about ten of these; see chart:
          </p>
          <IruEruExceptionsChart />
          <p class="text-muted-foreground text-sm">Source: ToKini Andy</p>
        </section>

        {/* Harder practice */}
        <section>
          <h2 class="mt-12 text-center text-3xl font-bold">
            Practice (harder)
          </h2>
          <IrregularPractice />
        </section>

        {/* Note on tense */}
        <section>
          <h4 class="text-xl font-bold italic">
            Special Note on “Present Tense”
          </h4>
          <p class="mt-4">
            Some textbooks call{" "}
            <span class="font-japanese text-emerald-500">ます</span> “present
            tense.” It’s actually habitual/future. For progressive (“I am
            reading”), you need the て‑form: 読んでいます.
          </p>
        </section>

        <h3 class="mt-8 text-center">
          <Romaji romaji="Do your best!">
            <span class="font-japanese text-2xl font-semibold">
              がんばってください！
            </span>
          </Romaji>
        </h3>
      </main>
    </div>
  )
}
