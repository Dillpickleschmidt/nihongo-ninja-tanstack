// routes/lessons/_chapter-3/verb-conj-masu.tsx
import { createFileRoute } from "@tanstack/solid-router"
import YouTubeVideo from "@/features/youtube/YouTube"
import Furigana from "@/components/text/Furigana"
import Romaji from "@/components/text/Romaji"

export const Route = createFileRoute(
  "/lessons/_chapter-3/verb-conj-masu",
)({

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
            <ul class="font-japanese flex max-w-lg flex-wrap items-center justify-center text-center text-4xl font-semibold *:mx-1">
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
              <li class="flex *:mx-1">
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
          <GodanRuVerbsTable />
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

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

function GodanEndingChart() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead class="text-center">Ending</TableHead>
          <TableHead class="text-center">Changes to</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody class="text-center text-xl font-medium">
        <TableRow>
          <TableCell>
            <span class="font-japanese text-2xl">う</span> (u)
          </TableCell>
          <TableCell>
            <span class="font-japanese text-2xl">い</span> (i)
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <span class="font-japanese text-2xl">く</span> (ku)
          </TableCell>
          <TableCell>
            <span class="font-japanese text-2xl">き</span> (ki)
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <span class="font-japanese text-2xl">ぐ</span> (gu)
          </TableCell>
          <TableCell>
            <span class="font-japanese text-2xl">ぎ</span> (gi)
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <span class="font-japanese text-2xl">す</span> (su)
          </TableCell>
          <TableCell>
            <span class="font-japanese text-2xl">し</span> (shi)
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <span class="font-japanese text-2xl">つ</span> (tsu)
          </TableCell>
          <TableCell>
            <span class="font-japanese text-2xl">ち</span> (chi)
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <span class="font-japanese text-2xl">ぬ</span> (nu)
          </TableCell>
          <TableCell>
            <span class="font-japanese text-2xl">に</span> (ni)
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <span class="font-japanese text-2xl">ぶ</span> (bu)
          </TableCell>
          <TableCell>
            <span class="font-japanese text-2xl">び</span> (bi)
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <span class="font-japanese text-2xl">む</span> (mu)
          </TableCell>
          <TableCell>
            <span class="font-japanese text-2xl">み</span> (mi)
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <span class="font-japanese text-2xl">る</span> (ru)
          </TableCell>
          <TableCell>
            <span class="font-japanese text-2xl">り</span> (ri)
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  )
}

export default function GodanRuVerbsTable() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead class="text-center">Dictionary Form</TableHead>
          <TableHead class="text-center">
            <span class="font-japanese text-base font-semibold">ます</span> Form
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody class="text-center text-xl font-medium">
        <TableRow>
          <TableCell>
            <Romaji romaji="to return home">
              <span class="font-japanese text-2xl">
                <Furigana furigana={<span class="text-sm">かえ</span>}>
                  帰
                </Furigana>
                る
              </span>
            </Romaji>
          </TableCell>
          <TableCell>
            <Romaji romaji="(I) will return home">
              <span class="font-japanese text-2xl">
                <Furigana furigana={<span class="text-sm">かえ</span>}>
                  帰
                </Furigana>
                ります
              </span>
            </Romaji>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <Romaji romaji="to enter">
              <span class="font-japanese text-2xl">
                <Furigana furigana={<span class="text-sm">はい</span>}>
                  入
                </Furigana>
                る
              </span>
            </Romaji>
          </TableCell>
          <TableCell>
            <Romaji romaji="(I) will enter">
              <span class="font-japanese text-2xl">
                <Furigana furigana={<span class="text-sm">はい</span>}>
                  入
                </Furigana>
                ります
              </span>
            </Romaji>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <Romaji romaji="to run">
              <span class="font-japanese text-2xl">
                <Furigana furigana={<span class="text-sm">はし</span>}>
                  走
                </Furigana>
                る
              </span>
            </Romaji>
          </TableCell>
          <TableCell>
            <Romaji romaji="(I) will run">
              <span class="font-japanese text-2xl">
                <Furigana furigana={<span class="text-sm">はし</span>}>
                  走
                </Furigana>
                ります
              </span>
            </Romaji>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <Romaji romaji="to need">
              <span class="font-japanese text-2xl">
                <Furigana furigana={<span class="text-sm">い</span>}>
                  要
                </Furigana>
                る
              </span>
            </Romaji>
          </TableCell>
          <TableCell>
            <Romaji romaji="(I) will need">
              <span class="font-japanese text-2xl">
                <Furigana furigana={<span class="text-sm">い</span>}>
                  要
                </Furigana>
                ります
              </span>
            </Romaji>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <Romaji romaji="to limit">
              <span class="font-japanese text-2xl">
                <Furigana furigana={<span class="text-sm">かぎ</span>}>
                  限
                </Furigana>
                る
              </span>
            </Romaji>
          </TableCell>
          <TableCell>
            <Romaji romaji="(I) will limit">
              <span class="font-japanese text-2xl">
                <Furigana furigana={<span class="text-sm">かぎ</span>}>
                  限
                </Furigana>
                ります
              </span>
            </Romaji>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <Romaji romaji="to know">
              <span class="font-japanese text-2xl">
                <Furigana furigana={<span class="text-sm">し</span>}>
                  知
                </Furigana>
                る
              </span>
            </Romaji>
          </TableCell>
          <TableCell>
            <Romaji romaji="(I) will know">
              <span class="font-japanese text-2xl">
                <Furigana furigana={<span class="text-sm">し</span>}>
                  知
                </Furigana>
                ります
              </span>
            </Romaji>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <Romaji romaji="to cut">
              <span class="font-japanese text-2xl">
                <Furigana furigana={<span class="text-sm">き</span>}>
                  切
                </Furigana>
                る
              </span>
            </Romaji>
          </TableCell>
          <TableCell>
            <Romaji romaji="(I) will cut">
              <span class="font-japanese text-2xl">
                <Furigana furigana={<span class="text-sm">き</span>}>
                  切
                </Furigana>
                ります
              </span>
            </Romaji>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <Romaji romaji="to chat">
              <span class="font-japanese text-2xl">
                <Furigana furigana={<span class="text-sm">しゃべ</span>}>
                  喋
                </Furigana>
                る
              </span>
            </Romaji>
          </TableCell>
          <TableCell>
            <Romaji romaji="(I) will chat">
              <span class="font-japanese text-2xl">
                <Furigana furigana={<span class="text-sm">しゃべ</span>}>
                  喋
                </Furigana>
                ります
              </span>
            </Romaji>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <Romaji romaji="to kick">
              <span class="font-japanese text-2xl">
                <Furigana furigana={<span class="text-sm">け</span>}>
                  蹴
                </Furigana>
                る
              </span>
            </Romaji>
          </TableCell>
          <TableCell>
            <Romaji romaji="(I) will kick">
              <span class="font-japanese text-2xl">
                <Furigana furigana={<span class="text-sm">け</span>}>
                  蹴
                </Furigana>
                ります
              </span>
            </Romaji>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <Romaji romaji="to slide">
              <span class="font-japanese text-2xl">
                <Furigana furigana={<span class="text-sm">すべ</span>}>
                  滑
                </Furigana>
                る
              </span>
            </Romaji>
          </TableCell>
          <TableCell>
            <Romaji romaji="(I) will slide">
              <span class="font-japanese text-2xl">
                <Furigana furigana={<span class="text-sm">すべ</span>}>
                  滑
                </Furigana>
                ります
              </span>
            </Romaji>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  )
}

import { For } from "solid-js"
import { TextField, TextFieldInput } from "@/components/ui/text-field"
import WanaKanaWrapper from "@/features/wanakana/WanaKana"

const verbs1 = ["行く", "飲む", "話す", "読む", "食べる", "見る"]

function IruEruPractice() {
  const randomizedVerbs = [...verbs1].sort(() => Math.random() - 0.5)

  return (
    <div class="flex flex-col items-center text-2xl">
      <For each={randomizedVerbs}>
        {(verb) => (
          <div class="mb-4 flex items-center">
            <div class="font-japanese w-20">{verb}</div>
            <div class="mr-4">{"->"}</div>
            <TextField class="w-48">
              <WanaKanaWrapper enabled={true} watch={verb}>
                <TextFieldInput class="font-japanese text-xl" />
              </WanaKanaWrapper>
            </TextField>
          </div>
        )}
      </For>
    </div>
  )
}

const verbs2 = ["聞く", "起きる", "寝る", "する", "来る", "帰る", "勉強する"]

function IrregularPractice() {
  const randomizedVerbs = [...verbs2].sort(() => Math.random() - 0.5)

  return (
    <div class="flex flex-col items-center text-2xl">
      <For each={randomizedVerbs}>
        {(verb) => (
          <div class="mb-4 flex items-center">
            <div class="font-japanese w-28">{verb}</div>
            <div class="mr-4">{"->"}</div>
            <TextField class="w-48">
              <WanaKanaWrapper enabled={true} watch={verb}>
                <TextFieldInput class="font-japanese text-xl" />
              </WanaKanaWrapper>
            </TextField>
          </div>
        )}
      </For>
    </div>
  )
}
