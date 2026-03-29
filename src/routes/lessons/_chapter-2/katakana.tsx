import { createFileRoute } from "@tanstack/solid-router"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import {
  StudentBubble,
  SenseiBubble,
} from "@/features/lessons/components/DialogueBubbles"
import Furigana from "@/components/text/Furigana"
import Romaji from "@/components/text/Romaji"
import YouTubeVideo from "@/features/youtube/YouTube"
import KanaChart from "@/components/charts/KanaChart"
import LessonHeader, {
  OverviewItem,
} from "@/features/lessons/components/LessonHeader"
import SectionLabel from "@/features/lessons/components/SectionLabel"
import GlowBox from "@/features/lessons/components/GlowBox"
import AsideBlock from "@/features/lessons/components/AsideBlock"
import LessonSummary, {
  SummaryItem,
} from "@/features/lessons/components/LessonSummary"

export const Route = createFileRoute("/lessons/_chapter-2/katakana")({
  component: Katakana,
})

function Katakana() {
  return (
    <div class="relative pb-32">
      {/* Background character */}
      <span class="pointer-events-none absolute top-8 left-24 select-none font-japanese text-[10rem] leading-none text-white/[0.03] sm:top-11 sm:left-auto sm:right-8 sm:text-[11rem]">
        ア
      </span>

      <LessonHeader
        chapter="Chapter 2 · Writing"
        title={<>Katakana</>}
        subtitle="The angular script for loanwords, foreign names, and emphasis."
      >
        <OverviewItem>Same sounds as hiragana, different shapes</OverviewItem>
        <OverviewItem>Long vowels, double consonants, dakuten</OverviewItem>
        <OverviewItem>Tricky look-alikes: シ vs ツ, ン vs ソ</OverviewItem>
      </LessonHeader>

      <div class="space-y-14 px-8">
        {/* What is Katakana */}
        <div class="space-y-4">
          <SectionLabel>What is katakana?</SectionLabel>
          <p class="leading-relaxed text-white/70">
            Katakana is one of the three main scripts used in Japanese writing,
            along with Hiragana and Kanji. It is primarily used for{" "}
            <span class="font-semibold text-red-400">foreign words</span>,{" "}
            <span class="font-semibold text-red-400">loanwords</span>, and{" "}
            <span class="font-semibold text-red-400">onomatopoeia</span>, and
            sometimes for{" "}
            <span class="font-semibold text-red-400">emphasis</span>, similar
            to italics in English. Katakana characters have the same sounds as
            their Hiragana counterparts but are distinct in appearance with
            sharp, angular shapes.
          </p>
          <p class="leading-relaxed text-white/70">
            There are a total of{" "}
            <span class="font-semibold text-red-400">46</span> Katakana
            characters, each representing a specific sound.
          </p>
        </div>

        {/* The five vowels */}
        <div class="space-y-4">
          <SectionLabel>The five vowels</SectionLabel>
          <GlowBox>
            <div class="flex w-full justify-evenly font-japanese text-2xl font-semibold">
              <span>
                ア{" "}
                <span class="text-base font-normal text-white/50">a</span>
              </span>
              <span>
                イ{" "}
                <span class="text-base font-normal text-white/50">i</span>
              </span>
              <span>
                ウ{" "}
                <span class="text-base font-normal text-white/50">u</span>
              </span>
              <span>
                エ{" "}
                <span class="text-base font-normal text-white/50">e</span>
              </span>
              <span>
                オ{" "}
                <span class="text-base font-normal text-white/50">o</span>
              </span>
            </div>
          </GlowBox>
          <p class="text-center text-sm italic text-white/40">
            It's just like Hiragana!
          </p>
        </div>

        {/* The full chart */}
        <div class="space-y-4">
          <SectionLabel>The full chart</SectionLabel>
          <p class="leading-relaxed text-white/70">
            Here's a chart containing all 46 Katakana characters with their
            pronunciations.
          </p>
          <div class="overflow-x-auto">
            <KanaChart type="katakana" />
          </div>
        </div>

        {/* Student / Sensei Dialogue */}
        <div class="space-y-5">
          <StudentBubble>
            <Furigana furigana="がくせい">学生</Furigana>: I'm finally coming to
            grips with Hiragana, and{" "}
            <span class="font-medium italic">
              now you expect me to learn Katakana?
            </span>
          </StudentBubble>
          <SenseiBubble>
            <Furigana furigana="せんせい">先生</Furigana>: Indeed, young
            apprentice. But learning Katakana is{" "}
            <span class="font-bold italic">much</span> easier once you've
            learned Hiragana. They share the same sounds — think of it like a
            funky new font!
          </SenseiBubble>
        </div>

        {/* How to learn them */}
        <div class="space-y-4">
          <SectionLabel>How to learn them</SectionLabel>
          <p class="leading-relaxed text-white/70">
            Use{" "}
            <a
              href="https://files.tofugu.com/articles/japanese/2022-08-23-learn-katakana-book-pdf/learn-katakana-book-by-tofugu.pdf"
              target="_blank"
              class="text-dynamic-accent underline decoration-dynamic-accent/30 underline-offset-2 hover:decoration-dynamic-accent/60"
            >
              Tofugu's Free Katakana PDF
            </a>
            . Similar to their Hiragana book: mnemonics + practice sheets. Print
            it or use on your tablet.
          </p>
        </div>

        {/* Long vowels */}
        <div class="space-y-4">
          <SectionLabel>Extending the vowel (long vowel)</SectionLabel>
          <p class="leading-relaxed text-white/70">
            When you need to extend a vowel sound, use a dash{" "}
            <span class="font-japanese font-semibold text-white/90">ー</span> in
            horizontal writing or a vertical line{" "}
            <span class="font-japanese font-semibold text-white/90">｜</span> in
            vertical writing.
          </p>

          <div class="grid gap-3 sm:grid-cols-3">
            <div class="rounded-lg bg-white/[0.04] p-4 text-center">
              <Avatar class="mx-auto mb-2 h-12 w-12">
                <AvatarImage
                  src="/img/chapter-2/katakana/old-computer.png"
                  alt="computer"
                />
                <AvatarFallback>💻</AvatarFallback>
              </Avatar>
              <p class="font-japanese text-lg">
                <Romaji romaji="compuutaa">コンピューター</Romaji>
              </p>
            </div>
            <div class="rounded-lg bg-white/[0.04] p-4 text-center">
              <Avatar class="mx-auto mb-2 h-12 w-12">
                <AvatarImage
                  src="/img/chapter-2/katakana/harvard-logo.png"
                  alt="harvard"
                />
                <AvatarFallback>H</AvatarFallback>
              </Avatar>
              <p class="font-japanese text-lg">
                <Romaji romaji="haabaado">ハーバード</Romaji>
              </p>
            </div>
            <div class="rounded-lg bg-white/[0.04] p-4 text-center">
              <Avatar class="mx-auto mb-2 h-12 w-12">
                <AvatarImage
                  src="/img/chapter-2/katakana/mary.png"
                  alt="mary"
                />
                <AvatarFallback>M</AvatarFallback>
              </Avatar>
              <p class="font-japanese text-lg">
                <Romaji romaji="mearii">メアリー</Romaji>
              </p>
            </div>
          </div>
        </div>

        {/* Character + y + vowel */}
        <div class="space-y-4">
          <SectionLabel>Character + y + vowel</SectionLabel>
          <p class="leading-relaxed text-white/70">
            Japanese often combines characters with little{" "}
            <span class="font-semibold text-white/90">ya</span>,{" "}
            <span class="font-semibold text-white/90">yu</span>, and{" "}
            <span class="font-semibold text-white/90">yo</span> sounds, allowing
            for more accurate representation of sounds found in foreign words.
          </p>
          <div class="grid gap-2 sm:grid-cols-2">
            <div class="rounded-lg bg-white/[0.04] px-4 py-3">
              <p class="font-japanese text-lg text-white/90">
                <Romaji romaji="nyuuyōku">ニューヨーク</Romaji>
              </p>
              <p class="mt-1 text-sm text-white/40">New York</p>
            </div>
            <div class="rounded-lg bg-white/[0.04] px-4 py-3">
              <p class="font-japanese text-lg text-white/90">
                <Romaji romaji="shyatsu">シャツ</Romaji>
              </p>
              <p class="mt-1 text-sm text-white/40">shirt</p>
            </div>
          </div>
        </div>

        {/* シ vs ツ and ン vs ソ */}
        <div class="space-y-4">
          <SectionLabel>シ vs. ツ and ン vs. ソ</SectionLabel>
          <ul class="space-y-3 leading-relaxed text-white/70">
            <li>
              In Katakana,{" "}
              <span class="font-japanese text-xl text-white/90">シ</span> (shi)
              and <span class="font-japanese text-xl text-white/90">ツ</span>{" "}
              (tsu) look very similar but have slightly different stroke
              orientations.{" "}
              <span class="font-japanese text-xl text-white/90">シ</span> (shi)
              has flatter strokes, while the strokes in{" "}
              <span class="font-japanese text-xl text-white/90">ツ</span> (tsu)
              are more vertical.
            </li>

            <li class="flex items-center gap-3">
              <Avatar class="h-16 w-16 shrink-0">
                <AvatarImage
                  src="/img/shocked-child.png"
                  alt="shocked-person"
                />
                <AvatarFallback>?!</AvatarFallback>
              </Avatar>
              <span class="font-japanese text-2xl text-white/40">？？</span>
            </li>

            <li>
              You'll notice that the curved lines of{" "}
              <span class="font-japanese text-xl text-white/90">シ</span> and{" "}
              <span class="font-japanese text-xl text-white/90">ン</span> don't
              go all the way to the top of the character, while the curved lines
              of <span class="font-japanese text-xl text-white/90">ツ</span> and{" "}
              <span class="font-japanese text-xl text-white/90">ソ</span> do.{" "}
              <span class="font-semibold italic text-red-400">
                This is the biggest difference!
              </span>
            </li>
            <li>
              When handwritten, the long curved line of{" "}
              <span class="font-japanese text-xl text-white/90">シ</span> is
              written from the bottom up, while{" "}
              <span class="font-japanese text-xl text-white/90">ツ</span> is
              written from top to bottom.
            </li>
            <li>
              <span class="font-japanese text-xl text-white/90">ン</span> (n)
              and <span class="font-japanese text-xl text-white/90">ソ</span>{" "}
              (so) are similar.{" "}
              <span class="font-japanese text-xl text-white/90">ン</span> (n) is
              also flatter while{" "}
              <span class="font-japanese text-xl text-white/90">ソ</span> (so)
              is more vertical.
            </li>
          </ul>

          <AsideBlock label="From Sensei">
            <p class="mt-2 text-sm leading-relaxed text-white/60">
              It certainly takes a bit of reading exposure to get used to these
              subtle differences, but context usually makes the correct character
              obvious.
            </p>
          </AsideBlock>
        </div>

        {/* Double consonants */}
        <div class="space-y-4">
          <SectionLabel>
            Double consonants — small{" "}
            <span class="font-japanese text-white/50">ッ</span>
          </SectionLabel>
          <p class="leading-relaxed text-white/70">
            Just like in Hiragana, Katakana uses the small{" "}
            <span class="font-japanese font-semibold text-white/90">ッ</span> to
            mark doubled consonants.
          </p>

          <div class="grid gap-3 sm:grid-cols-3">
            <div class="rounded-lg bg-white/[0.04] p-4 text-center">
              <p class="font-japanese text-lg text-white/90">
                <Romaji romaji="ruuku">
                  ル<span class="text-orange-400">ー</span>ク
                </Romaji>
              </p>
              <p class="mt-1 text-sm text-white/40">Luke</p>
            </div>
            <div class="rounded-lg bg-white/[0.04] p-4 text-center">
              <p class="font-japanese text-lg text-white/90">
                <Romaji romaji="maaku">
                  マ<span class="text-orange-400">ー</span>ク
                </Romaji>
              </p>
              <p class="mt-1 text-sm text-white/40">Mark</p>
            </div>
            <div class="rounded-lg bg-white/[0.04] p-4 text-center">
              <p class="font-japanese text-lg text-white/90">
                <Romaji romaji="meekaa">
                  メ<span class="text-orange-400">ー</span>カ
                  <span class="text-orange-400">ー</span>
                </Romaji>
              </p>
              <p class="mt-1 text-sm text-white/40">Maker</p>
            </div>
          </div>

          <p class="text-center text-xs font-medium text-white/30">vs.</p>

          <div class="grid gap-3 sm:grid-cols-3">
            <div class="rounded-lg bg-white/[0.04] p-4 text-center">
              <p class="font-japanese text-lg text-white/90">
                <Romaji romaji="rukku">
                  ル<span class="text-sky-400">ッ</span>ク
                </Romaji>
              </p>
              <p class="mt-1 text-sm text-white/40">Look</p>
            </div>
            <div class="rounded-lg bg-white/[0.04] p-4 text-center">
              <p class="font-japanese text-lg text-white/90">
                <Romaji romaji="makku">
                  マ<span class="text-sky-400">ッ</span>ク
                </Romaji>
              </p>
              <p class="mt-1 text-sm text-white/40">Mac</p>
            </div>
            <div class="rounded-lg bg-white/[0.04] p-4 text-center">
              <p class="font-japanese text-lg text-white/90">
                <Romaji romaji="mekka">
                  メ<span class="text-sky-400">ッ</span>カ
                </Romaji>
              </p>
              <p class="mt-1 text-sm text-white/40">Mecca</p>
            </div>
          </div>
        </div>

        {/* Dakuten & Handakuten */}
        <div class="space-y-4">
          <SectionLabel>Dakuten & Handakuten</SectionLabel>
          <p class="leading-relaxed text-white/70">
            Just like Hiragana, add diacritics to change sounds:
          </p>
          <div class="grid grid-cols-5 gap-3">
            {(
              [
                ["カ → ガ"],
                ["シ → ジ"],
                ["タ → ダ"],
                ["ハ → バ"],
                ["ハ → パ"],
              ] as [string][]
            ).map(([text]) => (
              <div class="rounded-lg bg-white/[0.04] p-3 text-center font-japanese text-lg font-medium text-white/80">
                {text}
              </div>
            ))}
          </div>
        </div>

        {/* Try reading */}
        <div class="space-y-4">
          <SectionLabel>Try reading</SectionLabel>
          <div class="grid gap-4 sm:grid-cols-3">
            <WordCard kana="コーヒー" romaji="ko-hi-i" gloss="coffee" />
            <WordCard kana="タクシー" romaji="ta-ku-shi-i" gloss="taxi" />
            <WordCard kana="ホテル" romaji="ho-te-ru" gloss="hotel" />
          </div>
          <p class="text-sm text-white/40">
            Try these too:{" "}
            <span class="font-japanese text-white/60">
              テレビ, ビール, パン, チョコレート, アイスクリーム
            </span>
          </p>
        </div>

        {/* Closing Dialogue */}
        <div class="space-y-5">
          <StudentBubble>
            <Furigana furigana="がくせい">学生</Furigana>: Thanks{" "}
            <Furigana furigana="せんせい">先生</Furigana>, I'll give it a shot!
            Is there anything else I should know?
          </StudentBubble>
          <SenseiBubble>
            <Furigana furigana="せんせい">先生</Furigana>: One note — we won't
            add <span class="font-semibold italic">furigana</span> for Katakana
            characters in this chapter. Use a chart if you're stuck, and
            memorize them early.
          </SenseiBubble>
        </div>

        {/* Sensei avatar */}
        <div class="flex justify-center">
          <img
            src="/img/guru.png"
            alt="sensei"
            class="size-14 rounded-full ring-1 ring-white/10"
          />
        </div>

        {/* Video */}
        <div>
          <YouTubeVideo
            videoId="wtcMGycmDjc"
            title="When to use hiragana, katakana, and kanji"
            credit="Komei's Channel"
          />
        </div>

        {/* Additional Resources */}
        <div class="rounded-lg bg-white/[0.03] p-6 ring-1 ring-white/[0.06]">
          <SectionLabel>Additional resources</SectionLabel>
          <div class="mt-4 space-y-3 text-sm">
            <div>
              <a
                href="https://files.tofugu.com/articles/japanese/2022-08-23-learn-katakana-book-pdf/learn-katakana-book-by-tofugu.pdf"
                target="_blank"
                class="text-dynamic-accent underline decoration-dynamic-accent/30 underline-offset-2 hover:decoration-dynamic-accent/60"
              >
                Tofugu's Learn Katakana PDF
              </a>
              <p class="mt-0.5 text-white/40">
                Mnemonics + practice sheets. Print it or use on your tablet.
              </p>
            </div>
            <div>
              <a
                href="https://learnjapanese.moe/img/hiragana_katakana_LARGE.png"
                target="_blank"
                class="text-dynamic-accent underline decoration-dynamic-accent/30 underline-offset-2 hover:decoration-dynamic-accent/60"
              >
                Hiragana & Katakana Chart by IREAL
              </a>
              <p class="mt-0.5 text-white/40">Quick visual reference.</p>
            </div>
          </div>
        </div>

        {/* Summary */}
        <LessonSummary>
          <SummaryItem>
            46 katakana characters with the same sounds as hiragana
          </SummaryItem>
          <SummaryItem>
            Used for foreign words, loanwords, onomatopoeia, and emphasis
          </SummaryItem>
          <SummaryItem>
            Long vowels use ー, doubled consonants use small ッ
          </SummaryItem>
          <SummaryItem>
            シ/ン have flatter strokes, ツ/ソ are more vertical
          </SummaryItem>
        </LessonSummary>
      </div>
    </div>
  )
}

function WordCard(props: { kana: string; romaji: string; gloss: string }) {
  return (
    <div class="relative">
      <div
        class="absolute -inset-px rounded-xl opacity-10"
        style={{
          background: `linear-gradient(135deg, var(--dynamic-accent), transparent 50%)`,
        }}
      />
      <div class="relative rounded-xl bg-white/[0.04] p-4 text-center backdrop-blur-sm">
        <p class="mb-1 font-japanese text-2xl font-semibold text-white/90">
          {props.kana}
        </p>
        <p class="text-sm text-white/50">{props.romaji}</p>
        <p class="text-sm text-white/70">{props.gloss}</p>
      </div>
    </div>
  )
}
