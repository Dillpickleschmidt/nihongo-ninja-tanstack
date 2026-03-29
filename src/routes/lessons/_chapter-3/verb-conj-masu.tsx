import { createFileRoute } from "@tanstack/solid-router"
import { For } from "solid-js"
import YouTubeVideo from "@/features/youtube/YouTube"
import Furigana from "@/components/text/Furigana"
import Romaji from "@/components/text/Romaji"
import { TextField, TextFieldInput } from "@/components/ui/text-field"
import WanaKanaWrapper from "@/features/wanakana/WanaKana"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
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
  "/lessons/_chapter-3/verb-conj-masu",
)({
  component: VerbConjMasu,
})

function VerbConjMasu() {
  return (
    <div class="relative pb-32">
      {/* Background character */}
      <span class="pointer-events-none absolute top-8 left-24 select-none font-japanese text-[10rem] leading-none text-white/[0.03] sm:top-11 sm:left-auto sm:right-8 sm:text-[11rem]">
        動
      </span>

      <LessonHeader
        chapter="Chapter 3 · Grammar"
        title={
          <>
            Verb Conjugation –{" "}
            <span class="font-japanese text-emerald-500">ます</span> Form
          </>
        }
        subtitle="Godan vs. ichidan verbs, and how to make them polite."
      >
        <OverviewItem>The two types of Japanese verbs</OverviewItem>
        <OverviewItem>
          Conjugating into{" "}
          <span class="font-japanese font-semibold text-emerald-500">ます</span>{" "}
          form
        </OverviewItem>
        <OverviewItem>Irregular verbs: する and 来る</OverviewItem>
      </LessonHeader>

      <div class="space-y-14 px-8">
        {/* Intro */}
        <div class="space-y-4">
          <p class="leading-relaxed text-white/70">
            Today, you will learn the differences between godan (
            <span class="font-japanese text-xl font-medium text-white/90">
              る
            </span>
            ) and ichidan (
            <span class="font-japanese text-xl font-medium text-white/90">
              う
            </span>
            ) verbs and will learn how to conjugate them to describe habitual
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
        </div>

        {/* The Two Types */}
        <div class="space-y-6">
          <SectionLabel>The two types of verbs</SectionLabel>
          <p class="leading-relaxed text-white/70">
            In Japanese, verbs are divided into two main categories.
          </p>
          <div class="grid grid-cols-2 gap-3">
            <div class="rounded-lg bg-white/[0.04] p-4 text-center">
              <p class="text-2xl font-semibold text-white/90">Godan</p>
              <p class="mt-1 text-sm text-white/40">U-verbs</p>
            </div>
            <div class="rounded-lg bg-white/[0.04] p-4 text-center">
              <p class="text-2xl font-semibold text-white/90">Ichidan</p>
              <p class="mt-1 text-sm text-white/40">Ru-verbs</p>
            </div>
          </div>
        </div>

        {/* Godan Verbs */}
        <div class="space-y-4">
          <SectionLabel>Godan verbs</SectionLabel>
          <p class="leading-relaxed text-white/70">
            Godan verbs are also known as{" "}
            <span class="font-semibold text-white/90">U-verbs</span> because
            they always end with an{" "}
            <span class="font-black text-white/90">u</span> sound in their
            dictionary form.
          </p>
          <div class="space-y-2">
            <div class="flex items-baseline justify-between gap-4 rounded-lg bg-white/[0.04] px-4 py-3">
              <span class="font-japanese text-lg text-white/90">聞く</span>
              <span class="text-sm text-white/40">
                (kik<u>u</u>) – to listen/ask
              </span>
            </div>
            <div class="flex items-baseline justify-between gap-4 rounded-lg bg-white/[0.04] px-4 py-3">
              <span class="font-japanese text-lg text-white/90">読む</span>
              <span class="text-sm text-white/40">
                (yom<u>u</u>) – to read
              </span>
            </div>
            <div class="flex items-baseline justify-between gap-4 rounded-lg bg-white/[0.04] px-4 py-3">
              <span class="font-japanese text-lg text-white/90">話す</span>
              <span class="text-sm text-white/40">
                (hanas<u>u</u>) – to speak
              </span>
            </div>
          </div>

          <p class="leading-relaxed text-white/70">
            Here are{" "}
            <span class="font-semibold text-white/90">
              all possible endings
            </span>{" "}
            a godan verb might have (just for reference):
          </p>
          <div class="flex justify-center">
            <div class="font-japanese flex max-w-lg flex-wrap items-center justify-center text-center text-3xl font-semibold text-white/80 *:mx-1">
              <span>う</span>
              <span class="text-white/20">・</span>
              <span>く</span>
              <span class="text-white/20">・</span>
              <span>ぐ</span>
              <span class="text-white/20">・</span>
              <span>す</span>
              <span class="text-white/20">・</span>
              <span>つ</span>
              <span class="text-white/20">・</span>
              <span>ぬ</span>
              <span class="text-white/20">・</span>
              <span>ぶ</span>
              <span class="text-white/20">・</span>
              <span>む</span>
              <span class="text-white/20">・</span>
              <span>
                る<span class="text-lg text-white/40">**</span>
              </span>
            </div>
          </div>
        </div>

        {/* Ichidan Verbs */}
        <div class="space-y-4">
          <SectionLabel>Ichidan verbs</SectionLabel>
          <p class="leading-relaxed text-white/70">
            Ichidan verbs are also called{" "}
            <span class="font-semibold text-white/90">Ru‑verbs</span> because
            they end with either -iru or -eru.
          </p>
          <div class="space-y-2">
            <div class="flex items-baseline justify-between gap-4 rounded-lg bg-white/[0.04] px-4 py-3">
              <span class="font-japanese text-lg text-white/90">食べる</span>
              <span class="text-sm text-white/40">
                (tab<u>eru</u>) – to eat
              </span>
            </div>
            <div class="flex items-baseline justify-between gap-4 rounded-lg bg-white/[0.04] px-4 py-3">
              <span class="font-japanese text-lg text-white/90">見る</span>
              <span class="text-sm text-white/40">
                (m<u>iru</u>) – to see/look/watch
              </span>
            </div>
            <div class="flex items-baseline justify-between gap-4 rounded-lg bg-white/[0.04] px-4 py-3">
              <span class="font-japanese text-lg text-white/90">起きる</span>
              <span class="text-sm text-white/40">
                (ok<u>iru</u>) – to wake up
              </span>
            </div>
          </div>
          <p class="text-sm text-white/50">
            Calling them just "ru‑verbs" is confusing, since some godan verbs
            also end in る (例: 乗る noru). It's better to call them{" "}
            <span class="font-semibold text-white/70">ichidan</span>.
          </p>
        </div>

        {/* ます Form */}
        <div class="space-y-4">
          <SectionLabel>
            The{" "}
            <span class="font-japanese text-emerald-500">ます</span> form:
            habitual & future
          </SectionLabel>

          <YouTubeVideo
            videoId="20gML75dUDw"
            title="Learn Japanese verb conjugation: The polite form MASU (ます形)"
            credit="KANJI - Link"
          />

          <p class="leading-relaxed text-white/70">
            The{" "}
            <span class="font-japanese text-xl font-semibold text-emerald-500">
              ます
            </span>{" "}
            form is a polite way to express verbs in Japanese. It can mean
            habitual or future depending on context.
          </p>

          <div class="space-y-3">
            <div class="rounded-lg bg-white/[0.04] p-4">
              <p class="mb-2 text-xs font-semibold uppercase tracking-wider text-white/30">
                Habitual actions
              </p>
              <p class="font-japanese text-lg text-white/80">
                <Furigana furigana={<span class="text-sm">まいにち</span>}>
                  毎日
                </Furigana>
                日本語を勉強します。
              </p>
              <p class="mt-1 text-sm text-white/40">
                I study Japanese every day.
              </p>
              <p class="mt-1 text-xs italic text-white/30">
                *This uses the を particle, which you'll learn shortly.
              </p>
            </div>
            <div class="rounded-lg bg-white/[0.04] p-4">
              <p class="mb-2 text-xs font-semibold uppercase tracking-wider text-white/30">
                Future tense
              </p>
              <p class="font-japanese text-lg text-white/80">
                <Furigana furigana={<span class="text-sm">あした</span>}>
                  明日
                </Furigana>
                <Romaji romaji="Tokyo" class="mr-2 ml-2">
                  東京
                </Romaji>
                に行きます。
              </p>
              <p class="mt-1 text-sm text-white/40">
                I will go to Tokyo tomorrow.
              </p>
              <p class="mt-1 text-xs italic text-white/30">
                *This uses the に particle, which you'll learn shortly.
              </p>
            </div>
          </div>
        </div>

        {/* Godan Conjugation */}
        <div class="space-y-4">
          <SectionLabel>
            Creating the{" "}
            <span class="font-japanese text-emerald-500">ます</span> form
            (godan)
          </SectionLabel>
          <ol class="space-y-2 leading-relaxed text-white/70">
            <li>
              <span class="font-semibold text-white/90">1.</span> Identify the
              last syllable.
            </li>
            <li>
              <span class="font-semibold text-white/90">2.</span> Change it to
              its "i" counterpart.
            </li>
            <li>
              <span class="font-semibold text-white/90">3.</span> Add{" "}
              <span class="font-japanese text-emerald-500">ます</span>.
            </li>
          </ol>
          <GodanEndingChart />
          <p class="text-sm italic text-white/40">
            *Look at the hiragana chart: shift column「う」→「い」.
          </p>

          <div class="space-y-2">
            <p class="text-sm font-medium text-white/40">Examples</p>
            <div class="grid gap-2 sm:grid-cols-3">
              <div class="rounded-lg bg-white/[0.04] px-4 py-3 text-center font-japanese text-lg text-white/80">
                聞く → 聞きます
              </div>
              <div class="rounded-lg bg-white/[0.04] px-4 py-3 text-center font-japanese text-lg text-white/80">
                読む → 読みます
              </div>
              <div class="rounded-lg bg-white/[0.04] px-4 py-3 text-center font-japanese text-lg text-white/80">
                話す → 話します
              </div>
            </div>
          </div>
        </div>

        {/* Ichidan Conjugation */}
        <div class="space-y-4">
          <SectionLabel>
            Creating the{" "}
            <span class="font-japanese text-emerald-500">ます</span> form
            (ichidan)
          </SectionLabel>
          <ol class="space-y-2 leading-relaxed text-white/70">
            <li>
              <span class="font-semibold text-white/90">1.</span> Remove the
              final る.
            </li>
            <li>
              <span class="font-semibold text-white/90">2.</span> Add{" "}
              <span class="font-japanese text-emerald-500">ます</span>.
            </li>
          </ol>

          <div class="space-y-2">
            <p class="text-sm font-medium text-white/40">Examples</p>
            <div class="grid gap-2 sm:grid-cols-3">
              <div class="rounded-lg bg-white/[0.04] px-4 py-3 text-center font-japanese text-lg text-white/80">
                食べる → 食べます
              </div>
              <div class="rounded-lg bg-white/[0.04] px-4 py-3 text-center font-japanese text-lg text-white/80">
                見る → 見ます
              </div>
              <div class="rounded-lg bg-white/[0.04] px-4 py-3 text-center font-japanese text-lg text-white/80">
                起きる → 起きます
              </div>
            </div>
          </div>
        </div>

        {/* Practice */}
        <div class="space-y-5">
          <h3 class="text-center text-2xl font-bold">Practice</h3>
          <p class="leading-relaxed text-white/70">
            Conjugate the following verbs into{" "}
            <span class="font-japanese text-emerald-500">ます</span> form.
          </p>
          <IruEruPractice />
        </div>

        {/* Irregular Verbs */}
        <div class="space-y-4">
          <SectionLabel>Irregular verbs</SectionLabel>
          <p class="leading-relaxed text-white/70">
            In addition to godan and ichidan verbs, Japanese has a few irregular
            verbs:
          </p>

          <div class="grid gap-3 sm:grid-cols-2">
            <div class="rounded-lg bg-white/[0.04] p-4 text-center">
              <p class="font-japanese text-2xl text-white/90">する</p>
              <p class="text-sm text-white/40">to do</p>
              <p class="mt-2 font-japanese text-lg text-emerald-500">
                → します
              </p>
            </div>
            <div class="rounded-lg bg-white/[0.04] p-4 text-center">
              <p class="font-japanese text-2xl text-white/90">
                <Furigana furigana={<span class="text-base">く</span>}>
                  来
                </Furigana>
                る
              </p>
              <p class="text-sm text-white/40">to come</p>
              <p class="mt-2 font-japanese text-lg text-emerald-500">
                → 来ます
              </p>
            </div>
          </div>
        </div>

        {/* Special note on する */}
        <AsideBlock label="Special note on する">
          <p class="mt-2 text-sm leading-relaxed text-white/60">
            <span class="font-japanese">する</span> is especially useful: it
            combines with nouns to form compound verbs.
          </p>
          <div class="mt-3 space-y-1.5 text-sm text-white/60">
            <p class="font-japanese">
              勉強する → 勉強します{" "}
              <span class="not-italic text-white/40">(to study)</span>
            </p>
            <p class="font-japanese">
              練習する → 練習します{" "}
              <span class="not-italic text-white/40">(to practice)</span>
            </p>
            <p class="font-japanese">
              掃除する → 掃除します{" "}
              <span class="not-italic text-white/40">(to clean)</span>
            </p>
          </div>
        </AsideBlock>

        {/* Non-ichidan iru/eru */}
        <div class="space-y-4">
          <SectionLabel>Non‑ichidan iru/eru verbs</SectionLabel>
          <p class="leading-relaxed text-white/70">
            Some verbs ending in いる or える actually behave as godan instead.
            There are only about ten of these; see chart:
          </p>
          <GodanRuVerbsTable />
          <p class="text-xs text-white/30">Source: ToKini Andy</p>
        </div>

        {/* Harder practice */}
        <div class="space-y-5">
          <h3 class="text-center text-2xl font-bold">Practice (harder)</h3>
          <IrregularPractice />
        </div>

        {/* Note on tense */}
        <AsideBlock label='Special note on "present tense"'>
          <p class="mt-2 text-sm leading-relaxed text-white/60">
            Some textbooks call{" "}
            <span class="font-japanese text-emerald-500">ます</span> "present
            tense." It's actually habitual/future. For progressive ("I am
            reading"), you need the て‑form: 読んでいます.
          </p>
        </AsideBlock>

        {/* がんばって */}
        <div class="text-center">
          <Romaji romaji="Do your best!">
            <span class="font-japanese text-2xl font-semibold text-white/90">
              がんばってください！
            </span>
          </Romaji>
        </div>

        {/* Summary */}
        <LessonSummary>
          <SummaryItem>
            Godan (U-verbs) end in an う-column sound, ichidan (Ru-verbs) end
            in いる/える
          </SummaryItem>
          <SummaryItem>
            Godan: change last syllable to い-column + ます
          </SummaryItem>
          <SummaryItem>Ichidan: drop る + ます</SummaryItem>
          <SummaryItem>
            Irregular: する → します, 来る → 来ます
          </SummaryItem>
          <SummaryItem>
            ます form = polite habitual/future (not "present tense")
          </SummaryItem>
        </LessonSummary>
      </div>
    </div>
  )
}

function GodanEndingChart() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead class="text-center text-xs font-semibold tracking-wider text-white/30">Ending</TableHead>
          <TableHead class="text-center text-xs font-semibold tracking-wider text-white/30">Changes to</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody class="text-center text-lg font-medium">
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
          <TableHead class="text-center text-xs font-semibold tracking-wider text-white/30">Dictionary Form</TableHead>
          <TableHead class="text-center text-xs font-semibold tracking-wider text-white/30">
            <span class="font-japanese text-sm">ます</span> Form
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody class="text-center text-lg font-medium">
        <TableRow>
          <TableCell>
            <Romaji class="text-xs" romaji="to return home">
              <span class="font-japanese text-xl">
                <Furigana furigana={<span class="text-xs">かえ</span>}>
                  帰
                </Furigana>
                る
              </span>
            </Romaji>
          </TableCell>
          <TableCell>
            <Romaji class="text-xs" romaji="(I) will return home">
              <span class="font-japanese text-xl">
                <Furigana furigana={<span class="text-xs">かえ</span>}>
                  帰
                </Furigana>
                ります
              </span>
            </Romaji>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <Romaji class="text-xs" romaji="to enter">
              <span class="font-japanese text-xl">
                <Furigana furigana={<span class="text-xs">はい</span>}>
                  入
                </Furigana>
                る
              </span>
            </Romaji>
          </TableCell>
          <TableCell>
            <Romaji class="text-xs" romaji="(I) will enter">
              <span class="font-japanese text-xl">
                <Furigana furigana={<span class="text-xs">はい</span>}>
                  入
                </Furigana>
                ります
              </span>
            </Romaji>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <Romaji class="text-xs" romaji="to run">
              <span class="font-japanese text-xl">
                <Furigana furigana={<span class="text-xs">はし</span>}>
                  走
                </Furigana>
                る
              </span>
            </Romaji>
          </TableCell>
          <TableCell>
            <Romaji class="text-xs" romaji="(I) will run">
              <span class="font-japanese text-xl">
                <Furigana furigana={<span class="text-xs">はし</span>}>
                  走
                </Furigana>
                ります
              </span>
            </Romaji>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <Romaji class="text-xs" romaji="to need">
              <span class="font-japanese text-xl">
                <Furigana furigana={<span class="text-xs">い</span>}>
                  要
                </Furigana>
                る
              </span>
            </Romaji>
          </TableCell>
          <TableCell>
            <Romaji class="text-xs" romaji="(I) will need">
              <span class="font-japanese text-xl">
                <Furigana furigana={<span class="text-xs">い</span>}>
                  要
                </Furigana>
                ります
              </span>
            </Romaji>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <Romaji class="text-xs" romaji="to limit">
              <span class="font-japanese text-xl">
                <Furigana furigana={<span class="text-xs">かぎ</span>}>
                  限
                </Furigana>
                る
              </span>
            </Romaji>
          </TableCell>
          <TableCell>
            <Romaji class="text-xs" romaji="(I) will limit">
              <span class="font-japanese text-xl">
                <Furigana furigana={<span class="text-xs">かぎ</span>}>
                  限
                </Furigana>
                ります
              </span>
            </Romaji>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <Romaji class="text-xs" romaji="to know">
              <span class="font-japanese text-xl">
                <Furigana furigana={<span class="text-xs">し</span>}>
                  知
                </Furigana>
                る
              </span>
            </Romaji>
          </TableCell>
          <TableCell>
            <Romaji class="text-xs" romaji="(I) will know">
              <span class="font-japanese text-xl">
                <Furigana furigana={<span class="text-xs">し</span>}>
                  知
                </Furigana>
                ります
              </span>
            </Romaji>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <Romaji class="text-xs" romaji="to cut">
              <span class="font-japanese text-xl">
                <Furigana furigana={<span class="text-xs">き</span>}>
                  切
                </Furigana>
                る
              </span>
            </Romaji>
          </TableCell>
          <TableCell>
            <Romaji class="text-xs" romaji="(I) will cut">
              <span class="font-japanese text-xl">
                <Furigana furigana={<span class="text-xs">き</span>}>
                  切
                </Furigana>
                ります
              </span>
            </Romaji>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <Romaji class="text-xs" romaji="to chat">
              <span class="font-japanese text-xl">
                <Furigana furigana={<span class="text-xs">しゃべ</span>}>
                  喋
                </Furigana>
                る
              </span>
            </Romaji>
          </TableCell>
          <TableCell>
            <Romaji class="text-xs" romaji="(I) will chat">
              <span class="font-japanese text-xl">
                <Furigana furigana={<span class="text-xs">しゃべ</span>}>
                  喋
                </Furigana>
                ります
              </span>
            </Romaji>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <Romaji class="text-xs" romaji="to kick">
              <span class="font-japanese text-xl">
                <Furigana furigana={<span class="text-xs">け</span>}>
                  蹴
                </Furigana>
                る
              </span>
            </Romaji>
          </TableCell>
          <TableCell>
            <Romaji class="text-xs" romaji="(I) will kick">
              <span class="font-japanese text-xl">
                <Furigana furigana={<span class="text-xs">け</span>}>
                  蹴
                </Furigana>
                ります
              </span>
            </Romaji>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <Romaji class="text-xs" romaji="to slide">
              <span class="font-japanese text-xl">
                <Furigana furigana={<span class="text-xs">すべ</span>}>
                  滑
                </Furigana>
                る
              </span>
            </Romaji>
          </TableCell>
          <TableCell>
            <Romaji class="text-xs" romaji="(I) will slide">
              <span class="font-japanese text-xl">
                <Furigana furigana={<span class="text-xs">すべ</span>}>
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

const verbs1 = ["行く", "飲む", "話す", "読む", "食べる", "見る"]

function IruEruPractice() {
  const randomizedVerbs = [...verbs1].sort(() => Math.random() - 0.5)

  return (
    <div class="flex flex-col items-center text-xl">
      <For each={randomizedVerbs}>
        {(verb) => (
          <div class="mb-4 flex items-center">
            <div class="font-japanese w-20">{verb}</div>
            <div class="mr-4 text-white/40">→</div>
            <TextField class="w-48">
              <WanaKanaWrapper enabled={true} watch={verb}>
                <TextFieldInput class="font-japanese text-lg bg-white/4" />
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
    <div class="flex flex-col items-center text-xl">
      <For each={randomizedVerbs}>
        {(verb) => (
          <div class="mb-4 flex items-center">
            <div class="font-japanese w-28">{verb}</div>
            <div class="mr-4 text-white/40">→</div>
            <TextField class="w-48">
              <WanaKanaWrapper enabled={true} watch={verb}>
                <TextFieldInput class="font-japanese text-lg bg-white/4" />
              </WanaKanaWrapper>
            </TextField>
          </div>
        )}
      </For>
    </div>
  )
}
