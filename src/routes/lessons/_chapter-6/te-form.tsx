import { createFileRoute } from "@tanstack/solid-router"
import SelectText from "@/components/text/MultipleChoiceText"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import Romaji from "@/components/text/Romaji"
import Furigana from "@/components/text/Furigana"
import YouTubeVideo from "@/features/youtube/YouTube"
import LessonHeader, {
  OverviewItem,
} from "@/features/lessons/components/LessonHeader"
import SectionLabel from "@/features/lessons/components/SectionLabel"
import GlowBox from "@/features/lessons/components/GlowBox"
import AsideBlock from "@/features/lessons/components/AsideBlock"
import RevealBlock from "@/features/lessons/components/RevealBlock"
import LessonSummary, {
  SummaryItem,
} from "@/features/lessons/components/LessonSummary"

export const Route = createFileRoute("/lessons/_chapter-6/te-form")({
  component: TeForm,
})

function TeForm() {
  return (
    <div class="relative pb-32">
      {/* Background character */}
      <span class="pointer-events-none absolute top-8 left-24 select-none font-japanese text-[10rem] leading-none text-white/[0.03] sm:top-11 sm:left-auto sm:right-8 sm:text-[11rem]">
        て
      </span>

      <LessonHeader
        chapter="Chapter 6 · Grammar"
        title={
          <>
            Verb Conjugation –{" "}
            <span class="font-japanese text-green-500">て</span> Form
          </>
        }
        subtitle="The most versatile conjugation in Japanese grammar."
      >
        <OverviewItem>Ichidan, godan, and irregular て-form rules</OverviewItem>
        <OverviewItem>The conjugation chart you'll memorize</OverviewItem>
        <OverviewItem>What て-form unlocks (now and later)</OverviewItem>
      </LessonHeader>

      <div class="space-y-14 px-8">
        {/* Intro */}
        <div class="leading-relaxed text-white/70">
          <p>
            The{" "}
            <span class="font-japanese text-xl font-medium text-green-500">
              て
            </span>{" "}
            form is one of the most fundamental patterns in Japanese grammar. It
            acts as a versatile "connector" that allows you to build complex
            expressions from basic verbs - letting you link multiple actions,
            make requests, ask permission, and more. Unlike English which uses
            different words for each of these purposes, Japanese achieves them
            all through this single form.
          </p>
        </div>

        {/* Uses Overview */}
        <div class="space-y-4">
          <SectionLabel>
            Uses of the{" "}
            <span class="font-japanese text-xs text-green-500">て</span> form
          </SectionLabel>

          <div class="grid gap-3 sm:grid-cols-2">
            <div class="rounded-lg bg-white/[0.04] p-4">
              <p class="mb-2 text-sm font-semibold text-white/50">
                This Chapter
              </p>
              <ul class="space-y-1.5 text-sm text-white/60">
                <li>
                  <span class="font-japanese text-white/80">〜てください</span>{" "}
                  - Making polite requests{" "}
                  <span class="text-white/30">("Please do...")</span>
                </li>
                <li>
                  <span class="font-japanese text-white/80">Verb て、Verb</span>{" "}
                  - Connecting multiple actions{" "}
                  <span class="text-white/30">("do X and then Y")</span>
                </li>
                <li>
                  <span class="font-japanese text-white/80">
                    〜てもいいですか
                  </span>{" "}
                  - Asking permission{" "}
                  <span class="text-white/30">("May I...?")</span>
                </li>
                <li>
                  <span class="font-japanese text-white/80">
                    〜てはいけません
                  </span>{" "}
                  - Expressing prohibition{" "}
                  <span class="text-white/30">("Must not...")</span>
                </li>
              </ul>
            </div>
            <div class="rounded-lg bg-white/[0.04] p-4">
              <p class="mb-2 text-sm font-semibold text-white/50">
                Future Chapters
              </p>
              <ul class="space-y-1.5 text-sm text-white/60">
                <li>
                  <span class="font-japanese text-white/80">〜ている</span> -
                  Ongoing actions/states{" "}
                  <span class="text-white/30">(Next Chapter)</span>
                </li>
                <li>
                  <span class="font-japanese text-white/80">〜てみる</span> -
                  Trying something out
                </li>
                <li>
                  <span class="font-japanese text-white/80">
                    〜てくれる/あげる/もらう
                  </span>{" "}
                  - Giving/receiving actions
                </li>
                <li>
                  <span class="font-japanese text-white/80">
                    〜てすみません
                  </span>{" "}
                  - Apologizing for actions
                </li>
                <li>
                  <span class="italic text-white/30">+ many more!</span>
                </li>
              </ul>
            </div>
          </div>

          <p class="text-sm text-white/40">
            The{" "}
            <span class="font-japanese font-medium text-green-500">て</span>{" "}
            form is a cornerstone of Japanese grammar that you'll continue
            discovering new uses for as you progress.
          </p>
        </div>

        {/* Quick Review */}
        <RevealBlock closedLabel="Quick review: Japanese verbs">
          <div class="space-y-4">
            <div class="rounded-lg bg-white/[0.04] p-4">
              <p class="font-semibold text-white/80">Identifying Verbs</p>
              <p class="mt-2 text-sm text-white/60">
                All Japanese verbs end in a character with an{" "}
                <span class="font-semibold text-white/80">u-sound</span>{" "}
                <span class="text-white/30">(in dictionary form)</span>:
              </p>
              <div class="mt-3 grid grid-cols-4 gap-2 font-japanese text-lg sm:grid-cols-8">
                {["う", "つ", "む", "ぶ", "く", "ぐ", "す", "る"].map((k) => (
                  <div class="rounded bg-white/[0.04] p-2 text-center text-white/70">
                    {k}
                  </div>
                ))}
              </div>
            </div>

            <div class="grid gap-3 sm:grid-cols-2">
              <div class="rounded-lg bg-white/[0.04] p-4">
                <p class="font-semibold text-white/80">Ichidan Verbs:</p>
                <ul class="mt-2 space-y-1 text-sm text-white/60">
                  <li>
                    End in <span class="font-japanese">いる</span> or{" "}
                    <span class="font-japanese">える</span>
                  </li>
                  <li>One step to conjugate (just remove る)</li>
                  <li>
                    Example:{" "}
                    <span class="font-japanese text-white/70">
                      食べる、見る、起きる
                    </span>
                  </li>
                </ul>
              </div>
              <div class="rounded-lg bg-white/[0.04] p-4">
                <p class="font-semibold text-white/80">Godan Verbs:</p>
                <ul class="mt-2 space-y-1 text-sm text-white/60">
                  <li>All other verbs that don't match Ichidan pattern</li>
                  <li>Keep the consonant, shift the 'u' sound</li>
                  <li>
                    Examples:{" "}
                    <span class="font-japanese text-white/70">
                      書く、待つ、読む、話す
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </RevealBlock>

        {/* Conjugation Chart */}
        <div class="space-y-4">
          <div class="text-center">
            <p class="font-japanese text-3xl text-green-500">て</p>
            <SectionLabel class="mt-1">Form conjugation chart</SectionLabel>
          </div>

          <div class="overflow-x-auto rounded-lg bg-white/[0.04] p-4">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead class="text-sm font-semibold tracking-wider text-white/30 w-1/3">
                    Verb Type
                  </TableHead>
                  <TableHead class="text-sm font-semibold tracking-wider text-white/30 w-1/3">
                    Rule
                  </TableHead>
                  <TableHead class="text-sm font-semibold tracking-wider text-white/30 w-1/3">
                    Examples
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell class="text-white/70">Ichidan verbs</TableCell>
                  <TableCell class="font-japanese text-lg text-white/80">
                    る → て
                  </TableCell>
                  <TableCell class="font-japanese text-lg text-white/80">
                    食べる → 食べ
                    <span class="underline decoration-green-500/75 underline-offset-4">
                      て
                    </span>
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell rowSpan={5} class="text-white/70">
                    Godan verbs
                  </TableCell>
                  <TableCell class="font-japanese text-lg text-white/80">
                    <div class="flex items-center gap-4">
                      <div class="space-y-1">
                        <div>う</div>
                        <div>つ</div>
                        <div>る*</div>
                      </div>
                      <div class="text-white/40">→</div>
                      <div>って</div>
                    </div>
                  </TableCell>
                  <TableCell class="font-japanese text-lg text-white/80">
                    <div>
                      会う → 会
                      <span class="underline decoration-green-500/75 underline-offset-4">
                        って
                      </span>
                    </div>
                    <div>
                      待つ → 待
                      <span class="underline decoration-green-500/75 underline-offset-4">
                        って
                      </span>
                    </div>
                    <div>
                      とる → と
                      <span class="underline decoration-green-500/75 underline-offset-4">
                        って
                      </span>
                    </div>
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell class="font-japanese text-lg text-white/80">
                    <div class="flex items-center gap-4">
                      <div class="space-y-1">
                        <div>む</div>
                        <div>ぶ</div>
                        <div>ぬ</div>
                      </div>
                      <div class="text-white/40">→</div>
                      <div>んで</div>
                    </div>
                  </TableCell>
                  <TableCell class="font-japanese text-lg text-white/80">
                    <div>
                      読む → 読
                      <span class="underline decoration-green-500/75 underline-offset-4">
                        んで
                      </span>
                    </div>
                    <div>
                      遊ぶ → 遊
                      <span class="underline decoration-green-500/75 underline-offset-4">
                        んで
                      </span>
                    </div>
                    <div>
                      死ぬ → 死
                      <span class="underline decoration-green-500/75 underline-offset-4">
                        んで
                      </span>
                    </div>
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell class="font-japanese text-lg text-white/80">
                    く → いて
                    <div class="mt-2 text-sm italic text-white/30">
                      Exception: 行く → 行って
                    </div>
                  </TableCell>
                  <TableCell class="font-japanese text-lg text-white/80">
                    書く → 書
                    <span class="underline decoration-green-500/75 underline-offset-4">
                      いて
                    </span>
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell class="font-japanese text-lg text-white/80">
                    ぐ → いで
                  </TableCell>
                  <TableCell class="font-japanese text-lg text-white/80">
                    泳ぐ → 泳
                    <span class="underline decoration-green-500/75 underline-offset-4">
                      いで
                    </span>
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell class="font-japanese text-lg text-white/80">
                    す → して
                  </TableCell>
                  <TableCell class="font-japanese text-lg text-white/80">
                    話す → 話
                    <span class="underline decoration-green-500/75 underline-offset-4">
                      して
                    </span>
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell class="text-white/70">Irregular verbs</TableCell>
                  <TableCell class="font-japanese text-lg text-white/80" />
                  <TableCell class="font-japanese text-lg text-white/80">
                    <div>
                      する →{" "}
                      <span class="underline decoration-green-500/75 underline-offset-4">
                        して
                      </span>
                    </div>
                    <div>
                      くる →{" "}
                      <span class="underline decoration-green-500/75 underline-offset-4">
                        きて
                      </span>
                    </div>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
          <p class="text-sm text-white/40">
            *Remember, verbs that end in る might be either a godan or ichidan
            verb which have different conjugations!
          </p>
        </div>

        {/* Song */}
        <div class="space-y-4">
          <YouTubeVideo
            videoId="P029zwYS4Cs"
            title="The ULTIMATE Te-Form Song | 10 Hour Version"
            credit="ToKini Andy"
          />
          <p class="text-sm text-white/40">
            Personally, don't find songs the most helpful way to memorize, but I
            hear others swear by it. So here's a rare gem of a song that goes
            through all the て-form conjugations that I'd actually sing along to.
            :)
          </p>
          <p class="text-sm text-white/60">
            The original song –{" "}
            <a
              href="https://www.youtube.com/watch?v=Cj-P-nEPoe0"
              target="_blank"
              class="text-dynamic-accent underline decoration-dynamic-accent/30 underline-offset-2 hover:decoration-dynamic-accent/60"
            >
              て形の歌
            </a>
          </p>
        </div>

        {/* Tense */}
        <div class="space-y-4">
          <SectionLabel>What tense are these?</SectionLabel>
          <p class="leading-relaxed text-white/70">
            <span class="font-japanese font-medium text-green-500">て</span>
            -form verbs <u>don't</u> actually carry tense information{" "}
            <span class="text-sm text-white/40">(past, present, etc.)</span>.
            Take the following expression:
          </p>

          <div class="rounded-lg bg-white/[0.04] p-4">
            <div class="flex items-baseline justify-between">
              <p class="font-japanese text-lg text-white/80">座ってください</p>
              <p class="text-sm text-white/40">Please sit.</p>
            </div>
            <p class="mt-2 text-sm text-white/60">
              This simply means <strong>please sit</strong>. Like English, it
              doesn't have a tense, it's just a direct request.
            </p>
            <p class="mt-1 text-sm italic text-white/30">
              *you'll learn ください shortly
            </p>
          </div>

          <p class="text-sm font-semibold text-white/60">
            How about connecting sentences?{" "}
            <span class="font-normal text-white/30">
              (you'll learn this shortly)
            </span>
          </p>

          <div class="rounded-lg bg-white/[0.04] p-4">
            <div class="flex items-baseline justify-between">
              <p class="font-japanese text-lg text-white/80">
                コーヒーを飲んで、本を読みました
              </p>
              <p class="text-sm text-white/40">
                I drank coffee and I read a book.
              </p>
            </div>
            <p class="mt-2 text-sm text-white/60">
              Here, the{" "}
              <span class="font-japanese font-medium text-green-500">て</span>
              -form of 飲む connects the two actions. But the tense of
              everything in the sentence is determined by the final verb,
              読みました.
            </p>
            <p class="mt-1 text-sm italic text-white/30">
              *More on this in the next lesson.
            </p>
          </div>
        </div>

        {/* Second Video */}
        <div class="space-y-4">
          <YouTubeVideo
            videoId="HAdmKhVjVs8"
            title="The ULTIMATE Japanese Te-Form CHEAT SHEET 【て Form】"
            credit="Jouzu Juls (上手 ジューズ)"
          />
          <p class="text-sm text-white/40">
            Why is the production quality so good? 😭
          </p>
        </div>

        {/* Irregular Verbs */}
        <div class="space-y-4">
          <SectionLabel>Irregular verbs</SectionLabel>
          <p class="leading-relaxed text-white/70">
            If you recall from Chapter 3, there are a few words that don't
            follow the godan/ichidan classifactions that you'd expect.
          </p>

          <div class="space-y-4">
            <div class="overflow-x-auto rounded-lg bg-white/[0.04] p-4">
              <p class="mb-3 text-sm font-semibold text-white/50">
                Words you've encountered:
              </p>
              <IrregularVerbsTeFormChart1 />
            </div>

            <div class="overflow-x-auto rounded-lg bg-white/[0.04] p-4">
              <p class="mb-3 text-sm font-semibold text-white/50">
                Words you haven't yet encountered:
              </p>
              <IrregularVerbsTeFormChart2 />
            </div>
          </div>
        </div>

        {/* Encouragement */}
        <AsideBlock>
          <p class="text-sm leading-relaxed text-white/60">
            Frankly, I found て-Form the most difficult to master in Japanese,
            but the{" "}
            <span class="text-dynamic-accent underline decoration-dynamic-accent/30 underline-offset-2">
              conjugation practice tool
            </span>{" "}
            will fast-track your progress{" "}
            <span class="text-xs text-white/30">
              (oh how I wish I had it when I was learning)
            </span>
            . But that also means every other conjugation you learn won't be as
            hard. Also, some forms are very similar to the て-form so it will
            serve as a great foundation.
          </p>
        </AsideBlock>

        {/* Practice */}
        <div class="space-y-5">
          <h3 class="text-center text-2xl font-bold">Practice</h3>
          <p class="text-center text-sm italic text-white/40">
            Choose the correct て-form conjugation
          </p>

          <div class="space-y-6">
            <div class="space-y-3">
              <p class="leading-relaxed text-white/70">開ける (to open)</p>
              <SelectText
                answer="開けて"
                a="開けて"
                b="開けって"
                c="開けんで"
                class="text-xl"
              />
            </div>

            <div class="space-y-3">
              <p class="leading-relaxed text-white/70">急ぐ (to hurry)</p>
              <SelectText
                answer="急いで"
                a="急ぐて"
                b="急いで"
                c="急いて"
                class="text-xl"
              />
            </div>

            <div class="space-y-3">
              <p class="leading-relaxed text-white/70">遊ぶ (to play)</p>
              <SelectText
                answer="遊んで"
                a="遊んで"
                b="遊ぶて"
                c="遊びて"
                class="text-xl"
              />
            </div>

            <div class="space-y-3">
              <p class="leading-relaxed text-white/70">泳ぐ (to swim)</p>
              <SelectText
                answer="泳いで"
                a="泳いで"
                b="泳ぐて"
                c="泳んで"
                class="text-xl"
              />
            </div>

            <div class="space-y-3">
              <p class="leading-relaxed text-white/70">会う (to meet)</p>
              <SelectText
                answer="会って"
                a="会って"
                b="会うて"
                c="会いて"
                class="text-xl"
              />
            </div>

            <div class="space-y-6 rounded-lg bg-white/[0.04] p-4">
              <p class="text-center text-sm italic text-white/50">
                These ones may be hard to differentiate at first:
              </p>

              <div class="space-y-3">
                <p class="leading-relaxed text-white/70">買う (to buy)</p>
                <SelectText
                  answer="買って"
                  a="買うて"
                  b="買って"
                  c="買いて"
                  class="text-xl"
                />
              </div>

              <div class="space-y-3">
                <p class="leading-relaxed text-white/70">書く (to write)</p>
                <SelectText
                  answer="書いて"
                  a="書くて"
                  b="書いて"
                  c="書きて"
                  class="text-xl"
                />
              </div>

              <div class="space-y-3">
                <p class="leading-relaxed text-white/70">来る (to come)</p>
                <SelectText
                  answer="来て"
                  a="来きて"
                  b="来いて"
                  c="来て"
                  class="text-xl"
                />
              </div>

              <div class="space-y-3">
                <p class="leading-relaxed text-white/70">
                  聞く (to hear/listen)
                </p>
                <SelectText
                  answer="聞いて"
                  a="聞くて"
                  b="聞いて"
                  c="聞きて"
                  class="text-xl"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Summary */}
        <LessonSummary>
          <SummaryItem>
            Ichidan: drop る, add て (食べる → 食べて)
          </SummaryItem>
          <SummaryItem>
            Godan: う/つ/る→って, む/ぶ/ぬ→んで, く→いて, ぐ→いで, す→して
          </SummaryItem>
          <SummaryItem>
            Irregular: する→して, くる→きて, 行く→行って
          </SummaryItem>
          <SummaryItem>
            て-form carries no tense — the final verb determines tense
          </SummaryItem>
        </LessonSummary>
      </div>
    </div>
  )
}

function IrregularVerbsTeFormChart1() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead class="text-center text-xs font-semibold tracking-wider text-white/30">Dictionary Form</TableHead>
          <TableHead class="text-center text-xs font-semibold tracking-wider text-white/30">
            <span class="font-japanese text-sm">ます</span> Form
          </TableHead>
          <TableHead class="text-center text-xs font-semibold tracking-wider text-white/30">
            <span class="font-japanese text-sm">て</span> Form
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody class="text-center text-lg font-medium">
        <TableRow>
          <TableCell>
            <Romaji romaji="to do" class="text-xs">
              <span class="font-japanese text-lg">する</span>
            </Romaji>
          </TableCell>
          <TableCell><span class="font-japanese text-lg">します</span></TableCell>
          <TableCell><span class="font-japanese text-lg">して</span></TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <Romaji romaji="to come" class="text-xs">
              <span class="font-japanese text-lg">
                <Furigana furigana={<span class="text-xs">く</span>}>来</Furigana>る
              </span>
            </Romaji>
          </TableCell>
          <TableCell><span class="font-japanese text-lg"><Furigana furigana={<span class="text-xs">き</span>}>来</Furigana>ます</span></TableCell>
          <TableCell><span class="font-japanese text-lg"><Furigana furigana={<span class="text-xs">き</span>}>来</Furigana>て</span></TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <Romaji romaji="to return home" class="text-xs">
              <span class="font-japanese text-lg">
                <Furigana furigana={<span class="text-xs">かえ</span>}>帰</Furigana>る
              </span>
            </Romaji>
          </TableCell>
          <TableCell><span class="font-japanese text-lg"><Furigana furigana={<span class="text-xs">かえ</span>}>帰</Furigana>ります</span></TableCell>
          <TableCell><span class="font-japanese text-lg"><Furigana furigana={<span class="text-xs">かえ</span>}>帰</Furigana>って</span></TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <Romaji romaji="to enter" class="text-xs">
              <span class="font-japanese text-lg">
                <Furigana furigana={<span class="text-xs">はい</span>}>入</Furigana>る
              </span>
            </Romaji>
          </TableCell>
          <TableCell><span class="font-japanese text-lg"><Furigana furigana={<span class="text-xs">はい</span>}>入</Furigana>ります</span></TableCell>
          <TableCell><span class="font-japanese text-lg"><Furigana furigana={<span class="text-xs">はい</span>}>入</Furigana>って</span></TableCell>
        </TableRow>
      </TableBody>
    </Table>
  )
}

function IrregularVerbsTeFormChart2() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead class="text-center text-xs font-semibold tracking-wider text-white/30">Dictionary Form</TableHead>
          <TableHead class="text-center text-xs font-semibold tracking-wider text-white/30">
            <span class="font-japanese text-sm">ます</span> Form
          </TableHead>
          <TableHead class="text-center text-xs font-semibold tracking-wider text-white/30">
            <span class="font-japanese text-sm">て</span> Form
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody class="text-center text-lg font-medium">
        <TableRow>
          <TableCell><Romaji romaji="to know" class="text-xs"><span class="font-japanese text-lg"><Furigana furigana={<span class="text-xs">し</span>}>知</Furigana>る</span></Romaji></TableCell>
          <TableCell><span class="font-japanese text-lg"><Furigana furigana={<span class="text-xs">し</span>}>知</Furigana>ります</span></TableCell>
          <TableCell><span class="font-japanese text-lg"><Furigana furigana={<span class="text-xs">し</span>}>知</Furigana>って</span></TableCell>
        </TableRow>
        <TableRow>
          <TableCell><Romaji romaji="to cut" class="text-xs"><span class="font-japanese text-lg"><Furigana furigana={<span class="text-xs">き</span>}>切</Furigana>る</span></Romaji></TableCell>
          <TableCell><span class="font-japanese text-lg"><Furigana furigana={<span class="text-xs">き</span>}>切</Furigana>ります</span></TableCell>
          <TableCell><span class="font-japanese text-lg"><Furigana furigana={<span class="text-xs">き</span>}>切</Furigana>って</span></TableCell>
        </TableRow>
        <TableRow>
          <TableCell><Romaji romaji="to need" class="text-xs"><span class="font-japanese text-lg"><Furigana furigana={<span class="text-xs">い</span>}>要</Furigana>る</span></Romaji></TableCell>
          <TableCell><span class="font-japanese text-lg"><Furigana furigana={<span class="text-xs">い</span>}>要</Furigana>ります</span></TableCell>
          <TableCell><span class="font-japanese text-lg"><Furigana furigana={<span class="text-xs">い</span>}>要</Furigana>って</span></TableCell>
        </TableRow>
        <TableRow>
          <TableCell><Romaji romaji="to run" class="text-xs"><span class="font-japanese text-lg"><Furigana furigana={<span class="text-xs">はし</span>}>走</Furigana>る</span></Romaji></TableCell>
          <TableCell><span class="font-japanese text-lg"><Furigana furigana={<span class="text-xs">はし</span>}>走</Furigana>ります</span></TableCell>
          <TableCell><span class="font-japanese text-lg"><Furigana furigana={<span class="text-xs">はし</span>}>走</Furigana>って</span></TableCell>
        </TableRow>
        <TableRow>
          <TableCell><Romaji romaji="to chat" class="text-xs"><span class="font-japanese text-lg"><Furigana furigana={<span class="text-xs">しゃべ</span>}>喋</Furigana>る</span></Romaji></TableCell>
          <TableCell><span class="font-japanese text-lg"><Furigana furigana={<span class="text-xs">しゃべ</span>}>喋</Furigana>ります</span></TableCell>
          <TableCell><span class="font-japanese text-lg"><Furigana furigana={<span class="text-xs">しゃべ</span>}>喋</Furigana>って</span></TableCell>
        </TableRow>
        <TableRow>
          <TableCell><Romaji romaji="to limit" class="text-xs"><span class="font-japanese text-lg"><Furigana furigana={<span class="text-xs">かぎ</span>}>限</Furigana>る</span></Romaji></TableCell>
          <TableCell><span class="font-japanese text-lg"><Furigana furigana={<span class="text-xs">かぎ</span>}>限</Furigana>ります</span></TableCell>
          <TableCell><span class="font-japanese text-lg"><Furigana furigana={<span class="text-xs">かぎ</span>}>限</Furigana>って</span></TableCell>
        </TableRow>
        <TableRow>
          <TableCell><Romaji romaji="to kick" class="text-xs"><span class="font-japanese text-lg"><Furigana furigana={<span class="text-xs">け</span>}>蹴</Furigana>る</span></Romaji></TableCell>
          <TableCell><span class="font-japanese text-lg"><Furigana furigana={<span class="text-xs">け</span>}>蹴</Furigana>ります</span></TableCell>
          <TableCell><span class="font-japanese text-lg"><Furigana furigana={<span class="text-xs">け</span>}>蹴</Furigana>って</span></TableCell>
        </TableRow>
        <TableRow>
          <TableCell><Romaji romaji="to slide" class="text-xs"><span class="font-japanese text-lg"><Furigana furigana={<span class="text-xs">すべ</span>}>滑</Furigana>る</span></Romaji></TableCell>
          <TableCell><span class="font-japanese text-lg"><Furigana furigana={<span class="text-xs">すべ</span>}>滑</Furigana>ります</span></TableCell>
          <TableCell><span class="font-japanese text-lg"><Furigana furigana={<span class="text-xs">すべ</span>}>滑</Furigana>って</span></TableCell>
        </TableRow>
      </TableBody>
    </Table>
  )
}
