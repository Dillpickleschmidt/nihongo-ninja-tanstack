import type { JSX } from "solid-js"
import { createFileRoute } from "@tanstack/solid-router"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import YouTubeVideo from "@/features/youtube/YouTube"
import LessonHeader, {
  OverviewItem,
} from "@/features/lessons/components/LessonHeader"
import SectionLabel from "@/features/lessons/components/SectionLabel"
import AsideBlock from "@/features/lessons/components/AsideBlock"
import LessonSummary, {
  SummaryItem,
} from "@/features/lessons/components/LessonSummary"

export const Route = createFileRoute("/lessons/_chapter-3/kanji")({
  component: KanjiLesson,
})

function KanjiLesson() {
  return (
    <div class="relative pb-32">
      {/* Background character */}
      <span class="pointer-events-none absolute top-8 left-24 select-none font-japanese text-[10rem] leading-none text-white/[0.03] sm:top-11 sm:left-auto sm:right-8 sm:text-[11rem]">
        漢
      </span>

      <LessonHeader
        chapter="Chapter 3 · Writing"
        title={<>Kanji</>}
        subtitle="What kanji are, how they work, and how to actually learn them."
      >
        <OverviewItem>Where kanji come from</OverviewItem>
        <OverviewItem>On-yomi, kun-yomi, and why you shouldn't stress about them</OverviewItem>
        <OverviewItem>A better approach: learn vocabulary, not readings</OverviewItem>
      </LessonHeader>

      <div class="space-y-14 px-8">
        {/* Note */}
        <p class="text-sm italic text-white/40">
          *Note for <span class="font-semibold text-white/60">Nihongo Ninja</span>{" "}
          learners: If you've been following along step-by-step, you should have
          already started practicing kanji on{" "}
          <span class="font-semibold text-white/60">jpdb.io</span>. Even if
          you've been practicing, we'd still recommend reading through this
          lesson to understand how kanji work.
        </p>

        {/* Opening Dialogue */}
        <div class="space-y-5">
          <StudentBubble>
            せんせい, I keep seeing these kanji characters everywhere. They look
            so complicated... where do I even start?
          </StudentBubble>
          <SenseiBubble>
            With this lesson, obviously.
          </SenseiBubble>
        </div>

        {/* What are Kanji */}
        <div class="space-y-4">
          <SectionLabel>What are kanji?</SectionLabel>

          <YouTubeVideo
            videoId="RKWrWRFyfYo"
            title="Japanese Kanji 101 (and How I'd Learn Kanji Starting Over)"
            credit="ToKini Andy"
          />

          <p class="leading-relaxed text-white/70">
            Kanji are characters that originated in China and were brought to
            Japan over 1,500 years ago. Each kanji represents a meaning, not a
            sound.
          </p>

          <div class="grid grid-cols-3 gap-3">
            <div class="rounded-lg bg-white/[0.04] p-4 text-center">
              <p class="font-japanese text-3xl text-white/90">日</p>
              <p class="mt-1 text-sm text-white/40">sun</p>
            </div>
            <div class="rounded-lg bg-white/[0.04] p-4 text-center">
              <p class="font-japanese text-3xl text-white/90">木</p>
              <p class="mt-1 text-sm text-white/40">tree</p>
            </div>
            <div class="rounded-lg bg-white/[0.04] p-4 text-center">
              <p class="font-japanese text-3xl text-white/90">犬</p>
              <p class="mt-1 text-sm text-white/40">dog</p>
            </div>
          </div>
        </div>

        {/* How Many */}
        <div class="space-y-5">
          <StudentBubble>
            How many kanji are there?
          </StudentBubble>
          <SenseiBubble>
            There are about 50,000 kanji characters in total, but don't panic!
            The Japanese government has designated 2,136 kanji as "commonly
            used" (<span class="font-japanese">常用漢字</span> - jōyō kanji),
            and those are 99% of what you'll see in magazines and newspapers.
          </SenseiBubble>
        </div>

        {/* Breakdown */}
        <AsideBlock label="From Sensei">
          <div class="mt-2">
            <p class="text-sm font-semibold text-white/70">
              Here's a breakdown of what Japanese students are expected to know:
            </p>
            <ul class="mt-2 space-y-1.5 text-sm leading-relaxed text-white/60">
              <li>
                <span class="font-semibold text-white/80">
                  Elementary school:
                </span>{" "}
                1,026 kanji (
                <span class="font-japanese">学年別漢字配当表</span>)
              </li>
              <li>
                <span class="font-semibold text-white/80">
                  Secondary school:
                </span>{" "}
                Additional kanji to reach 2,136 jōyō kanji
              </li>
              <li>
                <span class="font-semibold text-white/80">
                  University entrance exams:
                </span>{" "}
                About 2,500 kanji
              </li>
            </ul>
          </div>
        </AsideBlock>

        {/* Creation */}
        <div class="space-y-5">
          <StudentBubble>How were Kanji created?</StudentBubble>
          <SenseiBubble>
            Kanji can be divided into four types based on their formation:
          </SenseiBubble>

          <div class="grid gap-3 sm:grid-cols-2">
            <div class="rounded-lg bg-white/[0.04] p-4">
              <p class="text-sm font-semibold text-white/80">Pictograms</p>
              <p class="mt-1 font-japanese text-lg text-white/60">
                木 (tree), 日 (sun), 山 (mountain)
              </p>
            </div>
            <div class="rounded-lg bg-white/[0.04] p-4">
              <p class="text-sm font-semibold text-white/80">
                Simple ideograms
              </p>
              <p class="mt-1 font-japanese text-lg text-white/60">
                上 (up), 下 (down), 中 (middle)
              </p>
            </div>
            <div class="rounded-lg bg-white/[0.04] p-4">
              <p class="text-sm font-semibold text-white/80">
                Compound ideograms
              </p>
              <p class="mt-1 font-japanese text-lg text-white/60">
                林 (forest) = two 木 (tree)
              </p>
            </div>
            <div class="rounded-lg bg-white/[0.04] p-4">
              <p class="text-sm font-semibold text-white/80">
                Phonetic-ideographic
              </p>
              <p class="mt-1 text-sm text-white/60">
                One element for meaning, one hinting at sound
              </p>
            </div>
          </div>
        </div>

        {/* Readings */}
        <div class="space-y-5">
          <StudentBubble>
            How do I <em>read</em> them?
          </StudentBubble>
          <SenseiBubble>
            Well, since you asked, there are <em>technically</em> two ways to
            read kanji:
          </SenseiBubble>

          <div class="space-y-3">
            <div class="rounded-lg bg-white/[0.04] p-4">
              <p class="font-semibold text-white/90">On-yomi (音読み)</p>
              <p class="mt-1 text-sm text-white/60">
                Chinese-derived readings
              </p>
            </div>
            <div class="rounded-lg bg-white/[0.04] p-4">
              <p class="font-semibold text-white/90">Kun-yomi (訓読み)</p>
              <p class="mt-1 text-sm text-white/60">
                Native Japanese readings
              </p>
            </div>
          </div>

          <p class="leading-relaxed text-white/70">
            For example, the kanji <span class="font-japanese">山</span>{" "}
            (mountain) can be read as:
          </p>

          <div class="grid gap-3 sm:grid-cols-2">
            <div class="rounded-lg bg-white/[0.04] p-4">
              <p class="text-xs font-semibold uppercase tracking-wider text-white/30">
                On-yomi
              </p>
              <p class="mt-1 font-japanese text-xl text-white/80">
                サン (san)
              </p>
            </div>
            <div class="rounded-lg bg-white/[0.04] p-4">
              <p class="text-xs font-semibold uppercase tracking-wider text-white/30">
                Kun-yomi
              </p>
              <p class="mt-1 font-japanese text-xl text-white/80">
                やま (yama)
              </p>
            </div>
          </div>

          <p class="text-sm italic text-white/40">
            *There are also <span class="font-semibold">name</span> readings
            which are unique readings for people's names.
          </p>
          <p class="leading-relaxed text-white/70">
            In many cases, a single kanji will have{" "}
            <span class="font-semibold text-white/90">multiple</span> on-yomi
            and kun-yomi readings.
          </p>
          <p class="text-sm italic text-white/50">
            You will see these whenever you look up a kanji in a dictionary.
          </p>
        </div>

        {/* Reassurance */}
        <div class="space-y-5">
          <StudentBubble>
            Let me get this straight... Not only do I have to remember thousands
            of characters, but I also have to remember multiple readings for
            each character? 😨
          </StudentBubble>
        </div>

        <div class="space-y-4">
          <p class="text-center text-3xl font-bold italic text-white/90">
            No!
          </p>
          <p class="leading-relaxed text-white/70">
            In fact, we recommend you{" "}
            <span class="italic underline">
              forget about the on-yomi/kun-yomi readings
            </span>
            . Instead, focus on learning{" "}
            <span class="font-semibold text-white/90">vocabulary</span> and the
            English{" "}
            <span class="font-semibold text-white/90">meanings</span> of the
            kanji you come across, exactly as you've been doing on{" "}
            <span class="font-semibold text-white/90">jpdb</span>.
          </p>

          <div class="space-y-4 leading-relaxed text-white/70">
            <p>
              <span class="font-semibold text-white/90">
                Think about it like this:{" "}
              </span>
              In English, there are at least a dozen (maybe more) ways to
              pronounce the letter{" "}
              <span class="font-black text-white/90">a</span>:
            </p>
            <ul class="space-y-2 text-sm text-white/60">
              <li>A = /æ/ - Apple, Fantastic, Back, Track, Exactly</li>
              <li>A = /e/ - Any, Many, Said, Says, Thames</li>
              <li>A = /ɒ/ - What, Watch, Want, Was, Wash, Yacht</li>
              <li>A = /eɪ/ - Able, Age, Page, Paper, Day, Date, Stay</li>
              <li>A = /eə/ - Air, Share, Care, Spare, Stare, Rare</li>
            </ul>
            <p class="text-center text-sm italic text-white/40">
              The list goes on...
            </p>
            <p>
              But do you memorize each pronunciation of{" "}
              <span class="font-black text-white/90">a</span> in isolation?{" "}
              <span class="font-semibold text-white/90">Absolutely not.</span>{" "}
              You learn the <em>vocabulary</em> and pick up the different
              pronunciations of{" "}
              <span class="font-black text-white/90">a</span> as you go along.
              The same goes for kanji readings.
            </p>
          </div>
        </div>

        {/* Summary */}
        <LessonSummary>
          <SummaryItem>
            Kanji are characters from China, each representing a meaning
          </SummaryItem>
          <SummaryItem>
            2,136 "commonly used" kanji cover 99% of everyday Japanese
          </SummaryItem>
          <SummaryItem>
            On-yomi (Chinese) and kun-yomi (Japanese) are two reading types
          </SummaryItem>
          <SummaryItem>
            Learn vocabulary and meanings first, readings come naturally
          </SummaryItem>
        </LessonSummary>
      </div>
    </div>
  )
}

function StudentBubble(props: { children: JSX.Element }) {
  return (
    <div class="flex items-end gap-3">
      <Avatar class="size-7 shrink-0 ring-1 ring-white/10">
        <AvatarImage src="/img/student.png" alt="student" />
        <AvatarFallback>S</AvatarFallback>
      </Avatar>
      <div class="max-w-[80%] rounded-2xl rounded-bl-sm bg-indigo-500/60 px-4 py-2.5 text-sm leading-relaxed text-indigo-50 saturate-75">
        {props.children}
      </div>
    </div>
  )
}

function SenseiBubble(props: { children: JSX.Element }) {
  return (
    <div class="flex items-end justify-end gap-3">
      <div class="max-w-[80%] rounded-2xl rounded-br-sm bg-indigo-500 px-4 py-2.5 text-sm leading-relaxed text-indigo-50 saturate-75">
        {props.children}
      </div>
      <Avatar class="size-7 shrink-0 ring-1 ring-white/10">
        <AvatarImage src="/img/guru.png" alt="sensei" />
        <AvatarFallback>T</AvatarFallback>
      </Avatar>
    </div>
  )
}
